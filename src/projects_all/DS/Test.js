class Node{
    constructor(val){
        this.val = val;
        this.ref = null 
    }
}

class LinkedList{
    constructor(){
        this.head = null 
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    getsize(){
        console.log(this.size)
    }
    print(){
        if(this.isEmpty()){
            console.log("this size is empty")
        }else{
            let nxt = this.head
            let data = ""
            while(nxt){
                data += `${nxt.val}`
                nxt = nxt.val
            }
            console.log("data--",data) 
        }
    }
    prepend(val){
        let newNode = new Node(val)
        if(this.isEmpty()){
            this.head = newNode
        }else{
            newNode.next = this.head 
            this.head = newNode
            
        }
        console.log(this.head)
        this.size++
    }

}

let l = new LinkedList()
l.prepend(10)
l.prepend(20)
l.prepend(30)


l.print()
