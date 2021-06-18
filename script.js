let hitung = 0;

const angka = document.getElementById('num');
const tombol = document.getElementsByClassName('btn');

for (let i = 0; i < tombol.length; i++) {
    // console.log(tombol[i])
    tombol[i].addEventListener('click', function(event) {

        const fungsi = event.currentTarget.classList;

        if (fungsi.contains('kurang')) {
            hitung --;
        } else if (fungsi.contains('tambah')) {
            hitung ++;
        } else {
            hitung = 0;
        }
        angka.textContent = hitung;

        if (hitung > 0) {
            angka.style.color = 'green'
        } else if (hitung < 0) {
            angka.style.color = 'red'
        } else {
            angka.style.color = '#777'
        }
    })
}

