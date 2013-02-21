//   The stringify function translates an object into a JSON-string, where
// functions are represented like strings too.
//
// example: stringify({a:0,b:function(){return 0;}}); 
//          returns '{"a":0,"b":"function(){return 0;}"}'

function stringify(c) {
    var b = {};
    for(var i in c) {
        if(typeof(c[i])=="object") b[i]=translate(c[i]);
        if(typeof(c[i])=="function") {
            b[i]=c[i].toString();
        } else {
            if(typeof(c[i])=="object") {
                b[i]=translate(c[i]);
            } else {
                b[i]=c[i];
            }
        };
    }
    return(JSON.stringify(b));
}

//  The translate function just makes string-representations of object's functions.

function translate(c) {
    var b = {}
    for(var i in c) {
        if(typeof(c[i])=="object") b[i]=translate(c[i]);
        if(typeof(c[i])=="function") {
            b[i]=c[i].toString();
        } else {
            if(typeof(c[i])=="object") {
                b[i]=translate(c[i]);
            } else {
                b[i]=c[i];
            }
        };
    }
    return b;
}

//  The objectify function creates an object from a JSON-string, where strings
//  like '"a":"function(){return 0;}"' become a real functions.
//
// example: objectify('{"a":0,"b":"function(){return 0;}"}'); 
//          returns an object: {a:0,b:function(){return 0;}}

function objectify(c) {
    var b = {};
    for(var i in c) {
        if(typeof(c[i])=="object"){b[i]=objectify(c[i])} else {
            if(typeof(c[i])=="string") {
                if(c[i].indexOf("function")===0){ //TODO
                    b[i]=Function(c[i].substring(c[i].indexOf("(")+1,c[i].indexOf(")")).split(","),c[i].substring(c[i].indexOf("{")+1,c[i].length-1));
                } else {
                    b[i] = c[i];
                }
            } else {
                b[i] = c[i];
            }
        }
    }
    return (b);
}

// Tests

function performTests() {
    var a = {b: 0, c: 'hello', d: function(d){console.log('1/2 Test passed - ' + d);}};
    var e = {f: 0, g: 'hello', h: {i:{j:function(d){console.log('2/2 Test passed - ' + d);}}}};
    objectify(JSON.parse(stringify(a))).d(Date());
    objectify(JSON.parse(stringify(e))).h.i.j(Date());
}

