window.load
{

    "use strict"
    getLocalJSON("_layout_template.js");//load the template layout
    console.log("Page loaded");
    


    var Keyboard = function (layout) {

        switch (layout) {
            case 'en':
                


                //load the required layout here only load the ones when required
                getLocalJSON("_layout_template.js");
                setTimeout(function () { console.log(DDMkeyboard.default); }, 100);//time to parse the file 100ms running locally
                // console.log(DDMkeyboard.default);     //check for values
                //get key codes

                //map the key code to the above layout


                break;


            case 'ru':
                
                getLocalJSON("ms-Russian.js");
                // console.log(DDMkeyboard.ru);
                setTimeout(function () { console.log(DDMkeyboard.ru); }, 100);//time to parse the file 100ms running locally
                document.getElementById("input").addEventListener("keypress", keyPrintRu); //textinput to replace keypress(DEPRICATED in DOM3 Spec) use existing until major browser support
                
                break;

            case 'ruty':
                
                //load the required layout here only load the ones when required
                getLocalJSON("ms-Russian.js");
                setTimeout(function () { console.log(DDMkeyboard.ruty); }, 100);//time to parse the file 100ms running locally
                // console.log(DDMkeyboard.ruty);     //check for values
                //get key codes
                //map the key code to the above layout

                break;


            default:
                
                console.log("The specified layout NOT FOUND defualting to english");
                getLocalJSON("_layout_template.js");//load the required layout here only load the ones when required
                setTimeout(function () { console.log(DDMkeyboard.default); }, 100);//time to parse the file 100ms running locally
                // console.log(DDMkeyboard.default);     //check for values
                //get key codes
                //map the key code to the above layout

                break;
        }

    //Add keyMap callback to keypress event
    // document.getElementById("input").addEventListener("keydown", keyListen);
    // document.getElementById("input").addEventListener("keyup", keyMap);
    document.getElementById("input").addEventListener("keypress", keyPrint); //textinput to replace keypress(DEPRICATED in DOM3 Spec) use existing until major browser support
    


    }


    //function to inject a specified layout file
    function getLocalJSON(json_url) {
        var json_script = document.createElement('script');
        // json_script.type = 'text/javascript';
        json_script.src = json_url;
        json_script.id = 'json_script';
        json_script.async = true;
        document.getElementsByTagName('head')[0].appendChild(json_script); //Add to head element
        // $('head')[0].append(json_script); DOES NOT WORK in IE (.append method not supported)
    }




}

function keyListen(event) { //callback for keypress event
    // debugger;
    // var text = document.getElementById('input').value;
    var codePoint = event.which || event.keyCode//get keyCode or which from all browsers

    //to compare different event values across bowsers
    document.getElementById('ouput').innerHTML += event.altKey +"<br/>";
    document.getElementById('ouput').innerHTML += event.bubbles +"<br/>";
    document.getElementById('ouput').innerHTML += event.charCode +"<br/>";

    document.getElementById('ouput').innerHTML += event.code +"<br/>";
    document.getElementById('ouput').innerHTML += event.composed +"<br/>"; //bool
    document.getElementById('ouput').innerHTML += event.ctrlKey +"<br/><br/>";

    
    // document.getElementById('ouput').innerHTML += event.altKey +"<br/>";
    // document.getElementById('ouput').innerHTML += event.bubbles +"<br/>";
    // document.getElementById('ouput').innerHTML += event.charCode +"<br/>";

    // document.getElementById('ouput').innerHTML += event.code +"<br/>";
    // document.getElementById('ouput').innerHTML += event.composed +"<br/>"; //bool
    // document.getElementById('ouput').innerHTML += event.ctrlKey +"<br/><br/>";
    // text = text + event.code;//KeyAKeyBKeyCc



    console.log("Code Point for " + event.key + " is " + codePoint);
    
    event.stopPropagation();//Stop the event propagation for the rest of the document
    event.preventDefault();

    console.log(event);

}




function keyPrintRu(event) { //callback for keypress event
    // debugger;
    var alt = (event.altKey) ? document.getElementById('alt').style.backgroundColor= "red" : document.getElementById('alt').style.backgroundColor= "white" ;
    var shift = (event.shiftKey) ? document.getElementById('shift').style.backgroundColor= "red" : document.getElementById('shift').style.backgroundColor= "white" ;
    

    var text = document.getElementById('input').value;

    // var index = getIndexOfChar(DDMkeyboard.default.normal,event.charCode);
    //  debugger;

    // var index = getIndexOfChar(DDMkeyboard.default.normal,event.key); //check for cases if the char is not found in template
   
    

    if (event.shiftKey){
        var index = getIndexOfChar(DDMkeyboard.default.shift,event.key); //check for cases if the char is not found in template
        var row = index[0];
        var pos = index[1];
    
        text += DDMkeyboard.ru.shift[row][pos];
    }
    else{

        var index = getIndexOfChar(DDMkeyboard.default.normal,event.key); //check for cases if the char is not found in template
        var row = index[0];
        var pos = index[1];
    
        text += DDMkeyboard.ru.normal[row][pos];
    
    }
      
   
   
    console.log(index);
    console.log(event);


    // text += event.key;

    document.getElementById('input').value = text;
    // document.getElementById('input').contentEditable = true;
    event.stopPropagation();//Stop the event propagation for the rest of the document
    event.preventDefault(); //For mobile platform disable default keyboard --yet to test with devices

    // console.log(event);

}

//function to find index of a char from the template array
function getIndexOfChar(arr, k) {
    for (var i = 0; i < arr.length; i++) {
      var index = arr[i].indexOf(k);
      if (index > -1) {
        return [i,index];
      }
    }
  }




