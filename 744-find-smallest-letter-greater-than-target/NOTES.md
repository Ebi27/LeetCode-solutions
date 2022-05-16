//var nextGreatestLetter = function(letters, target) {
for(const letter of letters) {
if(target < letter) {
return letter
}
}
return letters[0]
};