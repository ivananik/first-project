function sum(twoNumbers){
	var sum = 0;
	validation(twoNumbers);
	if(twoNumbers.length>=2){
		throw "more than two numbers";
	}
	if (validation==false ) {
		return false;
	}
	else {
		for(i=0; i<2; i++){
			sum+= twoNumbers[i];
		}
		return sum;
	}
	
}	

try{
	console.log(sum(['2','3']));
}
catch(error){
	console.log(error)
}


try{
	console.log(sum([true,1]));
}
catch(error){
	console.log(error)
}

try{
	console.log(sum(['',6]));
}
catch(error){
	console.log(error)
}

try{
	console.log(sum([1,2,3]));
}
catch(error){
	console.log(error)
}

try{
	console.log(sum([]));
}
catch(error){
	console.log(error)
}



try{
	console.log(sum(['i','v']));
}
catch(error){
	console.log(error)
}

try{
	console.log(sum(['',5]));
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

