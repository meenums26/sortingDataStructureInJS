const arr = [ 3, 4, 56, 3, 7, 3, 8];

function linearSearch ( arr,  target ) {
	for ( let i = 0; i < arr.length; i++ ){
		if ( arr [ i ] === target ) {
			return i;
}
	}
return -1 ;
}

console.log ( linearSearch ( arr, 8 ) );
