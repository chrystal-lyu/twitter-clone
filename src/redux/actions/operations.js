import axios from 'axios';
import actions from './actions';
// import actionType from './actionTypes'
import { twitterProvider, authRef } from '../../firebase/';

const receiveTimelineJson = actions.receiveTimelineJson;
const receiveTrendJson = actions.receiveTrendJson;
const receiveSearchJson = actions.receiveSearchJson;
const login = actions.login;
const logout = actions.logout;
// const receiveHomeTimeline = actions.receiveHomeTimeline;

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

export const fetchSearchResult = (query) => {
  return dispatch => {
    return axios.get(
        '/search', 
        {params: { search_query: query }}
      )
      .then(response => {
        dispatch(receiveSearchJson(response.data))
      })
      .catch(error => {
        throw(error);
      })
  }
}

export const startLogin = () => {
  return async dispatch => {
    try {
      await authRef.signInWithPopup(twitterProvider).then(result => {
        console.log('Auth worked!', result);
        localStorage.setItem('isAuthenticated', true)
        localStorage.setItem('access_token', result.credential.accessToken);
        localStorage.setItem('secret_token', result.credential.secret);
        return dispatch(login());
      })
    } catch (error) {
      throw error
    }
  };
}

export const startLogout = () => {
  return dispatch => {
    return authRef.signOut().then(() => {
      console.log('Logged out!');
      localStorage.clear()
      return dispatch(logout());
    });
  };
}

// export const fetchHomeTimeline = () => {
//   return dispatch => {
//     return axios.get('/tweets')
//       .then(response => {
//         const responseData = response.data;
//         let data = [];
//         responseData.map((child) => {
//           // trim the original json to what we need to display
//           const childData = {
//             id: child.id,
//             body: child.text,
//             entities: child.entities,
//             avatarImg: child.user.profile_image_url,
//             name: child.user.name,
//             handle: child.user.screen_name,
//             time: child.created_at,
//             favCount: child.favorite_count,
//             rtCount: child.retweet_count
//           }
//           data.push(childData);
//           return null
//         })
//         dispatch(receiveTimelineJson(data))
//       })
//       .catch(error => {
//         throw(error);
//       });
//   }
// }