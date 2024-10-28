function daysAndWeeks(){

}

function calendar(){

}

function doneHabit(index){

}

function deleteHabit(index){

}

function saveToLocalStorage(obj){

    const habitsList = getFromLocalStorage();

    habitsList.push(obj);

    localStorage.setItem("habits", JSON.stringify(habitsList));

}

function getFromLocalStorage(){

    const habits = JSON.parse(localStorage.getItem("habits"));

    return Array.isArray(habits) ? habits : []; 

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

        const obj = {
            habitName: habitInput.value,
            duration: habitDuration.value,
            created: Date.now(),
        };

        saveToLocalStorage(obj);
    }
    habitInput.value = "";
    habitDuration.value = "";
}

