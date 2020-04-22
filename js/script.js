var counter = 2;
var gpa;
var cgpa;
$(document).ready(function(){

    $("#addButton").click(function () {

if(counter>15){
        alert("Only 15 textboxes allow");
        return false;
}

var newTextBoxDiv = $(document.createElement('div'))
   .attr("id", 'TextBoxDiv' + counter);

newTextBoxDiv.after().html('<label>Grade Sub #'+ counter + ' : </label>' +
    '<input type="text" name="textbox' + counter +
    '" id="grade' + counter + '" value="" > <label>Credits Sub#'+ counter + ' : </label>' +
    '<input type="text" name="textbox' + counter +
    '" id="credit' + counter + '" value="" >');

newTextBoxDiv.appendTo("#TextBoxesGroup");


counter++;
 });

 $("#removeButton").click(function () {
if(counter==1){
      alert("No more fields to remove");
      return false;
   }

counter--;

    $("#TextBoxDiv" + counter).remove();

 });


 

 $("#getButtonValue").click(function () {

var msg = '';
for(i=1; i<counter; i++){
   msg += "\n Textbox #" + i + " : " + $('#credit' + i).val();
}
    alert(msg);
 });

});

function calculate()
 {
    var grade = [];
    var credit = [];
    var g1 = 0;
    var c1 = 0;
    var i;

    
   for (i = 1; i<counter; i++ )
   {
     grade[i] = document.getElementById("grade"+i).value;
     credit[i] = document.getElementById("credit"+i).value;
    
    }

   for ( i = 1; i<counter; i++ ){
        if (grade[i]=="O"){
        grade[i]=10;
        }
        if (grade[i]=="A+"){
                grade[i]=9;
        }
        if (grade[i]=="A"){
                grade[i]=8;
        }
        if (grade[i]=="B+"){
                grade[i]=7;
        }
        if (grade[i]=="B"){
                grade[i]=6;
        }
        if (grade[i]=="C"){
                grade[i]=5;
        }
        if (grade[i]=="P"){
                grade[i]=4;
        }
        console.log(grade[i]);
   }

   for (i = 1; i<counter; i++ ){
    g1+=parseInt(grade[i]*credit[i]);
    console.log(g1);
   }
   for (i = 1; i<counter; i++ ){
    c1+=parseInt(credit[i]);
    console.log(c1);
   }

   

   gpa = parseInt((g1 / c1).toFixed(3));
    console.log(gpa);

 };