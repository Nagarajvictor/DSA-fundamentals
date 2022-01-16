class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.val = data;
  }
}

function averageOfLevels(root) {
  let q = [];
  q.push(root);
  let sum = 0,
    count = 0;

  while (q.length > 0) {
    sum = 0;
    count = 0;
    let temp = [];

    while (q.length > 0) {
      let n = q[0];
      q.shift();
      sum += n.val;
      count++;

      if (n.left != null) temp.push(n.left);
      if (n.right != null) temp.push(n.right);
    }
    q = temp;
    console.log((sum * 1.0) / count + " ");
  }
}

function newNode(data) {
  let temp = new Node(data);
  return temp;
}

let root = null;
root = newNode(4);
root.left = newNode(2);
root.right = newNode(9);
root.left.left = newNode(3);
root.left.right = newNode(5);
root.right.right = newNode(7);

console.log("Averages of levels : " + "</br>");
console.log("[");
averageOfLevels(root);
console.log("]" + "\n");
