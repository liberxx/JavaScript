//Запрашиваем имя игрока
var player = prompt("Введите своё имя", "Игрок");
//Объявляем переменные уничтожаемого объекта и игрового поля

var ball = document.getElementById("ball");
var ball2 = document.getElementById("ball2");
var ball3 = document.getElementById("ball3");

var ballons = [ball, ball2, ball3]

var body = document.getElementsByTagName("body");


//Массив стартовых координат по Х.
var coordinates = [0, 100, 200, 300, 400, 500, 600, 700]

var scoreboard = document.getElementById("score");

//Счетчик попаданий
var count = 0;

//Стартовая позиция шарика
var positions_y = [700, 700, 700];

function move(obj) {


	if (positions_y[i] < -200) {
		var position_x = coordinates[Math.floor(Math.random()*coordinates.length)];
		positions_y[i] = 700;
		obj.style.left = position_x + "px";
	}	
			positions_y[i] -= 3;
			obj.style.top = positions_y[i] + "px";
			
}

//При попадании перемещаем объект за нижнюю границу экрана и увеличиваем переменную count.

for (i = 0, len = ballons.length; i < len; i++){
	
    ballons[i].onclick = function() {

	var position_x = coordinates[Math.floor(Math.random()*coordinates.length)];

	for (i = 0, len = ballons.length; i < len; i++){
		if (ballons[i].id == this.id) {
			ballons[i].style.left = position_x + "px";
			positions_y[i] = 700;
		}	
	}	
	
	count += 1;
	scoreboard.innerHTML = count;
	}
}

//Вызов функции движения для каждого из шаров.
timer_id = setInterval(function(){
	for (i = 0, len = ballons.length; i < len; i++)
		move.call({}, ballons[i]);
	}, 10);
	
setTimeout(function() {
  clearInterval(timer_id);
},60000);	

//Если время закончилось - очищаем body и выводим результат игры.
function timer(){
var obj=document.getElementById('timer');
obj.innerHTML--;
    if (obj.innerHTML==0){
        setTimeout(function(){},1000);
		body[0].innerHTML = '';
		
		var result = document.createElement("div");
		result.id = "scroll_container"
		body[0].appendChild(result);
		
		var scrl = document.createElement("img");
		scrl.src = "svitok.jpg";
		scrl.id = "scroll";
		result.appendChild(scrl);
		
		var result_text_container = document.createElement("div");
		result_text_container.id = "result_text_container"
		body[0].appendChild(result_text_container);
		
		
		var scrl_text = document.createElement("p");
		scrl_text.innerHTML = player + "," + "Ваш результат:" + " " + count;
		scrl_text.id = "scroll_text";
		result_text_container.appendChild(scrl_text);
		
    } else {
        setTimeout(timer,1000);
    }
}
setTimeout(timer,1000);
	