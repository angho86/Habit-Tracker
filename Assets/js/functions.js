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

    console.log(habitInput.value, habitDuration.value);

    habitInput.value = "";
    habitDuration.value = "";
}

