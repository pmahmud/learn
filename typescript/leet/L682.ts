function calPoints(operations: string[]): number {
    const scores: number[] = [];

    for (const operation of operations) {
        if (isNaN(Number(operation))) {
            switch(operation) {
                case 'C': {
                    scores.pop();
                    break;
                }
                case 'D': {
                    scores.push((scores[scores.length - 1] ?? 0)  * 2);
                    break;
                }
                case '+': {
                    scores.push((scores[scores.length - 2] ?? 0) + (scores[scores.length - 1] ?? 0));
                    break;
                }
                default: {
                    break;
                }
            }
        } else {
            scores.push(Number(operation));
        }
    }

    return scores.reduce((sum, score) => sum += score, 0);
};

console.log(calPoints(["5","2","C","D","+"]));
console.log(calPoints(["5","-2","4","C","D","9","+","+"]));
console.log(calPoints(["1","C"]));

/*
    Input: ops = ["5","2","C","D","+"]
    Output: 30
    Input: ops = ["5","-2","4","C","D","9","+","+"]
    Output: 27
    Input: ops = ["1","C"]
    Output: 0
*/