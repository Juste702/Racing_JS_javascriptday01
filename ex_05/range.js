function range(start, end, step=1){
	const result = [];
	if (typeof start !== "number" || typeof end !== "number" || typeof step !== "number"){
		throw new Error("Bad Param");
	}
	
	if (!Number.isInteger(start) || !Number.isInteger(end) || !Number.isInteger(step)) {
		throw new Error("Bad Param");
	}
	if (step > 0){
		for(let i = start; i <= end; i +=step){
			result.push(i);
		}
	}

	else if (step < 0){
                for(let i = start; i >= end; i +=step){
                        result.push(i);
                }
	}

	else {
		throw new Error("The step cannot be 0");
	}
	
	return result;
}

console.log(range(1, 10, 2));
console.log(range(19, 22));
console.log(range(5, 2, -1));
