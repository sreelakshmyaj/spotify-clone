export const initialState = {
    user:null,
    token: 'BQD0xi-3SkdZ1x00-vvmL8diT6oJ7xOXl7zswq4-KjOWPdjPHQTSsaogXjLtFEjUGO-2JV-a0ppxbu15YCn__32VeK_5ZZ6eM1npXQBg2BBaN6UKUsL5ebRAfWEWWcx2Hjj3Q71NudYDV_rcRQcP-LczrY04zlRbjcucVbi-WdWrgoIzqERbi6JrKrrZEGDVB-T-0cBTx-IZZEWi',
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
        default:
            return state;
    }
}

export default reducer;