
var preindex = 0;

class node
{
	constructor(data)
	{
		this.data = data;
	}
}


function constructTreeUtil(pre, post, l, h, size)
{

	if (preindex >= size || l > h)
	{
		return null;
	}


	var root = new node(pre[preindex]);
	preindex++;

	
	if (l == h || preindex >= size)
	{
		return root;
	}
	var i;


	for (i = l; i <= h; i++)
	{
		if (post[i] == pre[preindex])
		{
			break;
		}
	}
	
	
	if (i <= h)
	{
		root.left = constructTreeUtil(pre, post,
									l, i, size);
		root.right = constructTreeUtil(pre, post,
									i + 1, h-1, size);
	}
	return root;
}


function constructTree(pre, post, size)
{
	preindex = 0;
	return constructTreeUtil(pre, post, 0, size - 1, size);
}

function printInorder(root)
{
	if (root == null)
	{
		return;
	}
	printInorder(root.left);
	console.log(root.data + " ");
	printInorder(root.right);
}

var pre = [1, 2, 4, 8, 9, 5, 3, 6, 7];
var post = [8, 9, 4, 5, 2, 6, 7, 3, 1];
var size = pre.length;
var root = constructTree(pre, post, size);

printInorder(root);






