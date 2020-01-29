var question = [
	{
		title: "The Operating System is a:",
		answers: ["System Software","Application Software","Utility Software","Malware"],
		correctAnswer:0
    },
    {
		title: "A computer Virus is a malicious program that affects the computer",
        answers: ["True","False"],
		correctAnswer: 0,
    },
    {
		title: "What does the “R” in RAM stands for?",
		answers: ["Rewrite","Read","Readable","Random"],
		correctAnswer: 3,
    },
    {
		title: "The first electronic digital computer was built in the:",
		answers: ["1920s","1940s","1960s","1970s"],
		correctAnswer: 1,
    },
    {
		title: "Software development is most often done by:",
		answers: ["Analyst","Programmer","End User","None of the Above"],
		correctAnswer: 1,
    },
    {
		title: "An example of an Input device is a:",
		answers: ["Digital Camera","Plotter","Optical-Disc","Monitor"],
		correctAnswer: 2,
    },
    {
		title: "The WWW is:",
		answers: ["World Wide Wig","World Wide WAN","World Wide Web","None of the above"],
		correctAnswer: 2,
    },
    {
		title: "Which storage device is considered portable?",
		answers: ["Hard-Disk","Magnetic Tape","Flash Drive","ROM"],
		correctAnswer: 2,
    },
    {
		title: "Which of the following are extensions of graphics files?",
		answers: ["BMP","TXT","DOC","EXE"],
		correctAnswer: 0,
    },
    {
		title: "Does 1024 KB make 1MB?",
		answers: ["True","False"],
		correctAnswer: 0,
	},
];
var guess;
var score = 0;
var currentQuestion = 0;
var i;


$(function() {


//clicking on the start quiz button hides the start page and shows the quiz page while firing the showQuestion() function
	$(".start a").on("click", function(e) {
	    e.preventDefault();
		$(".start").hide();
		$(".quiz").show();
        showQuestion();
   });

//when you click the li in the quiz answers it adds a class that highlights the answer and removes the class from whatever has the .selected class
   $(".quiz ul").on('click', 'li', function(){
    $('.selected').removeClass('selected')   
    $(this).addClass('selected');
   });

//gives a click function to the submit button on the quiz. and makes sure an answer is being selected
   $('.quiz a').click(function(e){
    e.preventDefault();
    if($('li.selected').length){
       let guess = Number($('li.selected').attr('id'));
        checkAnswer(guess);
    }
    else{
        alert('Please select an answer');
    }
   });

//
   $('.summary a').click(function(e){
       e.preventDefault();
       restartQuiz();
   });
});

//This function changes the header to the current question's title, gets rid of the html in the <ul> and replaces it with the 
//answers in the question array with what is in the variable
function showQuestion() {
	current = question[currentQuestion];
	$(".quiz h2").text(current.title);
	$(".quiz ul").html("");
	for (i = 0; i < current.answers.length; i++) {
		$(".quiz ul").append(`<li id="${i}">"${current.answers[i]}"</li>`);
	};
};

//checks if the answer is correct if it is correct it will add an increment to the score variable, if it is not, nothing happens.
function checkAnswer(guess) {
    // question = question[currentQuestion];
    if(current.correctAnswer === guess){
        score++;
    }
//goes to next question by incrementing the number of the var currentQuestion
    currentQuestion++;
    if(currentQuestion >= question.length){
        showSummary();
    } else{
//calls the showQuestion function to show the next question after it checks the answer
    showQuestion();
    };
};

//hides the quiz page and shows the summary page while injecting the congratulations text into the summary page
function showSummary() {
    $(".quiz").hide();
    $(".summary").show();
    $(".summary p").text('Congrats! You scored '+score+' out of '+question.length+' !!')
}

function restartQuiz(){
    score = 0;
    currentQuestion = 0;
    $('.summary').hide();
    $('.quiz').show();
     showQuestion();
}