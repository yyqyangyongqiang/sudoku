// '添加随机生成数字，随机产生一个下标，根据传过来的下标确定所属的单元格，'
var Sudoku = {
    'one': ['','','','','','','','',''],
    'two': ['','','','','','','','',''],
    'three': ['','','','','','','','',''],
    'four': ['','','','','','','','',''],
    'five': ['','','','','','','','',''],
    'six': ['','','','','','','','',''],
    'seven': ['','','','','','','','',''],
    'eight': ['','','','','','','','',''],
    'nine': ['','','','','','','','',''],
};

// 定义所需要的变量
// num 当前一共插入变量的值的数量
// temporary 保存当前需要插入的值
// subscript 随机生成的下标
// oneNum 保存随机取出来的数字
var num, temporary, sub;
// [7,8] 表示第七行 第八列
var subscript = [];
var oneNum = '';
// 初始化 所有单元格的下标
var allSubscript = [];

// 生成单元格所有的坐标 ***自调用
(() => {
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            allSubscript.push([i, j]);
        }
    }
})();

// 保存单元格内没有插入的元素
var allCell = {
    'one': [1, 2, 3, 4, 5, 6, 7, 8, 9], //第一个单元格
    'two': [1, 2, 3, 4, 5, 6, 7, 8, 9], //第二个单元格
    'three': [1, 2, 3, 4, 5, 6, 7, 8, 9], //第三个单元格
    'four': [1, 2, 3, 4, 5, 6, 7, 8, 9], //第四个单元格
    'five': [1, 2, 3, 4, 5, 6, 7, 8, 9], //第五个单元格
    'six': [1, 2, 3, 4, 5, 6, 7, 8, 9], //第六个单元格
    'seven': [1, 2, 3, 4, 5, 6, 7, 8, 9], //第七个单元格
    'eight': [1, 2, 3, 4, 5, 6, 7, 8, 9], //第八个单元格
    'nine': [1, 2, 3, 4, 5, 6, 7, 8, 9], //第九个单元格
};
// 储存当前下标 所对应的单元格和数组下标
var grid = [];

// 随机插入数字的总个数
var total = 40;
var randomNum  = '';


// 第一步 随机取出一个下标  TakeSubscript
function TakeSubscript() {
    // 随机取出一个下标 这个下边为
    sub = Math.ceil(Math.random() * allSubscript.length) - 1;
    subscript.push(allSubscript[sub]);

    // 判断输入那个单元格 -- 属于第几个元素
    Transformation(subscript[0]);
    
    // 随机生成一个  单元格数字的下标
    randomNum = Math.ceil(Math.random() * allCell[grid[0]].length);
    oneNum = allCell[grid[0]][randomNum - 1];

}


// 把数字换成英文数字
function replaces(item) {
    switch (item) {
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        default:
            console.log('未知单元格' + item);
    }
}


