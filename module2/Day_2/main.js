// if - else
// let a = 10;
// th còn lại của a>=8 thì nó còn nhiều học khá, học trung bình, học yếu [6,5;7], [4,6,5], dưới 4

// else if
// if (a >= 8) {
//   console.log("học sinh giỏi");
// } else if (a >= 6.5 && a <= 7) {
//   console.log("học sinh khá");
// } else if (a >= 4 && a < 6.5) {
//   console.log("học sinh trung bình");
// } else {
//   console.log("học sinh yếu");
// }

// switch (a) {
//   case 8:
//   case 9:
//   case 10:
//     console.log("học sinh giỏi");
//   case 7:
//     console.log("học sinh khá");
//   case 6:
//     console.log("học sinh trung bình");
//   case 5:
//     console.log("học sinh yếu");
//   default:
//     console.log("giá trị không hợp lệ");
// }

// viết 1 hệ thống cho phép in ra màn hình số ngày của tháng trong năm
// INPUT: 2024 4
// OUTPUT: 30 ngày

// vòng lặp
// while do while for

//while
// let count = 0;
// while (count < 10) {
//   ++count;
//   console.log(count);
// }

// do while
// let count = 0;
// do {
//   count++;
//   console.log(count);
// } while (count > 10);

// ứng dụng họ cần nhập dữ liệu từ bàn phím (cần kiểm tra tính đúng đắng của dữ liệu đầu vào)
// nếu mà nhập sai thì yêu cầu nhập lại

// for
// for(giá trị khởi tạo; điều kiện dừng; bước nhảy) {
//   // code

// }

// cấp phát tĩnh với câps phát động
// const a 0  1  2  3  4  5  6  7  8  9
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const b = new Array(1, 2, 4, 5, 6, 7, 8, 9, 10);

// // template string : chuỗi nội suy
// for (let i = 0; i < a.length; i++) {
//   console.log(`\nPhần tử a[${i}] = `, a[i]);
// }

cho 1 mảng a = [1,2,4,5,6,7,8,9,10]

b1: thêm 1 phần tử vào cuối mảng
b2: thêm 1 phần tử vào đầu mảng
b3: xoá 1 phần tử ở cuối mảng
b4: xoá 1 phần tử ở đầu mảng

lưu ý : chỉ được dùng for để duyệt mảng ( không sử dụng các hàm có săn của js )


1. Khai báo 1 mảng gồm 4 số bất kỳ khác nhau. 
  -In ra phần tử có chỉ số 0 và 3 trong mảng. 
  -Thực hiện phép cộng giữa phần tử có chỉ số 1 và 2.
  -Thực hiện hoán đổi giá trị của phần tử có chỉ số 1 và 3.
2. Khai báo 1 mảng gồm các số bất kỳ. 
  -Hãy in ra các số chẵn trong mảng đó. 
  -Hãy tính tổng các phần tử trong mảng. 
  -Hãy tìm phần tử nhỏ nhất trong mảng.
3. Khai báo 1 mảng rỗng. Nhập vào số n (n > 0). Hãy điền n số có giá trị ngẫu nhiên vào trong mảng đó.
4. Khai báo 1 mảng gồm 2 phần tử. Nhập vào số n (n > 2). Hãy thêm vào đầu mảng phần tử có giá trị ‘0’ cho đấu khi độ dài của mảng bằng n.