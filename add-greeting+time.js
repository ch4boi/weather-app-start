
/* Thi s script displays a greeting to the user based upon the current time. 
	It is an example from JavaScript &jQuery book */
// Would also like it to adapt time of day to selected time zone tooooo ??  
	// if so, include local time still visible in mini time display
	// if weather set to local time, remove the mini display
var today= new Date();
var hourNow = today.getHours(); var greeting;
8 THE ABC OF PROGRAMMING
i f
(hourNow > 18) {
greeting= 'Good evening!';
else if (hourNow > 12) { greeting = ' Good afternoon!';
else if (hourNow > 0) { greeting = 'Good morni ng!';
else {
greeting = 'Welcome! ' ;
document.write( '<h3>'
+greeting
+
'</ h3>');