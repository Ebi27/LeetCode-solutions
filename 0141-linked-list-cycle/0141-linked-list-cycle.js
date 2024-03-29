/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
     if (!head || !head.next) return false;
    
    let slow = head;
    let fast = head.next;
    while (slow && fast){
        if (slow === fast) return true;
        else if (slow.next && fast.next && fast.next.next){
            slow = slow.next
            fast = fast.next.next
        }
        else{
            return false
        }
    }
};