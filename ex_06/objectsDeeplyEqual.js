function objectsDeeplyEqual(a, b) {  
	if (a === b) return true;
		// Si l'un des deux est null ou pas un objet, ce n'est pas égal
	if (a === null || b === null || typeof a !== "object" || typeof b !== "object") {
        	return false;
         }
	 const keysA = Object.keys(a);
	 const keysB = Object.keys(b);
	  // Si nombre de clés différent, pas égal
	if (keysA.length !== keysB.length) return false;  
	for (let key of keysA) {
	      if (!keysB.includes(key) || !objectsDeeplyEqual(a[key], b[key])) {
	            return false;
	       }
	}
	return true; 
  }
  
var obj = {here: {is: "an"}, object: 2};
console.log(objectsDeeplyEqual(obj, obj));
console.log(objectsDeeplyEqual(obj, {here: 1, object: 2}));
console.log(objectsDeeplyEqual(obj, {here: {is: "an"}, object: 2}));

