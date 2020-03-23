import axios from 'axios';
import actions from './actions';

const receiveTimelineJson = actions.receiveTimelineJson;

export const fetchTimeline = () => {
	return dispatch => {
    return axios.get('/tweets')
      .then((response) => {
        const responseData = response.data;
        let data = [];
        responseData.map((child) => {
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
