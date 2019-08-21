const printReceipt = require('../main');

let barcodeArray = ['0001', '0003', '0005', '0003'];
it ('should return receipt from database when call printReceipt by given the barcodeArray', () => {
    expect(printReceipt(barcodeArray)).toBe(
        "Receipts\n" +
        "-----------------------------------\n"+
        "Coca Cola           3          1\n" +
        "Pepsi-Cola          5          2\n" +
        "Dr Pepper           7          1\n" +
        "-----------------------------------\n" +
        "Price:20");
});

let barcodeArray1 = [];
it ('should return receipt from database when call printReceipt by given the barcodeArray', () => {
    expect(printReceipt(barcodeArray1)).toBe("无输入信息");
});

let barcodeArray2 = ['0003', '0005','1105', '0003'];
it ('should return receipt from database when call printReceipt by given the barcodeArray', () => {
    expect(printReceipt(barcodeArray2)).toBe("输入的ID包含无效，请重新输入");
});



