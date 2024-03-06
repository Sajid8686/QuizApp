import prompt from "prompt-sync"
import data from "./data/quizdata.json" assert{type: "json"}

// *************************** Input Function ********************************

function Input() {
    MainMenu()
    let input = prompt()
    let idno = parseInt(input("Enter id number: "))
    if (idno==1) {
        //console.log(data);
        allQuestions()
        
    } else {
        console.log("Thank you for Using this App");
        process.exit();
    }
}

// *************************** MainMenu Function ********************************

function MainMenu() {
    console.log(`<----- Main Menu ----->
    1. Print all questions
    2. Print a question given id
    3. Add a new question
    4. Delete a question given id
    5. Shuffle questions
    6. Take quiz
    7. Exit`);

}

// *************************** All Questions Function ********************************

function allQuestions() {
    let optno = ['1', '2', '3', '4']

    for(let i=0; i<data.length; i++){
        console.log("Q."+ i + ": (id:"+data[i].id+") "+ data[i].statement);
        for(let j=0; j<data[i].options.length; j++){
            let alphabet = optno[j]
            if(data[i].answer == data[i].options[j]){
                console.log("\t"+ alphabet+ ". *"+ data[i].options[j])
            }
            else {
                console.log("\t"+ alphabet+ ". "+ data[i].options[j])
            }
        }
    }
}




Input()
