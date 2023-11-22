window.onload = function () {
    initPascal(10);
};

var initPascal = function (n) {
    for (var sor = 0; sor < 10; sor++) {
        //új div létrehozása az új sornak
        var ujSor = document.createElement('div');
        //új div osztálylistájához add hozzá a "sor"-t
        ujSor.classList.add("sor");
    //új div-et add hozzá a "pascal" gyermekeihez
        //document.getElementById("pascal").innerHTML = ''; //Ürítés
        document.getElementById("pascal").appendChild(ujSor);
    for (var oszlop = 0; oszlop <= sor; oszlop++) {
	    //új div létrehozása az új elemnek
        var ujelem = document.createElement("div");
        //új elem div osztálylistájához add hozzá az "elem"-et
        ujelem.classList.add("elem");
        //teszteléshet .innerHTML = `${sor}:${oszlop}`
        ujelem.innerHTML = faktoriálisR(oszlop)
	    //legyen az innerHTML a megfelelő szám
        //új elem div-et vedd fel a sor elemei közé
        ujSor.appendChild(ujelem);
    }
}
}
var faktoriálisR = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * faktoriálisR(n - 1)
    }
}