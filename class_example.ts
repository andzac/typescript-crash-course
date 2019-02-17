class Tree {

    constructor(private branch:string, private leaf:string){
        this.branch = branch;
    }

    private moveLeaf(){
        console.log('Leaf is moving from the tree');
    }
}


let treeVariable = new Tree("mybranch","myLeaf");
