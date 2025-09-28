import { 
    getUsers, 
    getOneUser, 
    getHoursList, 
    getSchedulingList, 
    postScheduling 
} from './apiService.js';

document.addEventListener('DOMContentLoaded', () => {
    configSelectClients();
    configAvaliableTimes();
    configButonConfirm();
});

let hourSelectedId = null;
const setHourSelectedId = (id) => {
    hourSelectedId = id;
}

let dateSelected = null;
const setDateSelected = (date) => {
    dateSelected = date;
}


const configSelectClients = async () => {

    const users = await getUsers();
    const filterClients = users.filter(user => user.type === "client");

    const select = document.getElementById("select-client");
    select.innerHTML = ""

    filterClients.forEach(client => {
        const newOption = document.createElement("option");
        newOption.value = client._id;
        newOption.textContent = client.name;
        select.appendChild(newOption);
    });
};

const configButonConfirm = () => {

    const btn = document.getElementById("confirm-scheduling");
    btn.addEventListener("click", () => {
        if (!hourSelectedId && !dateSelected) {
            alert("selecione um horario para agendar.");
            return;
        }
        handleScheduling();
    })
}


const configAvaliableTimes = async () => {

    const allHours = await getHoursList();
    const allSchedules = await getSchedulingList();

    console.log("allSchedules: ", allSchedules);

    if (!allHours || !allSchedules) return;

    const scheduleCount = allSchedules.reduce((acc, scheduling) => {
        acc[scheduling.hour._id] = (acc[scheduling.hour._id] || 0) + 1;
        return acc;
    }, {});

    console.log("scheduleCount: ", scheduleCount);

    const today = new Date();
    const nameDays = {
        0: "Domingo",
        1: "Segunda",
        2: "Terça",
        3: "Quarta",
        4: "Quinta",
        5: "Sexta",
        6: "Sábado",
    }

    const schedulingContainer = document.getElementById("scheduling-container");
    schedulingContainer.innerHTML = "";

    for (let i = 0; i < 7; i++) {

        const actualDay = new Date(today);

        actualDay.setDate(today.getDate() + i);

        const numberWeekday = actualDay.getDay();

        if (numberWeekday === 0) continue;

        const weekday = nameDays[numberWeekday];
        const date = actualDay.getDate();
        const month = actualDay.getMonth() + 1;

        const getAllHoursForDay = allHours
            .filter(hour => hour.weekday == numberWeekday)
            .sort((a, b) => a.hour.localeCompare(b.hour));



        const dayCard = document.createElement("div");
        dayCard.className = "day-card";

        const titleCard = document.createElement("h4");
        titleCard.innerHTML = `${weekday} (${date}/${month})`

        const slotContainer = document.createElement("dev");
        slotContainer.className = "slots-container"

        for (const e of getAllHoursForDay) {
            const button = document.createElement("button");

            console.log("e: ", e)

            button.id = e._id

            button.setAttribute("day", e.weekday);
            button.setAttribute("date", actualDay);


            const count = scheduleCount[e._id] || 0;
            const limit = e.limit - count;

            if (limit <= 0) {
                button.className = "slot-button soldout";
                button.disabled = true;
            } else {
                button.className = "slot-button";
            }

            button.innerHTML = `${e.hour} (${limit} vagas)`;
            button.addEventListener("click", (e) => handleSelectedHour(e));

            slotContainer.appendChild(button);

        };

        dayCard.appendChild(titleCard);
        dayCard.appendChild(slotContainer);

        schedulingContainer.appendChild(dayCard);
    }
}




const handleSelectedHour = (e) => {

    const oldSelected = document.getElementsByClassName("selected");

    if (oldSelected[0]) {
        oldSelected[0].classList.remove("selected");
    }

    e.target.classList.add("selected");
    setHourSelectedId(e.target.id)
    setDateSelected(e.target.getAttribute("date"));
}


const handleScheduling = async () => {

    const clientID = document.getElementById("select-client").value;

    const client = await getOneUser(clientID);
    const schedulingDate = dateSelected;
    const hour = hourSelectedId;

    const body = {
        client: client,
        date: schedulingDate,
        hour: hour
    }

    console.log("body: ", body);

    try {
        const data = await postScheduling(body);
        location.reload();

    } catch (error) {
        console.error(error);
    }
}





















