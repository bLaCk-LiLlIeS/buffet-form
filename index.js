
// const vegAdult = document.getElementById("vegAdult");
// const vegKids = document.getElementById("vegKids");
// const nonVegAdult = document.getElementById("nonVegAdult");
// const nonVegKids = document.getElementById("nonVegKids");
// const cname = document.getElementById("customerName")
// function billCalculation(){
//     event.preventDefault();
//     const vegAdultValue = parseInt(vegAdult.value);
//     const vegKidsValue = parseInt(vegKids.value);
//     const nonVegAdultValue = parseInt(nonVegAdult.value);
//     const nonVegKidsValue = parseInt(nonVegKids.value);

//     const people = vegAdultValue + vegKidsValue + nonVegAdultValue + nonVegKidsValue;
//     const  total = (vegAdultValue*599) + vegKidsValue*249 + nonVegAdultValue*699 + nonVegKidsValue*349;
//    let text = `Hai ${cname.value},you have to pay Rs.${people < 10 ? (112/100)*total : ((112/100)*total*90)/100 }.Thanks for coming!!!`
//     // console.log(text);
//     answer.textContent = text;
// }

const vegAdult = document.getElementById("vegAdult");
const vegKids = document.getElementById("vegKids");
const nonVegAdult = document.getElementById("nonVegAdult");
const nonVegKids = document.getElementById("nonVegKids");
const cname = document.getElementById("customerName")
function billCalculation(){
    event.preventDefault();
    
     const values = {
     vegAdultValue : parseInt(vegAdult.value),
     vegKidsValue : parseInt(vegKids.value),
     nonVegAdultValue : parseInt(nonVegAdult.value),
     nonVegKidsValue : parseInt(nonVegKids.value),
    }
    if(values.vegAdultValue == ""){
    values.vegAdultValue= 0;
    }
    const people = values.vegAdultValue + values.vegKidsValue + values.nonVegAdultValue + values.nonVegKidsValue;
    const  total = (values.vegAdultValue*599) + values.vegKidsValue*249 + values.nonVegAdultValue*699 + values.nonVegKidsValue*349;
   let text = `Hai ${cname.value},you have to pay Rs.${people < 10 ? (112/100)*total : ((112/100)*total*90)/100 }.Thanks for coming!!!`
    // console.log(text);
    answer.textContent = text;
}
