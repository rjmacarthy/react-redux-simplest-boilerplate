import * as actions from '../constants/actions'

const reducer = (state = [], action) => {
    switch (action.type) {
        case actions.SOME_ACTION:
            return state;
        default:
            return state;
    }
}

export default reducer;
