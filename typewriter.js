// set up text to print, each item in array is new line
var aText = new Array(
"Hello World!", 
"My name is Stephan Scholz.",
"I am a developer.",
"I am good, but if you hire me, I will get even better.",
"I would love to work for your company!",
"Working for companies makes my life more affordable.",
"And enjoyable!",
"I have worked before, but never for a company.",
"Just for fun, so to say.",
"I would love to work for your comapany!",
"I am sorry, I repeat myself.",
"I am also sorry for the typo.",
"Please enjoy my little website.",
"I created it just for you.",
"And all the others..."
);
var iSpeed = 50; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
  document.getElementById("start-button").style.display = "none";
  document.getElementById("hero-message").style.display = "block";
  sContents =  ' ';
  iRow = Math.max(0, iIndex-iScrollAt);
  var destination = document.getElementById("typetext");
 
  while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
  }
  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    } else {
      //setTimeout("resetTypewriter()", 5000);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}