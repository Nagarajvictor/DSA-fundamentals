

class Node
{
	constructor()
	{
		this.data=0;
		this.next=null;
	}
}

function push(head_ref, new_data)
{
	let new_node = new Node();

	new_node.data = new_data;
	new_node.next = (head_ref);
	(head_ref) = new_node;
	return head_ref;
}

function printSecondList(l1,l2)
{
	let temp = l1;
	let temp1 = l2;

	while (temp != null)
	{
		let i = 1;

		while (i < temp.data)
		{
			temp1 = temp1.next;
			i++;
		}

		console.log( temp1.data + " ");

		temp = temp.next;

		temp1 = l2;
	}
}

let l1 = null, l2 = null;

l1 = push(l1, 5);
l1 = push(l1, 2);

l2 = push(l2, 8);
l2 = push(l2, 7);
l2 = push(l2, 6);
l2 = push(l2, 5);
l2 = push(l2, 4);

printSecondList(l1, l2);


