
const hideHeader = (state=false,action) => {
    if(action.type==="HIDE_HEADER"){
        return !state;
    }
    return state;
}

export default hideHeader;