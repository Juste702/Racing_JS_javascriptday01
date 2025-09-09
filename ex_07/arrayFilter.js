function arrayFilter(array, test){
	const result = [];
	for (let i = 0; i < array.length; i++){
		if (test(array[i]) === true){
			result.push(array[i]);
		}
	}
	return result;
}
/*var toFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// the anonymous function is the test your filtering function will use to
var passed = arrayFilter(toFilter, function (value) {
return value % 3 === 0;
});
console.log(passed);*/
