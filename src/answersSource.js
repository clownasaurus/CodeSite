export const acceptableAnswers = {
     "1": ['<h1>Hello, World!</h1>',
      '<h1>Hello, Weird!</h1>',
     ],
     "2": ["<em>I am small</em>"],
     "3": [
`<!DOCTYPE html>
<html lang="de">
  <head>
    <title>Skeleton Page</title>
  </head>
  <body>
    <h1>Skeletons Are Awesome</h1>
    <p>They hold everything together.</p>
  </body>
</html>
`],
     "7": [
`
<h1>Main Topic</h1>
<p>The invention of Minecraft.</p> 


<h2>Subtopic</h2> 
<p>The Minecraft file first crash landed from a meteor.</p> 


<h3>Smaller Detail</h3> 
<p>Today this meteor is hosted in the Minecraft Museum.</p>
`,
`
<h1>Main Topic</h1>
<p>The invention of Minecraft</p> 


<h2>Subtopic</h2> 
<p>The Minecraft file first crash landed from a meteor</p> 


<h3>Smaller Detail</h3> 
<p>Today this meteor is hosted in the Minecraft Museum</p>
`],
     "8": [
`<h1>Human Transmutation Guide</h1>

<h2>Boys are made of</h2>
<ol>
    <li>Snot</li>
    <li>Testosterone</li>
    <li>Cool stuff</li>
</ol>

<h2>Girls of made of</h2>
<ul>
    <li>Sugar</li>
    <li>Spice</li>
    <li>Everything nice</li>
</ul>
`],
     "9": ["<p>I am <strong>really</strong> small</p>"],
     "10": [
`<p>The FNAF lore is very...<br />Simple</p>

<hr />

<div>
    <h2>Fun Fact</h2>
    <p>The <span style="color: red">truth</span> about Freddy Fazbear is that Joe Biden is the suit</p>
</div>`],
     "14": [`<a href="https://youtu.be/dQw4w9WgXcQ">Open this link in a new tab</a> `],
     "15": [`<img src="https://i.imgur.com/cif7t3w.png" alt="Beschreibung" height="300" width="300" />`],
     "17": [
`<a href="https://www.chosic.com/wp-content/uploads/2023/06/vine-boom-sound-effect(chosic.com).mp3"> 
    <img src ="https://i.imgur.com/T9cOoPU.png" height = "300" width = "300" alt="open in new tab for boom"/>
</a>`],
     "19": [
`<form method="post" action="submit.php" onsubmit="return false;">
    <h1>Black Knights Application</h1>
    <p>Name: <input type="text" name="username" size="30" /></p>
    <p>Gender:</p>
    <input type="radio" name="gender" value="male" checked="checked">Male</input>
    <input type="radio" name="gender" value="female">Female</input>
    <input type="radio" name="gender" value="mecha">Mecha</input>
    <input type="radio" name="gender" value="other">Other</input>
    <p>
        <input type="checkbox" name="privacy" value="accepted" > I agree to the I HATE BRITANNIA policy</input>
    </p>  
    <input type="submit" value="Register" />
</form>`],
     "20": [
`<form method="post" action="submit.php" onsubmit="return false;">
    <h1>So you want to darkly gather ghosts?</h1>

    <p>What kind of doll will you force ghosts into?</p>
    <select name="toy" size="1">
        <option value="teddy"">Teddy Bear</option>
        <option value="doll">Barbie Doll</option>
        <option value="beluga">Plush Beluga</option>
    </select>

    <p>What Trauma motivated you to hunt ghosts?</p>
    <select name="traumas[]" multiple="multiple" size="4">
        <option value="prego">Pregnancy demon</option>
        <option value="ww1">WW1 ghost asked me for water</option>
        <option value="womb">A womb stole my mom</option>
        <option value="grooming">Groomed by spirit</option>
    </select>

    <p>Please Discuss more about your Trauma:</p>
    <textarea name="mission" rows="4" cols="40">Well it all started when...</textarea>

    <p><input type="submit" value="Send"/></p>
</form>`],
  };
