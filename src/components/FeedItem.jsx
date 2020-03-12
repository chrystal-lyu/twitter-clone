import React from 'react';
import styled from 'styled-components';

import { youtube_parser } from '../common/helper.js'

import FeedUrl from './FeedUrl'

const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  padding: 0 0 15px 15px;
  border-bottom: 1px solid rgb(56, 68, 77);
`
const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-left:15px;
`
const Head = styled.div`
  display: flex;
  flex-direction: row;
`
const AvatarContainer = styled.div`
  width:50px;
`
const Avatar = styled.img`
  border-radius: 100px;
  margin-right: 15px;
`
const Name = styled.div`
  font-weight: 800;
`
const Handle = styled.div`
  margin-left: 5px;

  a {
    color: rgb(136, 153, 166);
    text-decoration: none;
  }
`
const Dot = styled.span`
  color: rgb(136, 153, 166);
  padding: 0 5px;
`
const Time = styled.div`
  color: rgb(136, 153, 166);
  font-size: 15px;
`

const UserAvatar = (props) => {
  return (
    <AvatarContainer>
      <Avatar alt='avatar' width='50px' height='50px' src={props.src}/>
    </AvatarContainer>
  )
}

const UserName = (props) => {
  return (
    <Name>{props.name}</Name>
  )
}

const UserHandle = (props) => {
  return (
    <Handle><a href='/'>@{props.handle}</a></Handle>
  )
}

const TweetBody = (props) => {
  return (
    <div>
      {props.body}
      {props.renderFeedUrl}
    </div>
  )
}

const TimeStamp = (props) => {
  return (
    <Time>{props.time.substring(0,11)}</Time>
  )
}

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.renderFeedUrl = this.renderFeedUrl.bind(this);
    this.state = {
      title: '',
      description: '',
      img_src: '',
      url: ''
    }
  }

  componentDidMount () {
    // let video_id = '';
    // const yt_api_key = process.env.REACT_APP_YOUTUBE_API_KEY;
    // let urls = this.props.entities.urls;
    // if (urls.length > 0) {
    //   video_id = youtube_parser(urls[0]);
    //   const endpoint = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + video_id + '&key=' + yt_api_key;
    //   fetch(endpoint)
    //   .then((res) => res.json())
    //   .then(
    //     (data) => {
    //       let response = data.items[0].snippet;
    //       let title = response.title;
    //       let description = response.description;
    //       let img_src = response.thumbnails.standard.url;
    //       this.setState({
    //         title,
    //         description,
    //         img_src,
    //         url: urls[0]
    //       })
    //     },
    //     (error) => {
    //       console.log('error')
    //     }
    //   )
    // } else {
    //   return;
    // }
  }

  renderFeedUrl () {
    if (this.state.title.length > 0) {
      return (
        <FeedUrl
          img_src={this.state.img_src}
          title={this.state.title}
          description={this.state.description}
          url={this.state.url}
        />
      )
    }
  }

  render () {
    return (
    <Wrapper>
      <UserAvatar src={this.props.avatarImg}/>
      <Text>
        <Head>
          <UserName name={this.props.name}/>
          <UserHandle handle={this.props.handle}/>
          <Dot>·</Dot>
          <TimeStamp time={this.props.time}/>
        </Head>
        <TweetBody
          body={this.props.body} 
          renderFeedUrl={this.renderFeedUrl()}
        />
      </Text>
    </Wrapper>
    )
  }
}

export default FeedItem;