# <a href='https://waaaaagh.com/squad-permutator'>squad-permutator</a>
 For use with AMG's Marvel: Crisis Protocol. This app will - given an input of 10 characters, a leader, and a mission level - dynamically output a table of all possible squad combinations

## Basic Instructions
1. Input the number of Threat Level 2s, Threat Level 3s, etc. that are in your squad
2. 

# The Game

## What is Marvel: Crisis Protocol
Marvel: Crisis Protocol is a miniature-based tabletop skirmish game, published by Atomic Mass Games and set in the Marvel Comics universe. Players collect, assemble, and paint their favorite heroes and villains, and pit them against their opponents.

## Gameplay Basics
- Each player brings a list of ten characters
- That list must include at least one leader
- Every character is assigned a 'Threat Level' between 2 and 6 (7 & 8 actually exist, but they are not accounted for in this calculator - yet!)
- Players will also choose a 'Mission Threat Level', which range from 14 to 20
- Players then assemble a squad of characters from their list whose total Threat Level does not exceed the Mission Threat Level
- At this point, the game can begin. Feel free to take a look at the <a href="https://static1.squarespace.com/static/5ce432b1f9d2be000134d8ae/t/624611c01029733d213cfed1/1648759240161/CP01_CrisisProtocol_Rule_Book_033122web.pdf">full rules</a>, but for the purposes of this project, we're not concerned with anything from this point forward.

# The App

## What am I looking at?
What this calculator does is take as input a) the player's ten characters by threat level, b) the player's leader's threat level, and c) the mission threat level. It then dynamically generates a table showing _every possible permutation_ of characters the player could take for that mission given their selected leader.

For example: my list consists of 3x Threat Level 2s, 4x Threat Level 3s, 1x Threat Level 4, 1x Threat Level 5, and 1x Threat Level 6. My leader is Threat Level 3, and the mission is Threat Level 14. When I input this into the calculator, I get this as a result:

<img src='./assets/exampleTable.png' alt='sample table output' title="Sample Table Output" />

As you can see, I can take 1 two and 3 threes; 2 twos, 1 three, and 1 four; 1 five and 1 six; etc. - note that this is _in addition_ to your leader, who is not included in the table. This is because a) the total threat of these characters is equal to the threat of the mission minus the leader's threat, and b) the total characters of each threat value does not exceed the total number available.

Also note that no impossible lists are presented. For instance, at Threat Level 14, a valid list for a Threat Level 3 leader would be 1 three and 4 twos. However, this is not rendered in the table, as the calculator is verifying that the necessary characters are available before registering a success.

## How does it work?
I'm very green when it comes to javascript, and that's doubly true concerning React.js. Honestly, my gut response to the question "How does it work?" is "I can't believe that it does". That said, I'm going to walk through the basic structure and flow below. I'm aware that there are probably hundreds of better ways to approach some of this - feel free to submit a pull request.

### App.js
At the top level, we have our App.js component. This is super simple, just holds the header, the footer, and the main AppComponent

#### Header.js and Footer.js
These are rendered at the top level and just display a basic header and footer. They are given a className, so we can style them with our css sheet, but these pretty much just display static text.

#### AppComponent.js
This is where the excitement is