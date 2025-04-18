document.addEventListener('DOMContentLoaded', function() {

    const password = document.getElementById("pass");
    const correctPass = 240420;
    const correctAnswer = document.getElementById("correct-answer");
    const wrongAnswer = document.getElementById("wrong-answer");
    const wrongAnswer2 = document.getElementById("wrong-answer2");

    function correct() {
        correctAnswer.style.display = "block";
    }

    function wrong() {
        wrongAnswer.style.display = "block";
    }

    function wrong2() {
        wrongAnswer2.style.display = "block";
    }

    function closeWrong() {
        wrongAnswer.style.display = "none";
    }

    function closeWrong2() {
        wrongAnswer2.style.display = "none";
    }

    formPass.addEventListener('submit', function(e) {
        e.preventDefault();

        if(password.value == correctPass) {
            correct();
            setTimeout(function() {
                location.href = "/page/intro.html";
            }, 2000);
            password.value = "";
        } else if(password.value == "") {
            wrong2();
            setTimeout(function() {
                closeWrong2();
            }, 2000);
            password.value = "";
        } else {
            wrong();
            setTimeout(function() {
                closeWrong();
            }, 2000);
            password.value = "";
        }
    });
});