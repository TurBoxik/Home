function func() {
    var pole_tekst=document.getElementById("pole").value;
        console.log("Pole tekstowe:",pole_tekst);
        var radio=document.getElementsByName('radio');
        for(var i=0;i<radio.clientHeight;i++){
            if(radio[i].chacked)
            {
                console.log("Wybrano opcje: "+radio[i].value);
                break;
            }
        }
var checkbox=document.getElementsByName('checkbox');
for (var i=0;i<checkbox.legth;i++)        
{
    if(checkbox[i].chacked)
    {
        console.log("Checkbox-wybrano: "+checkbox[i].value);
    }
}
var select=document.getElementById("opcje");
console.log("Wybrana wartosc: ",select.length);
}
