function validation(){
    runned = false
    f = 1
    checked = document.querySelector("#ucheck").checked
    console.log(checked)
    document.querySelector("#errbox").style.display = "none"
    if(checked == false){
        f=0
        document.querySelector("#errbox").style.display = "block"
        document.querySelector("#errbox").innerHTML = "Please agree to the terms and conditions to continue" 
    }  
    

    if (f==1){
        runned = true
        return true;
    }    
    else{
        return false;
    }
}

// function uservalidation(name){
//     isWhitespace = /^(?=.*\s)/;
//     isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
//     isContainsLowercase = /^(?=.*[a-z])/;
//     if(isWhitespace.test(name)){
//         return "1"
//     }
//     else if(isContainsSymbol.test(name)){
//         return "2"  
//     }
//     else if(!isContainsLowercase.test(name)){
//         return "3"
//     }
// }
// function mailvalidation(mail){
//     isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     isWhitespace = /^(?=.*\s)/;
//     if(isWhitespace.test(mail)){
//         return "1"
//     }
//     else if (!isEmail.test(mail)){
//         return "2"
//     }
// }
// function passvalidation(check){
//     isWhitespace = /^(?=.*\s)/;
//     isContainsUppercase = /^(?=.*[A-Z])/;
//     isContainsNumber = /^(?=.*[0-9])/;
//     isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
//     if(isWhitespace.test(check)){
//         return "1"
//     }
//     else if(!isContainsUppercase.test(check)){
//         return "2"
//     }
//     else if(!isContainsNumber.test(check)){
//         return "3"
//     }
//     else if(!isContainsSymbol.test(check)){
//         return "4"  
//     }
// }