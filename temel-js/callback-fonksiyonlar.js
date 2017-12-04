function soyle(text, callback){
  console.log(text);
  callback();
}

soyle("merhaba", function () {
    console.log("çay demleniyor..");
});