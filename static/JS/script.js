// CHALLEGE 1:

function ageindays()
{
    var birthyr=prompt('What year were u born ?');      // Using prompt to take user input
    var age_in_days = (2021-birthyr)*365;
    //console.log(age_in_days);
   
  // We have to add age_in_days to document object module.

    var h1=document.createElement('h1');        //  Creating an h1 element
    var textans=document.createTextNode('You are '+age_in_days + ' days old');
    h1.setAttribute('id','ageindays');          // Set h1 id to age in days i.e h1 tag will have an id ageindays
    h1.appendChild(textans);                    // Adding textans to h1 
    document.getElementById('flex-box-result').appendChild(h1);         // putting h1 value to ' flex-box-result '
    console.log(age_in_days);
}

function reset()
{
    document.getElementById('ageindays').remove();

}


/// CHALLENGE 2;
function generatecat()
{
  var image=document.createElement('img');                    // Creating an image element
  var div=document.getElementById('flex-cat-gen');              //get the id " flex-cat-gen " of flex-box-container-2
  image.src="https://thecatapi.com/api/images/get?format=src&type=gif&size=small";         // Setting image source to a link 
  div.appendChild(image);                                          // Now appending image to div , so the image will get printed inside this 
                                                                      /*<div class="flex-box-container-2" id="flex-cat-gen">
                                                                          
                                                                      </div>*/
}


 // CHALLENGE 3: Rock Paper Sciccor

function rpsGame(urchoice)        // urchoice will tell which image u have choosen
{
  var human, bot;
  console.log("Urchoice ",urchoice)
  human=urchoice.id;
  console.log("Urchoice ",urchoice.id)
  bot= numbertochoice(randtorpsint());             // Bot recieve R/P/S;
  console.log('Computer choice:',bot);
  
  result = decidewinner(human,bot);
 // console.log(result);

  msg=finalmsg(result);  // { msg: 'You won' , color: 'green'}
 // console.log(msg);

  rpsfrontend(urchoice.id,bot,msg);   // function to display the result
}

function randtorpsint()               // Create a random integer {0,1,2}
{
  return Math.floor(Math.random()*3);
}

function numbertochoice(number)               // Now the computer will select R/ P/ S and will return it to bot
{
  return ['rock','paper','scissor'][number];     // The ' number ' is a random value that takes either R/P/S i.e 0/1/2
}

function decidewinner(urchoice,computerchoice)
{
  // It is a dictionary inside a dictionary. Here 1 --> Win  0 --> Loss   0.5 --> Draw
  // Inside the dict. the key is human choice and the object which is a dict. the key inside it is the option 
  //choosen by the computer

  var rpsdatabase = 
  {  
    'rock':{'scissor':1,'rock':0.5,'paper':0},
    'paper':{'rock':1,'paper':0.5,'scissor':0},
    'scissor':{'paper':1,'scissor':0.5,'rock':0}
  };
  // if human choice is rock go to the key 'rock' and then search the value and if the comp. choice is paper 
  //return the value 0
  // Thus rpsdatabase will return 0 as value to yourscore
  var yourscore= rpsdatabase[urchoice][computerchoice];   
  var compscore=rpsdatabase[computerchoice][urchoice];

  return [yourscore,compscore];       //returning the result
} 

function finalmsg([yourscore,compscore])    // Return the message of the result and its corresponding color
{
  if(yourscore === 0)         // if yourscore is 0 compscore will definly be 1 and vise versa
  {
    return{'message':"You lost",'color':'red'};
  }
  else if(yourscore==0.5)       //  if yourscore is 0.5 compscore will also be 0.5
  {
      return {'message':'you tied','color':'yellow'};
  }
  else
  {
    return {'message':'you won','color':'green'};
  }
}

function rpsfrontend(humanimagechoice,botimagechoice,finalmessage)
{
  // key 'rock' has its image , key 'scissor' has its image
  var imagedatabase=
  {
    'rock':document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissor':document.getElementById('scissor').src,
  };

  // Let remove all the images

  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissor').remove();

  var human_div=document.createElement('div');    // placing human choice in tis own div(box)
  var bot_div= document.createElement('div');       // placing bot choice in tis own div
  var message_div= document.createElement('div');   // placing message in tis own div

    // Raw way of showing image
  human_div.innerHTML= "<img src='"+imagedatabase[humanimagechoice]+ "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
  
  message_div.innerHTML= "<h1 style='color: "+finalmessage['color']+ "; font-size: 60px; padding: 30px; '>" + finalmessage['message'] + "</h1>"

  bot_div.innerHTML= "<img src='"+imagedatabase[botimagechoice]+ "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"
  
  // placing div in a flex-box
  document.getElementById('flex-box-rps-div').append(human_div);
  document.getElementById('flex-box-rps-div').append(message_div);
  document.getElementById('flex-box-rps-div').append(bot_div);
}


