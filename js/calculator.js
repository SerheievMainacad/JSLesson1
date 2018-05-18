var num1 = Number(prompt('Insert number 1'));//+
var num2 = Number(prompt('Insert number 2'));//+
var action = prompt('Choose action(+,-,*,/)')
var result;

if(action == '+' || action == 'plus'){
	result = num1 + num2;
}else if(action == '-'){
	result = num1 - num2;
}else if(action == '*'){
	result = num1 * num2;
}else if(action == '/'){
	result = num1 / num2;
}else{
	alert('Choose correct action');
}
alert(result);


