import { elements } from "../base";

export const displayInfo =(soru,options,correctAnswer,country) => {
        elements.options_list.innerHTML = ''; // seçenek varsa temizlenir
        elements.info.innerHTML = ''; // bilgiler temizlenir

    elements.soru.textContent=soru;
    // console.log(country);
    const html = `
        <li id="0" class="list-group-item list-group-item-action">A) ${options[0]}</li>
        <li id="1" class="list-group-item list-group-item-action">B) ${options[1]}</li>
        <li id="2" class="list-group-item list-group-item-action">C) ${options[2]}</li>
        <li id="3" class="list-group-item list-group-item-action">D) ${options[3]}</li>
    `;


    const keys = Object.keys(country.languages); //dil keylerini alıyoruz çünkü objcet şeklinde tutluyor
    let languagesList = [];

    keys.forEach(key => {
        languagesList.push(country.languages[key]); //keylerin value değerleri alınıyor 
    });

    const languages = languagesList.join(', '); //birleştiriliyor

    const infoHtml = `
            <p class="card-text"><small>Başkent: ? </small></p>
            <p class="card-text"><small>Nüfus: ${country.population}</small></p>
            <p class="card-text"><small>Dil: ${languages}</small></p>
    `;

    const flags = {
        url: country.flags.png,
        alt: country.flags.alt
    }
    

    elements.img.src=flags.url;
    elements.img.alt=flags.alt;
    elements.options_list.insertAdjacentHTML('beforeend',html);
    elements.info.insertAdjacentHTML('beforeend',infoHtml);
}