// isLine
// item[0] 当前插入元素的数组, item[1] 当前插入元素的下标 
// 返回值 当前行的所有元素
function isLine(item,oneNum){
    if(item[0] == 'one' || item[0] == 'two' || item[0] == 'three'){
        if(item[1] == '0' || item[1] == '1' || item[1] == '2'){
            return [Sudoku.one[0], Sudoku.one[1], Sudoku.one[2], Sudoku.two[0], Sudoku.two[1], Sudoku.two[2], Sudoku.three[0], Sudoku.three[1], Sudoku.three[2]].indexOf(oneNum);
        }else if(item[1] == '3' || item[1] == '4' || item[1] == '5'){
            return [Sudoku.one[3], Sudoku.one[4], Sudoku.one[5], Sudoku.two[3], Sudoku.two[4], Sudoku.two[5], Sudoku.three[3], Sudoku.three[4], Sudoku.three[5]].indexOf(oneNum);
        }else if(item[1] == '6' || item[1] == '7' || item[1] == '8'){
            return [Sudoku.one[6], Sudoku.one[7], Sudoku.one[8], Sudoku.two[6], Sudoku.two[7], Sudoku.two[8], Sudoku.three[6], Sudoku.three[7], Sudoku.three[8]].indexOf(oneNum);
        }
    }else if( item[0] == 'four' || item[0] == 'five' || item[0] == 'six'){
        if(item[1] == '0' || item[1] == '1' || item[1] == '2'){
            return [Sudoku.four[0], Sudoku.four[1], Sudoku.four[2], Sudoku.five[0], Sudoku.five[1], Sudoku.five[2], Sudoku.six[0], Sudoku.six[1], Sudoku.six[2]].indexOf(oneNum);
        }else if(item[1] == '3' || item[1] == '4' || item[1] == '5'){
            return [Sudoku.four[3], Sudoku.four[4], Sudoku.four[5], Sudoku.five[3], Sudoku.five[4], Sudoku.five[5], Sudoku.six[3], Sudoku.six[4], Sudoku.six[5]].indexOf(oneNum);
        }else if(item[1] == '6' || item[1] == '7' || item[1] == '8'){
            return [Sudoku.four[6], Sudoku.four[7], Sudoku.four[8], Sudoku.five[6], Sudoku.five[7], Sudoku.five[8], Sudoku.six[6], Sudoku.six[7], Sudoku.six[8]].indexOf(oneNum);
        }
    }else if(item[0] == 'seven' || item[0] == 'eight' || item[0] == 'nine'){
        if(item[1] == '0' || item[1] == '1' || item[1] == '2'){
            return [Sudoku.seven[0], Sudoku.seven[1], Sudoku.seven[2], Sudoku.eight[0], Sudoku.eight[1], Sudoku.eight[2], Sudoku.nine[0], Sudoku.nine[1], Sudoku.nine[2]].indexOf(oneNum);
        }else if(item[1] == '3' || item[1] == '4' || item[1] == '5'){
            return [Sudoku.seven[3], Sudoku.seven[4], Sudoku.seven[5], Sudoku.eight[3], Sudoku.eight[4], Sudoku.eight[5], Sudoku.nine[3], Sudoku.nine[4], Sudoku.nine[5]].indexOf(oneNum);
        }else if(item[1] == '6' || item[1] == '7' || item[1] == '8'){
            return [Sudoku.seven[6], Sudoku.seven[7], Sudoku.seven[8], Sudoku.eight[6], Sudoku.eight[7], Sudoku.eight[8], Sudoku.nine[6], Sudoku.nine[7], Sudoku.nine[8]].indexOf(oneNum);
        }
    }
}


// isRow
// item[0] 当前插入元素的数组, item[1] 当前插入元素的下标 
// 返回值 当前列是否允许插入
function isRow(item,oneNum){
    if(item[0] == 'one' ||  item[0] == 'four' || item[0] == 'seven' ){
        if(item[1] == '0' || item[1] == '3'  || item[1] == '6'){
            return [Sudoku.one[0], Sudoku.one[3], Sudoku.one[6], Sudoku.four[0], Sudoku.four[3], Sudoku.four[6], Sudoku.seven[0], Sudoku.seven[3], Sudoku.seven[6]].indexOf(oneNum);
        }else if(item[1] == '1' || item[1] == '4' || item[1] == '7'){
            return [Sudoku.one[1], Sudoku.one[4], Sudoku.one[7], Sudoku.four[1], Sudoku.four[4], Sudoku.four[7], Sudoku.seven[1], Sudoku.seven[4], Sudoku.seven[7]].indexOf(oneNum);
        }else if( item[1] == '2' ||  item[1] == '5' || item[1] == '8'){
            return [Sudoku.one[2], Sudoku.one[5], Sudoku.one[8], Sudoku.four[2], Sudoku.four[5], Sudoku.four[8], Sudoku.seven[2], Sudoku.seven[5], Sudoku.seven[8]].indexOf(oneNum);
        }
    }else if(item[0] == 'two' || item[0] == 'five' || item[0] == 'eight' ){
        if(item[1] == '0' || item[1] == '3'  || item[1] == '6'){
            return [Sudoku.two[0], Sudoku.two[3], Sudoku.two[6], Sudoku.five[0], Sudoku.five[3], Sudoku.five[6], Sudoku.eight[0], Sudoku.eight[3], Sudoku.eight[6]].indexOf(oneNum);
        }else if(item[1] == '1' || item[1] == '4' || item[1] == '7'){
            return [Sudoku.two[1], Sudoku.two[4], Sudoku.two[7], Sudoku.five[1], Sudoku.five[4], Sudoku.five[7], Sudoku.eight[1], Sudoku.eight[4], Sudoku.eight[7]].indexOf(oneNum);
        }else if(item[1] == '2' ||  item[1] == '5' || item[1] == '8'){
            return [Sudoku.two[2], Sudoku.two[5], Sudoku.two[8], Sudoku.five[2], Sudoku.five[5], Sudoku.five[8], Sudoku.eight[2], Sudoku.eight[5], Sudoku.eight[8]].indexOf(oneNum);
        }
    }else if(item[0] == 'three' || item[0] == 'six' || item[0] == 'nine'){
        if(item[1] == '0' || item[1] == '3'  || item[1] == '6'){
            return [Sudoku.three[0], Sudoku.three[3], Sudoku.three[6], Sudoku.six[0], Sudoku.six[3], Sudoku.six[6], Sudoku.nine[0], Sudoku.nine[3], Sudoku.nine[6]].indexOf(oneNum);
        }else if(item[1] == '1' || item[1] == '4' || item[1] == '7'){
            return [Sudoku.three[1], Sudoku.three[4], Sudoku.three[7], Sudoku.six[1], Sudoku.six[4], Sudoku.six[7], Sudoku.nine[1], Sudoku.nine[4], Sudoku.nine[7]].indexOf(oneNum);
        }else if(item[1] == '2' ||  item[1] == '5' || item[1] == '8'){
            return [Sudoku.three[2], Sudoku.three[5], Sudoku.three[8], Sudoku.six[2], Sudoku.six[5], Sudoku.six[8], Sudoku.nine[2], Sudoku.nine[5], Sudoku.nine[8]].indexOf(oneNum);
        }
    }
}


