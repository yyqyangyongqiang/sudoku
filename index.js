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
var Line= {
    'one':[Sudoku.one[0],Sudoku.one[1],Sudoku.one[2],Sudoku.two[0],Sudoku.two[1],Sudoku.two[2],Sudoku.three[0],Sudoku.three[1],Sudoku.three[2]],
    'two':[Sudoku.one[3],Sudoku.one[4],Sudoku.one[5],Sudoku.two[3],Sudoku.two[4],Sudoku.two[5],Sudoku.three[3],Sudoku.three[4],Sudoku.three[5]],
    'three':[Sudoku.one[6],Sudoku.one[7],Sudoku.one[8],Sudoku.two[6],Sudoku.two[7],Sudoku.two[8],Sudoku.three[6],Sudoku.three[7],Sudoku.three[8]],
    'four':[Sudoku.four[0],Sudoku.four[1],Sudoku.four[2],Sudoku.five[0],Sudoku.five[1],Sudoku.five[2],Sudoku.six[0],Sudoku.six[1],Sudoku.six[2]],
    'five':[Sudoku.four[3],Sudoku.four[4],Sudoku.four[5],Sudoku.five[3],Sudoku.five[4],Sudoku.five[5],Sudoku.six[3],Sudoku.six[4],Sudoku.six[5]],
    'six':[Sudoku.four[6],Sudoku.four[7],Sudoku.four[8],Sudoku.five[6],Sudoku.five[7],Sudoku.five[8],Sudoku.six[6],Sudoku.six[7],Sudoku.six[8]],
    'seven':[Sudoku.seven[0],Sudoku.seven[1],Sudoku.seven[2],Sudoku.eight[0],Sudoku.eight[1],Sudoku.eight[2],Sudoku.nine[0],Sudoku.nine[1],Sudoku.nine[2]],
    'eight':[Sudoku.seven[3],Sudoku.seven[4],Sudoku.seven[5],Sudoku.eight[3],Sudoku.eight[4],Sudoku.eight[5],Sudoku.nine[3],Sudoku.nine[4],Sudoku.nine[5]],
    'nine':[Sudoku.seven[6],Sudoku.seven[7],Sudoku.seven[8],Sudoku.eight[6],Sudoku.eight[7],Sudoku.eight[8],Sudoku.nine[6],Sudoku.nine[7],Sudoku.nine[8]]
}

// 行的列表
var Row= {
    'one':[Sudoku.one[0],Sudoku.one[3],Sudoku.one[6],Sudoku.four[0],Sudoku.four[3],Sudoku.four[6],Sudoku.seven[0],Sudoku.seven[3],Sudoku.seven[6]],
    'two':[Sudoku.one[1],Sudoku.one[4],Sudoku.one[7],Sudoku.four[1],Sudoku.four[4],Sudoku.four[7],Sudoku.seven[1],Sudoku.seven[4],Sudoku.seven[7]],
    'three':[Sudoku.one[2],Sudoku.one[5],Sudoku.one[8],Sudoku.four[2],Sudoku.four[5],Sudoku.four[8],Sudoku.seven[2],Sudoku.seven[5],Sudoku.seven[8]],
    'four':[Sudoku.two[0],Sudoku.two[3],Sudoku.two[6],Sudoku.five[0],Sudoku.five[3],Sudoku.five[6],Sudoku.eight[0],Sudoku.eight[3],Sudoku.eight[6]],
    'five':[Sudoku.two[1],Sudoku.two[4],Sudoku.two[7],Sudoku.five[1],Sudoku.five[4],Sudoku.five[7],Sudoku.eight[1],Sudoku.eight[4],Sudoku.eight[7]],
    'six':[Sudoku.two[2],Sudoku.two[5],Sudoku.two[8],Sudoku.five[2],Sudoku.five[5],Sudoku.five[8],Sudoku.eight[2],Sudoku.eight[5],Sudoku.eight[8]],
    'seven':[Sudoku.three[0],Sudoku.three[3],Sudoku.three[6],Sudoku.six[0],Sudoku.six[3],Sudoku.six[6],Sudoku.nine[0],Sudoku.nine[3],Sudoku.nine[6]],
    'eight':[Sudoku.three[1],Sudoku.three[4],Sudoku.three[7],Sudoku.six[1],Sudoku.six[4],Sudoku.six[7],Sudoku.nine[1],Sudoku.nine[4],Sudoku.nine[7]],
    'nine':[Sudoku.three[2],Sudoku.three[5],Sudoku.three[8],Sudoku.six[2],Sudoku.six[5],Sudoku.six[8],Sudoku.nine[2],Sudoku.nine[5],Sudoku.nine[8]],
}

