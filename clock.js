let name = prompt(
  "Lütfen Kulanıcı Adınızı Yazınız:(kullanici adiniz minimum 3 karakter olmalidir)",
  "guest"
);

let hosgeldin = document.querySelector("#welcome");
let hata = document.querySelector("#text1");
let hata2 = document.querySelector("#text2");

if (name.length >= 3) {
  hosgeldin.innerHTML = name;
} else {
  hata.innerHTML = "Kullanıcı Adı en az 3 karakter olmalı";
  hata2.innerHTML = "Kullanıcı Adınızı yeniden giriniz!";
}

function time() {
  let now = new Date();
  let dayOfMonth = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let day = now.getDay();
  let dayName = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  let weekdayName = dayName[day];

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let now1 = `${hour} : ${min} : ${sec} ${weekdayName}`;
  document.querySelector("#clock").innerHTML = now1;
  setInterval(time, 1000);

  let fullDate = `${dayOfMonth}/ ${month}/ ${year}`;
  document.querySelector("#date").innerHTML = fullDate;
}

time();
