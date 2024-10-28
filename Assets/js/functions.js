function daysAndWeeks(){
    const navigationCalendar = document.getElementById("showWeekDays");

    navigationCalendar.innerHTML = '';

    const today = new Date();

    const currentDay = today.getDay();

    // set days offset

    const offset = -currentDay; // start at monday

    for(let i = offset - 7; i < offset + 7; i++) {
        const day = new Date(today);
        day.setDate(today.getDate() + i);

        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';

        const dayTitle = document.createElement('div');
        dayTitle.className = 'dayTitle';
        dayTitle.textContent = day.toLocaleString('en-EN', {weekday: 'short'});

        const dayNumber = document.createElement('div');
        dayNumber.className = 'dayNumber';
        dayNumber.textContent = day.getDate();

        dayDiv.appendChild(dayTitle);
        dayDiv.appendChild(dayNumber);

        // mark current day

        if(day.toDateString() === today.toDateString()){
            dayDiv.classList.add('current');
        }

        navigationCalendar.appendChild(dayDiv);
    }


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

    generateHTML();
}

daysAndWeeks();