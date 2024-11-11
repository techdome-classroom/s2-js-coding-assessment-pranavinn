/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const brackets = { ')': '(', '}': '{', ']': '[' };

    for (let char of s) {
        if (char in brackets) {
            if (!stack.length || stack.pop() !== brackets[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.length === 0;
};

module.exports = { isValid };



