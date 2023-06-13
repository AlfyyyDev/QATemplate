// Get all input elements and output elements
var resultRadioFieldset = document.getElementById("resultRadioFieldset");
var radioButtons = document.querySelectorAll('input[name="resultRadio"]');
var environmentSelect = document.getElementById("environment-select");
var customEnvironmentContainer = document.getElementById("customEnvironmentContainer");
var customEnvironmentTextInput = document.getElementById("customEnvironment");
var commentBodyInput = document.getElementById("commentBodyInput");
var infoPanelInput = document.getElementById("infoPanelInput");
var output = document.getElementById("output");

// Establish output variables
var testEnvironment = "Environment";
var header = "Unselected";
var infoPanel = "No Data";
var commentBody = "No Comment";

// Formatting elements
// Header Format
var headerClass = "";
var infoPanelClass = "";
var commentBodyClass = "";

var headerBgColor = "#FFFFFF";
var headerIcon = "";

// Add an event listener to each input for changes
resultRadioFieldset.addEventListener("change", formatQaResult);
infoPanelInput.addEventListener("input", formatInfoPanel);
commentBodyInput.addEventListener("input", formatCommentBody);
customEnvironmentTextInput.addEventListener("input", formatCustomEnvironment);
environmentSelect.addEventListener("change", formatEnvironmentSelect);

// Format Setters

function setHeaderStyle(){
    var headerId;
    for (const radioButton of radioButtons) {
        if (radioButton.checked){
            headerId = radioButton.id;
            break;
        }
    }
    if(headerId === "pass"){
        headerClass = "result-pass"
        headerIcon = "✔️ "
    }
    else if(headerId === "fail"){
        headerClass = "result-fail"
        headerIcon = "❌ "
    }
    else if(headerId === "needInfo"){
        headerClass = "result-need-info"
        headerIcon = "🛈 "
    }
}

// Sets output header based on QA Result Radio Selection
function formatQaResult() {
    var radioResult;
    for (const radioButton of radioButtons) {
        if (radioButton.checked){
            radioResult = radioButton.value;
            break;
        }
    }
    header = radioResult;
    generateOutput();
}

// Sets environment text based on selection
function formatEnvironmentSelect() {
    console.log(environmentSelect.value)
    if (environmentSelect.value === "custom"){
        customEnvironmentContainer.style.display = "block";
        testEnvironment = customEnvironmentTextInput.value
        generateOutput();
    }
    else{
        customEnvironmentContainer.style.display = "none";
        testEnvironment = environmentSelect.value;
        generateOutput();
    }
}

function formatCustomEnvironment() {
    testEnvironment = customEnvironmentTextInput.value
    generateOutput();
}

function formatInfoPanel() {
    infoPanel = infoPanelInput.value;
    generateOutput();
}

function formatCommentBody() {
    commentBody = commentBodyInput.value;
    generateOutput();
}

// Generats the live output according to desired order
function generateOutput(){
    //TODO savePage();
    setHeaderStyle()
    output.innerHTML = 
        `<h2 class=${headerClass}>${headerIcon}${header} in ${testEnvironment}</h2>
        <p class=info-panel-output>🛈 ${infoPanel}</p>
        <p class=comment-body>${commentBody}</p>
        `;
}