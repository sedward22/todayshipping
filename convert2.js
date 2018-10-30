function netscapeKeyPress(e) {
    if (e.which == 13)
        myCon();
}

function microsoftKeyPress() {
    if (window.event.keyCode == 13)
        myCon();
}

if (navigator.appName == 'Netscape') {
    window.captureEvents(Event.KEYPRESS);
    window.onKeyPress = netscapeKeyPress;
}

function myCon() {
  var FromVal, ToVal, FromName, ToName, v1, Factor;

  v1 = document.MainForm.what.value;
  v1 = stripBad(v1);
  v1 = parseFloat(v1);
  if (isNaN(v1)) v1 = 1;
  v1 = Math.abs(v1);
  document.MainForm.what.value = v1;
  
  FromVal = document.MainForm.from[document.MainForm.from.selectedIndex].value;
  ToVal = document.MainForm.to[document.MainForm.to.selectedIndex].value;
  FromName = document.MainForm.from.options[document.MainForm.from.selectedIndex].text;
  ToName = document.MainForm.to.options[document.MainForm.to.selectedIndex].text;

  Factor = eval("(" + FromVal + ")/(" + ToVal + ")");

  document.MainForm.answer.value = v1 + " " + FromName + " = " + get_result(v1, Factor) + " " + ToName;
}

function resetanswer() {
  document.MainForm.answer.value = "";
}

function get_result(ff,factor){
 ff *= factor;

 if (Number.prototype.toFixed) {
   ff = ff.toFixed(7);
   ff = parseFloat(ff);
 }
 else {
   var leftSide = Math.floor(ff);
   var rightSide = ff - leftSide;
   ff = leftSide + Math.round(rightSide *10000000)/10000000;
 }

 return comma(ff);
}

function stripBad(string) {
    for (var i=0, output='', valid="eE-0123456789."; i<string.length; i++)
       if (valid.indexOf(string.charAt(i)) != -1)
          output += string.charAt(i)
    return output;
} 

function comma(num) {
 var n = Math.floor(num);
 var myNum = num + "";
 var myDec = ""
 
 if (myNum.indexOf('.',0) > -1){
  myDec = myNum.substring(myNum.indexOf('.',0),myNum.length);
 }

  var arr=new Array('0'), i=0; 
  while (n>0) 
    {arr[i]=''+n%1000; n=Math.floor(n/1000); i++;}
  arr=arr.reverse();
  for (var i in arr) if (i>0) //padding zeros
    while (arr[i].length<3) arr[i]='0'+arr[i];
  return arr.join() + myDec;
}



