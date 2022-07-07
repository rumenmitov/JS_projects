alert("Welcome to my Math Quiz! Make sure you enter your answers as simplified fractions. Once you have answered all your questions click the 'Check!' button to see how you did!");

window.onload = init;

function init() {
    var checkButton = document.getElementById("check");
    checkButton.onclick = assign;                                        // button



    function assign() {
        var questions = [ document.getElementById("q1").value,          // a list of the values inputed by the user
        document.getElementById("q2").value,
        document.getElementById("q3").value,
        document.getElementById("q4").value,
        document.getElementById("q5").value,
        document.getElementById("q6").value,
        document.getElementById("q7").value,
        document.getElementById("q8").value,
        document.getElementById("q9").value,
        document.getElementById("q10").value
        ];

        teacher.correct(questions);                                    // calling teacher.correct and giving it the user inputs
    }

}

var teacher = {
    points : 0,

    answers : [ "9", "72", "4", "4", "3", "-3", "7", "-5/6", "3/5", "69" ],

    correct : function(questions) {
        for (var i = 0; i < questions.length; i++) {             // for loop to loop through all the questions
            if (questions[i] != this.answers[i]) {
                document.getElementById("a" + (i + 1)).setAttribute("id", "wrong"); // if question not equal to answer, then browser adds "wrong" id to that question in the html
            } else {
                document.getElementById("a" + (i + 1)).setAttribute("id", "right"); // if question equal to answer, then browser adds "right" id to that question in the html
                this.points++; // if question is right add one point
            }
        }  // ends loop

        var score = document.getElementById("score");  // calculates the score in % and displays a personalised message
        if (this.points === 10) {
            score.innerHTML = (this.points*10) + "%! Perfect score! (You must've cheated!)";
        } else if (this.points === 9) {
            score.innerHTML = (this.points*10) + "%! Close but no cigar! Better luck next time!";
        } else if (this.points === 8) {
            score.innerHTML = (this.points*10) + "%! Bravo! A bit more practice and you'll get there!";
        } else if (this.points === 7) {
            score.innerHTML = (this.points*10) + "%! Practice makes perfect!";
        } else if (this.points === 6) {
            score.innerHTML = (this.points*10) + "%! You can do better...I hope";
        } else if (this.points === 5) {
            score.innerHTML = (this.points*10) + "%! I hope that's not what you will get on your BAC!";
        } else if (this.points === 4) {
            score.innerHTML = (this.points*10) + "%! You were just fooling around, right?...Right?";
        } else if (this.points < 3) {
            score.innerHTML = (this.points*10) + "%! Are you sure you are S7??????";
        }
        
    }
};






