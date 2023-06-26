const arr = [3, 4, 2, 56, 3, 7, 3, 8];

const selectionSort = (arr) => {
	let arrLen = arr.length;
		const swapFun = (arr, idx1, idx2) => {
		([ arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
		}
	for (let i = 0; i<arrLen ; i++) {
		let idxSmall = i;
		for(let j=i+1; j<arrLen; j++) {
			if(arr[j]<arr[idxSmall]) idxSmall = j; 
		}
		if(idxSmall !== i) {
			swapFun( arr, i, idxSmall);
		}
	}
		return arr;
	
	}
	
	selectionSort(arr);
    console.log(arr);