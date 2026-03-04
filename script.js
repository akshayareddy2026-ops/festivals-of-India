function speakFestival(festival) {

    let text = "";

    if (festival === "diwali") {
        text = "Good morning students. Today we will learn about Diwali. Diwali is celebrated to mark the return of Lord Rama to Ayodhya after defeating Ravana. It symbolizes victory of light over darkness. People wear traditional clothes, light diyas, and celebrate mostly in North India.";
    }

    if (festival === "holi") {
        text = "Good morning students. Today we will learn about Holi. Holi is based on the story of Prahlada and Holika. It is the festival of colors. People wear white clothes and celebrate mainly in Uttar Pradesh and North India.";
    }

    document.getElementById("boardText").innerText = text;

    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-IN";
    window.speechSynthesis.speak(speech);
}
