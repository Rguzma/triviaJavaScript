// assuming you have jQuery


fetch ("https://opentdb.com/api.php?amount=10")
.then(response =>response.json()) 
.then((response)=>{
    
    console.log("info del json ",response.results)
    let trivia = document.querySelector('.results');
    trivia.innerHTML = ""; 
    for (let i = 0; i< response.results.length; i++){
                    trivia.innerHTML += `
                    <div>
                        <h2>${response.results[i].question}</h2>
                        <ul></ul>
                        <h3> <button id="correct${i}" onclick="colors(id)">${response.results[i].correct_answer}</button></h3>
                    </div>`
                    for(let j = 0; j<response.results[i].incorrect_answers.length; j++){
                        trivia.innerHTML += `
                        <h3 ><button id="incorrect${i}${j}" onclick="colors(id)">${response.results[i].incorrect_answers[j]}</button></h3>
                        </ul>`
                        
                    }
        
                }


});


function colors(id){
    var element = document.getElementById(id);
    console.log("element: ",element)
    // console.log("aqui esta event: ",i)
    // if incorrect_answers
    console.log("aqui esta event: ",id);
    if(id.match("incorrect")){
        element.style.background="red";
    }
    else{
        element.style.background= 'green';
    }
};

