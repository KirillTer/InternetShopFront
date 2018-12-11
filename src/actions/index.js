import {FEATCH_PHONES_START, FEATCH_PHONES_SUCCESS, FEATCH_PHONES_FAILURE,
    LOAD_MORE_PHONES_START, LOAD_MORE_PHONES_SUCCESS, LOAD_MORE_PHONES_FAILURE,
    FEATCH_PHONE_BY_ID_START, FEATCH_PHONE_BY_ID_SUCCESS, FEATCH_PHONE_BY_ID_FAILURE,
    ADD_PHONE_TO_BASKET, SEARCH_PHONE,
    FEATCH_CATEGORIES_START, FEATCH_CATEGORIES_SUCCESS, FEATCH_CATEGORIES_FAILURE,
    REMOVE_PHONE_FROM_BASKET, CLEAN_BASKET} from './actionTypes'
import {fetchPhonesApi, loadMorePhonesApi, fetchPhoneByIdApi, fetchCategoriesApi} from '../api/'
import {getRenderedPhonesSelector} from '../selectors'

export const fetchPhones = () => async dispatch => {
    dispatch({type: FEATCH_PHONES_START})

    try {
        const phones = await fetchPhonesApi()
        dispatch({type: FEATCH_PHONES_SUCCESS, payload: phones})
    } catch (err) {
        dispatch({type: FEATCH_PHONES_FAILURE, payload: err, error: true})
    }
}

export const loadMorePhones = () => async (dispatch, getState) => {
    const offset = getRenderedPhonesSelector(getState())
    dispatch({type: LOAD_MORE_PHONES_START})

    try {
        const phones = await loadMorePhonesApi({offset})
        dispatch({type: LOAD_MORE_PHONES_SUCCESS, payload: phones})
    } catch (err) {
        dispatch({type: LOAD_MORE_PHONES_FAILURE, payload: err, error: true})
    }
}

export const fetchPhoneById = id => async dispatch => {
    dispatch({type: FEATCH_PHONE_BY_ID_START})

    try {
        const phone = await fetchPhoneByIdApi(id)
        dispatch({type: FEATCH_PHONE_BY_ID_SUCCESS, payload: phone})
    } catch (err) {
        dispatch({type: FEATCH_PHONE_BY_ID_FAILURE, payload: err, error: true})
    }
}

export const addPhoneToBasket = id => dispatch => {
    dispatch({type: ADD_PHONE_TO_BASKET, payload: id})
}

export const searchPhone = (text) => dispatch => {
    dispatch({
      type: SEARCH_PHONE,
      payload: text
    })
  }
  
  export const fetchCategories = () => async dispatch => {
    dispatch({type: FEATCH_CATEGORIES_START})

    try {
        const categories = await fetchCategoriesApi()
        dispatch({type: FEATCH_CATEGORIES_SUCCESS, payload: categories})
    } catch (err) {
        dispatch({type: FEATCH_CATEGORIES_FAILURE, payload: err, error: true})
    }
}

export const removePhoneFromBasket = id => async dispatch => {
    dispatch({
      type: REMOVE_PHONE_FROM_BASKET,
      payload: id
    })
}

export const cleanBasket = () => dispatch => {
    dispatch({
      type: CLEAN_BASKET
    })
}
  
  export const basketCheckout = phones => () => {
    alert(JSON.stringify(phones))
}
  