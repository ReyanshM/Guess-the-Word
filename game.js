var player1,player2,player1_score=0,player2_score=0,original_word,question_word,x,answer_turn,question_turn,final_question;
function set_names(){
    player1=localStorage.getItem("player1");
    player2=localStorage.getItem("player2");
    document.getElementById("Player1_name").textContent=player1;
    document.getElementById("Player2_name").textContent=player2;
    display_scores();
    answer_turn=player2;
    document.getElementById("answer_turn").textContent=answer_turn;
    question_turn=player1;
    document.getElementById("question_turn").textContent=question_turn;
}
function submit(){
    original_word=document.getElementById("word_input").value;
    original_word=original_word.toLowerCase();
    question_word=original_word.split("");
    if(question_word.length<=7){
        question_word[1]="_";
        question_word[question_word.length-2]="_";
        question_word[Math.floor(question_word.length/2)]="_";
    }
    else{
        for(i=0;i<question_word.length;i+=3){
            question_word[i]="_";
        }
    }
    final_question=question_word.join("");
    document.getElementById("word_input").value="";
    document.getElementById("output").innerHTML=`
    <h3>Q.  ${final_question}</h3>
    <label>Your Answer : </label>
    <input id="answer_input" type="text">
    <br>
    <br>
    <button id="check" onclick="check()" class="btn btn-info">Check</button>
    `;
}
function check(){
    x=document.getElementById("answer_input").value;
    x=x.toLowerCase();
    if(original_word==x){
        alert("Yaay you got the correct Answer!!!");
        if(answer_turn==player1){
            player1_score++
            player2_score-=0.25
            answer_turn=player2;
            document.getElementById("answer_turn").textContent=answer_turn;
            question_turn=player1;
            document.getElementById("question_turn").textContent=question_turn;
        }
        else{
            player1_score-=0.25
            player2_score++
            answer_turn=player1;
            document.getElementById("answer_turn").textContent=answer_turn;
            question_turn=player2;
            document.getElementById("question_turn").textContent=question_turn;
        }
    }
    else{
        alert("Oops you couldn't guess it!!!");
        if(answer_turn==player1){
            player1_score--
            player2_score+=0.25
            answer_turn=player2;
            document.getElementById("answer_turn").textContent=answer_turn;
            question_turn=player1;
            document.getElementById("question_turn").textContent=question_turn;
        }
        else{
            player1_score+=0.25
            player2_score--
            answer_turn=player1;
            document.getElementById("answer_turn").textContent=answer_turn;
            question_turn=player2;
            document.getElementById("question_turn").textContent=question_turn;
        }
    }
    display_scores();
    document.getElementById("output").innerHTML=``;
}
function display_scores(){
    document.getElementById("player1_score").textContent=player1_score;
    document.getElementById("player2_score").textContent=player2_score;
}