//# Задача 10

//Отсортируйте массив по возрастанию.

//Использовать встроенные методы массивов — нельзя.

const arr = [6, 5, 4, 3, 2, 1];
// [1,2,3,4,5,6]

let arr2 = arr;

for (i in arr2) {
    for (i2 in arr2) {
        if (i !== i2 && arr2[i2] > arr2[i]) {
            const cur = arr2[i2];
            arr[i2] = arr[i];
            arr[i] = cur;
        }
    }
}
console.log(arr2);
