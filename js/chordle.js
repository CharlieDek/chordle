$("#wordle_input").focus();

function makeReplacements(s) {
  blackReplace1 = s.replace(/⬛/g, $("#blackSelect").val());
  blackReplace = blackReplace1.replace(/⬜/g, $("#blackSelect").val());
  yellowReplace = blackReplace.replace(/🟨/g, $("#yellowSelect").val());
  return yellowReplace.replace(/🟩/g, $("#greenSelect").val());
}

function doReplacements() {
  var newText = $("#wordle_input").val().replace(/\n/g, "<br>");
  $("#result_picture").html(makeReplacements(newText));
}

$("#wordle_input").on('input',function(e){
  doReplacements();
});

$("#copyBtn").click( function(){
  var niceText = $("#result_picture").html().replace(/<br>/g, "\n").trim();
  navigator.clipboard.writeText(niceText);
});

$( ".emojiSelect" ).change(function() {
  doReplacements();
});