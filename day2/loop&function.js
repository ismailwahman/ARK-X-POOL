//****task 1 */
let num=5
let fact =1
if (num==0 ){
    console.log(1)
}
else {
    for(let n=1;n <=num ; n++){
    fact=fact*n
    }
}
console.log(fact);


//***task 2 */
//  *** digit ***/
let Num = 123542;
    let counter = 0;
    if (Num===0){
        counter=1;
    }
    else
    while (Num >=1 || Num<=-1 ) {
    Num = (Num / 10);
  
        counter++;  
    
    }
    console.log(counter);


//****task 3 */
let tree = 4;

for (let i = 1; i <= tree; i++) {
  let space = "";
  for (let j = 0; j < tree - i; j++) {
    space =space+ " ";
  }

  let num = "";
  for (let k = 0; k < 2 * i - 1; k++) {
    num = num+"*";
  }

  let result = space + num;
  console.log(result);
}
let trunkSpace = "";
let trunk = "|";
for (let i = 0; i < tree - 1; i++) {
  trunkSpace = trunkSpace+" ";
}

let trunkResult = trunkSpace + trunk;
console.log(trunkResult);




//****function */
//****function task 1 */
function calcu(num) {
    let fact = 1;
    if (num===0 ){
        console.log(1)
    }
    else {
        for(let n=1;n <=num ; n++){
        fact=fact*n;
        }
    }
    return fact;
}
console.log(calcu(3));


//***function task 2 */
function digits(num3) {
    let counter = 0;
    if (num3==0){
        counter=1;
    }
    else
    while (num3>=1 || num3<=-1 ) {
    num3= (num3/ 10);
  
        counter++;  
    
    }
    return counter;
}
console.log(digits(123456));

//*****function Task 2 : The Extended Factorial */
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *=i;
    }
    return fact;
}
function combinator(n, p) {
    if (n < p) {
        console.log("Invalid input: n must be greater than or equal to p");
    } else {
        let result = factorial(n) / (factorial(p) * factorial(n - p));
        console.log(result);
    }
}
combinator(5, 2); 




//****function Task 3 :  The Calculator */
function calculator(num5, operator, num6) {
    let result;

    switch (operator) {
        case '+':
            result = num5 + num6;
            break;
        case '-':
            result = num5 - num6;
            break;
        case '*':
            result = num5 * num6;
            break;
        case '/':
            result = num5 / num6;
            break;
        case '%':
            result = num5 % num6;
            break;
        case 'c':
            result = combinator(num5 ,num6);
            return;
    }
    console.log(result);
}
calculator(5, "+", 1);  
calculator(3, "*", -4); 
calculator(5, 'c', 2);   

