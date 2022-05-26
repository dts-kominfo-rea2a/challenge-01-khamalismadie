// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};

firstUser.name = "Monica";
firstUser.gender = "Female";
firstUser.age = 17;
firstUser.email = "monica@dingdong.com"
firstUser.favoriteColor = new Set();
firstUser.favoriteColor.add("Yellow");
firstUser.favoriteColor.add("Pink");
firstUser.favoriteColor.add("White");
firstUser.favoriteColor.add("Purple");
firstUser.favoriteColor = Array.from(firstUser.favoriteColor);
firstUser.isHavePet = true;
firstUser.education = [
    { name: "SD 01", city: "Jakarta", graduate: 2016 },
    { name: "SMP 02", city: "Jakarta", graduate: 2019 },
    { name: "SMA 03", city: "Tangerang" },
    ];
firstUser.favoriteRestaurant = new Set();
firstUser.favoriteRestaurant.add("Benso");
firstUser.favoriteRestaurant.add("Sushi");
firstUser.favoriteRestaurant.add("pancake");
firstUser.favoriteRestaurant.add("Eggy");
firstUser.favoriteRestaurant.add("Tempura");
firstUser.favoriteRestaurant.add("Bento");
firstUser.favoriteRestaurant.add("Eggy");
firstUser.favoriteRestaurant.add("Padang");
firstUser.favoriteRestaurant.add("Tteok");
firstUser.favoriteRestaurant.add("Suhsi");
firstUser.favoriteRestaurant.add("Sushi");
firstUser.favoriteRestaurant = Array.from(firstUser.favoriteRestaurant);

const secondUser = {};

secondUser.name = "Wendy";
secondUser.gender = "Male";
secondUser.age = 23;
secondUser.email = "wendy@dingdong.com"
secondUser.favoriteColor = new Set();
secondUser.favoriteColor.add("Blue");
secondUser.favoriteColor.add("Black");
secondUser.favoriteColor.add("Grey");
secondUser.favoriteColor = Array.from(secondUser.favoriteColor);
secondUser.isHavePet = false;
secondUser.education = [
    { name: "SD 02", city: "Jakarta", graduate: 2010 },
    { name: "SMP 03", city: "Bogor", graduate: 2013 },
    { name: "SMA 01", city: "Surabaya", graduate: 2016 },
    { name: "Universitas Maju", city: "Tangerang" },
    ];
secondUser.favoriteRestaurant = new Set();
secondUser.favoriteRestaurant.add("Tempura");
secondUser.favoriteRestaurant.add("Bento");
secondUser.favoriteRestaurant.add("Sushi");
secondUser.favoriteRestaurant.add("Pancake");
secondUser.favoriteRestaurant.add("Padang");
secondUser.favoriteRestaurant.add("Katsu");
secondUser.favoriteRestaurant.add("Geprek");
secondUser.favoriteRestaurant.add("Pancake");
secondUser.favoriteRestaurant.add("Eggy");
secondUser.favoriteRestaurant = Array.from(secondUser.favoriteRestaurant);

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};