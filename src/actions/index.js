import tvmazeApi from '../apis/tvmazeApi';

export const setInputValue = (value) => {
    return async (dispatch) => {
        const response = await tvmazeApi.get(`?q=${value}`)

        dispatch({ type: 'INPUT_VALUE', payload: response.data})
    }
}

export const selectShow = (show) => {
    return {
        type: 'SELECTED_SHOW',
        payload: show
    };
};