function drawTriangle(height){
	let str = "$";
	
	if (typeof height === "number" && Number.isInteger(height) ){
		if (height <= 0){
			console.log("Bad param !");
		} else {
			for (let i = 0; i < height; i++){
				console.log(str);
				str += "$";
			}
		}
	} else{
		console.log("Bad param !");
	}
	 
}
//drawTriangle(undefined);
