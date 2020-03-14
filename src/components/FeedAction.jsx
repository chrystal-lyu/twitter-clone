import React from 'react';
import styled from 'styled-components';

import  { ReactComponent as ActionComment } from '../media/action_comment.svg';
import  { ReactComponent as ActionRetweet } from '../media/action_retweet.svg';
import  { ReactComponent as ActionLike } from '../media/action_like.svg';
import  { ReactComponent as ActionShare } from '../media/action_share.svg';
import  { ReactComponent as ActionInsight } from '../media/action_insight.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`

const Action = styled.span`
  border-radius: 35px;
  width:35px;
  height:35px;
  text-align: center;
  justify-content: center;
  display: flex;
  transition: background-color .2s;
  transition: all .2s;
  cursor: pointer;

  &:hover {
    background-color: rgba(29, 161, 242, .1);
  }
`

const Comment = styled(ActionComment) `
  fill: rgb(136, 153, 166);
  width: 18px;
  transition: all .2s;

  ${Action}:hover & {
    fill: rgb(29, 161, 242)
  }
`
const Retweet = styled(ActionRetweet) `
  fill: rgb(136, 153, 166);
  width: 18px;
`
const Like = styled(ActionLike) `
  fill: rgb(136, 153, 166);
  width: 18px;
`
const Share = styled(ActionShare) `
  fill: rgb(136, 153, 166);
  width: 18px;
`
const Insight = styled(ActionInsight) `
  fill: rgb(136, 153, 166);
  width: 18px;
`

class FeedAction extends React.Component {
  render() {
    return (
      <Wrapper>
        <Action><Comment/></Action>
        <Action><Retweet/></Action>
        <Action><Like/></Action>
        <Action><Share/></Action>
        <Action><Insight/></Action>
      </Wrapper>
    )
  }
}

export default FeedAction;