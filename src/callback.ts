//第4章のtypescriptの関数より コールバック関数の練習問題を対応 またジェネリクスを活用すること
//コールバック関数を実装
function map(aray:number[], callback: (value:number)=>number):number[] {
  const result2:number[]=[];
  for(const elm of aray){
    result2.push(callback(elm));
  }
  return result2;
}
//コールバックテスト
const data2:number[] = [1,1,2,3,4,5,8,13];
const result2 = map(data2, (x)=> x * 10 );
console.log(result2);

//ジェネリクスを実装
function map2<T,U>(aray:T[], callback: (value:T)=>U):U[] {
  const result2:U[]=[];
  for(const elm of aray){
    result2.push(callback(elm));
  }
  return result2;
}
//ジェネリクスを実装した関数を実行
const data3:number[] = [1,-3,-2,8,0,-1];
const result3 = map2<number,boolean>(data3, (x)=> x>=0);
console.log(result3);
