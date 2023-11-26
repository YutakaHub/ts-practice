//高度の型・力試し
type Option<T> = {
  tag: "same",
  value: T
}|{
  tag: "none"
};


//今回はユーザー定義型ガードを使用。複雑なタグ付きユニオン型の場合は、Extractを使用する。
//function isSame<T>(obj:Option<T>):obj is Extract<Option<T>,{tag:"same"}>
function isSame<T>(obj:Option<T>):obj is {tag:"same";value:T}{
return obj.tag === "same";
}

function showValueIfExists<T>(obj: Option<T>):void{
  if (isSame<T>(obj)){
    console.log(obj.value)
  }
};

const testData : Option<string> = {
  tag:"same",
  value:"テスト"
};
const notData : Option<string> = {
  tag:"none"
};
const numData : Option<number> = {
  tag:"same",
  value: 3.12
};

showValueIfExists<string>(testData);
showValueIfExists<string>(notData);
showValueIfExists<number>(numData);
