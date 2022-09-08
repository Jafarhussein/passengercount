const welcomeEl = document.getElementById('welcome-el');

let greeting = "Welcome ";

welcomeEl.innerText = greeting;

welcomeEl.innerText += "👋";

// document.getElementById("count-el").innerText = 5; //document är alltså html doc och get ellement är som en div,h tagg osv
//eftersom vi har en id så skriver vi en byId sedann parantes och "" och inne i air quote så har man id namnet
let count = 0;
 
function increment(){ //lyssnar på onclick element
    document.getElementById("count-el").innerText= count =count+=1;//jag la count = count+1 så att denn ger ett nytt värde varje gång den klickas
    console.log(count)
}

function decrease(){
         document.getElementById("count-el").innerText=count = count-=1; // denna gör samma sak fast tvärtom, den subbtraherar värdet med 1 barje gång den klickas
         console.log(count)
}

const saveEl = document.getElementById('save-el');
function save(){
    let countstr= count + "-";
    saveEl.innerText += countstr;
    console.log(count)
}



// let name = "Jafar";
// let greeting = "Hi, my name is ";

// let myGreeting = greeting + name;

// console.log(myGreeting);

// /*9, 24, 51,100100 */

