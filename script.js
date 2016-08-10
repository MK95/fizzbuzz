$(document).ready( function() {
	for (var i = 1; i <= 100; i++) {
		
		if (i % 3 == 0){
			console.log('fizz');
			$('body').append('<p>fizz</p></br>');
		}
		
		else if (i % 5 == 0){
			console.log('buzz');
			$('body').append('<p>buzz</p></br>');
		}
		
		else if (i % 3 == 0 && i % 5 == 0){
			console.log('fizzbuzz');
			$('body').append('<p>fizzbuzz</p></br>');
		}
		else {console.log(i)
		$('body').append('<p>'+i+'</p></br>');
		}
	}
});
