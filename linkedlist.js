class Linkedlist{
    constructor(){
        this.head=null;
        this.length=0;
    }
 insertnodes(val) {
        let list=new nodes(val,this.head)
        this.head=list
        this.length++
    }
 getIndex(index){
     if(index>0||index>=this.length)return null;
     let node=this.head
     for(let i=0; i<index; i++){
      node=node.next;
     }
     return node
 }
 print(){
     let output=''
     let node=this.head
     while(node){
         output=`${output}${node.value}-`
         node=node.next

     }
    return console.log(`${output}null`)
 }
 indexinsert(index,value){
     if(index==0)return this.insertnodes(value)
     let prevNode=this.getIndex(index-1)
     if(prevNode==null)return null
     prevNode.next=new Linkedlist(value,prev.next)
 }
 replace(index,val){
     if(index==0)return this.head.value=val;
     let prev=this.getIndex(index)
     

 }
}
Linkedlist.arrange=function(...nodes){
    let l1=new Linkedlist()
    for(let i=nodes.length-1; i>=0; i--){
        l1.insertnodes(nodes[i])
    }
    return l1
}

class nodes{
constructor (value,next){
    this.value=value
    this.next=next
}}
module.exports=Linkedlist