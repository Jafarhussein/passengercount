const welcomeEl = document.getElementById('welcome-el');

let greeting = "Welcome ";

welcomeEl.innerText = greeting;

welcomeEl.innerText += "👋";

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
    let countstr= count + "-";//sparar vår count till en ny variabel
    saveEl.innerText += countstr;// skriver ut variabel
    console.log(count)
}




