// Получаем объект по ID.
var tablica = document.getElementById('tablica');
// Переменная статуса сортировки. Возрастающая/убывающая
var ascending = false

//Обработчик при клике. В случае клика по TH производим вызов функции Sort.
tablica.onclick = function(event){
    if (event.target.tagName != 'TH') return;
	
	// Переключение режима сортировки.
	if (ascending == false) 
		ascending = true;
	else
		ascending = false;		
	
    // Если TH - сортируем
    sort(event.target.cellIndex, event.target.getAttribute('data-type'));
};

function sort(colNum, type) {
      var tbody = tablica.getElementsByTagName('tbody')[0];

      // Составить массив из TR
      var rowsArray = [].slice.call(tbody.rows);

      // определить функцию сравнения, в зависимости от типа
      var compare;

      switch (type) {
        case 'number':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
          };
          break;
        case 'string':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
          };
          break;
      }

      // сортировать по возрастанию/убыванию
	  if (ascending == true)
		rowsArray.sort(compare);		
	  else  
		rowsArray.sort(compare).reverse();
	  

      // Убрать tbody из большого DOM документа для лучшей производительности
      tablica.removeChild(tbody);

      // добавить результат в нужном порядке в TBODY
      // они автоматически будут убраны со старых мест и вставлены в правильном порядке
      for (var i = 0; i < rowsArray.length; i++) {
        tbody.appendChild(rowsArray[i]);
      }

      tablica.appendChild(tbody);

}


