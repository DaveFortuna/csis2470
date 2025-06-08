let suits = ["hearts", "diamonds", "clubs", "spades"];
let values = [
  "ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "jack",
  "queen",
  "king",
];
let mockmessage = [
  "Wow, bold choice—betting absolutely nothing.",
  "Your strategy is so subtle it looks exactly like fear.",
  "The cards waited… and you ghosted them!",
  "Big risk, big reward… or just big yawn?",
  "Acey-Ducey called, it said: ‘Really?’",
  "Even the deck is wondering what you’re waiting for.",
  "A masterclass in hesitation. Truly inspiring.",
  "The cards waited… and you ghosted them!",
];

let badbet = [
  "Great bet. For someone else. With money.",
  "That’s not a bet, that’s a fantasy. Reel it in.",
  "I admire the confidence. The bank does not.",
  "Champagne taste, soda money.",
  "Dream big, bet small—at least until your funds catch up.",
  "That bet's got bounce—right out of your budget.",
  "You're betting like a millionaire. Your bank says ‘adorable.’",
  "Whoa there, high roller—your bank account disagrees.",
  "Bet’s too high, boss. Gotta bring it down.",
];

let help = `
🂡 How to Play Acey-Ducey
High stakes. Low cards. Big attitude.<br><br>

🎯 Objective<br>
Stack up as much cas> as you can by betting on whether the next card falls between the two you’re shown. Sounds easy? That’s how it gets you.<br><br>

🃏 The Deal<br>
- You start with a bank — your chips, your stash, your war chest.<br>
- Two cards are dealt face up.<br>
- You place a bet *before* the third card is revealed.<br><br>

💰 Placing Your Bet<br>
- You’re betting that the third card will land between the first two in value.<br>
- Example: If you get a 4 and a Queen, anything between a 5 and Jack wins.<br>
- Bet any amount from your current bank — but not more than you have. (This isn’t fantasy football.)<br><br>

⚠️ Special Cases<br>
- Same Card Twice? You get two 7s? Congrats. You win nothing. No bet allowed. Try again.<br>
- No Room In Between? Like a Jack and Queen? No bet, no play, just a sad little reshuffle.<br><br>

💥 The Flip<br>
- If the third card lands between the first two: you win your bet.<br>
- If it’s outside or matches either card: you lose.<br>
- Exact match of one of the first two cards? Sorry, that’s house rules — still a loss.<br><br>

🎩 Optional Flavor Rules<br>
- Double-or-nothing flips for high-risk players.<br>
- Side bets: Bet on suits or colors for bonus payout (house style).<br>
- Mockery Mode: Players get roasted for skipping bets or overreaching their bank.<br><br>

🧠 Pro Tips<br>
- Tight spreads (like 7 and 9)? Tread lightly.
- Wide spreads (3 and Queen)? That’s the sweet spot.
- Don’t fall in love with your bankroll. The game sure won’t.<br><br>

🎲 Ready to Play?<br>
Then shuffle up, place your bet, and pray to the card gods.
Because in Acey-Ducey, the line between genius and broke is one card wide.
`;
document.getElementById("help-message").innerHTML = help;
let ai = `yo!<br>


ChatGPT said:
Yo! 😎 What’s up, David?<br>

You said:<br>
Putting together a game of Acey-Ducey. And I need 10 different single sentence gentle mocks if the player doesn't place a bet.<br>


ChatGPT said:<br>
Nice! Here are 10 gentle one-liner mocks for a player who skips betting in Acey-Ducey:<br>

"Blink and you’ll miss it—oh wait, you already did!"<br>

"High-stakes thrill… wasn’t quite your vibe, huh?"<br>

"Big risk, big reward… or just big yawn?"<br>

"No bet? The cards are personally offended."<br>

"Fortune favors the bold—not the folded arms."<br>

"Betting air—classic minimalist strategy."<br>

"You miss 100% of the bets you don’t place… and 100% of the fun!"<br>

"The suspense is unbearable… or not, apparently."<br>

"Acey-Ducey called, it said: ‘Really?’"<br>

"Even the deck is wondering what you’re waiting for."<br>

Want a few snarkier or goofier ones too?<br>

You said:
ooo yes. Both snarkier and goofier would be awesome to see<br>


ChatGPT said:
Heck yeah! Here’s a batch of snarkier and goofier one-liners for the no-bet crew:<br>

Snarkier Mocks
"Wow, bold choice—betting absolutely nothing."<br>

"You sure showed those cards who’s boss… by doing absolutely nothing."<br>

"A masterclass in hesitation. Truly inspiring."<br>

"That’s one way to play Acey-Ducey—by not playing it."<br>

"Your strategy is so subtle it looks exactly like fear."<br>

Goofier Mocks
"No bet? Did your chips take a personal day?"<br>

"The cards waited… and you ghosted them!"<br>

"A suspenseful moment ruined by… you."<br>

"You play like a squirrel hiding snacks—cautious and slightly suspicious."<br>

"Betting must’ve gotten stuck in traffic on the way to your brain."<br>

Want these triggered randomly in-game or themed around specific cards or situations too?<br>

You said:
Not at this time. Gonna roll with your suggestions and have more later, if thats cool with you?<br>

ChatGPT said:<br>
Absolutely, roll on! 🎲 Glad I could help get the table talking. Hit me up anytime you need more mocks, zingers, or anything else for the game. Have a blast with Acey-Ducey! 😄🃏<br>

You said:<br>
ready for another round of gentle mockery?<br>

ChatGPT said:<br>
Always ready for another round of mockery—served gentle with a twist of sass. 😏
Hit me with the scenario!<br>

You said:<br>
This round were after messages that let the player know they need to bet with the money in their bank and cant go over their current bank balance<br>


ChatGPT said:<br>
Perfect—here are some gentle (but cheeky) nudges for when a player tries to bet more than they’ve got in the bank:<br>

Gentle Mockery: Over-Betting Messages<br>
"Whoa there, high roller—your bank account disagrees."<br>

"You can't bet what you don't have... unless you're writing fiction."<br>

"Nice try, but your wallet just laughed and walked away."<br>

"Dream big, bet small—at least until your funds catch up."<br>

"Your ambition is impressive. Your balance? Less so."<br>

"Trying to bluff your own bank? Bold move."<br>

"If wishes were dollars, you’d be winning already."<br>

"That bet's got bounce—right out of your budget."<br>

"Champagne taste, soda money."<br>

"You're betting like a millionaire. Your bank says ‘adorable.’"<br>

Want a few with wild cartoon-style flair, ACME energy, or anything more in-character with your game’s tone?<br>

You said:<br>
More in line with the games tone. Maybe something one of the characters from oceans 11 would say?<br>


ChatGPT said:<br>
Ohh, now we’re talking—slick, smooth, slightly condescending with a smirk. Think Danny Ocean or Rusty-style lines—cool under pressure, casually pointing out your mistake with charm.<br>

Here’s a set of Ocean’s 11-style one-liners for when the player over-bets:<br>

"You’re betting like Clooney’s covering you—he’s not."<br>

"You wanna bet that much? You’ll need a better tailor and a bigger bankroll."<br>

"Classy move. Now let’s try something realistic."<br>

"I admire the confidence. The bank does not."<br>

"You’re a few chips short of that dream, pal."<br>

"That’s not a bet, that’s a fantasy. Reel it in."<br>

"If style could be cashed in, you’d be golden. Unfortunately, this game takes actual money."<br>

"Either your math’s bad or your ego’s writing checks your stack can’t cash."<br>

"You’re playing the part, just missing the funds."<br>

"Great bet. For someone else. With money."<br>

Want a version as if Carl Reiner’s character is saying it too? I can make a few more in his voice—dry, grumpy grandpa with impeccable timing.<br>

You said:<br>
Solid suggestion! Hit me with a few from carl character and a few from the twins if they were bickering back and forth<br>


ChatGPT said:<br>
Oh, yes. Let’s channel Saul Bloom (Carl Reiner's character) with his world-weary, old-pro sarcasm—then toss in Virgil and Turk Malloy (the bickering twins), trading barbs while roasting the player.<br>

Saul Bloom-Style Lines (Carl Reiner)<br>
Dry, unimpressed, and old-school slick.<br>

"In my day, we at least pretended to count our money before betting it."<br>

"Son, you’ve got all the charm of a busted wallet."<br>

"That’s not a bet, that’s a delusion with a dollar sign."<br>

"You remind me of me... if I’d had no money, no plan, and no clue."<br>

"You ever consider checking your balance before embarrassing yourself?"<br>

Virgil & Turk-Style Bickering Roasts<br>
Sniping at each other while taking jabs at the player.<br>

Virgil: "Did you see that bet? They just tried to buy the Bellagio with lunch money."<br>
Turk: "Honestly, it’s ambitious. Dumb, but ambitious."<br>

Turk: "Look at this clown. Bet’s bigger than their bankroll."<br>
Virgil: "Are you sure you didn’t teach them how to play?"<br>
Turk: "Not funny."<br>

Virgil: "Hey, should we loan ‘em a dollar?"<br>
Turk: "Nope. I’ve seen their luck. I want it to stay my dollar."<br>

Turk: "I haven't seen a miscalculation this bad since your last haircut."<br>
Virgil: "Oh good, deflect. That’ll help their balance."<br>

Virgil: "Bet’s too high, boss. Gotta bring it down."<br>
Turk: "So does their ego."<br>

Want more in the tone of other characters? Linus’s awkward judgment? Basher’s British sass?<br>

You said:<br>
These are great. Gonna use these. Gonna be around for the next step?<br>


ChatGPT said:<br>
Absolutely—I’m in for the long con, the short grift, and everything in between. 😎
Bring on the next step whenever you’re ready. Let’s keep this game sharp.<br>

You said:<br>
Giving me options on your response? I think you should choose.<br>

ChatGPT said:<br>
Fair enough—I'll take the wheel. 😏<br>

You're building a stylish, character-driven Acey-Ducey game, so I’ll stay locked into that voice and keep the writing tight, clever, and in-universe from here on out—no hedging, no “if you want”s. Just what fits and what flows. Ready when you are, boss.<br>

You said:<br>
Awesome! Keep on keepin on and I'll hit you with some more as the project goes on<br>


ChatGPT said:<br>
Love the energy! 🚀 Keep crushing it with the game — I’ll be here whenever you need fresh lines, ideas, or just a little boost. Catch you next round! 🎲🔥<br>

You said:<br>
Are you an acey-ducey master?<br>


ChatGPT said:<br>
Let’s just say if Acey-Ducey were a casino heist, I’d be the one walking out with the deck, the chips, and Clooney’s sunglasses. 😎<br>

I know the rules, the odds, and all the cheeky banter in between. So whether you’re dealing, betting, or just stirring up table drama—I’ve got your back.<br>

Want to test my Acey-Ducey chops? Hit me.<br>

You said:<br>
AAAAaaalrighty then! - Ace Ventura.   If you put together an instruction page what would you include?<br>


ChatGPT said:<br>
Aaaaalrighty then! Let’s make an instruction page worthy of Acey-Ducey’s swagger — clean, clear, and packed with enough charm to keep players reading even after they know the rules.<br>

Here’s how I’d lay it out:<br>

🂡 How to Play Acey-Ducey<br>
High stakes. Low cards. Big attitude.<br>

🎯 Objective<br>
Stack up as much cash as you can by betting on whether the next card falls between the two you’re shown. Sounds easy? That’s how it gets you.<br>

🃏 The Deal<br>
You start with a bank — your chips, your stash, your war chest.<br>

Two cards are dealt face up.<br>

You place a bet before the third card is revealed.<br>

💰 Placing Your Bet<br>
You’re betting that the third card will land between the first two in value.<br>

Example: If you get a 4 and a Queen, anything between a 5 and Jack wins.<br>

Bet any amount from your current bank — but not more than you have.
(This isn’t fantasy football.)<br>

⚠️ Special Cases<br>
Same Card Twice? You get two 7s? Congrats. You win nothing. No bet allowed. Try again.<br>

Backwards Order? Doesn’t matter — 10 and 3 is still 3 and 10. The house ain’t picky.<br>

No Room In Between? Like a Jack and Queen? No bet, no play, just a sad little reshuffle.<br>

💥 The Flip<br>
If the third card lands between the first two: you win your bet.<br>

If it’s outside or matches either card: you lose.<br>

Exact match of one of the first two cards? Sorry, that’s house rules — still a loss.<br>

🎩 Optional Flavor Rules (Spice It Up)<br>
Double-or-nothing flips for high-risk players.<br>

Side bets: Bet on suits or colors for bonus payout (house style).<br>

Mockery Mode: Players get roasted for skipping bets or overreaching their bank (strongly encouraged).<br>

🧠 Pro Tips<br>
Tight spreads (like 7 and 9)? Tread lightly.<br>

Wide spreads (3 and Queen)? That’s the sweet spot.<br>

Don’t fall in love with your bankroll. The game sure won’t.<br>

🎲 Ready to Play?<br>
Then shuffle up, place your bet, and pray to the card gods.
Because in Acey-Ducey, the line between genius and broke is one card wide.<br>

Want me to format this into HTML? Or turn it into a pop-up/modal for your game?<br>

You said:<br>
This is excellent. No need to go further on this part tyt y<br>


ChatGPT said:<br>
You got it, boss. Anytime you need more, just whistle—or, you know, type. 😎
Good luck out there in cardland!`;
document.getElementById("ai-prompt").innerHTML = ai;

