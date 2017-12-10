/*const asenkronFonksiyon = function (sayi, callback) {
    const sonuc = sayi + 2;
    callback(sonuc);
};

asenkronFonksiyon(2, function (sonuc) {
    console.log(sonuc);
    asenkronFonksiyon(4, function (sonuc) {
        console.log(sonuc);
        asenkronFonksiyon(6, function (sonuc) {
            console.log(sonuc);
            asenkronFonksiyon(8, function (sonuc) {
                console.log(sonuc);
            })
        })
    })
});*/

const asenkronFonksiyon = (sayi) => {
  return new Promise((resolve, reject) => {
      if (sayi === 4)
          resolve("her şey yolunda!");
      else
          reject('bir sorun var abim!');
  })
};

asenkronFonksiyon(5)
    .then((data) => {
        console.log(data);
        return 1;
    })
    .then((data) => {
        console.log(data);
        return 2;
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });