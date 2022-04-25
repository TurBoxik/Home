
document.write("<h1>liczby z przedzialu od 20 do 40, parzyste</h1>");
for(i=20;i<40;i++){
    if(i%2!=0)continue;
    document.write(i+"<br>");
}

document.write("<h1>liczby z przedzialu od 30 do 130, nie parzyste podzielone przez 5</h1>");
for(i=30;i<=130;i++){
    if(i%2!=0&&i%5==0)
    document.write(i+"<br>")
}

document.write("<h1>liczby z przedzialu od 44 do 144, podzielne przez 3 i niepodzielne przez 9</h1>");
for(i=44;i<=144;i++){
    if(i%3==0||i%9!=0)
    document.write(i+"<br>")
}

document.write("<h1>liczby z przedzialu od 70 do 80 </h1>");
var i=70;
while(i<80){
    i++;
    document.write(i+"<br>")
}

document.write("<h1>liczby z przedzialu od 45 do 120, podzielne przez 3 lub 7 </h1>");
var i=45;
while(i<=120){
    i++;
    document.write(i+"<br>")
}

