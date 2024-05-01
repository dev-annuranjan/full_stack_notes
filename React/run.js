function intToRoman(A){
    debugger;
    const  valueArr = [1000, 500, 100, 50, 10, 5, 1];
    const romanNumeral = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    
    let num = A;
    let remainder = 0;
    let quotient = 0;
    let answer = "";
    
    for(let i = 0; i < 6; i++){
        quotient = Math.floor(num / valueArr[i]);
        remainder = Math.floor(num % valueArr[i]);
        while(quotient > 0){
            answer += romanNumeral[i];
            quotient--;
        }
        
        if(i <= 1){
            if((valueArr[i] - remainder) <= 100) {
                answer += `C${romanNumeral[i]}`;
                remainder -= (valueArr[i] - 100);
            }
        } else if(i <= 3){
            if((valueArr[i] - remainder) <= 10){
                answer += `X${romanNumeral[i]}`;
                remainder -= (valueArr[i] - 10);
            }
        } else if(i <= 5){
            if((valueArr[i] - remainder) <= 1){
                answer += `I${romanNumeral[i]}`;
                remainder -= (valueArr[i] - 1);
            }
        }
        
        num = remainder;
        
    }
    
    return answer;
}

console.log(intToRoman(3))