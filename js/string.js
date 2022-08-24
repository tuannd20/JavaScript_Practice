//String (chuỗi)
"My name is Tuan";
"I am fullstack developer";

/****************************/
// Trong js có phân biệt chữ hoa và chữ thường

const name = "Duy Tuan";
const job = "Fullstack Developer";
// console.log(name);
// console.log(typeof name);

// Method length và index
const newStr = `I am ${name} and I am ${job}`;
// console.log(newStr);
// console.log(newStr.length);

/********************************************/
// I am Duy Tuan and I am Fullstack Developer
// index là vị trí của từng ký tự trong chuỗi bao gồm cả khoảng trống (dấu cách)

// Methos split
const myStr = "Fullstack Developer";
console.log(myStr.split(" "));
console.log(myStr.toLowerCase());
console.log(myStr.toUpperCase());
console.log(myStr.includes("Full")); // True
console.log(myStr.includes("full")); // False
console.log(myStr.replace("Developer", "Nodejs"));
console.log(myStr.slice(0, 9));

// substr -> lấy ra một phần của chuỗi
const myStr2 = "Developer";
console.log(myStr2.substr(1, 5)); // lấy ra 5 ký tự trong chuỗi
// substring -> lấy ra các ký tự của chuỗi
console.log(myStr2.substring(1, 5));

// Kết hợp nhiều method với nhau
const myStr3 = "    Fullstack Developer     ";
// VD: loại bỏ khoảng trống 2 bên, đưa tất cả về IN HOA, thay chữ Developer thành Nodejs, repeat 2 lần
console.log(
  myStr3.trim().replace("Developer", "NodeJS ").toUpperCase().repeat(2)
);
