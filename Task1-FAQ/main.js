const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

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