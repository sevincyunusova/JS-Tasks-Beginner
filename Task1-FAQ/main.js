const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

answers.forEach(answer =>{
    if (!answer.classList.contains('hidden')){
        answer.classList.add('hidden');
    }
});

questions.forEach(question => {
    question.addEventListener('click', () => {
        answers.forEach(answer =>{
            if ( answer !== answer.nextElementSibling){
                answer.classList.add('hidden');
            };
        });
        question.nextElementSibling.classList.toggle('hidden');
    });
})