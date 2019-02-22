function sum(a,b){
	
	if(a==='' || b === ''){
		throw "empty";
	}

	else if(a=== true || b===true){
		throw "boolean, not a number";
	}

	else if(a=== false || b=== false){
		throw "boolean, not a number";
	}

	else if(a===undefined || b===undefined)
		throw "no arguments";

	if(a.length >0 || b.length >0){
		throw "string, not a number";
	}

	else if(arguments.length >2){
		throw "more than 2  arguments"
	} 

	

	else {
		return a + b;
	}
	
}

try{
	console.log(sum('2','3'));
}
catch(error){
	console.log(error)
}


try{
	console.log(sum(true,1));
}
catch(error){
	console.log(error)
}

try{
	console.log(sum('',6));
}
catch(error){
	console.log(error)
}

try{
	console.log(sum(1,2,3));
}
catch(error){
	console.log(error)
}

try{
	console.log(sum());
}
catch(error){
	console.log(error)
}

try{
	console.log(sum(5,6));
}
catch(error){
	console.log(error)
}

try{
	console.log(sum('i','v'));
}
catch(error){
	console.log(error)
}

try{
	console.log(sum('',5));
}
catch(error){
	console.log(error)
}

function validation(numbers){

let right = true;
	
		for(i  in numbers){
	if(numbers[i]==='' || numbers[i] ===true ||numbers[i]=== false ||  numbers[i]===undefined || numbers[i].length > 0 ){
			throw "not numbers";
			right =false;
		}

		right = true;
}
	if(numbers.length === 0){
		throw "empty";
		right = false;
	}

		return right;
}

function sumOfNumbers(numbers){
	let sumOfNum =0;
	validation(numbers);
	if(validation === false){
		return false;
	}

		else{
			for(i=0;i<numbers.length;i++){
			sumOfNum+=numbers[i];
		}
		return sumOfNum;
	}
	 
}

	try{
		console.log(sumOfNumbers([1,2,5,8]));
	}
	catch(error){
		console.log(error);
	}

	try{
		console.log(sumOfNumbers([2,'a','a',8]));
	}
	catch(error){
		console.log(error);
	}

	try{
		console.log(sumOfNumbers([2,-2,5,8]));
	}
	catch(error){
		console.log(error);
	}

	try{
		console.log(sumOfNumbers([1,true,1]));
	}
	catch(error){
		console.log(error);
	}

	try{
		console.log(sumOfNumbers([5,,3]));
	}
	catch(error){
		console.log(error);
	}

	try{
		console.log(sumOfNumbers([]));
	}
	catch(error){
		console.log(error);
	}

