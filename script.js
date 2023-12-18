let sayi = Number(prompt('Lütfen faktöriyelini bulmak istediğiniz sayıyı giriniz.'))
let carpim = 1;

for(let i = 1 ; i<=sayi ; i++){
    carpim=carpim * i;
}
alert('Sonuç : ' + carpim)