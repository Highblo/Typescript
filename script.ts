// 基本的な型

// string型
let str: string = "A";
str = "10"; // OK
// str = 10 NG

// number型
let num: number = 0;
num = 10; // OK
// num = "10" NG

// boolean型
let bool: boolean = true;
bool = false; // OK
// bool = 10 NG

// Array(配列)型
const arr1: Array<number> = [0, 1, 2]; //<>の中に型を指定ジェネリクスと呼ぶ
let arr2: number[] = [0, 1, 2];
arr1.push(10); // OK
arr2.push(10); // OK
// arr1.push("10") NG
// arr2 = 10; NG

// null型
let null1: null = null;
null1 = null; // OK
// null1 = 10 NG

// undefined型
let undefined1: undefined = undefined;
undefined1 = undefined; // OK
// undefined = 10 NG

//関数の型指定  引数と返却値に型を指定する
const funcA = (num: number): void => { // void型は関数が何も返却してこない
  console.log(num);
};
funcA(10); //OK
// funcA("10"); NG

//オブジェクトの型
const obj: {str: string, num: number} = {
  str: "A",
  num: 10,
};
obj.str = "B"; // OK
obj.num = 20; // OK
// obj.str = 10; NG
// obj.num = null; NG
//obj = 10; NG

// 複合的な型

// intersection(交差型) 型に型を追加するときに使う
const obj2: {str: string} & {num: number} = {
  str: "A",
  num: 10,
};
obj2.str = "20";
// obj2.num = "10"; NG

// union(合併、共用体型)
let val1: string | number = "";
val1 = "A"; // OK
val1 = 10; // OK
// val1 = []; NG

// useState定義時におけるジェネリクスの利用
// const [str, setStr] = useState<string>("");