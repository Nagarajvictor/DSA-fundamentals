

function RandomizedQsort(arr,low,high)
	{
		pivot = Math.floor(low+(high-low)/2);
		
		let temp1=arr[pivot];
		arr[pivot]=arr[high];
		arr[high]=temp1;
	}
	function partition( arr,  low, high)
	{
		
		Math.random(arr,low,high);
		let pivot = arr[high];
	

		let i = (low-1);
		for (let j = low; j < high; j++)
		{
			if (arr[j] < pivot)
			{
				i++;
				var temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}

		let t = arr[i+1];
		arr[i+1] = arr[high];
		arr[high] = t;

		return i+1;
	}
function sort(arr,low, high)
	{
		if (low < high)
		{
			
			let pi = partition(arr, low, high);
			sort(arr, low, pi-1);
			sort(arr, pi+1, high);
		}
	}


	function  printArray(arr)
	{
		let n = arr.length;
		for (let i = 0; i < n; ++i)
			console.log(arr[i]+" ");
		console.log();
	}
	var arr = [10, 7, 8, 9, 1, 5];
		var n = arr.length;

		sort(arr, 0, n-1);

		console.log("Sorted array");
		printArray(arr);
	
//"1. https://leetcode.com/problems/merge-two-sorted-lists/
//2. Find the kth element in a linked list from the end of singlly linked list in :
//1. Using two traversal 
//2. In single traversal (using 2 pointer approch).
//3.Create a merge method which takes two heads of linked list and appends the smaller one into the larger one."

