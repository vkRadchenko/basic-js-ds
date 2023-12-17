const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null
  }

  root() {
    return this._root
  }

  add(data) {
    this._root = this._add(this._root, data)
  }

  _add(node, data) {
    if (!node) {
      return new Node(data)
    }

    if (data < node.data) {
      node.left = this._add(node.left, data)
    } else if (data > node.data) {
      node.right = this._add(node.right, data)
    }

    return node
  }

  has(data) {
    return this._has(this._root, data)
  }

  _has(node, data) {
    if (!node) {
      return false
    }

    if (data === node.data) {
      return true
    } else if (data < node.data) {
      return this._has(node.left, data)
    } else {
      return this._has(node.right, data)
    }
  }

  find(data) {
    return this._find(this._root, data)
  }

  _find(node, data) {
    if (!node) {
      return null
    }

    if (data === node.data) {
      return node
    } else if (data < node.data) {
      return this._find(node.left, data)
    } else {
      return this._find(node.right, data)
    }
  }

  remove(data) {
    this._root = this._remove(this._root, data)
  }

  _remove(node, data) {
    if (!node) {
      return null
    }

    if (data < node.data) {
      node.left = this._remove(node.left, data)
    } else if (data > node.data) {
      node.right = this._remove(node.right, data)
    } else {
      if (!node.left) {
        return node.right
      } else if (!node.right) {
        return node.left
      }

      node.data = this._minValueNode(node.right).data
      node.right = this._remove(node.right, node.data)
    }

    return node
  }

  _minValueNode(node) {
    let current = node
    while (current.left) {
      current = current.left
    }
    return current
  }

  _maxValueNode(node) {
    let current = node
    while (current.right) {
      current = current.right
    }
    return current
  }

  min() {
    const minValueNode = this._minValueNode(this._root)
    return minValueNode ? minValueNode.data : null
  }

  max() {
    const maxValueNode = this._maxValueNode(this._root)
    return maxValueNode ? maxValueNode.data : null
  }
}

module.exports = {
  BinarySearchTree,
}
