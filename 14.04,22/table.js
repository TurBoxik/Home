let btn = document.querySelector('.generate-btn');
let table = document.querySelector('.table');
btn.addEventListener('click', (event) => {
		const multiplicationValues = generateMultiplicationValues();
    const tableCode = generateTableHtml(multiplicationValues);
    table.innerHTML = tableCode;
});

var couneterStart, maxCounter;

function JD()
{
var num1=document.forms["f1"].num.value;
var number1=parseInt(num1)
console.log(number1);
couneterStart=0; 
maxCounter=number1;
}

function generateMultiplicationValues() 
 { 
    const values = [];
    for (let i = couneterStart; i <= maxCounter; i++) {     
        if (!values[i]) {
             values[i] = []
            }
        for (let j = couneterStart; j <= maxCounter; j++) 
        {
          if(i==0){
            values[i][j] = j 
          }
          else if(j==0)
          {
            values[i][j] = i
          }
          else
          {
            values[i][j] = i * j 
          }
            
        }
    }
    console.log(values);
  return values;
 }

 function generateTableHtml(values) {
    let tableCode = '';
    for (i=couneterStart; i<=maxCounter; i++)
    {
        tableCode += "<tr>";
        for (j=couneterStart; j<=maxCounter; j++)
        {
            if (values[j][i]==0)
            {
                tableCode += "<td style='background-color:white'>" + values[i][j] + "</td>";      
            }
            else if (values[i][j]%2==0)
            {       
                tableCode += "<td style='background-color:lightgreen'>" + values[i][j] + "</td>";           
            }
            else
            {
                tableCode += "<td style='background-color:white'>" + values[i][j] + "</td>";       
            }
        }
        tableCode += "</tr>";
    }
    return tableCode;
}
