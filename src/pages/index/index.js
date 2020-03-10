import cats from './cats.js';
import '../../assets/styles/login.scss';

var $$ = require("jquery")

$$('body').html('jquery测试')

console.log('index页面 ~~~~ ');

let cst = cats.map(item => item * 3);
console.log(cst);

