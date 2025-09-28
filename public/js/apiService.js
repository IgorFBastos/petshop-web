 const getUsers = async () => {
    try {
        const response = await fetch("/api/users/list");
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Erro ao tentar listar os clientes: ", error)
    }
};


const getOneUser = async (id) => {
    try {
        const response = await fetch(`/api/users/list/${id}`);
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Erro ao tentar encontrar usuário: ", error)
    }
}


 const getHoursList = async () => {
    try {
        const response = await fetch("/api/hours/list");
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao tentar buscar a lista dos horario. ", error);
        return null;
    }
};


 const getOneHour = async (id) => {
    try {
        const response = await fetch(`/api/hours/list/${id}`);
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao tentar buscar horario. ", error);
        return null;
    }

};


 const getSchedulingList = async () => {
    try {
        const response = await fetch("/api/scheduling/list");
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao tentar buscar a lista dos agendamentos. ", error);
        return null;
    }
}

 const postScheduling = async (body) => {
    try {
        const response = await fetch("/api/scheduling", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro agendar horario. ", error);
        return null;
    }
}

export {getHoursList, getOneHour, getOneUser, getSchedulingList, getUsers, postScheduling}


