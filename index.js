// VARIBALES 
let score = 0; 
let currentQuestion = 0; 
let questions = [
    {
        title: "What is not a coffee cup size at Starbucks?",
        answers: ["tall", 'grande', 'vente', 'guapo'],
        correct: 3
    },
    {
        title: "When did Starbucks first open?",
        answers: ["1971", '1999', '2002', '2010'],
        correct: 0
    },
    {
        title: "What city was the first Starbucks?",
        answers: ["Los Angeles", 'Seattle', 'Portland', 'Pittsburgh'],
        correct: 1
    },
    {
        title: "What is a popular holiday drink around the fall?",
        answers: ["Strawberry Frap", 'Iced Americano', 'PSL', 'Carmel Machiatto'],
        correct: 2
    },
]



// EVENT LISTENERS 

// WHen DOM loads
$(function(){

    // Press Start
    $('.js-start').click(function(){
        $('.js-start').hide();
        $('.js-quiz').show();
        showQuestion();
    })

    // Highlight Selected
    $('.js-quiz ul').on('click', 'li', function(e){
        $('.js-quiz li').removeClass('selected');
        $(this).addClass('selected');
    });


    // Press Submit
    $('.js-quiz a').click(function(){
        let guess = parseInt($('.selected').attr('id'));
        checkAnswer(guess);
    });

    // Press Restart 
    $('.js-summary a').click(function(){
        restartQuiz();
    });
});


// FUNCTIONS 

function showQuestion (){
    let question = questions[currentQuestion];
    $('.js-quiz h2').text(question.title);
    $('.js-quiz ul').html('');
    for(let i = 0; i < question.answers.length; i++){
        $('.js-quiz ul').append(
            `<li id="${i}">${question.answers[i]}</li>`
        );
    }
}

function checkAnswer(guess){

    let question = questions[currentQuestion];
    if(guess === question.correct ) {
        score++;
    }

    currentQuestion++;
    if(currentQuestion >= questions.length){
        showSummary();
    } else {

        showQuestion();
    }
}

function showSummary(){
    $('.js-quiz').hide();
    $('.js-summary').show();
    $('.js-summary p').text(
        `You Scored ${score} out of ${questions.length}!`
    )
}

function restartQuiz(){
    $('.js-summary').hide();
    $('.js-quiz').show();
    score = 0;
    currentQuestion = 0; 
    showQuestion();
}