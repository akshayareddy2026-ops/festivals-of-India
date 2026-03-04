function typeWriter(text) {
    let i = 0;
    let speed = 40;
    document.getElementById("boardText").innerHTML = "";

    function typing() {
        if (i < text.length) {
            document.getElementById("boardText").innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}

function startLesson(festival) {

    let text = "";

    if (festival === "diwali") {
        text = "Good morning students. Today we are learning about Diwali. Diwali is celebrated to mark the return of Lord Rama to Ayodhya after defeating Ravana. It represents victory of light over darkness. People wear traditional clothes, light diyas, and celebrate grandly in North India.";
    }

    if (festival === "holi") {
        text = "Good morning students. Today we are learning about Holi. Holi is based on the story of Prahlada and Holika. It is the festival of colors. People wear white clothes and celebrate mostly in Uttar Pradesh and North India.";
    }

    typeWriter(text);

    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-IN";
    window.speechSynthesis.speak(speech);
}
