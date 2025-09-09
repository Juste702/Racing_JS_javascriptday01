class myUser {
	constructor(name = "Bernard", age = 42) {
		if(!name || typeof name !== "string"){
			this.name = "Bernard";
		} else {
			this.name = name;
		}
		if (typeof age !== "number" || age <= 0){
			this.age = 42;
		} else {
			this.age = age;
		}
	} 

	printMe(){
		console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
	}
}

module.exports = myUser;
