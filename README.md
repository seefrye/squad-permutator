# <a href='https://waaaaagh.com/squad-permutator'>squad-permutator</a>
 For use with AMG's Marvel: Crisis Protocol. This app will - given an input of 10 characters, a leader, and a mission level - dynamically output a table of all possible squad combinations

## Basic Instructions
1. Input the number of Threat Level 2s, Threat Level 3s, etc. that are in your squad
2. Set your leader's Threat Level
3. Set your mission's Threat Level
4. Take a look at the output table. This is all of the possible permutations of your list

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

### <code>App.js</code>
At the top level, we have our App.js component. This is super simple, just holds the header, the footer, and the main AppComponent

#### <code>Header.js</code> and <code>Footer.js</code>
These are rendered at the top level and just display a basic header and footer. They are given a className, so we can style them with our css sheet, but these pretty much just display static text.

#### <code>AppComponent.js</code>
This is the main app component, holding all our data and displaying all the subcomponents of the app. This is where:
- We declare our input form
- We store our input values as this.state
- We handle any updates to the form inputs and write the new values back to state
- We also call our TotalCheck component here, passing it the necessary input values as state values
- Finally, we call our TableGenerate component, again passing along the input values

##### <code>TotalCheck.js</code>
This really couldn't be simpler. Takes the input values, parses them as integers (they come in as objects), add them up, and see if they equal ten. Dynamically updates with the number of characters needed to add or remove. This doesn't currently _do_ anything, but could be used to only render a table when the total equals ten. Though, there is utility in being able to see a less-than-ten-character table, as this could help with preliminary listbuilding - would want to make it optional if we go this route.

##### <code>TableGenerate.js</code>
This is where the real action happens. This is where we crunch our numbers to generate results, and then use those results to generate table rows. Here's roughly what it's doing in order:

- We grab out inputs that were passed from the AppComponent and instantiate our counting variables
- We check our leader's Threat Level and decriment that value in the input set by one. This way, we aren't including our leader on our tables
- Now we execute our loop. We're going to iterate over every possible combination of twos, threes, fours, fives, and sixes. 
    - We start at <code>0,0,0,0,0</code>, add one, check to see if it's a valid squad
    - If it is, we push it to our results object as <code>{id,[a,b,c,d,e]}</code> and then increment our id counter
        - We need to hit each success with a unique id, as we'll need a key to <code>map()</code> those results later
    - If it's not a valid squad, nothing happens
    - We then increment our counters
        - If our twos counter is less than the number of available twos, we add one there
        - If our twos counter has hit the number of available twos, we can't increment it any more, so we increment the threes counter and reset the twos
        - If the threes have hit their limit, we increment fours and reset twos and threes, and so on up through sixes
    - Once all combinations have been checked, the loop will stop
- Now we call our <code>GenerateRow</code> component, mapping it to a <code>const</code> variable
    - Here's where that unique key comes in. We pass the auto-incremented id as the key for the rows
    - We also pass the entirety of the row as an object. This is what we'll use to grab our values and generate our cells
- Finally, in our <code>return</code> statement, we generate the default table headers and then pass in our pre-generated <code>const</code> that holds all our rows

###### <code>GenerateRow.js</code>
Our function takes as an input a single result from the results object. That object holds two things: an id, and an array. We don't care about the id anymore (that was for the <code>.map()</code>), so we declare a variable and assign it the value of the array.

We're expecting the same thing every time here: an array with five values. We know what each array member corresponds to (the first one is the twos, the second the threes, etc.), so we just assign that array\[position\] to a convenient variable.

We then wrap each of these results in a <code><td></td></code> within our <code>return</code>.

Finally, we assign a <code>className</code> to the <code><td></td></code>. If the value is 0, we assign the class <code>'null'</code>, otherwise we assign the class <code>'result'</code>. This lets us set the font color to match the background color to hide zeros. This makes it much easier to read the chart - there are lots of zeros.