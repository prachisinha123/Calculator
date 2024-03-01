let screen  =  document.getElementById("screen");
let buttons = document.querySelectorAll('button');
let screenValue = '';
for(items of buttons){
items.addEventListener('click',function(e){
    buttonText = e.target.innerText;
    console.log('Button text is',buttonText);
     if(buttonText == 'x'){
        buttonText = '*';
        screenValue += buttonText;
        screen.value = screenValue;
    }
    else if(buttonText == 'C') {
        screen.value = "";
        screenValue = "";
        
    }
    else if(buttonText == '='){
        screen.value = eval(screenValue);
    }
    
    else{
        screenValue += buttonText;
        screen.value = screenValue;
    } 
})
}