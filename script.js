let myjokes = [{
    "joke": "A funny bird is the pelican His beak can hold more than his belly can He can hold in his beak Enough for a week And I don't know how the heck he can!"
},
{
    "joke": "\"So Sherlock...\" asked Watson, \"I forget, what was your highest degree of education?\" \"Elementary, my dear Watson.\""
},
{
    "joke": "Why did the chicken kill itself? To get to the other side."
},
{
    "joke": "Two antennas met on a roof, they fell in love and got married, the ceremony was awful but the reception was brilliant."
},
{
    "joke": "I am not pro gay. I am not even amateur gay. But, I support their rights."
},
{
    "joke": "When does one play a corny game? You play it by ear."
},
{
    "joke": "what did socrates learn from the T-rex? i dino"
},
{
    "joke": "Why should you never invest in bakeries? Because they have a high turnover rate."
},
{
    "joke": "I bought some shoes from a drug dealer, I don't know what he laced them with but I have been tripping all day."
},
{
    "joke": "Did you hear about the production delays at that company that makes scales using lengthy pipes? They had really long weights."
},
{
    "joke": "Wanna hear a joke about unemployed people? Nevermind, they don't work."
},
{
    "joke": "Why did the sand dune blush? Because the sea weed"
},
{
    "joke": "Why don't you want your nose to be 12 inches long? because then it would be a foot!"
},
{
    "joke": "What do you call a sheep with no legs? A cloud."
},
{
    "joke": "What do you call a singing laptop? A Dell!"
},
{
    "joke": "Do you think George Clooney has an iTunes playlist called Clooney Tunes?"
},
{
    "joke": "What kind of birds stick together? Vel-crows"
},
{
    "joke": "What do you call a cow that just gave birth? Decaffeinated"
},
{
    "joke": "What do you call a pile of dogs? A ruff terrain."
},
{
    "joke": "What has a bottom at the top? Your legs."
},
{
    "joke": "Why did the banker leave his job? He lost interest."
},
{
    "joke": "Two chimps are in the bath One says \"ooh oooh eek eek\" The other one says \"well put some cold water in then!\""
},
{
    "joke": "What do you call someone who makes a lot of money through deforestation of the Amazon? A Brazillionaire!"
},
{
    "joke": "How many Saiyans does it take to change a lightbulb? Just one, but it takes 5 episodes."
},
{
    "joke": "What do you call a cow that doesn't give milk? A Milk Dud."
},
{
    "joke": "Why did the camera go to the doctor? It had a low light problem."
},
{
    "joke": "What's a balloon's favorite genre of music? Pop."
},
{
    "joke": "I know a woman who owns a taser... Let me tell you, she's stunning!"
},
{
    "joke": "They laughed when I said I wanted to be a comedian. Well, no ones laughing now."
},
{
    "joke": "Why are giraffes slow to apologize? It takes them a long time to swallow their pride"
}]

// let index = Math.floor(Math.random() * (myjokes.length-1))
// joke.innerHTML = myjokes[index].joke

let a = function (){ let index = Math.floor(Math.random() * (myjokes.length-1))
joke.innerHTML = myjokes[index].joke}

btn.addEventListener('click',a)