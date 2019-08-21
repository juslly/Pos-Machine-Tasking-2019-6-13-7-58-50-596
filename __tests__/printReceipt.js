const database = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];


function splitBarcodes(barcodes){
    var barcodeArr = new Array();
    var splitInput = barcodes.split(",");
    for(var i =0;i<splitInput.length;i++){
        barcodeArr[i] = splitInput[i].replace(/[^0-9]/ig,"");
    }
    return barcodeArr;
}

function checkBarcode(barcodeArr){
    let resultCheck;
    if(barcodeArr.length == 0 ){
        resultCheck = "输入的商品为空，请重新输入";
    }else if(barcodeArr.length > 1000){
        resultCheck = "输入的商品超出正常数量，请检查问题";
    }else if(!isValidateInput(barcodeArray)){
        resultCheck = "输入的ID无效信息,请重新输入";
    }else{
        resultCheck = "正确";
    }
    return checkResult;
}
function isValidateInput(barcodeArr){
    let inputNum = 0;
    for (let i=0; i<barcodeArr.length; i++){
        for (let j=0; j<database.length; j++){
            if(barcodeArr[i]===database[j].id){
                inputNum++;
            }
        }
        if(barcodeArr[i] ===""){
            inputNum++;
        }
    }
    return inputNum === barcodeArr.length

}
function queryDB(barcodes){
   
}


function calculateNum(firstNumber, secondNumber){

   
}


function printReceipt(firstNumber, secondNumber){


    return multilyTable;
}

module.exports = printReceipt;
