/*
⬛⬛⬛⬛⬛
🟨⬛⬛⬛🟨
🟨⬛⬛🟩🟨
🟩🟩🟩🟩🟩
*/

$("#wordle_input").focus();

const c_EMOJI_MAPPING = {
  "☁️": ["☁️","⛅", "☀️"],
  "🌜": ["🌑","🌓", "🌕"],
  "🌵": ["🌵","🌞", "🦎"],
  "🦦": ["🌳","🐟", "🦦"],
  "🍕": ["🍅","🧀", "🍕"],
  "🎆": ["🌌","🎇", "🎆"],
  "🧻": ["💩","🧻", "🚽"],
  "🎸": ["🥁","🎸", "🎤"],
  "🔒": ["🔒","🔓", "💶"],
  "🐑": ["🏔", "🌲", "🐑"],
  "🐣": ["🥚", "🐣", "🐥"],
  "🌋": ["⛰", "🌋", "🔥"],
  "👾": ["🛸", "👾", "👨‍🚀"],
  "👄": ["👁", "👃", "👄"],
  "🌊": ["☁️", "🌧", "🌊"],
  "🦧": ["🦜", "🌴", "🦧"],
  "🍪": ["🥛", "☕️", "🍪"],
  "🔳": ["⬜️", "🔳", "⬛️"],
  "⏳": ["⏳", "🌹", "🥀"],
  "🌏": ["🪨", "🌕", "🌏"],
  "🐡": ["🪨", "🐡", "🤢"],
  "🎨": ["🪨", "🎨", "🖼"],
  "💬": ["💬", "💭", "🗯"],
  "📝": ["〰️", "📝", "🏙️"],
  "🕳": ["⚫️", "🛞", "🕳"],
  "🛁": ["🫧", "🧼", "🛁"],
  "⚫": ["⚫", "🟡", "🟢"],
  "🐈‍⬛": ["🐈‍⬛", "🐈", "🦝"],
  "🤮": ["🤮", "😴", "😊"],
  "🌐": ["🌐", "📈", "🖼"],
  "🐘": ["🐘", "🫏", "🌹"],
  "🌷": ["🌾", "🌷", "🪻"],
  "🪸": ["🌊", "🪸", "🪼"],
  "🦕": ["🦕", "🪼", "🦋"],
  "❤️‍🔥": ["🎐", "❤️‍🔥", "🪽"], // 🪅 🧵 🎒 🌒 🪨 🪐 🥩 🛝 🎞 🚬 🪱 🥟 🪢 🧶 ⚓️ 🫎 🍉 🫚 🪈 🫛 🧮 💮
  "🎢": ["🎢", "🌬", "🫨"],
  "🪽": ["🪽", "🍂", "🪨"],
  "🪺": ["🌲", "🐦‍⬛", "🪺"],
  "🪤": ["🐀", "🪤", "🧀"],
  "🪐": ["🪐", "🍭", "🪅"],
  "🧌": ["🍂", "🪈", "🧌"],
  "🫚": ["🫙", "🫚", "♻️"],
  "🧜‍♀️": ["🌊", "🧜‍♀️", "🐟"],
  "👅": ["🎩", "👀", "👅"],
  "🧮": ["➖", "➕", "🧮"],
  "𓀀": ["𓀏", "𓀉", "𓀎"],
}

// more ideas: blue stuff, water buffalo moose

// 🧿🔑🔳⬛️⬜️

function makeReplacements(s) {
  const themeArr = c_EMOJI_MAPPING[$("#themeSelect").val()];
  console.log(themeArr);
  var blackReplace = themeArr[0]; // $("#blackSelect").val()
  console.log(blackReplace);
  var yellowReplace = themeArr[1];
  console.log(yellowReplace);
  var greenReplace = themeArr[2];
  console.log(greenReplace);
  blackReplace1 = s.replace(/⬛/g, blackReplace);
  blackReplace = blackReplace1.replace(/⬜/g, blackReplace);
  yellowReplace = blackReplace.replace(/🟨/g, yellowReplace);
  return yellowReplace.replace(/🟩/g, greenReplace);
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
  $("#WaLink").show();
});

$("#WaLink").click( function(){
    window.open("https://wa.me/");
});

$( ".emojiSelect" ).change(function() {
  doReplacements();
});