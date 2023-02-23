module.exports = function towelSort(matrix) {
    let arr = [];
    if (typeof matrix === "undefined") { return arr };
    matrix.forEach((item, index) => {
        if (index % 2 === 1) {
            item = item.reverse()
        }
        item.forEach((element) => {
            arr.push(element);
        });
    });
    return arr;
}
