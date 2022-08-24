console.log(5 + 5);

console.log(typeof 10);

//Chuyển đổi giá trị chuỗi thành số
const number1 = "8";
const number2 = "4.8"; // Dạng số thập phân

console.log(parseInt(number1));
console.log(parseFloat(number2)); // in ra số thập phân

// Chuyển đổi số âm sang dương
const number3 = -10;
// Math.abs(value) => abs là giá trị tuyệt đối
console.log(Math.abs(number3));
//Math.floor(value) => làm tròn xuống, ví dụ: 4.3 = 4
console.log(Math.floor(4.3));
//Math.ceil(value) => làm tròn lên, ví dụ: 4.3 = 5
console.log(Math.ceil(4.3));
//Math.round(value) => làm tròn gần nhất. ví dụ: 4.5 = 5 còn dưới 4.5 = 4
console.log(Math.round(4.5));

// Hàm toFixed(number) số lượng number muốn lấy dùng toFixed sẽ chuyển thành String
console.log(parseFloat((1 / 3).toFixed(2)));

// Undefined -> Là đã khai báo nhưng chưa có giá trị nào
// Null -> Nothing là không có gì hết
// Boolean -> true or false
// Các giá trị trong boolean: falsy values vs truthy values
// Dùng để check các điều kiện của chương trình
// falsy values: "", 0, false, undefined, null
// truthy values: "abc", 1, true, 100, 1000
