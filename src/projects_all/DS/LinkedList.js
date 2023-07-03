// 1) create new node with value and refernce 

class Node{
    constructor(value){
        this.currentValue = value
        this.nextNodeRef = null
    }
}

class LinkedList{
    constructor(){
        this.head = null 
        this.size = 0
    }
    getSize(){
        return this.size
    }
    isListEmpty(){
        return this.size === 0
    }
    //by default list will be empty we have to make the first node as head
    prepend(value){
        var newNode = new Node(value)
        if(this.isListEmpty()){
            console.log("newValuei if", newNode)
            this.head = newNode
        }else{
            console.log("newValue", newNode)
            newNode.next = this.head
            this.head = newNode 
            console.log("newValue 2", this.head)
        }
        this.size++
    }
    append(val){
        let appendObj = new Node(val)
        if(this.isListEmpty()){
            this.head = appendObj
        }else{  
            let nxt = this.head
            while(nxt.next){
                nxt = nxt.next
            }
            nxt.next = appendObj 
        }
        this.size++
    }

    print(){
        if(this.isListEmpty()){
            console.log("print - list is empty")
        }else{
            let curr = this.head
            let listValue = ""
            while(curr){
                listValue += `${curr.currentValue} `
                curr = curr.next
            } 
            console.log("lsi", listValue)
        }
    }
    //adding items to exisitng list
    //-------------------------------
    removeFrom(index){
        //scenario 1 the given index should nt be l;ess than zer and gretaer or equal to the size of lists
        //scenario 2 - where index is 0
        if(index < 0 || index >= this.size){
            return
        }
        let removedNode
        if(index === 0){
            removedNode = this.head
            this.head = this.head.next 
        }else{
            let prev = this.head 
            for(let i= 0; i<index - 1;i++){
                prev = prev.next 
            }
            removedNode = prev.next 
            prev.next= removedNode.next 
        }
        this.size --
        return removedNode
    }
    removeByValue(value){
        if(this.isListEmpty()){
            console.log("print - list is empty")
        }else{
            let curr = this.head
        while(curr){
            if(value === curr.currentValue){
                curr = curr.nextNodeRef
                this.head = curr
                this.size--
            }else{
                curr = curr.next 
            }
        }
        }
    }
    serachByValue(value){
        if(this.isListEmpty()){
            return -1
        }else{
            let curr = this.head
            let index = 0
            while(curr){
                if(value === curr.currentValue){
                    return index
                }
                curr = curr.next
                index++
            }
            return -1
        }

    }
    insert(value, index){
        // 1) check the index passed,shouldnt be less than zero or it snb gt the size of list
        // 2) if index is zero just prepend
        // 3)
        if(index < 0 || index > this.size){
            return
        }
        if(index === 0){
            this.prepend(value)
        }else{
            let obj = new Node(value)
            let prev = this.head
            for(let i=0;index - 1;i++){
                prev = prev.next
            } 
            obj.next = prev.next
            prev.next = obj
        }
    }
}

const linkedListObj = new LinkedList()
console.log("---", linkedListObj.getSize())
console.log("---", linkedListObj.isListEmpty())
console.log("---", linkedListObj.append(10))
console.log("---", linkedListObj.append(20))
console.log("---", linkedListObj.append(30))
// console.log("---", linkedListObj.insert(10,0))
console.log("---", linkedListObj.removeByValue(20))
console.log("---print", linkedListObj.print())

console.log("search by--", linkedListObj.serachByValue(30))
// console.log("print --", linkedListObj.print())