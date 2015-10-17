jQuery(document).ready(function($){

 var output_array = getQueryStringArray()
 if (output_array.length > 0)
 {
   console.log("It actually worked...");
   var output = output_array["input"];
   if (output_array["lang"] = "sq") //Converting from English to Squirrel
   {
     toEnglish();
   }
   else { //Convert from Squirrel to English (default)
     toSquirrel();
   }
   $("#output").html(output);
 }
});

function submit()
{
  var form = $("#lang");
  if (isSquirrel())
  {
    form.val("sq"); //Convert from English to Squirrel
  }
  else {
    form.val("eng"); //Convert from Squirrel to English
  }
  console.log(form.val);
  $("#input_form").submit();
}

function getQueryStringArray()
{
  var queries = {};
  var newString;
  if (document.location.search.length > 0)
  {
    $.each(document.location.search.substr(1).split('&'), function(index, value) { /* Gets query string of URL, splits it along each of the indices (&) and stores it into an array, then parses it!*/
      var i = value.split('='); /* Takes the assignment of each variable and splits it between key and element, returning array i */
      newString = i[1].toString().replace("+", " ");
      newString = newString.replace("%0D%0A", "\n");
      queries[i[0].toString()] = newString; /* Assigns the element to its corresponding key in "queries" */
    });
  }
  console.log(queries);
  return queries;
}

function isSquirrel()
{
  return $("foreign").css("font-family") === "Arial";
}

function toEnglish() {
  $(".native").css("font-family", "Arial");
  $(".foreign").css("font-family", "Wingdings");
}

function toSquirrel()
{
  $(".native").css("font-family", "Wingdings");
  $(".foreign").css("font-family", "Arial");
}
