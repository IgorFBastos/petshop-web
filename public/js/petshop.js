import { getSchedulingList} from './apiService.js';

document.addEventListener('DOMContentLoaded', () => {
    configSchedulingPanel();
});


const configSchedulingPanel = async () => {

    const schedulingList = await getSchedulingList();

    const schedulingContainer = document.getElementById("scheduling-container");
    schedulingContainer.innerHTML = ""; 

    if (!schedulingList || schedulingList.length === 0) {
        console.log("Nenhum agendamento encontrado..");
        schedulingContainer.innerHTML = "<h2>Nenhum agendamento encontrado.</h2>";
        return;
    }

    const groupedByDate = schedulingList.reduce((acc, scheduling) => {
        const scheduleDate = new Date(scheduling.date);

        const dayName = scheduleDate.toLocaleDateString('pt-br', { weekday: 'long' });
        
        const formattedDate = scheduleDate.toLocaleDateString('pt-br', {
            day: '2-digit', 
            month: '2-digit'
        });
        
        const dateKey = `${dayName} (${formattedDate})`;

        if (!acc[dateKey]) {
            acc[dateKey] = [];
        }
        acc[dateKey].push(scheduling);

        return acc;
    }, {});


    for (const dateKey in groupedByDate) {
        const schedulingsOfDay = groupedByDate[dateKey];

        const dayCard = document.createElement("div");
        dayCard.className = "day-card";


        const titleCard = document.createElement("h2");
        titleCard.textContent = dateKey; 
        dayCard.appendChild(titleCard);

        const slotsSchedulingContainer = document.createElement("div");
        slotsSchedulingContainer.className = "slots-scheduling-container";

        const slotsOfTheDay = schedulingsOfDay.reduce((acc, scheduling) => {
            const hour = scheduling.hour.hour; 
            if (!acc[hour]) {
                acc[hour] = [];
            }
            acc[hour].push(scheduling.client);
            return acc;
        }, {});


        for (const hour in slotsOfTheDay) {
            const clientsInSlot = slotsOfTheDay[hour];

            const slotScheduling = document.createElement("div");
            slotScheduling.className = "slot-scheduling";

            const slotHour = document.createElement("div");
            slotHour.className = "slot-hour";
            slotHour.textContent = hour;
            
            const slotClients = document.createElement("div");
            slotClients.className = "slot-clients";
            
            clientsInSlot.forEach(client => {
                const clientNameSpan = document.createElement("span");
                clientNameSpan.className = "cliente-nome";
                clientNameSpan.textContent = client.name;
                slotClients.appendChild(clientNameSpan);
            });


            slotScheduling.appendChild(slotHour);
            slotScheduling.appendChild(slotClients);
            slotsSchedulingContainer.appendChild(slotScheduling);
        }

        dayCard.appendChild(slotsSchedulingContainer);
        schedulingContainer.appendChild(dayCard);
    }
}