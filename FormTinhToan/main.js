function Reset() {
    document.getElementById('a').value = null;
    document.getElementById('b').value = null;
    document.getElementById('ket_qua').value = null;
    document.getElementById('dialog').innerText = "";
}

//kiểm tra một giá trị phải là số hay không
function check(a, b, c) {
    //c la so
    if (isNaN(c) == false) {
        document.getElementById('ket_qua').value = c;
    }
    else if (isNaN(a) == true) {
        document.getElementById('dialog').innerText = "Giá trị ở a không phải là số ";
        document.getElementById('a').value = null;
        document.getElementById('ket_qua').value = null;
    }
    else if (isNaN(b) == true) {
        document.getElementById('dialog').innerText = "Giá trị ở b không phải là số ";
        document.getElementById('b').value = null;
        document.getElementById('ket_qua').value = null;
    }
}

//hàm tính tổng 
function Sum() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var s = parseFloat(a) + parseFloat(b);
    check(a, b, s);
    document.getElementById('ket_qua').value = s;

}

//hàm tính hiệu 
function Minus() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var m = parseFloat(a) - parseFloat(b);
    check(a, b, m);
    document.getElementById('ket_qua').value = m;

}

//hàm tính tích  
function Multi() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var n= parseFloat(a) * parseFloat(b);
    check(a, b, n);
    document.getElementById('ket_qua').value = n;
}

//hàm tính thương  
function Divide() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    if (b == 0) {
        document.getElementById('dialog').innerText = "Giá trị b phải khác 0 ";
        document.getElementById('b').value = null;
        document.getElementById('ket_qua').value = null;
    }
    var d = parseFloat(a) / parseFloat(b);
    check(a, b, d);
    document.getElementById('ket_qua').value = d;

}

