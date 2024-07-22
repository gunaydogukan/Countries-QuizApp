import { elements } from "../base";

export const displaySelectedOptions =(target,icon) => {
    Array.from(elements.options_list.children).forEach(li => {
        li.classList.add('disabled');
        li.classList.remove('list-group-item-action');
        elements.options_list.style.pointerEvents = 'none';
    });

    if(icon == elements.correctIcon){
        target.classList.add("correct");
        target.insertAdjacentHTML("beforeend", icon);

    }else{
        target.classList.add("incorrect");
        target.insertAdjacentHTML("beforeend", icon);
    }
}

export const clearOptions = () => {
    Array.from(elements.options_list.children).forEach(li => {
        li.classList.remove('disabled');
        li.classList.add('list-group-item-action');
        elements.options_list.style.pointerEvents = 'auto';
    });

    const icons = elements.options_list.querySelectorAll('.correct, .incorrect');
    console.log(icons);
    
    icons.forEach(icon => {
        icon.classList.remove('correct', 'incorrect'); // Burada sadece class'ları kaldırıyoruz
    });

        const correctIconHTML = elements.correctIcon;
        const incorrectIconHTML = elements.incorrectIcon;
    
        // Correct iconları kaldır
        const correctIcons = elements.options_list.querySelectorAll(`div.icon > i.fas.fa-check`);
        correctIcons.forEach(icon => icon.parentElement.remove());
    
        // Incorrect iconları kaldır
        const incorrectIcons = elements.options_list.querySelectorAll(`div.icon > i.fas.fa-times`);
        incorrectIcons.forEach(icon => icon.parentElement.remove());
}