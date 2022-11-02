const questions = [
    {
        'que':'Which of the following is a markup language',
        'a':'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct':'a'
    },
    {
        'que':'Which yead was JavaScript Launched',
        'a':'1966',
        'b': '1995',
        'c': '1994',
        'd': 'none of the above',
        'correct':'b'
    },
    {
        'que':'What does CSS stands for',
        'a':'HyperText Markup Language',
        'b': 'Cascading Style Sheet',
        'c': 'Jason Object Notation',   
        'd': 'Helicopters Terminals ',
        'correct':'b'
    }
]

let total = questions.length;
let right = 0 , wrong = 0 ; 
let index = 0; 
const quesBox = document.getElementById("quesBox")
const optionsInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    const data = questions[index]
    quesBox.innerText = `${index+1}) ${data.que}` ;
    optionsInputs[0].nextElementSibling.innerText = data.a;
    optionsInputs[1].nextElementSibling.innerText = data.b;
    optionsInputs[2].nextElementSibling.innerText = data.c;
    optionsInputs[3].nextElementSibling.innerText = data.d;
}   

const submitQuiz = () => {
    const ans = getAnswer()
    if (ans === data.correct){
        right++;
    } else {
        wrong++; 
    }
    index++;
    loadQuestion()
    return;
}

const getAnswer = () => {
    optionsInputs.forEach(
        (input) => {
            if(input.checked) {
                return (input.value)  
            }
            else{
                console.log("no")
            }
        }
    )
}
