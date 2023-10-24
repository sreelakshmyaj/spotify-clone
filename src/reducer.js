export const initialState = {
    user:null,
    token: null,
    playlists: [],
    playing: false,
    item: null,
    megahitmix: null,
    favorites: []
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
        case 'ADD_TO_LIBRARY':
            return {
                ...state,
                favorites: [...state.favorites, action.playlist]
            }
        case 'REMOVE_FROM_LIBRARY':
            let newFavorites = [...state.favorites];
            const index = state.favorites.findIndex((favItem) => 
                favItem.id === action.id
            )
            if (index >= 0) {
                newFavorites.splice(index, 1);
            }
            return {
                ...state, 
                favorites: newFavorites
            };
        default:
            return state;
    }
}

export default reducer;