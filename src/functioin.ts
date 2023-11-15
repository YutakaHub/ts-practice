//fizbuzz実装
for (const i of sequence(1,100)) {
  const message = fizbuzzGet(i);
  console.log(message);
}

//関数実装 第1章のfizzbuzzを関数にする。
function fizbuzzGet(i:number):string {
  if(i%3===0 && i%5===0){
    return "FizzBuzz";
  } else if(i%3===0){
    return "Fizz";
  } else if (i%5===0){
    return "Buzz";
  } else {
    return String(i);
  }
}

//繰り返しを関数で実行して配列を返す。
function sequence(start:number,end:number):number[]{
  const result:number[] = [];
  for(let i=start; i<=end; i++){
    result.push(i);
  }
  return result;
}