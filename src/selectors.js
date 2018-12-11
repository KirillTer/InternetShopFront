import * as R from 'ramda'
// import { createSelector } from "reselect";

export const getPhoneByIdSelector = (state, id) => R.prop(id, state.phones)

// export const getPhonesSelector = createSelector(getPhoneByIdSelector, state =>
//     R.map(id => getPhoneByIdSelector(state, id), state.phonesPage.ids)
// );

export const getPhonesSelector = (state, ownProps) => {
    const activeCategoryId = getActiveCategoryIdSelector(ownProps)

    const applySearch = item => R.contains(
      state.phonesPage.search,
      R.prop('name', item)
    )

    const applyCategory = item => R.equals(
      getActiveCategoryIdSelector(ownProps),
      R.prop('categoryId', item)
    )

    const phones = R.compose(
      R.filter(applySearch),
      R.when(R.always(activeCategoryId), R.filter(applyCategory)),
      R.map(id => getPhoneByIdSelector(state, id))
    )(state.phonesPage.ids)
  
    return phones
  }
  
export const getRenderedPhonesSelector = state => R.length(state.phonesPage.ids)

export const getTotalBasketCount = state => R.length(state.basket)

export const getTotalBasketPrice = state => {
    const totalPrice = R.compose(
        R.sum,
        R.pluck('price'),
        R.map(id => getPhoneByIdSelector(state, id))
    )(state.basket)
    return totalPrice
}

export const getCategoriesSelector = state => R.values(state.categories)

export const getActiveCategoryIdSelector = ownProps => R.path(['params', 'id'], ownProps)

export const getBasketPhonesWithCount = state => {
  const uniqueIds = R.uniq(state.basket)
  const phoneCount = id => R.compose(
    R.length,
    R.filter(basketId => R.equals(id, basketId))
  )(state.basket)
  const phoneWithCount = phone => R.assoc('count', phoneCount(phone.id), phone)
  const phones = R.compose(
    R.map(phoneWithCount),
    R.map(id => getPhoneByIdSelector(state, id))
  )(uniqueIds)
  return phones
}
