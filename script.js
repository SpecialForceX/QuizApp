let questions = [
    {
        "question": "Wie heißt eine Pokemon-Region?",
        "answer_1": "Unfall",
        "answer_2": "Einfall",
        "answer_3": "Einall",
        "answer_4": "Durchfall",
        "right_answer": 3
    },
    {
        "question": "Einige Pokemon entführen angeblich gerne Kinder. Welches Pokemon zählt nicht dazu?",
        "answer_1": "Hypno",
        "answer_2": "Driftlon",
        "answer_3": "Gelatini",
        "answer_4": "Megalon",
        "right_answer": 4
    },
    {
        "question": "Wie heißen die Starter Pokemon aus der ersten Generation?",
        "answer_1": "Bisasam, Schiggy, Glumanda",
        "answer_2": "Karnimani, Endivie, Feurigel",
        "answer_3": "Geckarbor, Hydropie, Flemmli",
        "answer_4": "Panflam, Plinfa, Chelast",
        "right_answer": 1
    },
    {
        "question": "Welche Pokemon halten sich zahlreich in Azalea City auf?",
        "answer_1": "Porenta",
        "answer_2": "Pikachu",
        "answer_3": "Flegmon",
        "answer_4": "Skaraborn",
        "right_answer": 3
    },
    {
        "question": "Von welchem Typen wird Mimigma neutral getroffen?",
        "answer_1": "Stahl",
        "answer_2": "Käfer",
        "answer_3": "Drache",
        "answer_4": "Gift",
        "right_answer": 4
    },
    {
        "question": "Wieviele verschiedene Formen besitzt Icognito?",
        "answer_1": "30",
        "answer_2": "28",
        "answer_3": "26",
        "answer_4": "24",
        "right_answer": 2
    },
    {
        "question": "Wie startet der Pokemon Titelsong?",
        "answer_1": "Ich will Pokemonmeister werden ...",
        "answer_2": "Ich will Pummeluff knuddeln ...",
        "answer_3": "Ich will sie alle fangen ...",
        "answer_4": "Ich will der Allerbeste sein ...",
        "right_answer": 4
    },
    {
        "question": "Wie heißt der Ort, an dem sich Kapu-Fala befindet?",
        "answer_1": "Ruinen des Lebens",
        "answer_2": "Ruinen der Heimkehr",
        "answer_3": "Ruinen des Gedeihens",
        "answer_4": "Ruinen des Krieges",
        "right_answer": 1
    },
    {
        "question": "Wieviele Z-Kristalle kann man in Ultrasonne erhalten, bevor man Mele-Mele verlässt?",
        "answer_1": "Eins",
        "answer_2": "Drei",
        "answer_3": "Zwei",
        "answer_4": "Vier",
        "right_answer": 2
    },
    {
        "question": "Wieviele Pokemon haben eine Alola-Form erhalten, deren Vorstufe aber keine?",
        "answer_1": "Eins",
        "answer_2": "Zwei",
        "answer_3": "Drei",
        "answer_4": "Vier",
        "right_answer": 3
    },
]

let current_question = 0;
let amount_of_right_answers = 0;


function init(){
    showQuestion()
}


function showQuestion(){

    if(current_question >= questions.length) {
        document.getElementById('endscreen').style = '';
        document.getElementById('questionBody').style = 'display: none';

        document.getElementById('all-questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = amount_of_right_answers;
    } else {

        let percent = Math.round(((current_question + 1) / questions.length) * 100);

        document.getElementById('progress-bar').style = `width: ${percent}%;`;

        let question = questions[current_question];

        document.getElementById('question_text').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}


function answer(selection) {
    let question = questions[current_question];
    let SelectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(SelectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort!!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        amount_of_right_answers++;
    } else {
        console.log('Falsche Antwort!!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('nxt-btn').disabled = false;
}


function nextQuestion() {
    current_question++;
    showQuestion();

    document.getElementById('nxt-btn').disabled = true;
    resetCardsAnswers()
}


function resetCardsAnswers() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}


function restartGame() {
    current_question = 0;
    amount_of_right_answers = 0;
    document.getElementById('endscreen').style = 'display: none';
    document.getElementById('questionBody').style = '';
    document.getElementById('img-res').disabled = 'false';
    init();
}