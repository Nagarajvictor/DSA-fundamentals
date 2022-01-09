

	let stack1 = [];
	let stack2 = [];

	function enqueue(element) {
		stack1.push(element);
		console.log( stack1);
	}

	function dequeue() {
		if (stack2.length === 0) {
			if (stack1.length === 0) {
				console.log(
			);
			}
			while (stack1.length > 0) {
				let x = stack1.pop();
				stack2.push(x);
			}
		}
		console.log( stack2.pop());
	}

	enqueue("a");
	enqueue("b");
	enqueue("c");
	dequeue();
	dequeue();

