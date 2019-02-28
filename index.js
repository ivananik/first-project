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

	console.log(sum());	
	console.log(sum(2,'a','a',8));
	console.log(sum(1,2));
	console.log(sum(2,-2,5,7));
	console.log(sum(1,true,1));
