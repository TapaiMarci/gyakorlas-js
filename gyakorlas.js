let txt = "példa szöveg"
//1. feladat
console.log(txt.slice(0,6))
//2. feladat
console.log(txt.slice(3,9))
//3. feladat
console.log(txt.slice(5))
//4. feladat
console.log(txt.slice(5,-1))
//5. feladat
console.log(txt.toUpperCase(txt))
//6. feladat
let mindenmasodik = "";
for (i = 0; i < txt.length; i++) {
    if (i % 2 == 1) {
        mindenmasodik += txt[i].toUpperCase();
    }
    else{
        mindenmasodik += txt[i];
    }
}
console.log(mindenmasodik)
//7, feladat

//8. feladat