//  第二个调用的函数  根据传过来的参数 判断属于第几个单元格
function Transformation(item) {

    if (item[0] < 4 && item[1] < 4) {
        grid.push('one');
        item = item.join();
        switch (item) {
            case '1,1':
                grid.push('0');
                break;
            case '1,2':
                grid.push('1');
                break;
            case '1,3':
                grid.push('2');
                break;
            case '2,1':
                grid.push('3');
                break;
            case '2,2':
                grid.push('4');
                break;
            case '2,3':
                grid.push('5');
                break;
            case '3,1':
                grid.push('6');
                break;
            case '3,2':
                grid.push('7');
                break;
            case '3,3':
                grid.push('8');
                break;
        }
        // console.log('第一个单元格');
    } else if (item[0] > 3 && item[0] < 7 && item[1] < 4) {
        grid.push('four');
        item = item.join();

        switch (item) {
            case '4,1':
                grid.push('0');
                break;
            case '4,2':
                grid.push('1');
                break;
            case '4,3':
                grid.push('2');
                break;
            case '5,1':
                grid.push('3');
                break;
            case '5,2':
                grid.push('4');
                break;
            case '5,3':
                grid.push('5');
                break;
            case '6,1':
                grid.push('6');
                break;
            case '6,2':
                grid.push('7');
                break;
            case '6,3':
                grid.push('8');
                break;
        }
        // console.log('第四个单元格');
    } else if (item[0] > 6 && item[1] < 4) {
        grid.push('seven');
        item = item.join();

        switch (item) {
            case '7,1':
                grid.push('0');
                break;
            case '7,2':
                grid.push('1');
                break;
            case '7,3':
                grid.push('2');
                break;
            case '8,1':
                grid.push('3');
                break;
            case '8,2':
                grid.push('4');
                break;
            case '8,3':
                grid.push('5');
                break;
            case '9,1':
                grid.push('6');
                break;
            case '9,2':
                grid.push('7');
                break;
            case '9,3':
                grid.push('8');
                break;
        }
        // console.log('第七个单元格');
    } else if (item[0] < 4 && item[1] > 3 && item[1] < 7) {
        grid.push('two');
        item = item.join();

        switch (item) {
            case '1,4':
                grid.push('0');
                break;
            case '1,5':
                grid.push('1');
                break;
            case '1,6':
                grid.push('2');
                break;
            case '2,4':
                grid.push('3');
                break;
            case '2,5':
                grid.push('4');
                break;
            case '2,6':
                grid.push('5');
                break;
            case '3,4':
                grid.push('6');
                break;
            case '3,5':
                grid.push('7');
                break;
            case '3,6':
                grid.push('8');
                break;
        }
        // console.log('第二个单元格');
    } else if (item[0] > 3 && item[0] < 7 && item[1] > 3 && item[1] < 7) {
        grid.push('five');
        item = item.join();
        switch (item) {
            case '4,4':
                grid.push('0');
                break;
            case '4,5':
                grid.push('1');
                break;
            case '4,6':
                grid.push('2');
                break;
            case '5,4':
                grid.push('3');
                break;
            case '5,5':
                grid.push('4');
                break;
            case '5,6':
                grid.push('5');
                break;
            case '6,4':
                grid.push('6');
                break;
            case '6,5':
                grid.push('7');
                break;
            case '6,6':
                grid.push('8');
                break;
        }
        // console.log('第五个单元格');
    } else if (item[0] > 6 && item[1] > 3 && item[1] < 7) {
        grid.push('eight');
        item = item.join();
        switch (item) {
            case '7,4':
                grid.push('0');
                break;
            case '7,5':
                grid.push('1');
                break;
            case '7,6':
                grid.push('2');
                break;
            case '8,4':
                grid.push('3');
                break;
            case '8,5':
                grid.push('4');
                break;
            case '8,6':
                grid.push('5');
                break;
            case '9,4':
                grid.push('6');
                break;
            case '9,5':
                grid.push('7');
                break;
            case '9,6':
                grid.push('8');
                break;
        }
        // console.log('第八个单元格');
    } else if (item[0] < 4 && item[1] > 6) {
        grid.push('three');
        item = item.join();

        switch (item) {
            case '1,7':
                grid.push('0');
                break;
            case '1,8':
                grid.push('1');
                break;
            case '1,9':
                grid.push('2');
                break;
            case '2,7':
                grid.push('3');
                break;
            case '2,8':
                grid.push('4');
                break;
            case '2,9':
                grid.push('5');
                break;
            case '3,7':
                grid.push('6');
                break;
            case '3,8':
                grid.push('7');
                break;
            case '3,9':
                grid.push('8');
                break;
        }
        // console.log('第三个单元格');
    } else if (item[0] > 3 && item[0] < 7 && item[1] > 6) {
        grid.push('six');
        item = item.join();

        switch (item) {
            case '4,7':
                grid.push('0');
                break;
            case '4,8':
                grid.push('1');
                break;
            case '4,9':
                grid.push('2');
                break;
            case '5,7':
                grid.push('3');
                break;
            case '5,8':
                grid.push('4');
                break;
            case '5,9':
                grid.push('5');
                break;
            case '6,7':
                grid.push('6');
                break;
            case '6,8':
                grid.push('7');
                break;
            case '6,9':
                grid.push('8');
                break;
        }
        // console.log('第六个单元格');
    } else if (item[0] > 6 && item[1] > 6) {
        grid.push('nine');
        item = item.join();
        switch (item) {
            case '7,7':
                grid.push('0');
                break;
            case '7,8':
                grid.push('1');
                break;
            case '7,9':
                grid.push('2');
                break;
            case '8,7':
                grid.push('3');
                break;
            case '8,8':
                grid.push('4');
                break;
            case '8,9':
                grid.push('5');
                break;
            case '9,7':
                grid.push('6');
                break;
            case '9,8':
                grid.push('7');
                break;
            case '9,9':
                grid.push('8');
                break;
        }
        // console.log('第九个单元格');
    }
}


