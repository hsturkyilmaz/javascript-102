// JavaScript Tarihler ve Tarih Metodları

  // Date Nesnesi Yazım Kuralları

var bugun = new Date(); //İçinde bulunduğumuz anı döndürür.
var tarih1 = new Date('December 17, 1995 03:24:00'); //Sun Dec 17 1995 03:24:00 GMT+0200
var tarih2 = new Date('1995-12-17T03:24:00'); //Sun Dec 17 1995 05:24:00 GMT+0200
var tarih3 = new Date(1995, 11, 17); //Sun Dec 17 1995 00:00:00 GMT+0200
var tarih4 = new Date(2005, 11, 17, 3, 24, 0); // Sat Dec 17 2005 03:24:00 GMT+0200
var tarih5 = new Date(2011,0,1); // Sat Jan 01 2011 00:00:00 GMT+0200
var tarih6 = new Date('10/25/2014'); //Sat Oct 25 2014 00:00:00 GMT+0200 (ay, gün, yıl formatında girilmek zorunda)
var tarih7 = new Date('10 06 2014'); //Mon Oct 06 2014 00:00:00 GMT+0300

  //!Geçersiz formatta tarih girildiğinde “Invalid Date” veya NaN değeri dönmektedir.

// Date Nesnesi Metodları

  // Get Metodları

var tarih = new Date('10/25/2014 14:25:05'); //Sat Oct 25 2014 14:25:05
alert(tarih.getFullYear()); //2014 (4 basamaklı yıl)
alert(tarih.getMonth()); //10 (0(Ocak)  – 11 (Aralık)  arasında sayı
alert(tarih.getDay()); //6 (0(Pazar) – 6(Cumartesi)
alert(tarih.getDate()); //25 (1-31 arasında sayı)
alert(tarih.getHours()); //14 (0-23 arasında saat)
alert(tarih.getMinutes()); //25 (0-59 arasında dakika)
alert(tarih.getSeconds()); //05 (0-59 arasında saniye)
alert(tarih.getMilliseconds()); //0 (0-999 arasında milisaniye, örnekte milisaniye yazılmadığı için 0)
alert(tarih.getTime()); //1414236313999 (1970'den belirtilen tarihe kadar geçen milisaniye)
alert(Date.now()); //1576766615951 (1970'den içinde bulunduğumuz ana kadar geçen milisaniye)

  // Set Metodları

var theBigDay = new Date(1962, 6, 7); // 1962-07-07
theBigDay.setDate(24); // 1962-07-24
theBigDay.setDate(32); // 1962-08-01 (32, 1'e tekabül ediyor.)
theBigDay.setDate(22); // 1962-08-22

var theBigDay = new Date();
theBigDay.setFullYear(1997); //Yılı değiştirir.

var theBigDay = new Date();
theBigDay.setHours(7); //0-23 arasında saati değiştirir.

var theBigDay = new Date('July 1, 1999');
var sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime()); //milisaniye cinsinden yeni tarih üretir.(1970 yılından başlayarak)

var theBigDay = new Date('2015-07-13');
var sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime()); //milisaniye cinsinden yeni tarih üretir.(1970 yılından başlayarak)

var theBigDay = new Date();
theBigDay.setYear(96); //yılı 1996 olarak değiştirir.
theBigDay.setYear(1996); //yılı 1996 olarak değiştirir.
theBigDay.setYear(2000); //yılı 2000 olarak değiştirir.

  //Gün Ekleme İşlemi

var zaman = new Date();
zaman.setDate(zaman.getDate()+100); //Var olan bir tarih nesnesine gün cinsinden süre ekleyerek yeni bir tarih bu şekilde elde edilebilir.

  //JavaScript'te Günleri Güzel Türkçe'mizle Yazdırma

var gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]; 
var tarih = new Date("1994-03-01"); 
alert(gunler[tarih.getDay() ]); //salı'yı dönecektir. yani benim doğduğum günü.

var gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]; 
var tarih = new Date(); 
alert(gunler[tarih.getDay()]); //bugünü dönecektir.

//veya

//getDayName adında metod oluşturup Date sınıfına bağlanır.
Date.prototype.getDayName = function(){
let gunisim = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
return gunisim[this.getDay()];
}
var tarih = new Date("2009-09-24");
alert(tarih.getDayName()); //Perşembe'yi dönecektir. yani benim liseye başladığım tarih. evet perşembe günü başlamıştık.

var bugun = new Date(); 
alert(bugun.getDayName()); //bugünü dönecektir.

  //JavaScript'te Ayları Güzel Türkçe'mizle Yazdırma

var aylar = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
var tarih = new Date("2013-09-16");
alert( aylar[tarih.getMonth()]); //Eylül'ü dönecektir, yani en hüzünlü ayı. bence eylül çok hüzünlüdür.

var aylar = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
var tarih = new Date();
alert(aylar[tarih.getMonth()]); //Aralık'ı dönecektir. aralıkla ilgili bir düşüncem yoktur.

//veya

Date.prototype.getMonthName = function(){
let ayisim = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
return ayisim[this.getMonth()];
}
 
var tarih = new Date("2019-07-22");
alert(tarih.getMonthName()); //Temmuz'u dönecektir. temmuz, bizim nişanlandığımız, güzel ve neşeli bir aydır.
 
 
var bugun = new Date();
alert(bugun.getMonthName()); //kendisinden başka sermayemiz olmayan bugün'ü dönecektir.