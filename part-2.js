/*
 * 1. Написать функцию которая: учитывает массив несортированных чисел и определяет являются ли числа в массиве последовательными
 * */

const isSequential = (array) => {
  return [...array]
    .sort((a, b) => a - b)
    .every((num, index, arr) => num === arr[0] + index);
};

console.log(isSequential([5, 2, 3, 1, 4]));
// ==================================================================

/*
 * 2 Необходимо реализовать функцию, которая принимает этот массив в качестве аргумента и возвращает новый массив, содержащий только уникальные элементы. Новый массив должен быть отсортирован по возрастанию.
 * */

const uniqueSortedArray = (array) => {
  return [...new Set([...array].sort((a, b) => a - b))];
};

const uniqueSortedArray2 = (array) => {
  return [...array]
    .sort((a, b) => a - b)
    .filter((item, index, arr) => {
      return item !== arr[index + 1];
    });
};

console.log(uniqueSortedArray([1, 2, 3, 4, 5]));
console.log(uniqueSortedArray2([1, 3, 2, 2, 4, 3, 5, 6, 5]));

// ==================================================================

/*
 * 3. Написать функцию которая принимает в качестве аргумента массив чисел и возвращает новый массив с количеством повторений первоначального массива {число: кол во повторений}
 * */

const countOccurrences = (array) => {
  return array.reduce((acc, num) => {
    acc[num] = acc[num] ? acc[num] + 1 : 1;

    return acc;
  }, {});
};

console.log(countOccurrences([1, 3, 2, 2, 4, 3, 5, 6, 5]));
