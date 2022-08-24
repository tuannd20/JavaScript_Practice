
//Bài 1: function so sánh 2 số và tìm ra số lớn hơn
const compare = function (a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Enter number");
    return;
  }
  return Math.max(a, b);
}; // arrow function: anonymous function là hàm ko có đặt tên và ko bị hosting

console.log(compare(100, 1898));

// Bài 2: In hoa chữ cái đầu tiên của từ: tuan -> Tuan và NAM -> Nam
function capitalize(word = "") {
  if (word.length === 0) {
    console.log("Empty");
  }
  // hàm charAt(index)
  // hàm slice(startIndex, endIndex - 1)
  let newWord = word.toLowerCase().charAt(0).toUpperCase();
  let otherWord = word.toLowerCase().slice(1);
  console.log(newWord + otherWord);
}

capitalize("NAM");

// Bài 3: Viết hàm có sử dụng callback (function là parameter của function khác)
function useCallBack(a, b, callback) {
  let max = compare(a, b);
  callback(max);
}

printNumber = (number) => {
  console.log("Max number is: " + number);
};

console.log(useCallBack(500, 1000, printNumber));
