"use strict";
var Tree = /** @class */ (function () {
    function Tree(branch, leaf) {
        this.branch = branch;
        this.leaf = leaf;
        this.branch = branch;
    }
    Tree.prototype.moveLeaf = function () {
        console.log('Leaf is moving from the tree');
    };
    return Tree;
}());
var treeVariable = new Tree("mybranch", "myLeaf");
