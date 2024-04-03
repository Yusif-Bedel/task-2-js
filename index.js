// task2-1
// let eded=parseInt(prompt("eded daxil edin"))

//     for(index=3;index<=eded;index*=3){
//         if(index===eded){
//             console.log("3un quvvetidir")
//         }
//         else if(index!==eded){
//             console.log("3un quvveti deyl")
//         }

//     }
// task2-2
// var eded = prompt("eded daxil edin: ");
// var polidrom = true;
// var terseded = "";
// for (var i = eded.length - 1; i >= 0; i--) {
//     terseded += eded[i];
// }
// for (var j = 0; j < eded.length; j++) {
//     if (eded[j] !== terseded[j]) {
//         polidrom = false;
//         break;
//     }
// }
// if (polidrom) {
//     console.log("Bu eded bir polidromdur.");
// } else {
//     console.log("Bu eded bir polidrom deyl.");
// }
// task2-3
// var eded = prompt("Ədəd daxil edin:");

// var kokalti = 0;
// for (var i = 0; i <= eded; i++) {
//     if (i * i <= eded) {
//         kokalti = i;
//     } else {
//         break;
//     }
// }

// console.log("en yaxin pomidoralti " + kokalti);
// task2-4
const ededarray = [211, 40, 89, 122, 374, 867];
let say = 0;

for (let i = 0; i < ededarray.length; i++) {
    let eded = ededarray[i];
    let cem = 0;
    while (num) {
        cem += eded - ((eded / 10) | 0) * 10;
        eded = (eded / 10) | 0;
    }
    if (cem < 10) {
        say++;
    }
}

console.log(say);
