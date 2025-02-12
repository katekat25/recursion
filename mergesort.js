function mergeSort(array) {
    function split(arr) {
        if (arr.length <= 1) {
            return arr;
        } else {
            let middle = Math.ceil(arr.length / 2);
            let left = arr.slice(0, middle);
            let right = arr.slice(middle, arr.length);

            return merge(split(left), split(right));
        }
    }

    function merge(array1, array2) {
        if (array1.length === 0) return array2;
        if (array2.length === 0) return array1;

        if (array1[0] < array2[0]) {
            return [array1[0], ...merge(array1.slice(1), array2)];
        } else {
            return [array2[0], ...merge(array1, array2.slice(1))];
        }
    }

    const sortedArray = array.slice();
    return split(sortedArray);
}