function isPalindrome(str){
    str=String(str);
    const cleanStr=str.toLowerCase().replace(/[^a-z0-9]/g,'');
    const charArray=cleanStr.split('');
    for(let i=0;i<Math.floor(charArray.length/2);i++){
        if(charArray[i]!==charArray[charArray.length-1-i]){
            return false;
        }
    }
    return true;
}
function checkPalindrome(){
    const input=document.getElementById("text-input").value;
    const resultDiv=document.getElementById("result");
    resultDiv.classList.remove("hidden");

    if (input.trim() === "") {
        alert("Please input a value."); 
        return;
    }
    const result = isPalindrome(input) 
        ? `${input} is a palindrome`  
        : `${input} is not a palindrome`;  
    resultDiv.innerText = result;
}
    document.getElementById("check-btn").addEventListener("click", checkPalindrome);