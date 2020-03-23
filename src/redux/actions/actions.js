import actionTypes from './actionTypes';

const requestTimelineJson = () => ({
  type: actionTypes.REQUEST_TIMELINE_JSON
})

const receiveTimelineJson = (timeline) => ({
  type: actionTypes.RECEIVE_TIMELINE_JSON,
  timeline
})

export default {
  requestTimelineJson,
  receiveTimelineJson
}
