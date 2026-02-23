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

function getGrade(score) {
  if (score > 100 || score < 1 || !Number.isInteger(score) || isNaN(score)) {
    return "თქვენს მიერ არასწორადაა შეყვანილი ქულების მნიშვნელობა. უნდა შეიყვანოთ ნატურალური რიცხვები 1-დან 100-ის ჩათვლით";
  } else if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 70 && score < 90) {
    return "B";
  } else if (score >= 50 && score < 70) {
    return "C";
  } else {
    return "F";
  }
}
alert(getGrade(Number(prompt("შეიყვანეთ ქულა 1-დან 100-მდე"))));

// 🔹 დავალება 3: რენდომ რიცხვის თამაში
// იდეა: ბედი გიღიმის თუ არა 🎲
// დავალება:
// •	შექმენი ფუნქცია getRandomNumber()
// •	ფუნქციამ დააგენერიროს რიცხვი 1–10 შუალედში
// •	თუ რიცხვი > 5 → „You win“
// •	სხვა შემთხვევაში → „Try again“
// •	შედეგი აჩვენე alert()-ით
// შესრულება:
function getRandomNumber() {
  return Math.floor(1 + Math.random() * 10);
}
getRandomNumber() > 5 ? alert("„You win“") : alert("„Try again“");

// 🔹 დავალება 4: ფასდაკლების კალკულატორი
// იდეა: ფასდაკლებული ფასი
// დავალება:
// •	შექმენი ფუნქცია calculateDiscount(price)
// •	თუ ფასი ≥ 100 → 20% ფასდაკლება
// •	სხვა შემთხვევაში → 10%
// •	საბოლოო ფასი გამოიტანე document.write()-ით
// შესრულება:
function calculateDiscount(price) {
  if (price <= 0 || isNaN(price)) {
    return "თქვენს მიერ მითითებულია არასწორი ფასი.";
  } else if (price >= 100) {
    return (price * 8) / 10;
  } else {
    return (price * 9) / 10;
  }
}
document.write(calculateDiscount(Number(prompt("შეიყვანეთ პროდუქციის ფასი"))));

// დავალება 5: პაროლის სიძლიერის შემოწმება
// იდეა: მარტივი უსაფრთხოება 🔐
// დავალება:
// •	შექმენი ფუნქცია checkPassword(password)
// •	თუ პაროლის სიგრძე ≥ 8 → „Strong password“
// •	სხვა შემთხვევაში → „Weak password“
// •	პაროლი მიიღე prompt()-ით
// •	შედეგი აჩვენე alert()-ით
// შესრულება:
function checkPassword(password) {
  if (password === null || password.trim() === "") {
    return "თქვენს არაფერი შეგიყვანიათ, გთხოვთ შეიყვანოთ ერთი ან რამოდენიმე სიმბოლო";
  } else if (password.trim().length >= 8) {
    return "„Strong password“";
  } else {
    return "„Weak password“";
  }
}
alert(checkPassword(prompt("აირჩიეთ პაროლი:")));

// დავალება 6: Arrow Function — ფასის გამოთვლა
// იდეა: პროდუქტის ჯამური ფასი 🛒
// დავალება:
// •	შექმენი arrow ფუნქცია calculateTotal
// •	ფუნქციამ მიიღოს პარამეტრები:
// o	price
// o	quantity
// •	დააბრუნოს (return) ჯამური ფასი
// •	მნიშვნელობები მიიღე prompt()-ით
// •	შედეგი გამოიტანე document.write()-ით
// შესრულება:
const calculateTotal = (price, quantity) => {
  if (
    price <= 0 ||
    isNaN(price) ||
    quantity <= 0 ||
    isNaN(quantity) ||
    !Number.isInteger(quantity)
  ) {
    return "თქვენს მიერ არასწორადაა შეყვანილი პროდუქციის ფასი ან რაოდენობა";
  } else {
    return price * quantity;
  }
};
let prc = Number(prompt("შეიყვანეთ პროდუქციის ფასი:"));
let qnt = Number(prompt("შეიყვანეთ პროდუქციის რაოდენობა:"));
document.write(calculateTotal(prc, qnt));

// დავალება 7: Function Expression — ქულის შეფასება
// იდეა: ტესტის შედეგის შეფასება 🎯
// დავალება:
// •	შექმენი ცვლადი getResult
// •	მიანიჭე function expression
// •	ფუნქციამ მიიღოს score
// •	თუ ქულა ≥ 50 → "Passed"
// •	სხვა შემთხვევაში → "Failed"
// •	ქულა მიიღე prompt()-ით
// •	შედეგი აჩვენე alert()-ით
//  შესრულება:
let qula = Number(prompt("შეიყვანეთ თქვენი ქულა:"));
let getResult = function (score) {
  if (score < 1 || !Number.isInteger(score) || isNaN(score)) {
    return "თქვენს მიერ არასწორადაა შეყვანილი ქულების მნიშვნელობა. უნდა შეიყვანოთ ნატურალური რიცხვები 1-დან ზემოთ";
  } else if (score >= 50) {
    return "Passed";
  } else {
    return "Failed";
  }
};
alert(getResult(qula));
