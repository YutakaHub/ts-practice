//クラスから関数に変更する。
function createUser2(name: string, age: number): (message: string) => string {
  return (message: string) => {
    return `${name}(${age})${message}`
  }
}
const user = createUser2("みち", 24);
console.log(user("アイウエオ"))