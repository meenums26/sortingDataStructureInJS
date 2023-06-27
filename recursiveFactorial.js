function recursiveFactorial ( n ) {
	if ( n === 0 ) {
		return 1;
	}
	return n * recursiveFactorial ( n - 1 ) ;
}
console.log ( recursiveFactorial ( 8 ) );
// Big-O = O(n) Line time 