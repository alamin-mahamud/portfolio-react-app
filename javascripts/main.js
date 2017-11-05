$(document).ready(function() {


    var strings = [
        "Hello, I am ^1000 Alamin.",
        "I am a Full Stack Engineer.",
        "I am specialized in Back End",
        "I design and build",
        "Web Applications,",
        "Web Api's,",
        "Distributed Systems.",
        "I am from ^1000 Bangladesh."
    ];

    var options = {
        strings: strings,
        typeSpeed: 30,
        backDelay: 2000,
        smartBackspace: false,
        loop: true,
        //showCursor: true,
        //cursorChar: '|',
        //shuffle: 'true',
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 1000
    }

    var typed = new Typed("#introChange", options);
});