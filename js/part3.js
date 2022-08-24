// Hàm String(value)
console.log(String(2345));
console.log(String(null));
// Hàm Boolean(value) -> true or false
console.log(`Boolean of zero: ${Boolean(0)}`);
console.log(`Boolean of "": ${Boolean("")}`);
console.log(`Boolean of null: ${Boolean(null)}`);
console.log(`Boolean of one: ${Boolean(1)}`);

// Type coercion: chuyển đổi dạng kiểu dữ liệu này qua kiểu dữ liệu khác
// + - * /

// Only there are types of conversion in Javascript:
// to String
// to boolean
// to number

// Toán tử so sánh: trả về true or false > < >= <=
console.log(5 > 7);
console.log(50 > 7);

// Toán tử logic cơ bản: && || !(Phủ định)
console.log(5 > 7 && 8 > 3); // false
console.log(5 > 7 || 8 > 3);
const amIWrong = false;
console.log(`Test phủ định: ${!amIWrong}`);

// Boolean &&
// false && true -> false
// true && false -> false
// false && false -> false
// true && true -> true
// Boolean ||
// true || false -> true
// false || true -> true
// true || true -> true
// false || false -> false

/*******************************/
// So sánh == (loose equality) vs === (strict equality)
console.log("So sánh == vs ===: ");
console.log(10 == 10);
console.log(10 == "10");
console.log(1 == "01");
console.log(true == 1);
console.log(true == "true");
// =>  == (loose equality) so sánh theo giá trị
// => === (strict equality) so sánh theo kiểu dữ liệu của giá trị
