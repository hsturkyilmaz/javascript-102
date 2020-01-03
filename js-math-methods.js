// JavaScript Math Metodları

// Constants (Sabitler)
document.write(Math.E);  // Eualar (e) sayısını geri döndürür
document.write(Math.PI);  // Pi sayısını geri döndürür.
document.write(Math.LN2);  // Logaritma 2 değeri
document.write(Math.LN10); // Logaritma 10 değeri
document.write(Math.SQRT1_2);  // 1 sayısının karekökü
document.write(Math.SQRT2);  // 2 sayısının karekökü

// Random() Metodu: 0 ile 1 arasında rasgele sayı üretmek için kullanılır.
document.write(Math.random());
// Örneğin 0 ile 100 arasında bir tam sayı üretilmesini istiyorsak random metodunu 100 ile çarpıp yuvarlama metotlarından biri ile sayının ondalık kısmını atabiliriz:
document.write(Math.floor( Math.random() * 100 ));

// Round() Metodu: Ondalıklı sayıyı yuvarlayarak tam sayı elde etmek için kullanılır. Ondalıklı sayının ondalıklı kısmı 50 ve üzeri ise tam kısmı yukarı, aşağı ise tam kısmı aşağı yuvarlar.
document.write(Math.round(3.51));  //geriye 4 döner
document.write(Math.round(3.50));  //geriye 4 döner
document.write(Math.round(3,49));  //geriye 3 döner
  //Round metodu sayıyı en yakın tam sayıya yuvarlar. Floor metodu sayıyı tabana yuvarlar. Ceil metodu sayıyı yukarı yuvarlar.
var a=3.54;
document.write(Math.round(a));  // Sonuç 4 çıkar
document.write(Math.floor(a)); // Sonuç 3 çıkar
document.write(Math.ceil(a)); // Sonuç 4 çıkar

// Pow(x,y) Metodu: Bu metod iki parametre alır. İlk parametre taban, ikinci parametre ise üs olarak kabul edilir. Yani x sayısının y üssünü alma işlemi için kullanılır.
document.write(Math.pow(2,8));   // geriye 256 döner

// Sqrt( ) Metodu: Karekök hesaplamak için kullanılır.
document.write(Math.sqrt(36));  // geriye 6 döner

// Math.max ve Math.min metotları erilen sayılardan en büyük veya en küçüğünü bulmak için kullanılırlar.
document.write(Math.max(5, 0, 225, 336, -5, -666, 8, -787));   // sonuç 336
document.write(Math.min(98, 785, -98, 3654, 587));    // sonuç -98

//Math.abs metodu negatif sayıyı pozitif sayıya çevirir.
document.write(Math.abs(-4.4));