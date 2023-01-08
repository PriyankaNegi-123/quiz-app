let quesArr = [
    {
        ques: '1. What is the full form of "HTML"?',
        optiona: 'Hyper Tool Markup Language',
        optionb: 'Hyper Text Markup Language',
        optionc: 'Hyper Text Makeup Language',
        optiond: 'Hyper Text Machine Language',
        correct: 'b'
    },
    {
        ques: '2. What is the full form of "CSS"?',
        optiona: 'Cascading Super Sheet',
        optionb: 'Catching Style Sheet',
        optionc: 'Catching Solo Sheet',
        optiond: 'Cascading Style Sheet',
        correct: 'd'
    },
    {
        ques: '3. What is the full form of "API"?',
        optiona: 'Application Programming Interchange',
        optionb: 'Application Programming Interface',
        optionc: 'Application Proclaiming Interface',
        optiond: 'Application Programming Introduction',
        correct: 'b'
    },
    {
        ques: '4. Which of the following is not a tag name in html?',
        optiona: 'Label',
        optionb: 'Span',
        optionc: 'Pank',
        optiond: 'Input',
        correct: 'c'
    },
    {
        ques: '5. What of the following is a self-closing tag in HTML?',
        optiona: 'span',
        optionb: 'div',
        optionc: 'h1',
        optiond: 'img',
        correct: 'd'
    }
]

let quesEl = document.getElementById("ques");
let inputEl = document.getElementsByClassName("answer");
let contEl = document.querySelector(".container");

let index = 0;
let totalQues = quesArr.length;
let rightAns = 0;
let wrongAns = 0;
// to load ques
const loadQues = ()=>{
    if(index == totalQues){
        return quizOver();
    }
    reset();
    quesEl.innerHTML = quesArr[index].ques;
    inputEl[0].nextElementSibling.innerHTML = quesArr[index].optiona;
    inputEl[1].nextElementSibling.innerHTML = quesArr[index].optionb;
    inputEl[2].nextElementSibling.innerHTML = quesArr[index].optionc;
    inputEl[03].nextElementSibling.innerHTML = quesArr[index].optiond;
}

// to reset input
const reset = ()=>{
    Array.from(inputEl).forEach((ele) => {
        ele.checked = false;
    })
}

// to submit ans
const submit = ()=>{
    const ans = getAnswer();
    console.log(ans, quesArr[index].correct)
    if(ans == quesArr[index].correct){
        rightAns++;
    }else{
        wrongAns++;
    }
    index++;
    loadQues();
    return;
}

// to get answer
const getAnswer = ()=>{
    let answer;
    Array.from(inputEl).forEach((ele) => {
        if(ele.checked){
            answer = ele.value;
        }
    })
    return answer;
}

// when questions are over
const quizOver = ()=>{
    contEl.innerHTML = `
    <div style = "text-align: center">
    <h1 style = "padding: 4rem 2rem 2rem;">Thank You for playing the quiz!</h1>
    <h3 style = "padding: 0rem 2rem 4rem;">You answered ${rightAns}/${totalQues} questions correct.</h3>
    `;
}

loadQues();




