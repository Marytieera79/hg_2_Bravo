/* HACK-7 Reemplazar el item 300 por el alias "charlie*/
let bar = [100,200,300,400,500,600,700];
console.log(bar)
bar.splice(2,1,"charlie");
console.log(bar)