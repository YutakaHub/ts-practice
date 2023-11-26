function doubleOption(obj: Option<number>){
  return mapOption(obj, x=>x*2);
}

function mapOption<T,U>(obj: Option<T>,callback:(value: T)=>U):Option<U>{
  switch(obj.tag){
    case "same":
      return {
        tag:"same",
        value:callback(obj.value)
      };
    case "none":
      return {
        tag: "none"
      }
  }
};

const four:Option<number>={tag:"same",value:4};
const nothing:Option<number> = {tag: "none"};
const fourString:Option<String>={tag:"same",value:"4"};

console.log(doubleOption(four));
console.log(doubleOption(nothing));
//valueの方が一致しないためコンパイルエラーとなる。
//console.log(doubleOption(fourString));
