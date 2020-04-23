var counter = 2;
var gpa;
var cgpa;
var dumb = 1;

$(document).ready(function(){

    $("#addButton").click(function () {

if(counter>15){
        alert("Only 15 textboxes allow");
        return false;
}

var newTextBoxDiv = $(document.createElement('div'))
   .attr("id", 'TextBoxDiv' + counter);

newTextBoxDiv.after().html('<br><div id="TextBoxDiv'+counter+'">'+
                        ' <div class="uk-form-controls">'+
                  '<label class="uk-form-label">Sub #'+counter+' : </label><select class="uk-select uk-form-width-small" required id="grade'+counter+'">'+
                    '<option value="" selected hidden disabled >Select Grade</option>'+
                    '<option value="10">O</option>'+
                      '<option value="9">A+</option>'+
                      '<option value="8">A</option>'+
                      '<option value="7">B+</option>'+
                      '<option value="6">B</option>'+
                      '<option value="5">C</option>'+
                      '<option value="4">P</option>'+                
                    '</select>'+ 
                      '&nbsp; &nbsp; &nbsp;'+
                   '<select class="uk-select uk-form-width-small" required id="credit'+counter+'">'+
                   '<option value="" selected hidden disabled>Select Credit</option>'+
                    '<option value="1">1</option>'+
                    '<option value="2">2</option>'+
                    '<option value="3">3</option>'+
                    '<option value="4">4</option>'+
                    '<option value="5">5</option>'+
                    '<option value="6">6</option>'+
                    '<option value="7">7</option>'+                 
                '</select>'+ 
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

   for (i = 1; i<counter; i++ ){
    g1+=parseInt(grade[i]*credit[i]);
   }
   for (i = 1; i<counter; i++ ){
    c1+=parseInt(credit[i]);
   }

   gpa = (g1 / c1).toFixed(3);
    console.log(gpa);

 };