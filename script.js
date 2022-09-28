/*membuat variabel
buttons dengan queryselector
dan menggunakan nilai class tombol*/
let buttons = document.querySelector('.tombol');

/*membuat variabel
btn dengan queryselector berdasarkan
semua span yang ada*/
let btn = document.querySelectorAll('span');

/*membuat variabel
Hasil dengan getelementbyid
yaitu dengan memilih berdasarkan id
yaitu id Nilai*/
let Hasil = document.getElementById('Nilai');

/*membuat  for loop untuk mengoperasikan 
kalkulator*/
for (let i = 0; i < btn.length; i++) {
    /*apabila terjadi 'event' click maka 
    loop akan menjalankan fungsi berikut*/
    btn[i].addEventListener("click", function () {
        /*jika memilih "=" maka akan menghitung
        angka yang di input*/
        if (this.innerHTML == "=") {
            Hasil.innerHTML = eval(Hasil.innerHTML);
        /*jika memilih "C" maka akan menghapus
        angka yang di input*/
        } else {
            if (this.innerHTML == "C") {
                Hasil.innerHTML = "";
            }
            else {
                Hasil.innerHTML += this.innerHTML;
            }
        }
    })
}