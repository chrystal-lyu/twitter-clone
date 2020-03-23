import actionTypes from './actionTypes';

const requestTimelineJson = () => ({
  type: actionTypes.REQUEST_TIMELINE_JSON
})

const receiveTimelineJson = (timeline) => ({
  type: actionTypes.RECEIVE_TIMELINE_JSON,
  timeline
})

const requestTrendJson = () => ({
  type: actionTypes.REQUEST_TREND_JSON
})

const receiveTrendJson = (trends) => ({
  type: actionTypes.RECEIVE_TREND_JSON,
  trends
})

export default {
  requestTimelineJson,
  receiveTimelineJson,
  requestTrendJson,
  receiveTrendJson
}