// 定义所需要的变量
// num 当前一共插入变量的值的数量
// temporary 保存当前需要插入的值
// subscript 随机生成的下标
// oneNum 保存随机取出来的数字
var num,temporary,sub;
// [7,8] 表示第七行 第八列
var subscript = [];  
var oneNum = '';

// 定义随机生成的数字的数组
var arr = [1,2,3,4,5,6,7,8,9];

// 随机插入数字的总个数
var total = 10;

// 第一步 随机取出一个下标  TakeSubscript
function TakeSubscript(){
    for(let i = 0;i<2;i++){
        sub = Math.ceil(Math.random()*9);
        subscript.push(sub);
    }
    oneNum = Math.ceil(Math.random()*8);
}

// 把数字换成英文数字
function replaces(item){
    switch(item){
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
            console.log('未知单元格'+item);
    }
}
// 判断要填充的数字是否在 当前单元格内重复
function palaceIsExist(arr,item){
    // 当前程序必须是数字
    item = parseInt(item);
    // arr必须是一个数组
    if(typeof arr == 'object'){
        // 查找当前元素是否存在 不存在返回-1
        let isExist = arr.indexOf(item);
        if(isExist=='-1'){
            // 不存在-表示可以插入
            return true;
        }else{
            // 已经存在 - 应该跳过
            return false;
        }
    }else{
        console.log('palaceIsExist'+'传入的第一个参数不是一个object数组对象');
    }
}

// 根据传过来的参数 判断属于第几个单元格
function Transformation(item) {
    if(item[0]<4 && item[1]<4){
        return 'one';
        console.log('第一个单元格');
    }else if(item[0]> 3 && item[0]< 7 && item[1]< 4){
        return 'four';
        console.log('第四个单元格');
    }else if(item[0]> 6  && item[1]< 4 ){
        return 'seven';
        console.log('第七个单元格');
    }else if(item[0]< 4 && item[1]> 3 && item[1]< 7){
        return 'two';
        console.log('第二个单元格');
    }else if(item[0]> 3 && item[0]< 7 && item[1]> 3 && item[1]< 7){
        return 'five';
        console.log('第五个单元格');
    }else if(item[0]> 6  && item[1]> 3 && item[1]< 7){
        return 'eight';
        console.log('第八个单元格');
    }else if(item[0]< 4  && item[1]> 6){
        return 'three';
        console.log('第三个单元格');
    }else if(item[0]> 3 && item[0]< 7 && item[1]> 6 ){
        return 'six';
        console.log('第六个单元格');
    }else if(item[0]> 6  && item[1]>6 ){
        return 'nine';
        console.log('第九个单元格');
    }
}
palaceIsExist(Sudoku['one'],'5');

for(let i = 0;i<total;i++){
    // console.log(i);
    // 每次生成把上一次的结果设置为空
    subscript = [];
    oneNum = '';

    // 生成随机的下标
    TakeSubscript();

    // 根据传过来的数字 转换成对应的英文字母 
    let a= replaces(subscript[0]);
    // 判断当前行是否允许插入
    let isLine= palaceIsExist(Line[a],oneNum);
    console.log('下标'+subscript+'插入元素'+oneNum);
    if(isLine){
        // 行能插入
        let isRow= palaceIsExist(Row[a],oneNum);
        if(isRow){
            // 列能插入
            // 判断输入那个单元格
            let grid= Transformation(subscript);
            let isGrid= palaceIsExist(Sudoku[grid],oneNum);
            console.log(grid);
            if(isGrid){
                // 当前单元格是否插入成功  -  并给当前元素赋值
                Sudoku[grid][subscript[1]] = oneNum;
                console.log(oneNum);
            }else {
                // 当前单元格内不能插入元素
                // alert(grid+'号单元格内已有元素'+oneNum);
                console.log(grid+'号单元格内已有元素'+oneNum);
                total++;
            }
        }else {
            // 列不能插入
            // alert(subscript[1]+'列已有元素'+oneNum);
            console.log(subscript[1]+'列已有元素'+oneNum);
            total++;
        }
    }else {
        // 行已经有重复的元素
        // alert(subscript[0]+'行已有元素'+oneNum);
        console.log(subscript[0]+'行已有元素'+oneNum);
        total++;
    }
}
console.log(Sudoku);

// 遇到问题
// 随机生成的坐标是 一个数组 [8, 7]  
