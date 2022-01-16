
class Node {
	constructor(d) {
		this.data = d;
		this.next = null;
	}
}


	var head; 

	function push(new_data)
	{
		var new_node = new Node(new_data);

		new_node.next = head;

		head = new_node;
	}

	function search( head , x)
	{
		var current = head; 
		while (current != null) {
			if (current.data == x)
				return true; 
			current = current.next;
		}
		return false; 
	}
		push(10);
		push(30);
		push(11);
		push(21);
		push(14);

		if (search(head, 21))
			console.log("Yes");
		else
			document.write("No");

