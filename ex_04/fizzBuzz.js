function fizzBuzz(){
	const arr = [];
	for (let num  = 1; num <= 21; num++){
		if(num % 3 === 0 && num % 5 === 0) {
			arr.push("FizzBuzz");
		}else if(num % 3 === 0 && num % 5 !== 0){
			arr.push("Fizz");
		}else if(num % 3 !==0 && num % 5 === 0){
			arr.push("Buzz");
		}else{
			arr.push(`${num}`)
		}
	}
	return (arr.join(", "));
}
console.log(fizzBuzz());
