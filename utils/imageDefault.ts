export default async function imageDefault(){
    const response = await fetch(
        `https://api.unsplash.com/search/photos/?query=weddings&client_id=${process.env.UNPLAS_ACCES_KEY}`
      );
    
      function generateRandomNumber() {
        return Math.floor(Math.random() * 4); // Menggunakan Math.random() untuk menghasilkan angka acak antara 0 (inklusif) dan 1 (eksklusif), kemudian dikalikan dengan 11 sehingga rentangnya menjadi antara 0 dan 10, dan Math.floor() untuk membulatkan ke bilangan integer terdekat.
      }
    
      // Contoh pemanggilan fungsi
      const randomNumber = generateRandomNumber();
      const dataFoto = await response.json();
      const defaultFoto = dataFoto.results[randomNumber].urls.raw;
    return defaultFoto
}