// header 
/* To start the site off I wanted to do a changing text to welcome you to the site, using the mouseover event seen down in the code. 
I thought of doing a color change, but I thought it would be more fun for the actual text to change into new sentence. 
I then made a new variable as you can see, and with document(getting the html page).querySelector(the object I want to do something with)('in this I specify the class or id of the specific object'). 
I chose to only let the text change once, so when you mouseover the text it will change, and it will not change back into welcome.
I did this because I thought it was more suitable for the text to stay as ''To Mie´s fun page''. 
*/

let headerId = document.querySelector("#header-id");

headerId.addEventListener('mouseover', function(){

    headerId.innerHTML = "To Mie's Fun Page!";
   
    
    });

    // Button color change 

    /* My second event is going to be a button that changes color when you click it. 
    In order for it to change between 'white'(basic color) and blue, I had to use and if else function inside the addEventListener event function. 
    I of course again made a new variable = the buttons ID name (aka the button), so that my code then said:
    if/when you press the button the code will then check if the button is pressed and it contains 'blue' the blue color. which I created a class for inside my CSS. 
    Then the code will remove the blue color, but if the button is pressed and it doesn't contain blue already then the else function will happen,
    which is removing the blue color. 
    
    */

    let pressMe = document.querySelector("#buttonId");

    pressMe.addEventListener('click', function(){

        if( pressMe.classList.contains("blue")){

            pressMe.classList.remove("blue");
        
           }else{
               pressMe.classList.add("blue");
           }
        
        
        });

    //dblclick event - snake image

    /* My third event will be a double click event. Where I have inserted an image inside my html which I have given an ID called dbSize.
    So I again will create a new variable and then with document.querySelector() get a hold of that ID name. 
    I then add addEventListener() and use the dblclick event and function, then tell it inside this that my variable when doubleclicked is toggled (toggle event)
    and then specify that I want to enlarge the image when this happens inside the toggle function.
    
    */
    
    let picture = document.querySelector("#dbSize");

    picture.addEventListener('dblclick', function() {

        picture.classList.toggle('large');

        
      });




   // onmouseover, onmouseout - shiny pokemon

   /* So I love pokemon and especially shiny pokemon, so I used some of my artwork for this mouseover, and mouseout event.
   I then added 3 images inside my html that I gave an ID name. 
   This one I specified the mouseover and mouseout in the img tag, and gave them function names like mouseover = "shiny1()"
   then in my js I made a function list for each of the images, very similar to each other with small specification changes.
   So I start off with function shiny1 which has the mouseover event on it I then inside that function get the element I want to change
   by using getElementById(), to specify the positioning in the html of where I want my event to happen,
   and then I add a .src to let it know I need to find something from my pc. 
   I then specify which image I want shown when the mouse is over it. and that is the Shiny version of the pokemon.
   I then proceed to do the exact same thing underneath but for my mouseout event, and use the shiny2() function instead and then choose the 
   regular image version of the pokemon, so now it shows the shiny version when the mouse hovers over and the regular version when it isn't hovering over the image.
    
   */

// eevee
   function shiny1() {
    document.getElementById("eevee").src = "./image/eevee shiny.png";
  }
  function shiny2(){
    document.getElementById("eevee").src = "./image/eevee.png";
  }

// sylveon

function shiny3() {
    document.getElementById("sylveon").src = "./image/sylveon shiny.png";
  }
  function shiny4(){
    document.getElementById("sylveon").src = "./image/sylveon.png";
  }

 // vaporean
 
 function shiny5() {
    document.getElementById("vaporean").src = "./image/vaporean_shiny.png";
  }
  function shiny6(){
    document.getElementById("vaporean").src = "./image/vaporean.png";
  }


// Keydown event - Your favorite word
/* In this area I wanted to make a small input box where when you type a word into it it changes color depending of the value of length,
using the keydown event. With my variable = the ID of the input box, I then with the addEventListener(), keydown event and inside my callback function
which is inside the addEventListener() function, use an if else, where I specify if the input box's value length is lower than 4 letters then it
should add the color red (the class bg-red which I created inside my CSS). however if the value length isn't lower than 4 then it should remove the red color (else),
this is only to make sure that the red doesn't stay in the background. Then I made it so if the value is equal to or higher than 4 then the background color
will get a green color added. And again with a else statement that it should remove the color if the value isn't equal to or higher than 4.
The red background color really wanted to stay after you remove all the letters, so I added a final if else statement, that is very similar to the 
two others already added but I just said if the value.length is lower than 1 then it should add a white bg color 'bg-white'(from CSS), else it should
remove that color. 
So now when you type in 'your favorite word' it will show up red if its less than 4 letters and green if higher. 

*/

 

 let elementInput = document.querySelector("#password");

console.log(elementInput);

elementInput.addEventListener("keydown", function(){
    
    if (elementInput.value.length < 4){
        
        elementInput.classList.add("bg-red");

    } else{

        elementInput.classList.remove("bg-red");
        
    }

    if(elementInput.value.length >= 4){

        elementInput.classList.add("bg-green");

    }else{
        
        elementInput.classList.remove("bg-green");
        
    } 
    if(elementInput.value.length < 1){
       
        elementInput.classList.add("bg-white");

    } else{

        elementInput.classList.remove("bg-white");
    }
    
    console.log(elementInput.value);
})

// buttons, arrays and numbers. 

/* Here I wanted an array to be added to a <h3></h3> tag inside my html, showing some of my favorite actors. I will use the click event again, 
I had a difficulty getting this to work otherwise as well as I was running out of event ideas I had not already used. 
So I made two new variables where one is = the class of the div where I want the event to happen, and two is = the button id Where I wanted the 
click event to happen.
I then use the variable = the button, and use the addEventListener with the click event and callback function. Inside the callback function,
I create an array with the three actors I want shown. So in order to print that array into my html, I use the forEach method, with my array variable
and inside of that I grab my variable = the div (content), so I tell my program where I want it printed, and then I add .innerHTML so it
knows it should go into the html and tells it that I want it printed inside the h3 that is inside the div (content) I specified earlier in the code,
by using the identifier ${} to put in my array variable into that to show what I want printed into the h3. 

I made this mostly to have and array in the assignment, as required.
*/

let content = document.querySelector(".content");
let sentence = document.querySelector("#sentencebtn");

sentence.addEventListener('click', function(){

    let fame = ["Will Smith", "Tom Holland", "Tom Hiddleston"];

    fame.forEach(fame => {

    content.innerHTML += `<h3>${fame}</h3>`;
    
});

})


// Image stealing - copy event and alert

/* This is a simple code, but I wanted to use the copy event, so in my html I created a <p></p> with a sentence inside, that I wanted you
to try and copy aka steal, but when that happened you would get an alert to pop up.
So just like the others I would first create a variable which is = the class of the <P></P>, then I would use that variable with the 
event listener function, with the event 'copy' inside function I then put in an alert telling you that stealing aren't cool if you tried to copy 
the text. 
Inside the html, I would then of course have a sentence underneath trying to bate you into copying the code. 

*/

let copyMe = document.querySelector(".steal");

copyMe.addEventListener('copy', () => {

    alert("OI! You can't just take my stuff!! SHAME!");
})







   // draggable puppy

   /*
   By using the event draggable I wanted to make an image draggable inside a specific area. 
   I then created an empty div with an ID and draggable ="true" and a specified style to choose the area specifications. 
   That area is where I am allowed to drag my image. 
   then I made a new div with class="description", inside that I have my h2 tag and a button tag in where I put in both class and an onclick event
   with a addImage() function. 
   In my js I then used the function addImage,, and inside of that I created a variable for the image, but I first have to create the image
   by using document(to specify I cant to create it inside my html), and then createElement("img") to be able to create my element/my img.
   I then underneath using the variable created the specifications for the image, like the src (which image I wanted to use), and height
   and width. 
   Then I got the draggable div area by using document.getElementById() with the div's ID name and then adds the .appendChild method which 
   allows my to add a new node. 
   So I then use the identifier to get the img variable and add the event draggable to it and then specifies with containment: ID name of area, to
   tell my code where I want to newly added image to be able to be draggable. 
   and I then added to my button underneath a code to change the text so when you click the button the text changes too. 
   and of course a lot of the things like the background of the draggable area I styled in my CSS.
   */

   function addImage() {

    let img = document.createElement("img");
    img.src = "./image/eevee.png";
    img.height = 250;
    img.width = 250;

    document.getElementById("myDiagramDiv").appendChild(img);
    $(img).draggable({containment:'#myDiagramDiv'});

    img.target.textContent ="Try dragging me around! :D"

  }

/*
So in this program I should have these events:
mouseover, mouseout, click, dblclick, copy, toggle(maybe?), keydown and draggable.

*/
  

    
