function isValid(s: string): boolean {
    const stack: string[] = [];
    for (const e of s) {
        switch(e) {
            case '(' : {
                stack.push(')');
                break;
            }                
            case '{' : {
                stack.push('}');
                break;
            }                
            case '[' : {
                stack.push(']');
                break;
            }                
            default : {
                if (stack.length === 0 || stack.pop() !== e)
                    return false;
                break;
            }                            
        }
    }
    return stack.length == 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));

console.log(isValid('(])'));
console.log(isValid('(][])'));
console.log(isValid('{(][])}'));
console.log(isValid('({[]})()'));


/*
Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false
*/