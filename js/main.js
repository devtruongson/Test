/* 

    Bài 1: cho array = [1,5,7,8,9,15,8]
       a, in ra các số chẵn của mảng
       b , in ra các số lẻ của mảng
       c, in ra các số lớn hơn hoặc bằng 5 của mảng
       d, Cộng tổng các số chia hết cho 5 của mảng
       e, Tìm ra tích 3 số đầu của mảng array
       g, Tính tổng 3 phần tử cuối của mảng
       h, Tìm xem trong array có phần tử nào là số 5 không?
       k, Đếm số phần tử = 8 trong mảng

*/

var array = [1, 5, 7, 8, 9, 15, 8];

let tongChiaCho5 = 0;
let tich3PhanTu = 1;
let tong3PhanTu = 0;
let demPhanTu8 = 0;

for (let index = 0; index < array.length; index++) {
    // 4% 2 == 0 => so chan
    // 5% 2 !== 0 => so le

    //a, in ra các số chẵn của mảng
    if (array[index] % 2 == 0) {
        console.log(array[index]);
    }
    //b , in ra các số lẻ của mảng
    else {
        console.log(array[index]);
    }

    //c, in ra các số lớn hơn hoặc bằng 5 của mảng
    if (array[index] >= 5) {
        console.log(array[index]);
    }

    // d,Cộng tổng các số chia hết cho 5 của mảng
    if (array[index] % 5 == 0) {
        // tongChiaCho5 = tongChiaCho5 + array[index];
        tongChiaCho5 += array[index];
    }

    // e, Tìm ra tích 3 số đầu của mảng array
    if (index < 3) {
        // tich3PhanTu = tich3PhanTu * array[index];
        tich3PhanTu *= array[index];
    }

    // g, Tính tổng 3 phần tử cuối của mảng
    if (index >= array.length - 3) {
        tong3PhanTu += array[index];
    }

    //   h, Tìm xem trong array có phần tử nào là số 5 không?
    if (array[index] === 5) {
        console.log(array[index]);
    }

    //  k, Đếm số phần tử = 8 trong mảng
    if (array[index] === 8) {
        demPhanTu8++;
        // demPhanTu8 = demPhanTu8 + 1;
    }
}

console.log("Dap an tongChiaCho5 : ", tongChiaCho5);
console.log("Dap an tich3PhanTu : ", tich3PhanTu);
console.log("Dap an tong3PhanTu : ", tong3PhanTu);
console.log("Dap an demPhanTu8 : ", demPhanTu8);

/* 

    Bài 3: cho var data = [3,2,4,'5',1,8,7,'9']
        a,tính tổng các phần tử trong array trên
        b,hãy tạo ra array2 chứa các phần tử có giá trị lẻ của data
        c,hãy tạo ra array3 chứa các phần tử của data theo thứ tự  đảo ngược 
        // kết quả [ '9', 7, 8, 1, '5', 4, 2, 3]

*/

var data = [3, 2, 4, "5", 1, 8, 7, "9"];

let Tong = 0;

let Array2 = [];
let indexArray2 = -1;

let Array3 = [];

for (let i = 0; i < data.length; i++) {
    // Tinh tong
    Tong += data[i] * 1;

    // y b
    if (data[i] % 2 !== 0) {
        indexArray2++;
        Array2[indexArray2] = data[i];
    }

    //  c,hãy tạo ra array3 chứa các phần tử của data theo thứ tự  đảo ngược
    Array3[data.length - 1 - i] = data[i];
}

console.log("Check Tong : ", Tong);
console.log("Check Array2 : ", Array2);
console.log("Check Array3 : ", Array3);

/* 

    Bài 4: Cho 1 số tự nhiên n. Viết chương trình kiểm tra n là số lẻ hay chẵn.
        Nếu number là số chẵn , In ra "Even number" và "Done".
        Ngược lại, in "Done" ra màn hình.

*/
let Number = 6;
if (Number % 2 == 0) {
    console.log("Even number Done");
} else {
    console.log("done");
}
