235. Lowest Common Ancestor of a Binary Search Tree

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // console.log('p', p, 'q is', q, 'root is', root)
    if (p.val < root.val && q.val < root.val){
        return lowestCommonAncestor(root.left, p, q);
        console.log(p.val < root.val)
    } else if (p.val > root.val && q.val > root.val){
        return lowestCommonAncestor(root.right, p, q);
    }  else{
        return root
        console.log('root here is', root)
    }
    
};