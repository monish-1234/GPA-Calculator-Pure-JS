var counter = 2;
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
    var i;
   for (i = 1; i<counter; i++ )
   {
     grade[i] = document.getElementById("grade"+i).value;
     credit[i] = document.getElementById("credit"+i).value;
     console.log(grade[i]);
   }

   for ( i = 1; i<counter; i++ ){
       
   }



 };