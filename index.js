// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};
const secondUser = {};

firstUser.name = "Monica";
firstUser.gender = "Female";
firstUser.age = 17;
firstUser.email = "monica@dingdong.com";

const color1 = new Set();
color1.add("Yellow");
color1.add("Pink");
color1.add("White");
color1.add("Purple");
firstUser.favoriteColor = Array.from(color1);

firstUser.isHavePet = "Yes";

const educationFirstUser = [];
const educationFirstUser1 = { name: "SD 01", city: "Jakarta", graduate: 2016 };
const educationFirstUser2 = { name: "SMP 02", city: "Jakarta", graduate: 2019 };
const educationFirstUser3 = { name: "SMA 03", city: "Tangerang", graduate: null };
educationFirstUser.push(educationFirstUser1);
educationFirstUser.push(educationFirstUser2);
educationFirstUser.push(educationFirstUser3);
firstUser.education = educationFirstUser;

const restaurant1 = new Set();
restaurant1.add("Bento");
restaurant1.add("Sushi");
restaurant1.add("Pancake");
restaurant1.add("Eggy");
restaurant1.add("Tempura");
restaurant1.add("Bento");
restaurant1.add("Eggy");
restaurant1.add("Padang");
restaurant1.add("Tteok");
restaurant1.add("Sushi");
restaurant1.add("Sushi");
firstUser.favoriteRestaurant = Array.from(restaurant1);

secondUser.name = "Wendy";
secondUser.gender = "Male";
secondUser.age = 23;
secondUser.email = "wendy@dingdong.com";

const color2 = new Set();
color2.add("Blue");
color2.add("Black");
color2.add("Grey");
secondUser.favoriteColor = Array.from(color2);

secondUser.isHavePet = "No";

const educationSecondUser = [];
const educationSecondUser1 = { name: "SD 02", city: "Jakarta", graduate: 2010 };
const educationSecondUser2 = { name: "SMP 03", city: "Bogor", graduate: 2013 };
const educationSecondUser3 = { name: "SMA 01", city: "Surabaya", graduate: 2016 };
const educationSecondUser4 = { name: "Universitas Maju", city: "Tangerang" };
educationSecondUser.push(educationSecondUser1);
educationSecondUser.push(educationSecondUser2);
educationSecondUser.push(educationSecondUser3);
educationSecondUser.push(educationSecondUser4);
secondUser.education = educationSecondUser;

const restaurant2 = new Set();
restaurant2.add("Tempura");
restaurant2.add("Bento");
restaurant2.add("Sushi");
restaurant2.add("Pancake");
restaurant2.add("Padang");
restaurant2.add("Katsu");
restaurant2.add("Geprek");
restaurant2.add("Pancake");
restaurant2.add("Eggy");
secondUser.favoriteRestaurant = Array.from(restaurant2);

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};