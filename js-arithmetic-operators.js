//JavaScript Aritmetik Operatörler

//Atama Operatörü

let degisken1 = 60;
let degisken2 = degisken1;

  let x = 2;
  x+=2; console.log(x); //4
  x-=4; console.log(x); //-2
  x*=5; console.log(x); //10
  x/=2; console.log(x); //1
  x%=2; console.log(x); //0
  x++; console.log(x); //3
  x--; console.log(x); //1

//Toplama Operatörü

let degisken1 = 23;
let degisken2 = 37;
let sonuc = degisken1 + degisken2;
document.write(sonuc); //60

  // Number + Number -> toplar
  1 + 2 // 3
  
  // Boolean + Number -> toplar
  true + 1 // 2
  
  // Boolean + Boolean -> toplar
  false + false // 0
  
  // Number + String -> birleştirir
  5 + "foo" // "5foo"
  
  // String + Boolean -> birleştirir
  "foo" + false // "foofalse"
  
  // String + String -> birleştirir
  "foo" + "bar" // "foobar"

//Çıkarma Operatörü

let sayi1 = 78;
let sayi2 = 18;
let sonuc = sayi1 - sayi2;
document.write(sonuc); //60

  5 - 3 // 2
  3 - 5 // -2
  "foo" - 3 // NaN

//Çarpma Operatörü

let sayi1 = 20;
let sayi2 = 3;
let sonuc = sayi1 * sayi2;
document.write(sonuc); //60

  2 * 2 // 4
  -2 * 2 // -4
  Infinity * 0 // NaN
  Infinity * Infinity // Infinity
  "foo" * 2 // NaN

//Bölme Operatörü

let sayi1 = 180;
let sayi2 = 3;
let sonuc = sayi1/sayi2;
document.write(sonuc); //

  1 / 2 // 0.5
  1.0 / 2.0 // 0.5
  2.0 / 0 // Infinity
  2.0 / 0.0 // Infinity
  2.0 / -0.0 // -Infinity

//Mod (Kalan) Operatörü

let sayi1 = 60;
let sayi2 = 8;
let sonuc = sayi1 % sayi2;
document.write(sonuc);//4

  12 % 5 // 2
  -1 % 2 // -1
  NaN % 2 // NaN
  1 % 2 // 1
  2 % 3 // 2
  -4 % 2 // -0
  5.5 % 2 // 1.5

//Üs Alma Operatörü

2 ** 3 // 8
3 ** 2 // 9
3 ** 2.5 // 15.588457268119896
10 ** -1 // 0.1
NaN ** 2 // NaN
 
2 ** 3 ** 2 // 512
2 ** (3 ** 2) // 512
(2 ** 3) ** 2 // 64

//Artırma Operatörü

  // Sonuna yazınca
  let x = 3;
  y = x++; // y = 3, x = 4
  
  // Önüne yazınca
  let a = 2;
  b = ++a; // a = 3, b = 3

//Azaltma Operatörü

  // Sonuna yazınca
  let x = 3;
  y = x--; // y = 3, x = 2
  
  // Önüne yazınca
  let a = 2;
  b = --a; // a = 1, b = 1

//Olumsuzlama Operatörü

let x = 3;
y = -x; // y = -3, x = 3

//Tekil Artı Operatörü

+3 // 3
+"3" // 3
+true // 1
+false // 0
+null // 0
+function(val){ return val } // NaN