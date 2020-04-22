$(document).ready(function(){
  
    var counter = 2;

    $("#addButton").click(function () {

  if(counter>10){
            alert("Only 10 textboxes allow");
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


     function calculate()
     {
       var grade = document.getElementById("grade1").value;
       console.log(grade);
       var elements = document.querySelectorAll("#gpa input[type=text]")
      
       for (var i = 1; i<counter; i++ )
       {
         var check = document.getElementById("grade"+i).value;
         
         console.log(check);
         // write your logic here
       }
     };

     $("#getButtonValue").click(function () {

  var msg = '';
  for(i=1; i<counter; i++){
       msg += "\n Textbox #" + i + " : " + $('#credit' + i).val();
  }
        alert(msg);
     });
  });