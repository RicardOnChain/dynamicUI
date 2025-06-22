/* eslint-disable no-unused-vars */

class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class Tree{
    constructor(array){
        this.root = this.buildTree(array,0, array.length-1)
    }
    prettyPrint(node, prefix = '', isLeft = true){
      if (node === null) {
        return;
      }
      if (node.right !== null) {
        this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
      }
      console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
      if (node.left !== null) {
        this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
      }
    }

    insert(value, root=this.root){

        if (root === null) return (new Node(value))

        if (value == root.data) return root
        
        if (value < root.data) {
            root.left = this.insert(value,root.left)
        } else if (value > root.data){
            root.right= this.insert(value,root.right)
        }
        
        return root
        
    }

    delete(value, root=this.root){
        
        if (root === null) return (console.log('Node not found'))

        if (value == root.data){
            //leaf node
            if (!root.left && !root.right) return null

            //1 child
            if (!root.left || !root.right) return (root.left === null ? root.right : root.left)

            //2 childs
            if (root.left && root.right){
                let sucessor = root.right                                       //get sucessor(leftmost node with .left=null biger than the value to delete)
                while (sucessor.left !== null){
                    sucessor = sucessor.left
                }

                root.data = sucessor.data                                       //change node to delete data to sucessor (perserves .left links)
                root.right = this.delete(sucessor.data, root.right)             //recursively delete the sucessor node (starts from the position of the node to delete)
            }
        }else if (value > root.data){
            root.right = this.delete(value, root.right)
        }else{
            root.left = this.delete(value, root.left)
            }
        
        return root
    }
    
    buildTree(array, start, end, firstRun = true){
        if (firstRun){
            array.sort((a,b) => a-b)            //sort array
            array = [...new Set(array)]         //eliminate duplicates
        }
    
        if (start > end) return null
    
        let mid = Math.floor((start + end)/2)
        let root = new Node(array[mid])
    
        root.left = this.buildTree(array, start, mid-1, false)
        root.right = this.buildTree(array, mid+1, end, false)
    
        return root
    }

    find(value, root= this.root){
        if (root === null){
            console.log('Node not found')
            return (false)
        }

        if (root.data == value){
            console.log(root)
            return root
        }
        
        if (value > root.data) {
            this.find(value, root.right)
        } else{
            this.find(value, root.left)
        }
        return root
    }

    levelOrder(callback, root = this.root, q=[root]){

        if (typeof callback != "function") throw new Error("You didn't pass a function as a callback")
            
        while (q.length >0){ 
            callback(q[0])
            
            if (q[0].left != null) {q.push(q[0].left)}
            if (q[0].right != null) {q.push(q[0].right)}

            q.shift()
        }   
    }

    preOrder(callback, root = this.root){
        if (typeof callback != "function") throw new Error("You didn't pass a function as a callback")
        
        if (root === null) return
        
        console.log(callback(root))
        this.preOrder(callback, root.left)
        this.preOrder(callback, root.right)
    }

    inOrder(callback, root = this.root){
        if (typeof callback != "function") throw new Error("You didn't pass a function as a callback")
        
        if (root === null) return
        
        this.inOrder(callback, root.left)
        console.log(callback(root))
        this.inOrder(callback, root.right)
    }


    postOrder(callback, root = this.root){
        if (typeof callback != "function") throw new Error("You didn't pass a function as a callback")
        
        if (root === null) return
        
        this.postOrder(callback, root.left)
        this.postOrder(callback, root.right)
        console.log(callback(root))

    }

    depth(value, root=this.root, depth=0){
        if (root === null) return (console.log('Node not found'))

        if (root.data == value){
            console.log(depth)
            return depth
        }
        
        if (value > root.data) {
            this.depth(value, root.right, depth=depth+1)
        } else{
            this.depth(value, root.left, depth=depth+1)
        }
        return root
    }

    height(value, root=this.find(value), height=0){
        if (root === false) {
            console.log('Node not found')
            return
        }

        if (!root.left && !root.right){
            console.log(`height=${height}`)
            return height
        }
        
        if (root){
        this.height(value, root.right, height=height+1)
        this.height(value, root.left, height=height+1)
        }
        
        return root
    }

}


const tree = new Tree([1,2,4,5,20,3,4,30])


tree.height(4)


