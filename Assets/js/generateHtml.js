function generateHTML(){

    const listHtml = document.getElementById("habitsListHtml");

    const habits = getFromLocalStorage();

    let html = "";

    for(let i =0; i < habits.length; i++){
        html += `
                <div class="habitInfo">
                <div class="habitTitle">${habits[i].habitName}</div>
                <div class="habitDuration">${habits[i].duration}</div>
                <button class="habitComplete" id="done" onclick="${doneHabit(habits[i])}">Done</button>
                <button class="habitDelete" id="delete" onclick="${deleteHabit(habits[i])}">Delete</button>
                </div>  
                 `;
    }

    listHtml.innerHTML = html;
}