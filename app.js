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

// function greetUser(name) {
//   return " Hello, " + name + "! <br>";
// }
// document.write(greetUser(prompt("შეიყვანეთ თქვენი სახელი")));

// დავალება 2: ქულის შეფასება (Grade System)
// იდეა: ქულის შეფასება ქულების მიხედვით
// დავალება:
// •	შექმენი ფუნქცია getGrade(score)
// •	თუ ქულა:
// o	90–100 → A
// o	70–89 → B
// o	50–69 → C
// o	ნაკლები → F
// •	ქულა მიიღე prompt()-ით
// •	შედეგი აჩვენე alert()-ით
//შესრულება:

// function getGrade(score) {
//   if (score > 100 || score < 1 || !Number.isInteger(score) || isNaN(score)) {
//     return "თქვენს მიერ არასწორადაა შეყვანილი ქულების მნიშვნელობა. უნდა შეიყვანოთ ნატურალური რიცხვები 1-დან 100-ის ჩათვლით";
//   } else if (score >= 90 && score <= 100) {
//     return "A";
//   } else if (score >= 70 && score < 90) {
//     return "B";
//   } else if (score >= 50 && score < 70) {
//     return "C";
//   } else {
//     return "F";
//   }
// }
// alert(getGrade(Number(prompt("შეიყვანეთ ქულა 1-დან 100-მდე"))));

// 🔹 დავალება 3: რენდომ რიცხვის თამაში
// იდეა: ბედი გიღიმის თუ არა 🎲
// დავალება:
// •	შექმენი ფუნქცია getRandomNumber()
// •	ფუნქციამ დააგენერიროს რიცხვი 1–10 შუალედში
// •	თუ რიცხვი > 5 → „You win“
// •	სხვა შემთხვევაში → „Try again“
// •	შედეგი აჩვენე alert()-ით
// //შესრულება:
