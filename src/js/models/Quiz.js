export class Quiz{
    constructor(data){
        this.data=data;
    }

    createCapitalQuiz(){
        length=this.data.length;
        var index = this.randomIndex(length); 

        const country = this.data[index]
        const correctAnswer = country.capital ? country.capital[0] : "Başkent yok";

        // const allCountries = this.data.map(country => country.name.common);

        const option = [correctAnswer];

        for(let i=0; i<3; i++){
            index = this.randomIndex(length);
            var randomOption = this.data[index];
            randomOption = randomOption.capital ? randomOption.capital[0] : "Başkent yok";
            
            if(!option.includes(randomOption)){
                option.push(randomOption);  //random capital şıkkı atandı
            }
        }

        option.sort(() => Math.random() - 0.5); //şıklar rastgele dizildi

        const question = {
            country: country,
            text: `Bu ülkenin başkenti neresidir? ${country.name.common}`,
            options: option,
            correctAnswer: correctAnswer
        };

        return question;
    }

    randomIndex(length){
        var randomIndex = Math.floor(Math.random() * length)
        return randomIndex
    }

}