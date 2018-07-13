/* 1. change elements by index */
const list0 = [10, 20, 30];

function changeElements(list) {
    const remember_previous = list[0];
    list[0] = list[1];
    list[1] = remember_previous;
    return list;
}
console.log(changeElements(list0));

/* 2. sort elements by increment */
const list = [30, -5, 0, 10, 2, 3, 60, 80];

function mySort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i+1]) {
                const temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}
console.log(mySort(list));

/* 3. bind function */
const func1 = function(message) {
    this(message);
};

function myBind(func, context) {
    return func.bind(context);
}

const func3 = myBind(func1, console.log);
func3('love js');
