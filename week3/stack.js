function Stack(exp)
{
	var stack =[]
	for (var i = 0; i < exp.length; i++) {
		var c = exp[i];
		if (!isNaN(c))
			stack.push(c - '0');
		else {
			var val1 = stack.pop();
			var val2 = stack.pop();
			if (val1 == "Underflow" || val2 == "Underflow")
				return "Can't perform postfix evaluation";
			switch (c) {
			case '+':
				stack.push(val2 + val1);
				break;

			case '-':
				stack.push(val2 - val1);
				break;

			case '/':
				stack.push(val2 / val1);
				break;

			case '*':
				stack.push(val2 * val1);
				break;
			}
		}
	}

	return stack.pop();
}
console.log(Stack("235*+8-"));





//"1. Create a myStack Class which has the following methods:
  //   1. Push(x) : inserts the data into the stack 
    // 2. Pop(): Removes the top element.
     //3. Peek() : Displays the top element.
//2. https://leetcode.com/problems/valid-parentheses/
//3. Remove adjacent chars in a string.
//4. Reverse only words in a string using stacks.
//5. Using 2 stacks implement a queue.
//6. Using 2 queue implement a stack."