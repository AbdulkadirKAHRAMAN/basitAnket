const sorular=[
    {
        soru:"1. sabah kahvaltı yapıyormusun",
        secenek1:"Evet",
        secenek2:"Hayır"    
    },
    {
        soru:"2. spor yapıyormusun",
        secenek1:"Evet",
        secenek2:"Hayır"  
        
        
    },
    {
        soru:"3. kitap okuyormusun",
        secenek1:"Evet",
        secenek2:"Hayır"  
        
    },
    {
        soru:"4. GÜnde 1.5 litre su içermisin",
        secenek1:"Evet",
        secenek2:"Hayır"  
        
    }

];
let cevaplar=[];
for (let index = 0; index < sorular.length; index++) {
    const cevap1= prompt(`${sorular[0].soru} secenekler ${sorular[0].secenek1}/${sorular[0].secenek2}`);
    if(cevap1==="evet"){
        cevaplar.push({
            cevap: sorular[0].secenek1
        });
    }else if(cevap1==="hayır"){
        cevaplar.push({
            cevap: sorular[0].secenek2
        });
    }
    
    const cevap2= prompt(`${sorular[1].soru} secenekler ${sorular[1].secenek1}/${sorular[1].secenek2}`);
    if(cevap2==="evet"){
        cevaplar.push({
            cevap: sorular[1].secenek1
        });
    }else if(cevap2==="hayır") {
        cevaplar.push({
            cevap: sorular[1].secenek2
        });
    }
    const cevap3= prompt(`${sorular[2].soru} secenekler ${sorular[2].secenek1}/${sorular[2].secenek2}`);
    if(cevap3==="evet"){
        cevaplar.push({
            cevap: sorular[2].secenek1
        });
    }else if(cevap3==="hayır") {
        cevaplar.push({
            cevap: sorular[2].secenek2
        });
    }
    const cevap4= prompt(`${sorular[3].soru} secenekler ${sorular[3].secenek1}/${sorular[3].secenek2}`);
    if(cevap4==="evet"){
        cevaplar.push({
            cevap: sorular[3].secenek1
        });
    }else if(cevap4==="hayır") {
        cevaplar.push({
            cevap: sorular[3].secenek2
        });
    }
        
}
for (let index = 0; index < sorular.length; index++) {
    console.log(sorular[index].soru);
    
        
}
console.log(cevaplar);

















