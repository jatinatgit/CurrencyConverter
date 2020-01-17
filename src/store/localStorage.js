import initialState from './initialState';

export const loadState = () => {
    try {
        const serializedState = sessionStorage.getItem('state');
        if(!serializedState) {
            return initialState;
        }
        return JSON.parse(serializedState).state;
    }
    catch(err) {
        return initialState;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('state', serializedState);
    }
    catch (err) {
        console.log(err);
    }
}