export const initialState = {
    user:null,
    token: null,
    playlists: [],
    playing: false,
    item: null,
    megahitmix: null
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, 
                user: action.user
            };
        case 'SET_TOKEN' :
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_MEGAHITMIX':
            return {
                ...state, 
                megahitmix: action.megahitmix
            }
        default:
            return state;
    }
}

export default reducer;