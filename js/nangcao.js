/* 

    Bai 1: cho array = [1,3,25,41,3,2,2,66,22,5,1,1,2,651,51,5,2];
        a, hãy tạo ra array chỉ chứa các số có đuôi là 1 trong array trên 
           // [1, 41,....]
        b, hãy tìm vị trí của phần tử = 2 xuất hiện lần thứ 3 trong array trên
        e, phần tử 5 lặp lại mấy lần trong array trên
        f, phần tử nào lặp lại nhiều nhất trong array trên 
        g, hãy tìm số lớn nhất trong array trên
        h, hãy tìm số chẵn lớn nhất trong array
        i, hãy lọc trùng array trên sao cho các phần tử chỉ xuất hiện 1 lần duy nhất

    
*/

var array = [1, 3, 25, 41, 3, 2, 2, 66, 22, 5, 1, 1, 2, 651, 51, 5, 2];

let NewArr = [];
let IndexNewArr = -1;

let dem = 0;
let count = 0;

for (let i = 0; i < array.length; i++) {
    //  a, hãy tạo ra array chỉ chứa các số có đuôi là 1 trong array trên
    if (array[i] % 10 === 1) {
        IndexNewArr++;
        NewArr[IndexNewArr] = array[i];
    }

    // b, hãy tìm vị trí của phần tử = 2 xuất hiện lần thứ 3 trong array trên
    if (array[i] === 2) {
        dem++;

        if (dem === 3) {
            console.log(i);
        }
    }

    // c, hãy tìm vị trí của phần tử chứa ký tự 2 thứ 4 trong array
    // if (array[i] === 22) {
    //     for (let index = array[i]; index > 0; index = Math.floor(i / 10)) {
    //         let digit = index % 10;
    //         if (digit === 2) {
    //             count++;
    //         }
    //     }

    //     console.log("check :", count);
    // }
}

// console.log(NewArr);
