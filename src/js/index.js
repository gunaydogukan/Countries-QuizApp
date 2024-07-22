import { CountryService } from './models/Country';
import { Quiz } from './models/Quiz';
import * as optionView from './Views/optionViews';
import * as infoView from './Views/infoViews';
import { elements } from './base';


const state = {};
state.country = new CountryService();
let question;

const questionController = async () => {
    const data = await state.country.getCountry();

    const quiz = new Quiz(data);
    question = quiz.createCapitalQuiz();
    state.questions=question;
    
    // console.log('Soru:', question.text);
    // console.log('Options:', question.options);
    // console.log('Doğru CEVAP:', question.correctAnswer);
    
    infoView.displayInfo(question.text, question.options, question.correctAnswer, question.country);
    question="";

}


elements.options_list.addEventListener('click', function (event) {
    const target = event.target;

    const id = target.id;
    var i = 0;

    for (var index in state.questions.options) {
        console.log(state.questions.options[index]);
        if (state.questions.options[index] == state.questions.correctAnswer) {
            i = index;
            break;
        }
    }

    if (i == id) {
        console.log("doğru cevap verildi");
        optionView.displaySelectedOptions(target, elements.correctIcon);
    } else {
        console.log("yanlış cevap verildi");
        optionView.displaySelectedOptions(target, elements.incorrectIcon);
    }

});

elements.nextButton.addEventListener('click', function () {
    optionView.clearOptions(); //optionlar temizlenir 
    questionController(); //yeni soru gelir
});



questionController();