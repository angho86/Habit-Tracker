function daysAndWeeks(){

}

function calendar(){

}

function doneHabit(habit){

}

function deleteHabit(habit){

}

function saveToLocalStorage(obj){

}

function getFromLocalStorage(){

}

function addHabitModal(){
    const modalWindow = document.querySelector(".addHabitModal");

    modalWindow.style.display = modalWindow.style.display === "flex" ? "none" : "flex";

}

function saveHabit(){
    const habitInput = document.getElementById("addHabit");
    const habitDuration = document.getElementById("duration");

    if(!habitInput.value){
        console.log("Habit name field is empty");
    }

    if(!habitDuration.value){
        console.log("Duration field is empty!")
    } else {

        console.log("Everything is working fine");
    }






    
    habitInput.value = "";
    habitDuration.value = "";
}

