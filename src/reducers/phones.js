import * as R from 'ramda'
import {FEATCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS, FEATCH_PHONE_BY_ID_SUCCESS} from '../actions/actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FEATCH_PHONES_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload)
            return R.merge(state, newValues)
        case LOAD_MORE_PHONES_SUCCESS:
            const moreValues = R.indexBy(R.prop('id'), payload)
            return R.merge(state, moreValues)
        case FEATCH_PHONE_BY_ID_SUCCESS:
            return R.assoc(payload.id, payload, state)
        default: return state
    }
}