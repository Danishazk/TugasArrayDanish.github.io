// let nilai = prompt("masukkan nilai : ",0);
// let hasil = "";

// switch(true){
//     case nilai >= 91 && nilai <= 100:
//         hasil = "A"
//         break;
        
//             case nilai >= 81 && nilai <=90:
//                 hasil = "B"
//                 break;

//                 case nilai >= 71 && nilai <=80:
//                 hasil = "C"
//                 break;

//                 case nilai >= 61 && nilai <= 70:
//                 hasil = "D"
//                 break;

//                 case nilai < 60:
//                 hasil = "Maaf anda mendapatkan nilai F"
//                 break;
//                 default:
//                     document.write("Nilai yg anda masukan tidak terdeteksi");
                   
// }
// document.write(hasil);

// let user = prompt("Username :","");
// let pass = prompt("password : ","");

// if(user.toUpperCase() == "AZK"){
//     if(pass == "azkarz123"){
//         document.write( `<h1>selamat datang ${user}</h1>`);
//     }else{
//         document.write( "<p>Password salah, silahkan coba lagi</p>");
//     }
// }else{
//     document.write("<p>Anda tidak terdaftar!</p>");
// }

// if(user.toUpperCase() == "RAIMM"){
//     if(pass == "raim23"){
//         document.write( `<h1>selamat datang ${user}</h1>`);
//     }else{
//         document.write( "<p>Password salah, silahkan coba lagi</p>");
//     }
// }else{
//     document.write("<p>Anda tidak terdaftar!</p>");
// }
// if(user.toUpperCase() == "PIKTOR"){
//     if(pass == "jamet12"){
//         document.write( `<h1>selamat datang ${user}</h1>`);
//     }else{
//         document.write( "<p>Password salah, silahkan coba lagi</p>");
//     }
// }else{
//     document.write("<p>Anda tidak terdaftar!</p>");
// }

// var phi;
// var jari2;
// var total;

// function jumlahLuasLingkaran(a,b ){
// jari2 = a **2;
// phi   = 3.14
// total = jari2 * phi;
// return total ;
// }
// alert(jumlahLuasLingkaran(10));

// let sum = "";
//     while(true){
//         let value = (prompt("masukan sebuah huruf",''))
//         if(!value) break;

//         sum+= value;
//     }
// alert('sum : ' + sum);

// const users = [
//     {
//     merkMobil: 'mitsubihi expander',
//     tipeBensin:  'pertamax',
//     pintu: 'samping'
//     },
//     {
//     merkMobil: 'pajero sport',
//     tipeBensin:  'biosolar',
//     pintu: 'samping'
//     },
//     {
//     merkMobil: 'lambo aventador',
//     tipeBensin:  'pertamax',
//     pintu: 'geser'
//     },
//     {
//     merkMobil: 'mitsubishi kuda',
//     tipeBensin:  'biosolar',
//     pintu: 'samping'
//     },
    
//     ];
//     let mbil =(prompt("masukan tipe mobil mu: "));
//     const userMobil= users.filter
//     ((user) => user.tipeBensin === mbil);
//     console.log(userMobil);
    
    
// function tambah(a, b){
//     console.log(a);
//     console.log(b);
//     return a + b;
// }
// function kurang(a, b){
//     console.log(a);
//     console.log(b);
//     return a - b;
// }
// function kali(a, b){
//     console.log(a);
//     console.log(b);
//     return a * b;
// }
// function bagi(a, b){
//     console.log(a);
//     console.log(b);
//     return a / b;
// }


//    let user = (prompt("pilih mana yg kamu mau +,-,x,%"))

//    if(user ==  "+"){
//    let aa = parseInt(prompt("masukan nilai pertama : "));
//    let bb = parseInt(prompt("masukan nilai kedua : "));
//    let hasil = tambah(aa, bb);
//    console.log(hasil);

//    }else if(user ==  "-"){
//         let aa = parseInt(prompt("masukan nilai pertama : "));
//         let bb = parseInt(prompt("masukan nilai kedua : "));
//         let hasil =kurang (aa, bb);
//         console.log(hasil);
   
//    }else if(user ==  "x"){
//         let aa = parseInt(prompt("masukan nilai pertama : "));
//         let bb = parseInt(prompt("masukan nilai kedua : "));
//         let hasil =kali(aa, bb);
//         console.log(hasil);
   
//    }else if(user ==  "%"){
//         let aa = parseInt(prompt("masukan nilai pertama : "));
//         let bb = parseInt(prompt("masukan nilai kedua : "));
//         let hasil = bagi (aa, bb);
//         console.log(hasil);
//    }
    
var penumpang = [];    
var tambahPenumpang = function (namaPenumpang, penumpang){
    if(penumpang.length == 0){//MEMBUAT SEBUAH KONDISI
        penumpang.push(namaPenumpang);//MENAMBAH PENUMPANG
        return penumpang;//MENGEMBALIKAN PENUMPANG
    }else{
        for (i = 0; i < namaPenumpang.length; i++){//MEMBUAT SEBUAH PERULANGAN JIKA i = 0 LEBIH KECIL DARI KONDISI(penumpang.length) MAKA PERULANGANNYA BERJALAN
            if(penumpang[i] == undefined){//KARNA PENUMPANG i = 0,MAKA HASILNY UNDEFINED
                penumpang[i] = namaPenumpang;//MENAMBAH PENUMPANG JIKA KURSI KOSONG
                return penumpang//MENGEMBALIKAN PENUMPANG
            }else if(namaPenumpang == penumpang[i]){//JIKA TERDAPAT NAMA YANG SAMA MAKA AKAN MEMPRINT KATA2 DIBAWAH
                console.log(namaPenumpang + " Sudah ada di angkot");//MEMPRINT NAMA PENUMPANG YG SAMA DGN MENAMBAH "sudah ada di angkot"
                return penumpang;//MENGEMBALIKAN PENUMPANG
            }
        }
    }
}    
