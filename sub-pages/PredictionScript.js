document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("predictionForm");

    function calculateRelationshipStatus() {
        let score = 0;
        const totalQuestions = 26;

        for (let i = 0; i < form.elements.length; i++) {
            if (form.elements[i].type === "checkbox" && form.elements[i].checked) {
                score++;
            }
        }

        const percentage = (score / totalQuestions) * 100;
        let resultText = "";

        if (percentage > 80) {
            resultText = "It seems like you have a strong connection!";
        } else if (percentage > 60) {
            resultText = "This might be more than a crush. There’s potential for a relationship.";
        } else if (percentage > 40) {
            resultText = "This may be more of a situationship or attraction, but with room for more.";
        } else {
            resultText = "This could be just a momentary attraction.";
        }

        // Redirect to the result page with the result text as a URL parameter
        window.location.href = `PredictionResult.html?result=${encodeURIComponent(resultText)}`;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        calculateRelationshipStatus();
    });
});
