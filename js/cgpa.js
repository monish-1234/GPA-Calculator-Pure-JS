var counter = 2;
var gpa;
var cgpa;
var dumb = 1;

$(document).ready(function(){

 $("#addButton").click(function () {

        if(counter>15){
                alert("Only 15 Semesters Allowed");
                return false;
        }

        var newTextBoxDiv = $(document.createElement('div'))
        .attr("id", 'TextBoxDiv' + counter);

        newTextBoxDiv.after().html('<div id="TextBoxDiv'+counter+'"> '+
        '<div class="uk-form-controls"><br>'+
            '<label class="uk-form-label">Sem #'+counter+': </label>'+
            '<input class="uk-input uk-form-success formwi" type="number" step="any" min="1" max="10" id="gpa'+counter+'" placeholder="Enter GPA" > '+
            '<input class="uk-input uk-form-success formwi" type="number" step="any" min="1" max="50" id="credit'+counter+'" placeholder="Enter Credits" >'+
            '<br>'+
            '</div>'+
            '</div>');

newTextBoxDiv.appendTo("#TextBoxesGroup");


counter++;
 });

 $("#removeButton").click(function () {
if(counter==2){
        var sound=[];
        for (var a=1;a<=7;a++){
                sound[a]=new Audio("./Rick/"+a+".mp3");
        }
        sound[dumb].play();
        dumb++;
        if (dumb==7){
                dumb=1;
        }
      alert("You cannot remove all the Semesters");
      return false;
   }

counter--;

    $("#TextBoxDiv" + counter).remove();

 });

});

function calculate()
 {
    var g1 = 0;
    var c1 = 0;
    var i;

    
   for (i = 1; i<counter; i++ )
   {
     g1+=parseFloat(document.getElementById("gpa"+i).value*document.getElementById("credit"+i).value);
     c1+=parseInt(document.getElementById("credit"+i).value);
     console.log(g1);
    console.log(c1);
    }
    console.log(g1);
    console.log(c1);
    cgpa = (g1 / c1).toFixed(3);
   console.log(cgpa);
   
   document.getElementById("cgpaoutput").value="Your CGPA is "+cgpa;
  

    console.log("CGPA - "+cgpa);
    return false
   

 };

