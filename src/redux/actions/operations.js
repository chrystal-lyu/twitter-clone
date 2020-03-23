import axios from 'axios';
import actions from './actions';

const receiveTimelineJson = actions.receiveTimelineJson;
const receiveTrendJson = actions.receiveTrendJson;

export const fetchTimeline = () => {
	return dispatch => {
    return axios.get('/tweets')
      .then(response => {
        const responseData = response.data;
        let data = [];
        responseData.map((child) => {
          // trim the original json to what we need to display
          const childData = {
            id: child.id,
            body: child.text,
            entities: child.entities,
            avatarImg: child.user.profile_image_url,
            name: child.user.name,
            handle: child.user.screen_name,
            time: child.created_at,
            favCount: child.favorite_count,
            rtCount: child.retweet_count
          }
          data.push(childData);
          return null
        })
        dispatch(receiveTimelineJson(data))
      })
      .catch(error => {
        throw(error);
      });
  }
}

export const fetchTrends = () => {
  return dispatch => {
    return axios.get('/trends')
      .then(response => {
        dispatch(receiveTrendJson(response.data))
      })
      .catch(error=> {
        throw(error);
      })
  }
}