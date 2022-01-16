
class Node
{
	constructor(item)
	{
		this.data = item;
		this.left = this.right=null;
	}
}

let root;

function treeHeight(node)
{

		if (node == null)
			return 0;

		let q = [];

		q.push(node);
		let height = 0;

		while (1 == 1)
		{
		
			let nodeCount = q.length;
			if (nodeCount == 0)
				return height;
			height++;

			
			while (nodeCount > 0)
			{
				let newnode = q.shift();
				if (newnode.left != null)
					q.push(newnode.left);
				if (newnode.right != null)
					q.push(newnode.right);
				nodeCount--;
			}
		}
}


root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
console.log(treeHeight(root));


