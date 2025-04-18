document.addEventListener('DOMContentLoaded', function() {

    const hint = document.querySelector(".hint");
    const hintAnswer = document.getElementById("hintAnswer");

    function openHint() {
        hintAnswer.style.display = "block";
    }

    function closeHint() {
        hintAnswer.style.display = "none";
    }

    hint.addEventListener("click", function() {
        openHint();
        setTimeout(function() {
            closeHint();
        }, 2500);
    });
});