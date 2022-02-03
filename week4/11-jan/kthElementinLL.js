
class Node {
	
	constructor(d)
	{
		this.data = d;
		this.next = null;
	}
}

class LinkedList
{

	constructor(d){
	this.head = d;
	}

printNthFromLast(n)
{
	let len = 0;
	let temp = this.head;

	while (temp != null) {
		temp = temp.next;
		len++;
	}


	if (len < n)
		return;

	temp = this.head;

	for (let i = 1; i < len - n + 1; i++)
		temp = temp.next;

	document.write(temp.data);
}

push(new_data)
{

	let new_node = new Node(new_data);

	new_node.next = this.head;

	this.head = new_node;
}
}

	let llist = new LinkedList();
	llist.push(20);
	llist.push(4);
	llist.push(15);
	llist.push(35);

	llist.printNthFromLast(4);


