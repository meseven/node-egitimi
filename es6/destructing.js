const degerler = {
    deger1: 'deger1',
    deger2: 'deger2',
    deger3: {
        isim: 'mehmet'
    }
};

const { deger3: { isim: name } } = degerler;
console.log(isim);

/*
const degerler = [1,2,3];
const [ deger1, deger2, deger3 ] = degerler;
console.log(deger1);
console.log(deger2);
console.log(deger3);
*/