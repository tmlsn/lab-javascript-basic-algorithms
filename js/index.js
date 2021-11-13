// Iteration 1: Names and Input
// 

// Iteration 2: Conditionals


// Iteration 3: Loops

let hacker1 = 'Daniel';

console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Montgomery';

console.log(`The navigator's name is ${hacker2}`);

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters !`);
}

else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

// else if (hacker1.length === hacker2.length)
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters !`);
}

for(let i = 0; i < hacker1.length; i++){
    console.log(hacker1[i].toUpperCase());
}

for(let j = 0; j < hacker2.length; j++){
    console.log(hacker2[hacker2.length - 1 - j]);
}

/*
if(hacker1.length >= hacker2.length){

    for(let k = 0; k < hacker1.length; k++){
        switch(hacker1){

case hacker1[k] === hacker2[k] : continue
break;

case hacker1[k] > hacker2[k] : console.log("The drivers name goes first.")
break;

case hacker1[k] < hacker2[k] : console.log("Yo, the navigator does first definitely.")
break;
        };
    };
};

else {
    for(let m = 0; m < hacker2.length; m++){
        switch(hacker2){

case hacker1[k] === hacker2[k] : continue
break;

case hacker1[k] > hacker2[k] : console.log("The drivers name goes first.")
break;

case hacker1[k] < hacker2[k] : console.log("Yo, the navigator does first definitely.")
break;
        };
    };
};
*/


if(hacker1.length >= hacker2.length){

    for(let k = 0; k < hacker1.length; k++){

       if(hacker1 === hacker2){
            console.log("What?! You both have the same name?");
         break;
       }
      
       else if(hacker1[k] === hacker2[k] && !undefined){
            continue;
        }

        else if(hacker1[k] > hacker2[k]){
            console.log("The drivers name goes first.");
          break;
        }

        else if(hacker1[k] < hacker2[k]){
            console.log("Yo, the navigator goes first definitely.");
          break;
        }
        }
    }


else if(hacker1.length < hacker2.length){
    for(let l = 0; l < hacker2.length; l++){

        if(hacker1[l] === hacker2[l]){
            continue;
        }

        else if(hacker1[l] > hacker2[l]){
            console.log("The drivers name goes first.");
          break;
        }

        else if(hacker1[l] < hacker2[l]){
            console.log("Yo, the navigator goes first definitely.");
          break;
        }
}
}
