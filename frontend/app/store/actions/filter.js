const SET_LOCATION_FILTER = 'SET_LOCATION_FILTER';
const SET_TAG_FILTER = 'SET_TAG_FILTER';
const SET_PRICE_FILTER = 'SET_PRICE_FILTER';

export const setLocationFilter = (locationsArray) => {
    return dispatch => {
        dispatch({ type: SET_LOCATION_FILTER, data: locationsArray });
    };
}

export const setTagFilter = (tagsArray) => {
    return dispatch => {
        dispatch({ type: SET_TAG_FILTER, data: tagsArray });
    };
}

export const setPriceFilter = (priceArray) => {
    return dispatch => {
        dispatch({ type: SET_PRICE_FILTER, data: priceArray });
    };
}