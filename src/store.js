import {createStore} from 'redux';
import reducer from './reducers';
import {obtenerStateStorage, guardarStateStorage} from './localstorage';

//Definir el state principal
//const initialState = [];

//Si hay algo en el storage, eso será nuestro state
const storageState = obtenerStateStorage();


const store = createStore(
    reducer,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Subrscribe estará escuchando los cambios del state
store.subscribe( () => {
    guardarStateStorage({
        //Le pasamos el state de citas
        citas: store.getState().citas //Para obtener el state utilizamos store.getState() 
    })
})

export default store;