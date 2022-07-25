var index = prompt("Nhập số lượng phần tử trong mảng!!");
var array = [];

// Chạy vòng lặp để set giá trị cho mỗi phần tử trong mảng
for (var i = 0; i < parseInt(index); i++) {
    array[i] = parseInt(prompt("Nhập phần tử(số nguyên) vào trong mảng!!"));
}

// Lấy thẻ HTML và thông báo số lượng và giá trị của mảng
var amountOfIndex = document.getElementById("amountOfIndex");
amountOfIndex.innerText = `Số lượng phần tử trong mảng là: ${index}`;
var indexOfArray = document.getElementById("indexOfArray");
indexOfArray.innerText = `Giá trị của mỗi phần tử trong mảng lần lượt là: ${array.join(" | ")}`;



// Bài 1
// Hàm tính tổng
function sumOfArray() {
    var sum = 0;
    // Vòng for để lặp từ 0 tới độ dài của mảng -1 sau đó dùng 
    // toán tử += để tăng giá trị tổng cho mỗi lần lặp.
    for (var i = 0; i < parseInt(index); i++) {
        sum += parseInt(array[i]);
    }
    var ex1 = document.getElementById("ex1");
    ex1.innerText = `Tổng của mảng là: ${sum}`;
}


// Bài 2
// Hàm đếm số lượng phần tử
function countingIndex() {
    // Tạo count và dùng vòng lặp với điều kiện (Số nguyên phải
    // lớn hơn 0) và biến count sẽ tăng 1 giá trị nếu thỏa điều 
    // kiện
    var count = 0;
    for (var i = 0; i < parseInt(index); i++) {
        if (parseInt(array[i]) > 0) {
            count++;
        }
    }
    var ex2 = document.getElementById("ex2");
    ex2.innerText = `Tổng số nguyên dương trong mảng là: ${count}`;
}


// Bài 3
// Hàm tìm số nhỏ nhất trong mảng
function minOfArray() {
    // Dùng sort để sắp xếp từ nhỏ đến lớn và lấy phần tử đầu tiên
    // Vì hàm sort trong JS sẽ sắp sếp theo kiểu String nên 
    // tạo một hàm để so sánh và đưa ra kết quả đúng nhất
    function compareNumbers(array, b) {
        return array - b;
    }
    array.sort(compareNumbers);
    var min = array[0];
    var ex3 = document.getElementById("ex3");
    ex3.innerText = `Số nguyên nhỏ nhất trong mảng là: ${min}`;
}



// Bài 4
// Hàm tìm số dương nhỏ nhất trong mảng.
function findTheSmallestPositiveNumber() {
    // Vẫn dùng hàm sort như bài 3 để sắp xếp lớn dần
    function compareNumbers(array, b) {
        return array - b;
    }
    array.sort(compareNumbers);
    var min;
    // Tạo vòng for và tạo if else với điều kiện phần tử lớn
    // hơn 0 và chỉ chạy một lần sau đó dùng break để thoát.
    for (var i = 0; i < parseInt(index); i++) {
        if (array[i] > 0) {
            min = array[i]
            break;
        }
    }
    var ex4 = document.getElementById("ex4");
    ex4.innerText = `Số nguyên dương nhỏ nhất trong mảng là: ${min}`;
}


// Bài 5
// Hàm tìm số chẵn cuối trong mảng
function theLastEvenNumber() {
    var flag = 0;
    var j = 0;
    var secondArray = [];
    var lastEvenNumber;
    // Tạo một mảng mới, một biến j cho chạy trong vòng for với
    // điều kiện là phần tử mảng phải chia hết cho 2. Nếu chia hết
    // cho 2 thì gán giá trị đó cho mảng mới và sau đó chỉ cần lấy
    // phần tử cuối trong mảng 
    for (var i = 0; i < parseInt(index); i++) {
        if (array[i] % 2 == 0) {
            secondArray[j] = array[i];
            j++;
            flag = 1;
        }
    }
    lastEvenNumber = secondArray[secondArray.length - 1];
    console.log(lastEvenNumber);
    var ex5 = document.getElementById("ex5");
    if (flag == 1) {
        ex5.innerText = `Số chẵn cuối cùng trong mảng là: ${lastEvenNumber}`;
    } else {
        ex5.innerText = `Mảng không có số chẵn (-1)`;
    }
}


