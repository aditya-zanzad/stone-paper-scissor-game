let userscore = 0;
let computerscore = 0;
 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
 const users = document.querySelector("#user-score");
 const compt = document.querySelector("#computer-score");
 let usercount = 1;
 let compcount = 1;
 ///////////////////////////function for game///////////////////\

 ///////user choice/////////
 const playgame = (userchoice) =>{
    // it is for user
    console.log("user choie is =",userchoice);

    const compchoice = getcompchoice();
    console.log("computer choice :",compchoice);

    /// draw function
    const drawgame = () =>{
        console.log("game was draw");
        msg.innerText ="game was draw! play again";
        msg.style.backgroundColor = "blue";
        msg.style.color = "white";
    }

    /// who is win condition
    const showwinner = (userwin , userchoice , compchoice) =>{
        if(userwin){
            console.log("user win");
            msg.innerText = `you win! your ${userchoice}beats
            ${comptchoice}`;
            msg.style.backgroundColor = "green";
            msg.style.color = "white";
            users.innerText = usercount++;

        }
        else{
            console.log("computer win");
            msg.innerText = `computer win! computer choice ${comptchoice}beats
            ${userchoice}`;
            msg.style.backgroundColor = "red";
            msg.style.color = "white";
            compt.innerText = compcount++;
        }
    }

    ///// condition who is win /////
    if(userchoice==compchoice){
        drawgame();
    }
     else{
        let userwin = true;
        if(userchoice==="rock"){
           userwin = compchoice==="paper"?false : true;
        }
        else if(userchoice==="paper"){
            userwin = compchoice==="scissors"?false : true;
        }
        else {
            userwin = compchoice==="rock"?false : true;
        }
        showwinner(userwin);
     }
 };

 ////////computer generate///
 const getcompchoice = () =>{
    //rock paper scissor randomly choice any one 
    const options = ["rock","paper","scissors"]; 
    ////in java script math.random()is a function which take any one array from it
    const randomindex = Math.floor(Math.random()*3);
    return options[randomindex];
 }


 ////////////////for add a event function //////////////////////
 choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
    playgame(userchoice);
    })
 });