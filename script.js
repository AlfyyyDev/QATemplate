// Get the input textarea and output element
var textInput = document.getElementById("textInput");
var output = document.getElementById("output");

// Add an event listener to the textarea for input changes
textInput.addEventListener("input", formatText);

function formatText() {
    // Get the current value of the textarea
    var inputText = textInput.value;

    // Format the text (replace line breaks with <br> tags)
    var formattedText = inputText.replace(/\n/g, "<br>");

    // Update the output element with the formatted text
    output.innerHTML = formattedText;
}