for (let i = 0; i < total; i++) {
    // 每次生成把上一次的结果设置为空
    subscript = [];
    // 生成随机的下标
    TakeSubscript();
    // 根据传过来的数字 转换成对应的英文字母  subscript [[x,x]]
    let a = replaces(subscript[0][0]);
    // 判断当前行是否允许插入
    let isL = isLine(grid,oneNum);
    if (isL == -1) {
        // 行能插入  - 判断列是否能插入
        let isR = isRow(grid,oneNum);
        if (isR == -1) {
            // 列能插入
            // 当前单元格是否插入成功  -  并给当前元素赋值
            // 判断当前元素是否已经存在元素
            Sudoku[grid[0]][grid[1]] = oneNum;
            // 删除上一个插入的值
            let insert = document.querySelector('#'+grid[0]);
            
            allCell[grid[0]].splice(randomNum - 1, 1);
            // 临时变量设置为空
            grid = [];
            // 删除上一个插入的坐标
            allSubscript.splice(sub, 1);
            // 把noeNum 设置为空
            oneNum = '';
        } else {
            // 列不能插入
            // alert(subscript[1]+'列已有元素'+oneNum);
            console.log(subscript[0][0] + '列已有元素' + oneNum);
            total++;
            grid = [];
            // 把noeNum 设置为空
            oneNum = '';

        }
    } else {
        // 行已经有重复的元素
        // alert(subscript[0]+'行已有元素'+oneNum);
        console.log(subscript[0][0] + '行已有元素' + oneNum);
        total++;
        grid = [];
        // 把noeNum 设置为空
        oneNum = '';

    }
}


