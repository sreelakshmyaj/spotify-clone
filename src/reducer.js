export const initialState = {
    user:null,
    token: "BQD5BVx4yPa8bFjpXcohbEOUaWAzgJU7_h9zIS_U75JGKFvdwJRLjItNsqoD_Tg4zKdAwquXaEJ4a2gvfJxGS0kcL_jk7VzlmBIcp4GAB4RB6DWOzws0LgXYO50WarN6YSl-XpGrULatwijzsY_VeEPtBPI0YdD9JLknh-rYhbFmTVzh2m-zlR_NzIJ2yq-IrPTE3ImfonP9egFr",
    playlists: [],
    playing: false,
    item: null
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
        default:
            return state;
    }
}

export default reducer;