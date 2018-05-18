/*types*/
var a = 2.12312312;// number
var b = 'hello';// //string
var c = true;// boolean
var d = null;// null
var e = undefined;// undefined
var o = {};// object
var f = function(){}

/*alert( typeof(a) );
alert( typeof(b) );
alert( typeof(c) );
alert( typeof(d) );
alert( typeof(e) );
alert( typeof(o) );
alert( typeof(f) );

alert( typeof(a) == 'number');
*/


//Mathematic operators +, - , *, /, 2**3,

var v1, v2, v3;
v1 = 1;
v2 = 5;
v3 = v1+v2;
v1 = -v1;
v2++;
console.log(v3);
console.log(v1);
console.log(v2);

//plus operator

var s1, s2, s3;
s1 = 'Hello';
s2 = 'JavaScript';
s3 = s1+" "+s2;
console.log(s3);


//types transform
var p1, p2, p3;

p1 = '2';
p2 = 2;
p3 = +p1 + p2;
console.log(p3);
//logical ==, ===, !=, !==, !, &&, ||, >, < , >=, <=
if(1 == 2){
	alert('hello')
}else{
	alert('goodbye')
}

var result = confirm('Are you sure?');
console.log(result);

var result2 = prompt('Insert value', '');
console.log(result2);


