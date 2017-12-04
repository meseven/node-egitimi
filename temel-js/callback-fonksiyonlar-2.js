function birinci(callback) {
    setTimeout(function () {
        console.log("birinci");
        callback(ucuncu);
    }, 1000)
}

function ikinci(callback) {
    setTimeout(function () {
        console.log("ikinci");
        callback();
    }, 2000);
}

function ucuncu() {
    console.log("ucuncu");
}

birinci(ikinci);