console.log(Sudoku);
// html 模板
var tr = "<tr></tr>";
var td = "<td></td>";


var Onetd = "";
var Twotd = "";
var Threetd = "";
var Fourtd = "";
var Fivetd = "";
var Sixtd = "";
var Seventd = "";
var Eighttd = "";
var Ninetd = "";



var Onetr = "";
var Twotr = "";
var Threetr = "";
var Fourtr = "";
var Fivetr = "";
var Sixtr = "";
var Seventr = "";
var Eighttr = "";
var Ninetr = "";


    // 循环 生成的数组
    for (let i = 1; i < 10; i++) {
        if( i == 1 || i == 2 || i == 3){
            // 转换成 英文  方便操作数字
            // 取 第一行
            iEnglish = replaces(i);
            // 取 第一行 数字下标 123
            for (let j = 0; j < 3; j++) {
                Onetd += "<td>"+Sudoku[iEnglish][j]+"</td>";
            }
            // 取 第二行 数字下标 456
            for (let j = 3; j < 6; j++) {
                Twotd += "<td>"+Sudoku[iEnglish][j]+"</td>";
            }
            // 取 第三行 数字下标 789
            for (let j = 6; j < 9; j++) {
                Threetd += "<td>"+Sudoku[iEnglish][j]+"</td>";
            }
        }else if( i == 4 || i == 5 || i == 6 ){
            // 取 456 行
            iEnglish = replaces(i);

            // 取 第一行 数字下标 123
            for (let j = 0; j < 3; j++) {
                Fourtd += "<td>"+Sudoku[iEnglish][j]+"</td>";  
            }
            // 取 第二行 数字下标 456
            for (let j = 3; j < 6; j++) {
                Fivetd += "<td>"+Sudoku[iEnglish][j]+"</td>";
            }

            // 取 第三行 数字下标 789
            for (let j = 6; j < 9; j++) {
                Sixtd += "<td>"+Sudoku[iEnglish][j]+"</td>";
            }
        }else {
            // 取 789 行
            iEnglish = replaces(i);

            // 取 第一行 数字下标 123
            for (let j = 0; j < 3; j++) {
                Seventd += "<td>"+Sudoku[iEnglish][j]+"</td>";
            }
            // 取 第二行 数字下标 456
            for (let j = 3; j < 6; j++) {
                Eighttd += "<td>"+Sudoku[iEnglish][j]+"</td>";
            }

            // 取 第三行 数字下标 789
            for (let j = 6; j < 9; j++) {
                Ninetd += "<td>"+Sudoku[iEnglish][j]+"</td>";
            }
        }
    }

    Onetr += "<tr>"+Onetd+"</tr>";
    Twotr += "<tr>"+Twotd+"</tr>";
    Threetr += "<tr>"+Threetd+"</tr>";
    Fourtr += "<tr>"+Fourtd+"</tr>";
    Fivetr += "<tr>"+Fivetd+"</tr>";
    Sixtr += "<tr>"+Sixtd+"</tr>";
    Seventr += "<tr>"+Seventd+"</tr>";
    Eighttr += "<tr>"+Eighttd+"</tr>";
    Ninetr += "<tr>"+Ninetd+"</tr>";


var Html = "<table border='1'>"+Onetr+Twotr+Threetr+Fourtr+Fivetr+Sixtr+Seventr+Eighttr+Ninetr+"</table>";
var app = document.querySelector("#app");
app.innerHTML  = Html;

// console.log(allSubscript);