const request=require('request'),{Telegraf}=require('telegraf'),url='https://www.coolbet.com/ru/stavki/vhodjasie-bilety',
blt='<div class="sc-bbkauy cNyHyN">',
spt='<div class="bet-sport">',
lg='<span class="match-league">',
nm='<span class="match-name">',
rs='<div class="market-name">',
mo='<span class="market-outcome">',
bt1='<div class="sc-daURTG hYnXvk">',
bt2='<div class="ticket-total-stake">',
bot=new Telegraf('1695129515:AAGVRSieyUUljVmKaOB-dcHf75f5qe1tOV4');
request(url,(e,r,b)=>{
    if(e)throw e;
    const h=b,bs=h.split(blt);//html билеты
    let m='';// msg
    for(let i=0;i<bs.length;i++){
        const t=bs[i];//text
        m+=`
---------------
${t.split(spt)[1].split('src="')[1].split('"')[0].split('/')[t.split(spt)[1].split('src="')[1].split('"')[0].split('/').length-1].split('-ico.png')[0]}
${t.split(lg)[1].split('</')[0]}
${t.split(nm)[1].split('</')[0]}
${t.split(rs)[1].split('</')[0]} → ${t.split(mo)[1].split('</')}
${t.split(bt1)[1].split('<')[0]}
${t.split(bt2)[1].split('<')[0]}
---------------
        `;
    }
    console.log(m);
});