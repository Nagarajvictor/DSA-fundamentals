class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

function isSame(root1, root2) {
  let s1 = [];
  let s2 = [];

  s1.push(root1);
  s2.push(root2);

  while (s1.length > 0 || s2.length > 0) {
    if (s1.length == 0 || s1.length == 0) return false;

    let temp1 = s1.pop();
    while (temp1 != null && !(temp1.left == null && temp1.right == null)) {
      if (temp1.right != null) s1.push(temp1.right);
      if (temp1.left != null) s1.push(temp1.left);
      temp1 = s1.pop();
    }

    let temp2 = s2.pop();
    while (temp2 != null && !(temp2.left == null && temp2.right == null)) {
      if (temp2.right != null) s2.push(temp2.right);
      if (temp2.left != null) s2.push(temp2.left);
      temp2 = s2.pop();
    }

    if (temp1 == null && temp2 != null) return false;
    if (temp1 != null && temp2 == null) return false;

    if (temp1 != null && temp2 != null) {
      if (temp1.data != temp2.data) return false;
    }
  }

  return true;
}

let root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.right.left = new Node(6);
root1.right.right = new Node(7);

let root2 = new Node(0);
root2.left = new Node(1);
root2.right = new Node(5);
root2.left.right = new Node(4);
root2.right.left = new Node(6);
root2.right.right = new Node(7);

if (isSame(root1, root2)) console.log("Same");
else console.log("Not Same");
