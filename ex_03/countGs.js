function countGs(str){
	let chars = str.split("G");
	return chars.length - 1;
}
console.log(countGs("abcgGggGeaGfdsGG"));
