
const fromNumberSelect = document.getElementById("from-number-select");
const toNumberSelect = document.getElementById("to-number-select");
const result = document.getElementById("result");
const btn = document.getElementById("convert-button");
const option = document.querySelectorAll("option")


function converter(){
     // Binary To All Converter 
     function binaryToAllConverter(){
          
          let num =  number = document.getElementById("number").value
          let newval = Number(num)
     
          if(fromNumberSelect.value === '0' && toNumberSelect.value === "9"){

               let dec = parseInt(newval, 2)
               result.innerHTML = `${dec} : Decimal`
          }
          else if(fromNumberSelect.value === '0' && toNumberSelect.value === "8"){
          
               const octal = parseInt(newval, 2);
               let newoctal = octal.toString(8);
               result.innerHTML = `${newoctal} : Octal`
          }
          else if(fromNumberSelect.value === '0' && toNumberSelect.value === "16"){
          
               const hexa = parseInt(newval, 2);
               let newhexa = hexa.toString(16);
               newhexa = Number(newhexa)
               result.innerHTML = `${newhexa} : Hexa-D`
          }
          else if(fromNumberSelect.value === '0' && toNumberSelect.value === "0"){
               result.innerHTML = `${newval} : Binary`
          }
     }
     binaryToAllConverter();

     // Decimal To All Converter 
     function decimalToAllConverter(){
          
          let num =  number = document.getElementById("number").value
          let newval = Number(num)
     
          if(fromNumberSelect.value === '9' && toNumberSelect.value === "0"){

               let bin = newval.toString(2);
               result.innerHTML = `${bin} : Binary`
          }
          else if(fromNumberSelect.value === '9' && toNumberSelect.value === "8"){
               
               const octal = newval.toString(8);
               result.innerHTML = `${octal} : Octal`
          }
          else if(fromNumberSelect.value === '9' && toNumberSelect.value === "16"){
          
               const hexa = newval.toString(16)
               newhexa = Number(hexa)
               result.innerHTML = `${newhexa} : Hexa-D`
          }
          else if(fromNumberSelect.value === '9' && toNumberSelect.value === "9"){
               result.innerHTML = `${newval} : Decimal`
          }
     }
     decimalToAllConverter();

     // Octal To All Converter 
     function octalToAllConverter(){
          
          let num =  number = document.getElementById("number").value
          let newval = Number(num)
     
          if(fromNumberSelect.value === '8' && toNumberSelect.value === "0"){

               const bin = parseInt(newval, 8);
               let newbin = bin.toString(2);
               result.innerHTML = `${newbin} : Binary`
          }
          else if(fromNumberSelect.value === '8' && toNumberSelect.value === "9"){
               
               const dec = parseInt(newval, 8);
               result.innerHTML = `${dec} : Decimal`
          }
          else if(fromNumberSelect.value === '8' && toNumberSelect.value === "16"){
               const hexa = parseInt(newval, 8);
               let newhexa = hexa.toString(16).toUpperCase();
               result.innerHTML = `${newhexa} : Hexa-D`
          }
          else if(fromNumberSelect.value === '8' && toNumberSelect.value === "8"){
               result.innerHTML = `${newval} : Octal`
          }
     }
     octalToAllConverter();

     // HexaDecimal To All Converter 
     function hexaDecimalToAllConverter(){
          
          let num =  number = document.getElementById("number").value
          let newval = Number(num)
     
          if(fromNumberSelect.value === '16' && toNumberSelect.value === "0"){
               const bin = parseInt(newval, 16);
               let newbin = bin.toString(2);
               result.innerHTML = `${newbin} : Binary`

               const decimalNumber = parseInt(hexadecimalNumber, 16);
               return decimalNumber.toString(2);
          }
          else if(fromNumberSelect.value === '16' && toNumberSelect.value === "9"){
               
               const dec = parseInt(newval, 16);
               result.innerHTML = `${dec} : Decimal`
          }
          else if(fromNumberSelect.value === '16' && toNumberSelect.value === "8"){
               const octal = parseInt(newval, 16);
               let newoctal =  octal.toString(8);
               result.innerHTML = `${newoctal} : Octal`
          }
          else if(fromNumberSelect.value === '16' && toNumberSelect.value === "16"){
               result.innerHTML = `${newval} : Hexa-D`
          }
     }
     hexaDecimalToAllConverter();
    

};
btn.addEventListener('click', converter);


