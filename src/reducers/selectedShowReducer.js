export default (state = null, action) => {
    switch(action.type) {
        case 'SELECTED_SHOW': return action.payload;
        default: return state;
    }
}