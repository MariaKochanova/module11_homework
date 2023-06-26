const exponentiation = (x, n) => {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
};

// Примеры тестов
console.log(exponentiation(2, 3));  // Вывод: 8 (2 в степени 3)
console.log(exponentiation(5, 2));  // Вывод: 25 (5 в степени 2)
console.log(exponentiation(10, 0)); // Вывод: 1 (любое число в степени 0 равно 1)