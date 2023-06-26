// Данный массив
let myArray = [1, 2, 3, 0, null, 5, 6, '7', undefined, 8, 9, 9];

function sumEvenOddElem() {
    // Переменные для подсчета четных, нечетных и нулевых элементов
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;

    // Подсчет четных, нечетных и нулевых элементов
    for (let i = 0; i < myArray.length; i++) {
        let currentElement = myArray[i];

        if (typeof currentElement === 'number' && !isNaN(currentElement)) {
            if (currentElement === 0) {
                zeroCount++;
            } else if (currentElement % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    }

    // Вывод результатов в консоль
    console.log("Количество четных элементов: " + evenCount);
    console.log("Количество нечетных элементов: " + oddCount);
    console.log("Количество нулевых элементов: " + zeroCount);
};

sumEvenOddElem();