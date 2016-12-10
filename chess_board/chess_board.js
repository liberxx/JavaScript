/*
Напишите программу, создающую строку, содержащую решётку, в которой линии разделяются символами	новой строки. На каждой	позиции
либо пробел, либо #. В результате должна получиться шахматная доска. Размер доски переменный.
*/

var h_lines = prompt("Enter horizontal lines number","");
var v_lines = prompt("Enter vertical lines number","");
var chess_board = "";
var i = 1;
while (i <= v_lines) {
	if (i % 2 == 0) {
  		var n = 2;
  	}
  	else {
  		var n = 1;
  	}

	while (n <= h_lines) {
  		if (n % 2 !=0) {
    		chess_board += " ";
    	}
    	else {
    		chess_board += "#";
    	}

    	if (n == h_lines) {
    		chess_board += "\n";
    	}

  		n++;
  	}
    i++;
}
console.log(chess_board);