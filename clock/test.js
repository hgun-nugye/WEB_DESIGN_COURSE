
function TinhTong() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    if (isNaN(a) || isNaN(b))
        alert('Kiểm tra lại giá trị các số!');
    else {
        var tong = parseInt(a) + parseInt(b);
        document.getElementById('tong').value = tong;
    }
}

function get() {
    var text = document.getElementById('text').innerContent;

}
function set() {
    document.writeln(text);

}