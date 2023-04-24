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
if(head==null || head.next==null) return head;

    let current = head;
    
if(current.next.val != current.val){
current.next = deleteDuplicates(current.next);
return current;
}
    
let itr = current.next;
while(itr!=null && itr.val==current.val) itr = itr.next;
return deleteDuplicates(itr);
};