// CHALLENGE 4: Change the color of all buttons

var all_button=document.getElementsByTagName('button');
console.log(all_button);
var copyAllButton=[]
for(let i=0;i<all_button.length;i++)
{
  copyAllButton.push(all_button[i].classList[1]);   // keeping the 2nd class vlaue of all_button i.e btn-danger,btn-warning
}

console.log(copyAllButton);

// Main function to control the color of the buttons
function buttoncolorchange(buttonthing)
{
  if(buttonthing.value==='red')
    button_red();
  else if (buttonthing.value=== 'green')
    button_green();
  else if(buttonthing.value === 'reset')
    button_reset();
  else if(buttonthing.value==='random')
    random_colors();
}

// Changing all button color to red
function button_red()
{
  for(let i=0;i<all_button.length;i++) 
  { 
    // classList[i] - classList[1] contains the 2nd classes like btn-primary,btn-success,btn-warning and 
    // all_button[i].classList[1] - return the 2nd classes of all_button 

    all_button[i].classList.remove(all_button[i].classList[1]);  // it tells that go to each button suppose the first button at 0 
    // i.e btn btn-primary and access its class list and then remove remove the 2nd class of all_button at 0th position
    all_button[i].classList.add('btn-danger');
  }
}

// Changing all button color to green

function button_green()
{
  for(let i=0;i<all_button.length;i++) 
  { 
    // classList[i] - classList[1] contains the 2nd classes like btn-primary,btn-success,btn-warning and 
    // all_button[i].classList[1] - return the 2nd classes of all_button 

    all_button[i].classList.remove(all_button[i].classList[1]);  // it tells that go to each button suppose the first button at 0 
    // i.e btn btn-primary and access its class list and then remove remove the 2nd class of all_button at 0th position
    all_button[i].classList.add('btn-success');
  }
}

// Reset the color of the button

function button_reset()
{
  for(let i=0;i<all_button.length;i++)
  {
    all_button[i].classList.remove(all_button[i].classList[1]);  // it tells that go to each button suppose the first button at 0 
    // then go there and remove the 2nd class of it i.e btn-primary
    all_button[i].classList.add(copyAllButton[i]);
  }
}

// Changing all button color randomly

function random_colors()
{
  var choice=['btn-primary','btn-danger','btn-success','btn-warning']
  for(let i=0;i<all_button.length;i++)
  {
    let randnum=Math.floor(Math.random()*4);      // generate random numbers from 0 to 3
    all_button[i].classList.remove(all_button[i].classList[1]);  
    all_button[i].classList.add(choice[randnum]);   // Adding color randomly from choice[]
  }
}

// Challenge 5-

let blackjackGame=
{
  'you':{'scoreSpan':'#your-blackjack-result','div':'#your-box','score':0},
  'dealer':{
    'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0
  },
  'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
  'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
  'win':0,
  'loss':0,
  'draw':0,
  'isStand': false,
  'turnOver': false,    // It means u can neither Hit nor Stand , all turns are over
};    
//using you to acess scoreSpan that will store id=your-blackjack-result, 
//similarily div to acess id='your-box'(see in html) and score

const You=blackjackGame['you']; // to acess key 'you' of blackjackGame
const Dealer=blackjackGame['dealer']  // to acess key 'dealer' of blackjackGame

//Sounds
const hitSounds=new Audio('static/sounds/swish.m4a');   // for the sound effect.
const winSound=new Audio('static/sounds/cash.mp3');
const looseSound=new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit)
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal)
document.querySelector('#blackjack-stand-button').addEventListener('click',dealerLogic)

function blackjackHit()
{
  if(blackjackGame['isStand']=== false)  // It means that if Stnad button is not activated then only Hit button can work
  { 
    let card=RandomCard();    // to generate card numbers
    console.log(card);
    showCard(You,card);
    updateScore(card,You);    //updating your score
  }
  //showCard(Dealer,card);
  showScore(You);
}

function showCard(activePlayer,card)
{
  if(activePlayer['score']<=21)
  {
    let cardImage=document.createElement('img'); // creating img element of html and storing it cardImage
    cardImage.src=`static/pic/${card}.png`;   // now using cardImage to access the picture
    document.querySelector(activePlayer['div']).appendChild(cardImage);    // using querySelector in place of getElementById and pasting 
    // the cardImage over the div box
    hitSounds.play();     //playing the sound

  }
}


