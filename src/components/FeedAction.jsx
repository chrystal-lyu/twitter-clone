import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import  { ReactComponent as ActionComment } from '../media/action_comment.svg';
import  { ReactComponent as ActionRetweet } from '../media/action_retweet.svg';
import  { ReactComponent as ActionLike } from '../media/action_like.svg';
import  { ReactComponent as ActionShare } from '../media/action_share.svg';
import  { ReactComponent as ActionInsight } from '../media/action_insight.svg';
import { number_to_thousand } from '../util'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`

const Action = styled.div`
  border-radius: 35px;
  width:35px;
  height:35px;
  text-align: center;
  justify-content: center;
  display: flex;
  transition: all .2s;
  cursor: pointer;
  position: relative;
  color: rgb(136, 153, 166);
  &:hover {
    background-color: ${props => props.theme.background}
  }
`
const Count = styled.span`
  position: absolute;
  top: 8px;
  left: 37px;
  transition: all .2s;
  ${Action}:hover & {
    color: ${props => props.theme.main}
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
  ${Action}:hover & {
    fill: rgb(23, 191, 99);
  }
`
const Like = styled(ActionLike) `
  fill: rgb(136, 153, 166);
  width: 18px;
  ${Action}:hover & {
    fill: rgb(224, 36, 94);
  }
`
const Share = styled(ActionShare) `
  fill: rgb(136, 153, 166);
  width: 18px;
  ${Action}:hover & {
    fill: rgb(29, 161, 242)
  }
`
const Insight = styled(ActionInsight) `
  fill: rgb(136, 153, 166);
  width: 18px;
  ${Action}:hover & {
    fill: rgb(29, 161, 242)
  }
`
Action.defaultProps = {
  theme: {
    main: 'rgb(29, 161, 242)',
    background: 'rgba(29, 161, 242, .1)'
  }
}

const retweet = {
  main: 'rgb(23, 191, 99)',
  background: 'rgba(23, 191, 99, .1)'
}

const like = {
  main: 'rgb(224, 36, 94)',
  background: 'rgba(224, 36, 94, .1)'
}

class FeedAction extends React.Component {
  render() {
    return (
      <Wrapper>
        <Action><Comment/></Action>
        <ThemeProvider theme={retweet}>
          <Action>
            <Retweet/>
            <Count>{number_to_thousand(this.props.rtCount)}</Count>
            </Action>
        </ThemeProvider>
        <ThemeProvider theme={like}>
          <Action>
            <Like/>
            <Count>{number_to_thousand(this.props.favCount)}</Count>
          </Action>
        </ThemeProvider>
        <Action><Share/></Action>
        <Action><Insight/></Action>
      </Wrapper>
    )
  }
}

export default FeedAction;