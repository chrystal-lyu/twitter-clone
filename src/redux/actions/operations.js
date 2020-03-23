import axios from 'axios';
import actions from './actions';

const getTimeline = actions.getTimeline;

const fetchTimeline = (timeline) => {
  return dispatch => {
    return axios.get('/tweets')
      .then(response => {
        const responseData = response.data;
        let data = [];
        responseData.children.map(child => {
          const childData = {
            id: child.id,
            body: child.text,
            entities: child.entities,
            avatarImg: child.avatarImg,
            name: child.user.name,
            handle: child.user.screen_name,
            time: child.created_at,
            favCount: child.favorite_count,
            rtCount: child.retweet_count
          }
          data.push(childData);
          return null
        })
        dispatch(getTimeline(responseData)); 
      })
  }
}

export default {
  fetchTimeline
}
