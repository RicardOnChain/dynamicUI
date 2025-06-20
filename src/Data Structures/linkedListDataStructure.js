/* eslint-disable no-unused-vars */
class LinkedList {
    constructor(){
        this.head =  null;
    }

    append(value){
        const node = new Node(value)
        if (!this.head){
            this.head = node
            return
        }
        this.tail().nextNode = node
        
    }

    prepend(value){
        const newNode = new Node(value)
        const currentHead = this.head        
        newNode.nextNode = currentHead
        
        this.head = newNode

    }

    size(){
        let count = 1

        if (!this.head) return ("The size is 0'")
    
        let currentNode = this.head

        while (currentNode.nextNode){
            currentNode = currentNode.nextNode
            count++
        }
        
        console.log (`The size is ${count} `)
        return count
    }

    headNode(){
        console.log(this.head)
        return (this.head)
    }

    tail(){
        if (!this.head) return ("The linked list is empty")

        let currentNode = this.head
        while (currentNode.nextNode){
            currentNode = currentNode.nextNode
        }
        return (currentNode)
    }

    at(index){

        if (index > (this.size() - 1)) return (console.log("Invalid index"))
        
        let currentNode = this.head

        for (let i=0; (i <  index) && currentNode; i++){
            currentNode = currentNode.nextNode 
        }
        if (!currentNode) return console.log("The linked list doesn't have a node at the selected index")
        return (currentNode) 
    }

    pop(){ 
        let currentNode = this.head
        while (currentNode.nextNode != this.tail()){
            currentNode = currentNode.nextNode
        }
        currentNode.nextNode = null
    }
    

    contains(value){
        let currentNode = this.head
        while (currentNode.value != value){
            currentNode = currentNode.nextNode
            if (!currentNode) return (console.log(false))
        }
        return console.log(true)
    }

    find(value){
        let currentNode = this.head
        let i=0
        while (currentNode.value != value){
            currentNode = currentNode.nextNode
            i++
            if (!currentNode) return (console.log(false))
        }
        return (console.log(i))
    }

    toString(){
        if (!this.head) return ("The linked list is empty")

        let output = ""    
        let currentNode = this.head
        while (currentNode){
            output = output + `( ${currentNode.value} ) -> `
            currentNode = currentNode.nextNode
        }
        return (output + "null")

        
    }

    insertAt(value, index){

        if (index > this.size -1) return (console.log("Invalid index"))
        
        const newNode =  new Node (value)
        newNode.nextNode = this.at(index)
        
        if (index == 0) {
            this.head = newNode
            return
        }
        const previousNode = this.at(index-1)
        if (previousNode){
            previousNode.nextNode = newNode
            return
        }
        console.log("You can't introduce a node in at an index position larger than the length of the linked list")

    }

    removeAt(index){

        if (index > this.size -1) return (console.log("Invalid index"))

        const nextNode = this.at(index+1)
        const previousNode = this.at(index-1)

        if (index == 0) {
            this.head = nextNode
            return
        }
        previousNode.nextNode = nextNode
    }

}



class Node {
    constructor(value) {
        this.value = value
        this.nextNode = null
    }

 
}


const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());

//list.at(20)
//list.at(2)  
//console.log(list.toString());
//
//
//list.pop()
//console.log(list.toString());
//list.contains("cat")
//list.contains("asd")
//
////
//list.find("cat")
//list.find("caasdt")
//

//list.insertAt("mushroom",1)
list.removeAt(10)
console.log(list.toString());