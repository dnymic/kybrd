window.onload = function()
{
    if (document.addEventListener) 
    {
    document.getElementById('keyboard').addEventListener('click',clickHandler,false);
    }    
    else{
        document.getElementById('keyboard').attachEvent('onclick', clickHandler); 
    }
};

function clickHandler(){
    alert('Click event triggred');
}

