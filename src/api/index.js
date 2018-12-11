import * as R from 'ramda'
import request from 'superagent'
import phones from './mockPhones'
import categories from './mockCategories'

export const fetchPhonesApi = async () => {
    const {body} = await request.get(
      'http://www.mocky.io/v2/5918b9461200001f1040dbeb'
    )
    return body.phones
}
  

export const loadMorePhonesApi = async({offset}) => {
    return new Promise(resolve => {
        resolve(phones)
    })
}

export const fetchPhoneByIdApi = async id => {
    return new Promise(resolve => {
        const phone = R.find(R.propEq('id', id), phones)
        resolve(phone)
    })
}

export const fetchCategoriesApi = async() => {
    return new Promise(resolve => {
        resolve(categories)
    })
}
