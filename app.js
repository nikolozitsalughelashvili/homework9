//https://github.com/nikolozitsalughelashvili/homework9.git
//control
console.log(1);
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (num) {
//   document.write("ricxvi " + num + "<br>");
// });

// function greet(name, clbck) {
//   document.write(" Hello, " + name + "! <br>");
//   clbck();
// }
// greet("ani", function () {
//   document.write(" რას შვრები? <br>");
// });
// დავალება 1: მისალმების გენერატორი
// იდეა: მომხმარებლის სახელით მისალმება
// დავალება:
// •	შექმენი ფუნქცია greetUser(name)
// •	ფუნქციამ უნდა დააბრუნოს მისალმების ტექსტი
// მაგალითად: Hello, Nika!
// •	prompt()-ით მოითხოვე სახელი
// •	შედეგი გამოიტანე document.write()-ით
//შესრულება:

function greetUser(name) {
  return " Hello, " + name + "! <br>";
}
document.write(greetUser(prompt("შეიყვანეთ თქვენი სახელი")));
