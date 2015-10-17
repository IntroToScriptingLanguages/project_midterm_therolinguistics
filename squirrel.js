jQuery(document).ready(function($){

 var output_array = getQueryStringArray()
 if (document.location.search.length > 0)
 {
   var output = output_array["input"];
   if (output_array["lang"] === "eng") //Converting from English to Squirrel
   {
     toEnglish();
     output = convertEnglishToSquirrel(output);
   }
   else { //Convert from Squirrel to English (default)
     toSquirrel();
     output = convertSquirrelToEnglish(output);
   }
   $("#output").html(output);
 }
});

function submit()
{
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
      newString = i[1].toString().replace(/\+/g, " ");
      newString = newString.replace(/\%0D\%0A/g, "\n");
      queries[i[0].toString()] = newString; /* Assigns the element to its corresponding key in "queries" */
    });
  }
  return queries;
}

function setLanguage()
{
  if ($("#lang").options[$("#lang").selectedIndex].value = "sq") //Converting from English to Squirrel
  {
    toEnglish();
  }
  else {// Convert from Squirrel to English (default)
    toSquirrel();
  }
}

function convertEnglishToSquirrel(input){ //Squirrels speak "pig latin"
  var output = "";
  var addon, first_letter;
  $.each(input.split(/\s+/), function(i, v){
    if (v.length > 0){
      addon = v.substr(1, v.length - 1);
      addon += v[0] + "ay";
      output += addon;
    }
    output += " ";
  });
  return output;
}

function convertSquirrelToEnglish(input){
  var output = "";
  var addon;
   $.each(input.split(/\s+/), function(i, v){
    if (v.length > 3){
      addon = v[v.length - 3] + v.substr(0, v.length - 3);
      output += addon;
      output += " ";
     }
 });
  return output;
}

function isEnglish()
{
  return ($("native").css("font-family") === "Arial");
}

function isSquirrel()
{
  return ($("foreign").css("font-family") === "Arial");
}

function toEnglish() {
  $(".native").css("font-family", "Arial");
  $(".foreign").css("font-family", "Wingdings");
  $("#idioma").val("eng");
  $("#input_tag, #translate").html(convertSquirrelToEnglish(("#input_tag, #translate").html()));
  $("#output").html(convertEnglishToSquirrel(("#output").html()));
}

function toSquirrel()
{
  $(".native").css("font-family", "Wingdings");
  $(".foreign").css("font-family", "Arial");
  $("#idioma").val("sq");
  $("#input_tag, #translate").html(convertEnglishToSquirrel(("#input_tag, #translate").html()));
  $("#output").html(convertSquirrelToEnglish(("#output").html()));
}
