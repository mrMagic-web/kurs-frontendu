const kursDane = [
  { name: "Kamil", age: 18, smart: true },
  { name: "Kuba", age: 16, smart: true },
  { name: "Filip", age: 18, smart: true },
  { name: "Konrad", age: 18, smart: true },
  { name: "Karolina", age: 18, smart: false }
];

let text = "";
let text2 = "";

for (let i = 0; i < kursDane.length; i++) {
  let wiek = kursDane[i].age > 17 ? " i jest dorosły" : " i nie może kupi piwa";
  let jestSmart = kursDane[i].smart
    ? " i jest super smart"
    : " nie jest super smart";
  text +=
    "<p class='osoba'>" +
    kursDane[i].name +
    " ma " +
    kursDane[i].age +
    " lat " +
    jestSmart +
    wiek +
    " </p> ";

  text2 += `<p class='osoba'>${kursDane[i].name} ma ${
    kursDane[i].age
  } lat ${jestSmart} ${wiek} </p>`;
}

for (let osoba of kursDane) {
  text += `<p>${osoba.age}</p>`;
}

document.querySelector(".text").innerHTML = text;