// Bài 6
// Hàm thay đổi vị trí 2 phần tử
function changePosition() {
    // Dùng thuật toán tương tự Bubble sort để xử lý
    // Tạo biến (temp) để lưu trữ giá trị cho một trong 2 phần
    // tử khi chúng thay đổi cho nhau
    var temp;
    var firstPosition = document.getElementById("vitri1").value;
    var secondPosition = document.getElementById("vitri2").value;

    temp = array[firstPosition - 1];
    array[firstPosition - 1] = array[secondPosition - 1];
    array[secondPosition - 1] = temp;
    var ex6 = document.getElementById("ex6");
    ex6.innerText = `Mảng khi thay đổi vị trí 2 phần tử là: ${array}`;
}



// Bài 7
// Hàm sắp xếp mảng theo thứ tự tăng dần
function sortingNumber() {
    // Dùng thuật toán Bubble sort để sắp xếp 
    var temp;
    for (var i = 0; i < parseInt(index); i++) {
        for (var j = parseInt(index) - 1; j > i; j--) {
            if (array[j] < array[j - 1]) {
                temp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = temp;
            }
        }
    }
    var ex7 = document.getElementById("ex7");
    ex7.innerText = `Mảng được sắp xếp theo thứ tự tăng dần là: ${array}`;
}



// Bài 8
// Hàm tìm số đầu tiên trong mảng
function checkFirstPrimeNumber() {
    var flagCheck = 0;
    var firstPrimeNumber;
    function isprime(n) {
        //flag = 0 => không phải số nguyên tố
        //flag = 1 => số nguyên tố
        var flag = 1;
        /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/
        if (n < 2) return flag = 0;

        //Sử dụng vòng lặp for để kiểm tra có tồn tại ước số 
        //nào khác không
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                flag = 0;
            }
        }
        return flag;
    }

    for (var i = 0; i < array.length; i++) {
        if (isprime(array[i]) == 1) {
            firstPrimeNumber = array[i];
            break;
            flagCheck = 1;
        }
    }
    var ex8 = document.getElementById("ex8");
    if (flagCheck == 1) {
        ex8.innerText = `Số nguyên tố đầu tiên trong mảng là: ${firstPrimeNumber}`;
    } else {
        ex8.innerText = `Mảng không có số nguyên tố (-1)`;
    }
}


// Bài 9
// Hàm tìm nhập mảng số thực và số nguyên
var secondArray = [];
function pushElement() {
    // Hàm này để xử lý phần lấy giá trị của input và đẩy ra ngoài
    // màn hình
    var nhapMang = document.getElementById("nhapMang");
    var result = document.getElementById("result");
    var valueOfIndex = Number(nhapMang.value);
    result.innerHTML += ` ${valueOfIndex} | `;
    nhapMang.value = " ";
    secondArray.push(valueOfIndex);
}



// Hàm kiểm tra số nguyên và đếm xem có bao nhiêu số nguyên
function checkInteger() {
    // Chuyển số nguyên bằng Number.isInteger() và tạo một biến 
    // count.Nếu  Number.isInteger() trả về true thì tăng count
    // lên một giá trị.
    var count = 0;
    for (var i = 0; i < secondArray.length; i++) {
        if (Number.isInteger(secondArray[i]) == true) {
            count++;
        }
    }
    var ex9 = document.getElementById("ex9");
    ex9.innerText = `Tổng số nguyên trong mảng là: ${count}`;
}


// Bài 10
// Hàm so sánh số dương và số âm trong mảng
function positiveAndNegative() {
    // Tạo 2 biến count (countPositive, countNegative) và đưa vào
    // for để so sánh nếu phần tử mảng lớn hơn 0 thì countPositive
    // tăng lên một giá trị và ngược lại thì countNegative tăng lên
    // một giá trị.
    var countPositive = 0, countNegative = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            countPositive++;
        } else {
            countNegative++;
        }
    }

    var ex10 = document.getElementById("ex10");
    if (countPositive > countNegative) {
        ex10.innerText = `Số lượng số nhiều nhất trong mảng là số dương với ${countPositive} số`;
    } else {
        ex10.innerText = `Số lượng số nhiều nhất trong mảng là số âm với ${countNegative} số`;
    }
}