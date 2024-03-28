class Node{
    constructor(value){
        this.value = value 
        this.next = null
    }
}

class LinkedList1{
    constructor(){
        this.head = null;
        this.size = 0
    }

    is_Empty(){
        return this.size === 0
    }

    removeAtIndex(index){
        if (this.is_Empty()) return 'The list is empty';
        let startIndex = 0
        if(startIndex === index){
            this.head= this.head.next
            this.size--
            return;
        }
        let prev = this.head
        while(prev){
            startIndex++
            if(startIndex === index){
                prev.next = prev.next.next
                this.size--
                return;

            }

        }


    }
    removeElement(value){
        if(this.is_Empty()){
            return "its empty"
        }
        if(this.head.value === value ){
            console.log("--", this.head)
            this.head = this.head.next
            console.log("--", this.head)
            this.size--
        }
        let prev = this.head
        while(prev){
            if(prev.next && prev.next.value === value){
                prev.next = prev.next.next                
                this.size--
                break;
            }else{
                prev = prev.next ?? false
            }
        }
    }
    print(){
        if(this.is_Empty()){
            console.log("no data available", this.head)
            return "array is empty"
        }
        let nxt = this.head
        console.log("print",nxt)

        while(nxt){
            console.log(nxt.value)
            nxt = nxt.next
        }
    }
    prepend(value){
        this.size++
        const newNode = new Node(value,null)
        newNode.next = this.head
        this.head = newNode
    }
    append(value){
        const newNode = new Node(value,null)
        this.size++
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }
}

const objRef = new LinkedList1()
objRef.prepend(10)
objRef.prepend(20)
objRef.prepend(30)
// objRef.append(40)

objRef.removeAtIndex(0)
objRef.removeAtIndex(0)
objRef.print()



// this.head = {
//     value:10,
//     next : {
//         value:20,
//         next:{
//             value:30,
//             next:null
//         }
//     }
// }