/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    
    // set a while loop to iterate through 
    //it breaks when it gets to the end 
    //push our head to next 
    // prev = head 
    // condition 
    
    let curr = head;
    while(curr !== null){
        if(curr.next !== null && curr.next.val == curr.val){
            curr.next = curr.next.next;
        }else{
            curr = curr.next
        }
    }
    return head;
};