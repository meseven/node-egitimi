/*
* throw
* try
* catch
* finally
* */

try{
    var sayi1 = 4;
    var sayi2 = 2;
    var sonuc = sayi1 / sayi2;

    if(sayi2 === 0)
        throw Error('sayi2 sıfır olamaz.');
    else
        console.log(sonuc);
}catch (error){
    console.log(error);
}finally {
    console.log("burası finally bloğu.");
}