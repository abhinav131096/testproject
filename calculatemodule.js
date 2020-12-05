exports.addition=function(a,b){
	return parseInt(a)+parseInt(b);
}
function subtraction(a,b){
	return parseInt(a) - parseInt(b);
}
exports.multiplication=function(a,b){
	return parseInt(a) * parseInt(b);
}
function division(a,b){
	return parseInt(a) / parseInt(b);
}

exports.subtract=subtraction;
exports.divide=division;