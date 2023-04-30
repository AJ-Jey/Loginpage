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