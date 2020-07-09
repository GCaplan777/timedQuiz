READ ME
https://github.com/GCaplan777/timedQuiz
https://gcaplan777.github.io/timedQuiz/

This is my BootCamp assignment for a multiple choice quiz.

I had everything up and running and functioning well–except that after the first question showed, I needed to press the answer for the second question twice before the next question would appear. I did a near midnight "askBCS" and I hate to say, but I think the debugging process with the person from BCS may have led to additional comments and changes ended up giving me a few more issues to work out.

I did get great advice from AskBCS for cleaning up code and trying to hide elements until my quiz started. I was told to use a class in JavaScript to make it tidy, and unfortunately, I can't employ that in time for this submission, but i can see how it would look great AND i know the class work we went through to reference. See attached screenshot for reference.

And so without further ado............

JavaScript Quiz.
I set up the DOM Elements to take variables from the HTML

Start button
score button
timer element
question element in a div for the questions to live
4 choices targeting buttons in HTML

I set up starting variables:
elements styles to hide until start button
a currentQuestionIndex
Wins
Timeleft

I created an Object of Arrays for questions and answer (called here “correct”)

I’ve console logged here and intermittent throughout

1st Function
Start game (triggered by event listen)
showQuestion - to reveal the questions (set up in a separate function)
timer counter

2nd Function
showQuestion
has if/ else statement
if - currentQuestionIndex is greater or equal to index length of my array “questions.length”, then the game ends.

else - it is set to call up the next question in the array)

3rd Function
scoreQuestion
set up to listen for response of which button is clicked
That button is compared with the stored correct answer.
If - the values are equal, a point in the win is added.
Else - time is deducted from the countdown

USER INTERACTIONS

startbutton goes to function - startGame
choiceA - D when clicked will go to function - scoreQuestion