function blackjackDeal()
{
  if(blackjackGame['turnOver'] === true)
  {
    blackjackGame['isStand']=false;    // Make Stand disable also after turn is over

    // querySelector id=your-box , inside that get all the images of your-box
    let yourImages=document.querySelector('#your-box').querySelectorAll('img'); // return list of all the images
    console.log(yourImages);

    for(i=0;i<yourImages.length;i++)
      yourImages[i].remove();
    
    let dealerImages=document.querySelector('#dealer-box').querySelectorAll('img'); // return list of all the images
    // console.log(yourImages);
    for(i=0;i<dealerImages.length;i++)
      dealerImages[i].remove();
    
    You['score']=0;
    Dealer['score']=0;

    // after exceeding the score limit setting the result back to 0
    document.querySelector('#your-blackjack-result').textContent=0;  

    // after reseting the result reset the color back to black
    document.querySelector('#your-blackjack-result').style.color='black';
    
    document.querySelector('#dealer-blackjack-result').textContent=0;
    document.querySelector('#dealer-blackjack-result').style.color='black';

    document.querySelector("#blackjack").textContent="Let's play";
    document.querySelector("#blackjack").style.color='black';

    blackjackGame['turnOver']= false;   // set to false so that we can restart the game again
  }
}

function RandomCard()
{
  let randomIndex=Math.floor(Math.random()*13)  // selct array index from 0 to 12
  return blackjackGame['cards'][randomIndex];
}


function updateScore(card,activePlayer)
{
  // if adding 11 keeps me below 21 add 11 
  // else add 1
  if(card=='A') /// if the card is an ace
  {
    if(activePlayer['score']+blackjackGame['cardsMap'][card][1] <= 21)   // blackjackGame['cardsMap'][card][1] - For ace card only
    {
        activePlayer['score']+=blackjackGame['cardsMap'][card][1];
    }
    else
        activePlayer['score']+= blackjackGame['cardsMap'][card][0];
  }  
  else
    activePlayer['score'] += blackjackGame['cardsMap'][card];  // here the card is the key
  
}

function showScore(activePlayer)
{
  // check if the result is exceeding 21 or not
  if(activePlayer['score']>21)
  {
    document.querySelector(activePlayer['scoreSpan']).textContent='Are Bas Kar Bhai';
    document.querySelector(activePlayer['scoreSpan']).style.color='green'; /// Styling the scoreSpan
  }
  else
  {
    document.querySelector(activePlayer['scoreSpan']).textContent=activePlayer['score'];
    console.log("Player- ",activePlayer,"Score ",activePlayer['score']);
  }
}

function sleep(ms)
{
  return new Promise(resolve => setTimeout(resolve,ms));
}

async function dealerLogic()  // using async dont allow your browser to freez for the sleep(1000)
{
  blackjackGame['isStand']=true;    // Stand mode is now activated

  while(Dealer['score'] <16 && blackjackGame['isStand']===true)
  {
    let card=RandomCard();
    showCard(Dealer,card);
    updateScore(card,Dealer);
    showScore(Dealer);
    await sleep(1000);
  }
 
    blackjackGame['turnOver']=true; // Both side turns are over
    let win=computerWinner();
    showResult(win);
    console.log(blackjackGame['turnOver']);
}


// fcuntion to compute winner and return who just won
// Update win,loss,draw
function computerWinner()
{
  let winner;

  //When u dont bust
  if(You['score']<=21)
  {
    // when You score is > Dealer or when dealer bust but your 
    if(You['score']>Dealer['score'] || Dealer['score']>21)
    {
      blackjackGame['win']++;
      winner=You;
    }
    else if(You['score']<Dealer['score'])
    {
      //console.log("Lost");
      blackjackGame['loss']++;
      winner=Dealer;
    }
    else if(You['score'] === Dealer['score'])
    {
      //console.log("Draw!");
      blackjackGame['draw']++;
    }
  }
  // when user busts but dealer doesn't 
  else if(You['score']>21 && Dealer['score'] <=21)
  {
    console.log("you lost");
    blackjackGame['loss']++;
    winner =Dealer;
  }

  // When user and u both bust
  else if(You['score'] >21 && Dealer['score'] >21)
  {
    console.log("you draw!");
    blackjackGame['draw']++;
  }
  console.log(blackjackGame);
  return  winner;

}

function showResult(winner)
{
  let message, messageColor;
  if(blackjackGame['turnOver'] === true)
  {

    if(winner === You)
    {
      message='You won!';
      messageColor='purple';
      winSound.play();
      // Update the score in the table
      document.querySelector("#wins").textContent=blackjackGame['win'];

    }
    else if(winner === Dealer)
    {
      message='Computer Won!';
      messageColor='red';
      looseSound.play();

      document.querySelector("#losses").textContent=blackjackGame['loss'];
    }
    else{
      message="It's a Draw!";
      messageColor='orange';
    // winSound.play();

      document.querySelector("#draw").textContent=blackjackGame['draw'];
    }
    document.querySelector("#blackjack").textContent=message;
    document.querySelector("#blackjack").style.color=messageColor;
  }
}