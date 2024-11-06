(function(global) {
    // 'new' an obejct
    let MyLittleLibrary = function name(firstName, lastName, language) {
        return new MyLittleLibrary.init(firstName, lastName, language)
    };

    // list of suported languages
    let languages = ['en', 'pt'];

    //informal greeting texts based on languages
    let greetings = {
        en: 'Hi',
        pt: 'Olá',
    };

    //formal greeting texts based on languages
    let formalGreetings = {
        en: 'Hello',
        pt: 'Saudações',
    };

    //log messages texts based on languages
    let logMessages = {
        en: 'Logged in',
        pt: 'Sessão iniciada',
    };

    //variable will contain the output value of the greeting text
    let text = '';

    MyLittleLibrary.prototype = {
        // method to return full name text
        fullName: function() {
            return `${this.firstName} ${this.lastName}`
        },
        // method to validate language support
        validate: function() {
            if(languages.indexOf(this.language) === -1){
                throw new Error("Invalida Language");
            };
        },
        // method to return informa greeting text
        greeting: function() {
            return `${greetings[this.language]} ${this.firstName}`;
        },
        // method to return forma greeting text
        formalGreeting: function() {
            return `${formalGreetings[this.language]}, ${this.fullName()}`;
        },
        greet: function(isFormal) {
            // depending on formality, 'text' letiable will be assigned with the greeting text
            if (isFormal) {
                text = this.formalGreeting();
            } else {
                text = this.greeting();
            };

            if (console) {
                console.log(text);
            };

            // return 'this' to allow method chaining
            return this;
        },
        // method to get the greeting text
        getText: function name() {
          return text;  
        },
        //method that simply logs out a message
        log: function() {
            if (console) {
                console.log(`${logMessages[this.language]}: ${this.fullName()}`);
            };

            return this;
        },
        // update first name
        setFirstName:  function(firstName) {
            this.firstName = firstName;

            return this;
        },
        // update last name
        setLastName:  function(lastName) {
            this.lastName = lastName;

            return this;
        },
        // update the language
        setLanguage:  function(lang) {
            this.language = lang;
            this.validate();

            return this;
        }
    };

    // object is created here without the need to use the 'new' keyword
    MyLittleLibrary.init = function (firstName, lastName, language) {
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.language = language || 'en';
        this.validate();
    };
    
    // trick from JQuery so that we don't have to use the 'new' keyword 
    MyLittleLibrary.init.prototype = MyLittleLibrary.prototype;

    // attach our library to the global object alongside our '$mll' shorthand
    global.Greeter = global.$mll = MyLittleLibrary
    
})(window)