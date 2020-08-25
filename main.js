//concat method → 連結

const test = 'test';

console.log(typeof 'test');

//文字列の長さ
console.log(test.length);

const test2 = 'desu';
console.log(test.concat(test2));

console.log(test + test2);

//trim method →　左右の空白を削除する

const greeting = (   "   hello   "   );
console.log(greeting);
console.log(greeting.trim());

//substring method → ?文字目から？文字目を取り出す

const str = 'Mozilla';

//引数１から引数２の直前まで取り出す。よって３は含まない。
console.log(str.substring(1,3));

//引数が１つの場合は引数から後ろの文字全てを表示する
console.log(str.substring(2));


//replace method => 置き換え

const test3 = 'testdesu';

console.log(test3.replace('test', 'genki'));



//標準オブジェクト
//例：string, number, math, date, array, map, set, symbol, function, json, promise, object...

//オブジェクトを作るときはnewとして書き始める

//map オブジェクト =>for of　との相性が良い

const myMap = new Map();

myMap.set('id', 3);
myMap.set('name', '本田');

console.log(myMap);

console.log(myMap.get('name'));

//mapをfor of と組み合わせる

const valueList = myMap.values();

for(value of valueList){
    console.log(value);
};

//array object

const fruits = [
    'apple', 'banana'
];
console.log(fruits);

fruits.push('orange');

console.log(fruits);

//コールバック関数 => 引数に関数が入ってくる形

//fruitsという配列の中にforEachという関数がある。
//その中に関数を書く

fruits.forEach(function(input){
    console.log(input);
});


//callbacj関数の補足


//--一般的な関数の作り方

// function getItem(){}

//無名関数・匿名関数 ex.コールバック関数 => 使い捨ての関数


//アロー関数 => functionがない

//関数の名前あり
//引数が１個なら（）も不要
//処理が1行なら{}不要
// const getItem = () => {console.log('arr')};
const getItem = () => console.log('arr');
getItem();


//Array.fillter method

const scores = [10,20,30,40];

//30以上を表示するfilterをかける

const newScores = scores.filter((value) => {
    return value >= 30;
});

console.log(newScores);

//Array.find

const members = ['honda', 'kagawa', 'nagatomo'];
const member = members.find((value) => value === 'nagatomo');
console.log(member);


//Array.map => 配列を元に新しい配列を作る

const userList = [10,20,30,40];


const userIdList = userList.map((value) => {
    return `user_${value}`;
});
// console.log(userIdList);
console.table(userIdList);

//Object object（オブジェクトオブジェクト）
//オブジェクトオブジェクトは少しやり方が違う

// const test = new Object();

const testObj = {
    test1:10,
    test2:20,
    test3:30
};
console.log(Object.values(testObj));

//for of 文との組み合わせ

for(value of Object.values(testObj)){
    console.log(value);
}

//（例）郵便番号のチェック

const postalCode = '123-4567';

function checkPostalCode(string){
    const replaced = string.replace('-', '');
    const length = replaced.length;

    if(length === 7){
        return true;
    }
    return false;
}
console.log(checkPostalCode(postalCode));

//メソッドチェーン
