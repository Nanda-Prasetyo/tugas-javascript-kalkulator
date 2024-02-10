function appendToDisplay(value) {
    // Mengambil elemen input dengan ID 'display'
    var display = document.getElementById('display');

    // Menambahkan nilai ke dalam elemen input
    display.value += value;
}

function clearDisplay() {
    // Mengambil elemen input dengan ID 'display' dan mengosongkannya
    document.getElementById('display').value = '';
}

function calculateResult() {
    // Mengambil elemen input dengan ID 'display'
    var display = document.getElementById('display');

    try {
        // Evaluasi ekspresi matematika menggunakan eval()
        var result = eval(display.value);

        // Menampilkan hasil di dalam elemen input
        display.value = result;
    } catch (error) {
        // Menangani kesalahan jika ekspresi tidak valid
        display.value = 'Error';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    // Menambahkan event listener untuk keydown pada seluruh dokumen
    document.addEventListener('keydown', function (event) {
        handleKeyPress(event.key);
    });
});

function handleKeyPress(key) {
    // Menangani tombol angka
    if (!isNaN(key) || key === '.') {
        appendToDisplay(key);
    }
    // Menangani tombol operator
    else if (['+', '-', '*', '/'].includes(key)) {
        appendToDisplay(key);
    }
    // Menangani tombol Enter
    else if (key === 'Enter') {
        calculateResult();
    }
    // Menangani tombol C untuk menghapus/clear
    else if (key === 'c' || key === 'C') {
        clearDisplay();
    }
    else if (key === 'Backspace') {
        backspace();
    }
}

function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    var display = document.getElementById('display');
    try {
        var result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
