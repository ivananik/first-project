<<<<<<< HEAD
function isValid(...numbers){	
	if(arguments.length===0){
		return false;
	}

	else {
		for(i in arguments){
			if( typeof arguments[i]=== 'undefined'  ||  typeof arguments[i] ==='string' ||  typeof arguments[i] ==='boolean'
					|| arguments[i]===0){

				return false;
			}
		}
	}
		return true;
}


function sumOfNumbers(...numbers){
	let sum =0;
	if(isValid(...numbers) ===false){
		return false;
	}

		else{
			for(i=0;i<numbers.length;i++){
			sum += numbers[i];
		}
		
		return sum;
	}
	
	 
}

	console.log(sumOfNumbers());	
	console.log(sumOfNumbers(2,'a','a',8));
	console.log(sumOfNumbers(1,2));
	console.log(sumOfNumbers(2,-2,5,7));
	console.log(sumOfNumbers(1,true,1));
=======
console.log('Hello world');
>>>>>>> e94f0a88e4e7e7a648d03c2ab9f8dc78face92ec
