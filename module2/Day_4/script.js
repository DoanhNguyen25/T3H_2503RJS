// setTimeout

// console.log("xin chào các bạn");
// setTimeout(() => {
//   console.log("hẹn gặp lại các bạn");
// }, 2000);

// console.log("xin chào các bạn 2");

// setInterval
// let count = 0;
// const intervalId = setInterval(() => {
//   count++;
//   console.log("hẹn gặp lại các bạn", count);
//   if (count === 5) {
//     clearInterval(intervalId);
//     console.log("dừng lại");
//   }
// }, 1000);

// Promise
const demoPromise = new Promise((resolve, reject) => {
  const isSuccess = true;
  if (isSuccess) {
    setTimeout(() => {
      resolve({ data: { name: "Nguyễn Văn A", age: 18 } });
    }, 2000);
  } else {
    reject("thất bại");
  }
});

const getData = async () => {
  try {
    const result = await demoPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     console.log({ response });
//     return response.json(); //trả về một promise
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));





