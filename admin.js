// '添加随机生成数字，随机产生一个下标，根据传过来的下标确定所属的单元格，'

// 数独游戏
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
// 列的列表
var Line = {
    'one': {
        '0': Sudoku.one[0], 
        '1': Sudoku.one[1],
        '2':  Sudoku.one[2],
        '3':  Sudoku.two[0],
        '4':  Sudoku.two[1],
        '5':  Sudoku.two[2],
        '6':  Sudoku.three[0],
        '7':  Sudoku.three[1],
        '8':  Sudoku.three[2]
    },
    'two': [Sudoku.one[3], Sudoku.one[4], Sudoku.one[5], Sudoku.two[3], Sudoku.two[4], Sudoku.two[5], Sudoku.three[3], Sudoku.three[4], Sudoku.three[5]],
    'three': [Sudoku.one[6], Sudoku.one[7], Sudoku.one[8], Sudoku.two[6], Sudoku.two[7], Sudoku.two[8], Sudoku.three[6], Sudoku.three[7], Sudoku.three[8]],
    'four': [Sudoku.four[0], Sudoku.four[1], Sudoku.four[2], Sudoku.five[0], Sudoku.five[1], Sudoku.five[2], Sudoku.six[0], Sudoku.six[1], Sudoku.six[2]],
    'five': [Sudoku.four[3], Sudoku.four[4], Sudoku.four[5], Sudoku.five[3], Sudoku.five[4], Sudoku.five[5], Sudoku.six[3], Sudoku.six[4], Sudoku.six[5]],
    'six': [Sudoku.four[6], Sudoku.four[7], Sudoku.four[8], Sudoku.five[6], Sudoku.five[7], Sudoku.five[8], Sudoku.six[6], Sudoku.six[7], Sudoku.six[8]],
    'seven': [Sudoku.seven[0], Sudoku.seven[1], Sudoku.seven[2], Sudoku.eight[0], Sudoku.eight[1], Sudoku.eight[2], Sudoku.nine[0], Sudoku.nine[1], Sudoku.nine[2]],
    'eight': [Sudoku.seven[3], Sudoku.seven[4], Sudoku.seven[5], Sudoku.eight[3], Sudoku.eight[4], Sudoku.eight[5], Sudoku.nine[3], Sudoku.nine[4], Sudoku.nine[5]],
    'nine': [Sudoku.seven[6], Sudoku.seven[7], Sudoku.seven[8], Sudoku.eight[6], Sudoku.eight[7], Sudoku.eight[8], Sudoku.nine[6], Sudoku.nine[7], Sudoku.nine[8]]
}

// 行的列表
var Row = {
    'one': [Sudoku.one[0], Sudoku.one[3], Sudoku.one[6], Sudoku.four[0], Sudoku.four[3], Sudoku.four[6], Sudoku.seven[0], Sudoku.seven[3], Sudoku.seven[6]],
    'two': [Sudoku.one[1], Sudoku.one[4], Sudoku.one[7], Sudoku.four[1], Sudoku.four[4], Sudoku.four[7], Sudoku.seven[1], Sudoku.seven[4], Sudoku.seven[7]],
    'three': [Sudoku.one[2], Sudoku.one[5], Sudoku.one[8], Sudoku.four[2], Sudoku.four[5], Sudoku.four[8], Sudoku.seven[2], Sudoku.seven[5], Sudoku.seven[8]],
    'four': [Sudoku.two[0], Sudoku.two[3], Sudoku.two[6], Sudoku.five[0], Sudoku.five[3], Sudoku.five[6], Sudoku.eight[0], Sudoku.eight[3], Sudoku.eight[6]],
    'five': [Sudoku.two[1], Sudoku.two[4], Sudoku.two[7], Sudoku.five[1], Sudoku.five[4], Sudoku.five[7], Sudoku.eight[1], Sudoku.eight[4], Sudoku.eight[7]],
    'six': [Sudoku.two[2], Sudoku.two[5], Sudoku.two[8], Sudoku.five[2], Sudoku.five[5], Sudoku.five[8], Sudoku.eight[2], Sudoku.eight[5], Sudoku.eight[8]],
    'seven': [Sudoku.three[0], Sudoku.three[3], Sudoku.three[6], Sudoku.six[0], Sudoku.six[3], Sudoku.six[6], Sudoku.nine[0], Sudoku.nine[3], Sudoku.nine[6]],
    'eight': [Sudoku.three[1], Sudoku.three[4], Sudoku.three[7], Sudoku.six[1], Sudoku.six[4], Sudoku.six[7], Sudoku.nine[1], Sudoku.nine[4], Sudoku.nine[7]],
    'nine': [Sudoku.three[2], Sudoku.three[5], Sudoku.three[8], Sudoku.six[2], Sudoku.six[5], Sudoku.six[8], Sudoku.nine[2], Sudoku.nine[5], Sudoku.nine[8]],
}

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

