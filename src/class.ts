/*
type UserType = {
  name: string;
  age: number;
}

function createUser(name: string, age: number): UserType {
  if(name === ""){
    throw new Error("名前を空にできません。");
  }
  return {
    name,
    age
  };
}

function getMessage(user: UserType, message:string):string {
  return `${user.name}(${user.age})「${message}」`
}

const uhyo = createUser("uhyo",26);
console.log(getMessage(uhyo,"こんにちは"));
*/


//関数からClassに変更する。
class UserClass {
  name: string;
  age: number;

  constructor(name:string,age:number){
    if(name === ""){
      throw new Error("名前を空にできません。");
    }
    this.name = name;
    this.age = age;
  }

  getMessage(message:string): string {
    return (`${this.name}(${this.age})[${message}]`)
  }
}

const _userClass = new UserClass("ゆたか",26);
console.log(_userClass.getMessage("勉強頑張ってんねー＾＾；"))
const _userClass2 = new UserClass("",26);
