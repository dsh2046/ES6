1. let, const关键字
let: 用它所声明的变量，只在let命令所在的代码块内有效。
const: const也用来声明变量，但是声明的是常量。一旦声明，常量的值就不能改变。

2. arrow function 箭头函数 =>

说明1：
function(i){ return i + 1; } //ES5
(i) => i + 1 //ES6

说明2：
let num = [2,3,4,5,6,7]

let person = {
  name: 'James',
  hobbies: ['Singing', 'dancing', 'hiking'],
  showHobbies(){
    
    this.hobbies.forEach(x => {
      console.log(`${this.name} like ${x}`)
    })    // ES6
    
    var self = this
    this.hobbies.forEach(function(x){
      console.log(`${self.name} like ${x}`)
    })   // ES5
    
  },
}

person.showHobbies()

3. Destructuring
