export const obtenerStateStorage = () => {
    const citasStorage = localStorage.getItem('citas');
    if(citasStorage===null){
        return undefined;
    }
    return JSON.parse(citasStorage);
}

//Lo que esta en el stage lo agregamos al local storage
export const guardarStateStorage = state => {
    const citasState = JSON.stringify(state);
    localStorage.setItem('citas',citasState);
}