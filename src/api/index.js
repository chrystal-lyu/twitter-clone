import axios from 'axios'; 

export const fetchTimeline = () => {
  return axios.get('/tweets')
  .then(
    response => response.data,
    error => console.log('An error occured', error)
  )
}

export const fetchTrends = () => {
  return axios.get('/trends')
  .then(
    response => response.data,
    error => console.log('An error occured', error)
  )
}

export const fetchResult = (query) => {
  axios.get('/search', { params: { search_query: query } })
  .then(
    response => response.data,
    error => console.log('An error occured', error)
  )
}
