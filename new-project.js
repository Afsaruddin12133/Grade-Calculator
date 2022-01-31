// select id
let names = document.getElementById('name');
let number = document.getElementById('number');
let button = document.getElementById('button');
let showResult = document.getElementById('put-result pb-4');

// section of function
let result = function(event){
    event.preventDefault();
    let nameValue = names.value;
    let numberValue = number.value;
     if(numberValue == ""){
        let values = 'Enter some value';
        showResult.innerHTML = values;
    }else if(numberValue <=33){
       let values = nameValue + 'got F';
       showResult.innerHTML = values;
   }else if(numberValue >=34 && numberValue <=40){
       let values = nameValue +" "+ 'got D';
       showResult.innerHTML = values;
   }else if(numberValue >=41 && numberValue <=50){
       let values = nameValue +" "+ 'got C';
       showResult.innerHTML = values;
   }else if(numberValue >=51 && numberValue <=60){
    let values = nameValue +" "+ 'got B';
    showResult.innerHTML = values;
}else if(numberValue >=61 && numberValue <=70){
    let values = nameValue +" "+ 'got A-';
    showResult.innerHTML = values;
}else if(numberValue >=71 && numberValue <=80){
    let values = nameValue +" "+ 'got A';
    showResult.innerHTML = values;
}else if(numberValue >=91 && numberValue <=95){
    let values = nameValue +" "+ 'got A+';
    showResult.innerHTML = values;
}else if(numberValue >=96 && numberValue <=100){
    let values = nameValue +" "+ 'got Golden A+';
    showResult.innerHTML = values;
}else{
    let values = "Put your hand on you 🎧 ";
    showResult.innerHTML = values;
}
   names.value = "";
   number.value = "";
}

button.addEventListener('click', result);

// Section One End...



// seleclite id
let userNumber = document.getElementById('userNumber');
let userButton = document.getElementById('userButton');
let showP = document.getElementById('showP');

//  start function
let userResult = function(event){
    event.preventDefault();
    let number = userNumber.value;
    if(number < 0){
     let value = "Your Number is Negative";
     showP.innerHTML = value;
    }else if(number >= 0){
      let values = "Your Number is Posative";
      showP.innerHTML = values;
    }else{
        console.log("It is not valide");
    }
    userNumber.value = "";
}

userButton.addEventListener('click',userResult);

// Section Two End...
// seleclite id
let usersNumber = document.getElementById('usersNumber');
let usersButton = document.getElementById('usersButton');
let showE = document.getElementById('showE');
//function 
let userResults = function(event){
    event.preventDefault();
    let number = usersNumber.value;
    if(number % 2 == 0){
     let value = "Your Number is Event";
     showE.innerHTML = value;
    }else if(number%2 != 0){
      let values = "Your Number is Odd";
      showE.innerHTML = values;
    }else{
        console.log("It is not valide");
    }
    userNumber.value = "";
}
usersButton.addEventListener('click',userResults);

// seleclite id
let usersNumber1 = document.getElementById('usersNumber1');
let usersNumber2 = document.getElementById('usersNumber2');
let inputButton = document.getElementById('inputButton');
let showS = document.getElementById('showS');

// function start
let inputResults = function(event){
    event.preventDefault();
    let number1 = usersNumber1.value;
    let number2 = usersNumber2.value;
    let sum = parseInt(number1) + parseInt(number2);
    showS.innerHTML= "Total sum is  "+''+ sum;
    usersNumber1.value = "";
    usersNumber2.value = "";
    
}
inputButton.addEventListener('click',inputResults);

/// End this  section ..


// start convart section
let celsius = document.getElementById('celsius');
let celsiustButton = document.getElementById('celsiusButton');
let showC = document.getElementById('showC');
// function start..
let celsiusResults = function(event){
    event.preventDefault();
    let celsiusNumber = celsius.value;
    let values = (1.8)*parseInt(celsiusNumber) + parseInt(32) + "F";
    showC.innerHTML = "Fahrenheit value is " +''+values;
}
celsiustButton.addEventListener('click',celsiusResults);

// section end here..
 
// star circle section..
let circle = document.getElementById('circle');
let circletButton = document.getElementById('circleButton');
let showA = document.getElementById('showA');

// start convart section..
let circletResults = function(event){
    event.preventDefault();
    const Pi = 3.1416;
    let circleNumber = circle.value;
    let values = parseInt(Pi)*parseInt(circleNumber)*parseInt(circleNumber);
    showA.innerHTML = "Area of the circle value is " +''+values;
}
circletButton.addEventListener('click',circletResults);
// section end..
let total = document.getElementById('total');
let totalButton = document.getElementById('totalButton');
let showAs = document.getElementById('showSum');
// start function..
let totalResults = function(e){
    e.preventDefault();
    let totalNumber = total.value;
   var sum = 0;
   for(var i = 1; i <= totalNumber; i++){
       sum = sum + i;
   }
  showAs.innerHTML = "Total value "+''+ sum ;
  total.value = "";
}
totalButton.addEventListener('click',totalResults);
// section end...
let numbers1 = document.getElementById('sumOne');
let  numbers2 = document.getElementById('sumTwo');
let numbers3= document.getElementById('sumThree');
let button3 = document.getElementById('threeButton');
let showT = document.getElementById('showT');
// function start..
let totalThree = function(event){
    event.preventDefault();
    let numberOne = parseInt(numbers1.value);
    let numberTwo = parseInt(numbers2.value);
    let numberThree = parseInt(numbers3.value);
    if(numberOne > numberTwo && numberOne > numberThree){
        showT.innerHTML = "Big number is " +''+ numberOne;
    }else if(numberTwo > numberThree){
        showT.innerHTML = "Big number is "+''+ numberTwo;
    }else{
        showT.innerHTML = "Big number is " +''+numberThree;
    }
    numbers1.value = "";
    numbers2.value = "";
    numbers3.value = "";
}
button3.addEventListener('click',totalThree);