// Javascript Sheet




var numPadButtonsPushed = 0;
var numPadEntryOne;
var numPadEntryTwo;
var numPadEntryThree;
var numPadEntryFour;
var numPadEntryFive;
var numPadEntrySix;
var numPadEntrySeven;
var numPadEntryEight;
var numPadEntryNine;

var numPadEntryGlobal = '';

var storeNumPadDisable;



var numPadDisable = false; //if disabled is true, then numpad is unlocked, in green state, and doesn't do anything anymore.


function pinPadButtonPushSound() {
    //loads and plays the button push sound when called
    var audio = new Audio('/sound/pinPadButton.wav');
    audio.play();
    
}

function deadboltUnlock() {
    //loads and plays the button push sound when called
    var audio = new Audio('/sound/deadboltunlock.wav');
    audio.play();
    
}

function codeFail() {
    //loads and plays the button push sound when called
    var audio = new Audio('/sound/codeFail.wav');
    audio.play();
    
}

function clickPinPad(){
    onClick=document.getElementByID("clickPinPad").src="/pinpad.html";

}


function numPadOne() {
    if (numPadDisable == false){
        pinPadButtonPushSound();
        numPadButtonsPushed++;
        numPadEntryGlobal = numPadEntryGlobal += '1';


    } else{
        pinPadButtonPushSound();
    }
}

function numPadTwo() {
    if (numPadDisable == false){
        pinPadButtonPushSound();
        numPadButtonsPushed++;
        numPadEntryGlobal = numPadEntryGlobal += '2';

    }else{
        pinPadButtonPushSound();
    }

}

function numPadThree() {
    if (numPadDisable == false){
        pinPadButtonPushSound();
        numPadButtonsPushed++;
        numPadEntryGlobal = numPadEntryGlobal += '3';

    }else{
        pinPadButtonPushSound();
    }
}

function numPadFour() {
    if (numPadDisable == false){
        pinPadButtonPushSound();
        numPadButtonsPushed++;
        numPadEntryGlobal = numPadEntryGlobal += '4';

    }else{
        pinPadButtonPushSound();
    }
}

function numPadFive() {
    if (numPadDisable == false){
        pinPadButtonPushSound();
        numPadButtonsPushed++;
        numPadEntryGlobal = numPadEntryGlobal += '5';

    }else{
        pinPadButtonPushSound();
    }
}

function numPadSix() {
    if (numPadDisable == false){
        pinPadButtonPushSound();
        numPadButtonsPushed++;
        numPadEntryGlobal = numPadEntryGlobal += '6';

    }else{
        pinPadButtonPushSound();
    }
}



function numPadSeven() {
    if (numPadDisable == false){
        pinPadButtonPushSound();
        numPadButtonsPushed++;
        numPadEntryGlobal = numPadEntryGlobal += '7';

    }else{
        pinPadButtonPushSound();
    }
}

function numPadEight() {
    if (numPadDisable == false){
        pinPadButtonPushSound();
        numPadButtonsPushed++;
        numPadEntryGlobal = numPadEntryGlobal += '8';

    }else{
        pinPadButtonPushSound();
    }
}

function numPadNine() {
    if (numPadDisable == false){
        pinPadButtonPushSound();
        numPadButtonsPushed++;
        numPadEntryGlobal = numPadEntryGlobal += '9';

    }else{
        pinPadButtonPushSound();
    }
}


function isDoorLocked(){
    if (numPadDisable == true){
        alert('congrats you win');
    }

}


function numPadPuzzle(){

    if (numPadDisable == false && numPadEntryGlobal == '6835' && numPadButtonsPushed == 4){
        //alert('You entered: ' + numPadEntryGlobal);
        
        document.getElementById("numPadDefault").src = "/img/numberpad_true.jpg";
        deadboltUnlock();
        //alert("You unlocked it");
        numPadDisable = true;

        if (numPadDisable == true){
            someTempData = 'true';
        } else {
            someTempData = 'false'; 
        }

        sessionStorage.setItem('myTempDataKey', 'unlocked');
        


        // document.getElementById("roomDefault").src = "/img/roomFrontDoorOpen.jpg";

        //sessionStorage.setItem(numPadDisable, true);


    } else if (numPadDisable == true) {

        alert("Nothing happens, it's already unlocked");

    }
    
    else{
          
        numPadEntryGlobal = '';
        numPadButtonsPushed = 0;
        codeFail();

        document.getElementById("numPadDefault").src = "/img/numberpad_false.jpg";


    }     
}


var alreadyUnlocked;

function checkIfUnlocked() {
    

    //alert(sessionStorage.getItem('myTempDataKey'));

    if (sessionStorage.getItem('myTempDataKey') == 'unlocked' && !alreadyUnlocked){
        // to clear door being unlocked 
        //sessionStorage.removeItem('myTempDataKey');
        
        
        // door is unlocked
        var audio = new Audio('/sound/doorOpen.wav');
        audio.play();
        alert("The door opens with a loud creek");
        document.getElementById("frontDoor").src = "/img/roomFront_DoorOpen.png";
        
        alreadyUnlocked = true;


    } else if (sessionStorage.getItem('myTempDataKey') != 'unlocked') {

        // door is locked

        var audio = new Audio('/sound/lockedDoor.wav');
        audio.play();
        alert("You try and kick the door, but it wont budge");
    }
    else {
        alert("You realize that behind the opened door is nothingness.... The developer still has not progressed further than this room. While you've unlocked the door, you are still trapped for all eternity..."); 
    }

}





