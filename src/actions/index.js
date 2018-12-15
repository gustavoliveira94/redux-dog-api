export const REQUEST_DOG = 'REQUEST_DOG'
export const FETCHING_DATA = 'FETCHING_DATA'

export const requestDog = name => {
  return async dispatch => {
    dispatch({type: FETCHING_DATA})
    const response = await fetch(
      `https://dog.ceo/api/breed/${name}/images/random`
    )
    const doggy = await response.json()
    dispatch({type: REQUEST_DOG, payload: doggy})
  }
}