// 定义随机生成的数字的数组
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 随机插入数字的总个数
var total = 81;
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
    // console.log(grid[0]);
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


// 判断要填充的数字是否在 当前单元格内重复
function palaceIsExist(arr, item) {
    // 当前程序必须是数字
    item = parseInt(item);
    // arr必须是一个数组
    if (typeof arr == 'object') {
        // 查找当前元素是否存在 不存在返回-1
        let isExist = arr.indexOf(item);
        if (isExist == '-1') {
            // 不存在-表示可以插入
            return true;
        } else {
            // 已经存在 - 应该跳过
            return false;
        }
    } else {
        console.log(palaceIsExist + '传入的第一个参数不是一个object数组对象');
    }
}


// 根据传过来的参数 判断属于第几个单元格
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
    // oneNum = '';

    // 生成随机的下标
    TakeSubscript();
    // 根据传过来的数字 转换成对应的英文字母  subscript [[x,x]]
    let a = replaces(subscript[0][0]);
    // 判断当前行是否允许插入
    // console.log(Line[a]);
    // let isLine = palaceIsExist(Line[a], oneNum);
    let isLine = true;
    if (isLine) {
        // 行能插入  - 判断列是否能插入
        let isRow = palaceIsExist(Row[a], oneNum);
        if (isRow) {
            // 列能插入
           
            // console.log(randomNum);
            // console.log('数组的长度' + allCell[grid[0]].length);
            // 当前单元格是否插入成功  -  并给当前元素赋值
            // 判断当前元素是否已经存在元素
            Sudoku[grid[0]][grid[1]] = oneNum;
            // 删除上一个插入的值
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
            console.log(subscript[0][1] + '列已有元素' + oneNum);
            total++;
            grid = [];
            // 删除上一个插入的坐标
            allSubscript.splice(sub, 1);
            // 把noeNum 设置为空
            oneNum = '';

        }
    } else {
        // 行已经有重复的元素
        // alert(subscript[0]+'行已有元素'+oneNum);
        console.log(subscript[0][0] + '行已有元素' + oneNum);
        total++;
        grid = [];
        // 删除上一个插入的坐标
        allSubscript.splice(sub, 1);
        // 把noeNum 设置为空
        oneNum = '';

    }
}


console.log(Sudoku);
console.log(Line);
console.log(Sudoku.one['0']);

// 遇到问题
// bug-无法根据传过来的下标 获取这个位置在单元格中的具体位置
// 1.1 1.2 1.3
// 2.1 2.2 2.3
// 3.1 3.2 3.3 第一个单元格

// 1.4 1.5 1.6
// 2.4 2.5 2.6 第二个单元格
// 3.4 3.5 3.6

// 1.7 1.8 1.9
// 2.7 2.8 2.9 第三个单元格
// 3.7 3.8 3.9

// 4.1 4.2 4.3
// 5.1 5.2 5.3 第四个单元格
// 6.1 6.2 6.3

// 4.4 4.5 4.6 
// 5.4 5.5 5.6 第五个单元格
// 6.4 6.5 6.6

// 4.7 4.8 4.9
// 5.7 5.8 5.9 第六个单元格
// 6.7 6.8 6.9

// 7.1 7.2 7.3
// 8.1 8.2 8.3 第七个单元格
// 9.1 9.2 9.3

// 7.4 7.5 7.6
// 8.4 8.5 8.6 第八个单元格
// 9.4 9.5 9.6

// 7.7 7.8 7.9
// 8.7 8.8 8.9 第九个单元格
// 9.7 9.8 9.9


// var a=0,b=0;
// function A(a){
//     A = function(b){
//         alert('第二层'+a + b++);
//     }
//     alert('第一层'+a++);
// }
// A(1);
// A(2);
