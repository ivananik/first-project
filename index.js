function validation(...numbers){	
	if(arguments.length===0){
		throw "empty";
		return false;

	}

	else {
		for(i in arguments){
			if( typeof arguments[i]=== 'undefined'  ||  typeof arguments[i] ==='string' ||  typeof arguments[i] ==='boolean'
					|| arguments[i]===0){
				throw "not numbers";
				return false;
			}
		}
	}
	


		return true;
}

function sumOfNumbers(...numbers){
	let sumOfNum =0;
	validation(...numbers);
	if(validation === false){
		return false;
	}

		else{
			for(i=0;i<numbers.length;i++){
			sumOfNum += numbers[i];
		}
		return sumOfNum;
	}
	
	 
}

	try{
		console.log(sumOfNumbers(1,2));
	}
	catch(error){
		console.log(error);
	}

	try{
		console.log(sumOfNumbers(2,'a','a',8));
	}
	catch(error){
		console.log(error);
	}

	try{
		console.log(sumOfNumbers(2,-2,5,7));
	}
	catch(error){
		console.log(error);
	}

	try{
		console.log(sumOfNumbers(1,true,1));
	}
	catch(error){
		console.log(error);
	}

	try{
		console.log(sumOfNumbers(5,''));
	}
	catch(error){
		console.log(error);
	}

	try{
		console.log(sumOfNumbers());
	}
	catch(error){
		console.log(error);
	}
