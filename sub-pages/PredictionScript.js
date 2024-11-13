// Function to show the next section
function nextSection(sectionNumber) {
    // Hide the current section
    document.getElementById('section' + (sectionNumber - 1)).style.display = 'none';
    // Show the next section
    document.getElementById('section' + sectionNumber).style.display = 'block';
}

// Function to show the previous section
function prevSection(sectionNumber) {
    // Hide the current section
    document.getElementById('section' + (sectionNumber + 1)).style.display = 'none';
    // Show the previous section
    document.getElementById('section' + sectionNumber).style.display = 'block';
}

// Wait for the DOM to be fully loaded before executing the rest
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("predictionForm");

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        calculateRelationshipStatus();
    });

    // Function to calculate relationship status based on answers
    function calculateRelationshipStatus() {
        let score = 0;
        const totalQuestions = 9; // total questions (not 26, since only 9 questions are present in the form)

        // Loop through the form's checkboxes and calculate the score
        for (let i = 0; i < form.elements.length; i++) {
            if (form.elements[i].type === "checkbox" && form.elements[i].checked) {
                score++;
            }
        }

        // Calculate the percentage of checked answers
        const percentage = (score / totalQuestions) * 100;
        let resultText = "";

        // Determine relationship status based on score percentage
        if (percentage > 80) {
            resultText = "Strong connection";
        } else if (percentage > 60) {
            resultText = "Potential relationship";
        } else if (percentage > 40) {
            resultText = "Situationship";
        } else {
            resultText = "Momentary attraction";
        }

        // Redirect to result page with the result
        window.location.href = `PredictionResult.html?result=${encodeURIComponent(resultText)}`;
    }
});