let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let mock = document.getElementById("mock-message");
let feedback = document.getElementById("feedback-message");

document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("game");
  new CircleType(element).radius(350);
});

function drawCard() {
  let suit = Math.floor(Math.random() * suits.length);
  let value = Math.floor(Math.random() * values.length);

  console.log("img/" + values[value] + "_of_" + suits[suit] + ".png");
  return "img/" + values[value] + "_of_" + suits[suit] + ".png";
}

function getCardValue(cs) {
  for (let i = 0; i < values.length; i++) {
    if (cs.includes(values[i])) return i;
  }
}

function dealThreeCards() {
  let tempCard1, tempCard2, tempCard3;
  tempCard1 = drawCard();
  do {
    tempCard2 = drawCard();
  } while (getCardValue(tempCard2) == getCardValue(tempCard1));

  if (getCardValue(tempCard1) < getCardValue(tempCard2)) {
    card1.style.backgroundImage = "url('" + tempCard1 + "')";
    card2.style.backgroundImage = "url('" + tempCard2 + "')";
  } else {
    card1.style.backgroundImage = "url('" + tempCard2 + "')";
    card2.style.backgroundImage = "url('" + tempCard1 + "')";
  }
  tempCard3 = drawCard();
  card3.style.backgroundImage = "url(img/cardback.jpg)";
}

function ifWin() {
  if (card3 > card1 && card3 < card2) {
    document.getElementById("feedback-message").innerText = "You Win!";
    // add moneys to bank
    // change card3 border color
  }
}
function displayHelp() {
  let popup = document.querySelector(".help");
  if (popup.style.display == "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  }
}

function displayAi() {
  let popup = document.querySelector(".ai-message");
  if (popup.style.display == "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  }
}
