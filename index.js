
(function() {
    const firstNameInput = document.getElementById('firstName-input');
    const lastNameInput = document.getElementById('lastName-input');
    const languageSelector = document.getElementById('language-selector');
    const formalitySelector = document.getElementById('formality-selector');
    const button = document.getElementById('button');
    const greetingText = document.getElementById('greeting-text');
    let isFormal = true;
    
    let myLittleLibrary = $mll(firstNameInput.value, lastNameInput.value, languageSelector.value);
    
    firstNameInput.addEventListener('input', function(event) {
        myLittleLibrary.setFirstName(event.target.value);
    });
    lastNameInput.addEventListener('input', function(event) {
        myLittleLibrary.setLastName(event.target.value);
    });

    languageSelector.addEventListener('change', function(event) {
        myLittleLibrary.setLanguage(event.target.value);
        myLittleLibrary.greet().greet(true);
    });

    formalitySelector.addEventListener('change', function(event) {
        isFormal = event.target.value === 'formal' ? true : false;
    });

    button.addEventListener('click', function(event) {
        myLittleLibrary.greet(isFormal).log();
        greetingText.innerHTML = myLittleLibrary.getText();
    })
})()

