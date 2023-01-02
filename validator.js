function validation(){
    runned = false
    f = 1
    isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
    document.querySelector("#errname").style.display = "none"
    user = document.querySelector("#uname").value
    if (user==""){
        f = 0
        document.querySelector("#errname").style.display = "block"
        document.querySelector("#errname").innerHTML = "Provide a valid username"
    }
    else if(user.length<4){
        f=0
        document.querySelector("#errname").style.display = "block"
        document.querySelector("#errname").innerHTML = "Username must be greater than 4 characters"
    }
    else if(user.length>10){
        f=0
        document.querySelector("#errname").style.display = "block"
        document.querySelector("#errname").innerHTML = "Username must be less than 10 characters"
    }
    else{
        chk = uservalidation(user)
        if(chk == "1"){
            f=0
            document.querySelector("#errname").style.display = "block"
            document.querySelector("#errname").innerHTML = "Username cannot contain whitespaces"
        }
        else if(chk == "2"){
            f=0
            document.querySelector("#errname").style.display = "block"
            document.querySelector("#errname").innerHTML = "Username cannot contain symbols"
        }
        else if(chk == "3"){
            f=0
            document.querySelector("#errname").style.display = "block"
            document.querySelector("#errname").innerHTML = "Username must contain lowercase characters"
        }
    }
    email = document.querySelector("#umail").value
    document.querySelector("#errmail").style.display = "none"
    if (email == ""){
        f=0
        document.querySelector("#errmail").style.display = "block"
        document.querySelector("#errmail").innerHTML = "Provide a valid email"
    }
    else{
        chka = mailvalidation(email)
        if (chka == "1"){
            f=0
            document.querySelector("#errmail").style.display = "block"
            document.querySelector("#errmail").innerHTML = "Email cannot contain whitespaces"
        }
        else if(chka == "2"){
            f=0
            document.querySelector("#errmail").style.display = "block"
            document.querySelector("#errmail").innerHTML = "Invalid email"
        }
    }
    pass = document.querySelector("#upass").value
    document.querySelector("#errpass").style.display = "none"
    if(pass == ""){
        f=0
        document.querySelector("#errpass").style.display = "block"
        document.querySelector("#errpass").innerHTML = "Provide a password"
    }
    else{
        chr = passvalidation(pass)
        if(chr == "1"){
            f=0
            document.querySelector("#errpass").style.display = "block"
            document.querySelector("#errpass").innerHTML = "Password cannot contain whitespaces"
        }
        else if(chr == "2"){
            f=0
            document.querySelector("#errpass").style.display = "block"
            document.querySelector("#errpass").innerHTML = "Password must contain uppercase"
        }
        else if(chr == "3"){
            f=0
            document.querySelector("#errpass").style.display = "block"
            document.querySelector("#errpass").innerHTML = "Password must contain numbers"
        }
        else if(chr == "4"){
            f=0
            document.querySelector("#errpass").style.display = "block"
            document.querySelector("#errpass").innerHTML = "Password must contain symbols"
        }
    }  
    conf = document.querySelector("#uconfirm").value
    document.querySelector("#errcheck").style.display = "none"
    if(conf != "" && pass == ""){
        f=0
        document.querySelector("#errcheck").style.display = "block"
        document.querySelector("#errcheck").innerHTML = "Provice a password before confirming it    "
    }
    else if(conf == ""){
        f=0
        document.querySelector("#errcheck").style.display = "block"
        document.querySelector("#errcheck").innerHTML = "Provide a password confirmation"
    }
    else if(conf != pass){
        f=0
        document.querySelector("#errcheck").style.display = "block"
        document.querySelector("#errcheck").innerHTML = "Passwords do not match"
    }

    checked = document.querySelector("#ucheck").checked
    document.querySelector("#errbox").style.display = "none"
    if(checked == false){
        f=0
        document.querySelector("#errbox").style.display = "block"
        document.querySelector("#errbox").innerHTML = "Please agree to the terms and conditions to continue" 
    }   
    if (f==1){
        runned = true
        runner()
        return true;
    }    
    else{
        return false;
    }
}

function runner(){
    alert('changing website to next page')
    window.location.href = "http://youtube.com";
}

function uservalidation(name){
    isWhitespace = /^(?=.*\s)/;
    isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
    isContainsLowercase = /^(?=.*[a-z])/;
    if(isWhitespace.test(name)){
        return "1"
    }
    else if(isContainsSymbol.test(name)){
        return "2"  
    }
    else if(!isContainsLowercase.test(name)){
        return "3"
    }
}
function mailvalidation(mail){
    isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    isWhitespace = /^(?=.*\s)/;
    if(isWhitespace.test(mail)){
        return "1"
    }
    else if (!isEmail.test(mail)){
        return "2"
    }
}
function passvalidation(check){
    isWhitespace = /^(?=.*\s)/;
    isContainsUppercase = /^(?=.*[A-Z])/;
    isContainsNumber = /^(?=.*[0-9])/;
    isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
    if(isWhitespace.test(check)){
        return "1"
    }
    else if(!isContainsUppercase.test(check)){
        return "2"
    }
    else if(!isContainsNumber.test(check)){
        return "3"
    }
    else if(!isContainsSymbol.test(check)){
        return "4"  
    }
}
