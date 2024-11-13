// Get the result text from the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const resultText = urlParams.get('result');

// Display the result text with appropriate class
const resultElement = document.getElementById('result');
const resultContainer = document.getElementById('result-container');
resultElement.textContent = resultText || "No result found.";

// Set different screen colors based on the result
if (resultText === 'Love') {
    resultElement.classList.add('love');
    resultContainer.classList.add('love-screen');
} else if (resultText === 'Friendship') {
    resultElement.classList.add('friendship');
    resultContainer.classList.add('friendship-screen');
} else if (resultText === 'Strong connection') {
    resultElement.classList.add('strong-connection');
    resultContainer.classList.add('strong-connection-screen');
} else if (resultText === 'Potential relationship') {
    resultElement.classList.add('potential-relationship');
    resultContainer.classList.add('potential-relationship-screen');
} else if (resultText === 'Situationship') {
    resultElement.classList.add('situationship');
    resultContainer.classList.add('situationship-screen');
} else if (resultText === 'Momentary attraction') {
    resultElement.classList.add('momentary-attraction');
    resultContainer.classList.add('momentary-attraction-screen');
} else {
    resultElement.classList.add('unknown');
    resultContainer.classList.add('unknown-screen');
}
