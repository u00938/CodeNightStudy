/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let result = 0;

  function preOrder(root, low, high) {
    if (root === null) return;
    if (root.val >= low && root.val <= high) {
      result += root.val;
    }

    preOrder(root.left, low, high);
    preOrder(root.right, low, high);
  }

  preOrder(root, low, high);

  return result;
};
