function checkPrimeNumber(num) {
    // Проверка на допустимый диапазон чисел
    if (num > 1000) {
        console.log("Данные неверны. Введите число до 1000.");
        return;
    }

    // Проверка на числа 0 и 1
    if (num === 0 || num === 1) {
        console.log("Число не является простым.");
        return;
    }

    // Проверка на простое число
    for (let i = 2; i < (num / 2); i++) {
        if (num % i === 0) {
            console.log("Число не является простым.");
            return;
        }
    }

    console.log("Число является простым.");
}

checkPrimeNumber();
