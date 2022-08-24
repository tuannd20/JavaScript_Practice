const dateNow = new Date();

console.log(dateNow);
//Timestamp và epoch time
// Timestamp tính ra kết quả là milliseconds
// 4 cách sử dụng new date
// new Date() -> in ra ngày giờ hiện tại
// new Date(timestamp) -> dựa vào timestamp để hiện ra ngày giờ
// new Date(date string) ->
// new Date(years, months, day, hour, minute, second, millisecond)
console.log(dateNow.getTime());
console.log(new Date(1653814495980));

// các hàm get Date
const birthday = new Date(2001, 2, 20);
console.log("Year: ", birthday.getFullYear());
console.log("Month: ", birthday.getMonth());
console.log("Date: ", birthday.getDate());
// 0 - 6: sunday -> sat
console.log("Day of week", birthday.getDay());
// getHours() -> getMinutes() -> getMilliseconds -> getTime()

// các hàm set Date

console.log(dateNow.toLocaleDateString());
console.log(dateNow.toDateString());
console.log(dateNow.toLocaleDateString("vi-VI"));
console.log(dateNow.toISOString());

// Bài tập:
const now = new Date("Sun May 29 2022 20:45:23 GMT+0700"); // 29/5/2022
console.log("Bài tập: ", now);
const nowYear = now.getFullYear();
const nowMonth = now.getMonth() + 1;
const nowDate = now.getDate();

const prefixMonth = nowMonth < 10 ? "0" : "";

console.log(`${nowDate}/${prefixMonth}${nowMonth}/${nowYear}`);

//setTimeout vs setInterval
// setTimeout(() => {
//     alert("call me after 3000");
// }, 3000);
