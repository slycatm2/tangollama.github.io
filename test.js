var name = "test_cookie";
var value = "test_value";
var expires = "";
var date = new Date();
date.setTime(date.getTime() + (7*24*60*60*1000));
expires = "; expires=" + date.toUTCString();
document.cookie = name + "=" + value + expires + "; path=/";
if (console != "undefined") {
  console.log("test.js");
  console.log(document.cookie);
}