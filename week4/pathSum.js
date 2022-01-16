class Node {
  constructor(item) {
    this.left = null;
    this.right = null;
    this.data = item;
  }
}

let val;

let root;

function findMaxUtil(node) {
  if (node == null) return 0;

  let l = findMaxUtil(node.left);
  let r = findMaxUtil(node.right);

  let max_single = Math.max(Math.max(l, r) + node.data, node.data);

  let max_top = Math.max(max_single, l + r + node.data);

  val = Math.max(val, max_top);

  return max_single;
}

function findMaxsum() {
  return findMaxSum(root);
}

function findMaxSum(node) {
  val = Number.MIN_VALUE;

  findMaxUtil(node);
  return val;
}

root = new Node(10);
root.left = new Node(2);
root.right = new Node(10);
root.left.left = new Node(20);
root.left.right = new Node(1);
root.right.right = new Node(-25);
root.right.right.left = new Node(3);
root.right.right.right = new Node(4);
console.log(findMaxsum());
