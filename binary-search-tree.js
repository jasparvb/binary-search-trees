class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if(!this.root) {
      this.root = new Node(val);
      return this;
    }
    let root = this.root;
    while(true) {
      if(root.val > val) {
        if(!root.left) {
          root.left = new Node(val);
          return this;
        }
        root = root.left;
      }
      if(root.val < val) {
        if(!root.right) {
          root.right = new Node(val);
          return this;
        }
        root = root.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, root = this.root) {
    if(!this.root) {
      this.root = new Node(val);
      return this;
    }
    if(root.val > val) {
      if(!root.left) {
        root.left = new Node(val);
        return this;
      }
      root = root.left;
      return this.insertRecursively(val, root);
    }
    if(root.val < val) {
      if(!root.right) {
        root.right = new Node(val);
        return this;
      }
      root = root.right;
      return this.insertRecursively(val, root);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let root = this.root;

    while (root) {
      if (root.val === val) return root;
      root = val < root.val
        ? root.left
        : root.right;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, root = this.root) {
    if (root.val === val) return root;
    root = val < root.val
      ? root.left
      : root.right;
    if (!root) return;
    return this.findRecursively(val, root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = [];
    let root = this.root;
    function traverse(node) {
      data.push(node.val);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(root);
    return data;
  }
  
  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */
  
  dfsInOrder() {
    let data = [];
    let root = this.root;
    function traverse(node) {
      if(node.left) traverse(node.left);
      data.push(node.val);
      if(node.right) traverse(node.right);
    }
    traverse(root);
    return data;
  }
  
  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */
  
  dfsPostOrder() {
    let data = [];
    let root = this.root;
    function traverse(node) {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(root);
    return data;    
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let data = [];
    let queue = []
    let node = this.root;
    queue.push(node);
    while(queue.length) {
      node = queue.shift();
      data.push(node.val);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
