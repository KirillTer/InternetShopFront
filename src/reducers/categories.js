import * as R from 'ramda'
import {FEATCH_CATEGORIES_SUCCESS} from '../actions/actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FEATCH_CATEGORIES_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload)
            return R.merge(state, newValues)
        default: return state
    }
}