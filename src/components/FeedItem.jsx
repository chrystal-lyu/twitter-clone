import React from 'react';
import styled from 'styled-components';

import { youtube_parser } from '../common/helper.js'

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
`
const Head = styled.div`
  display: flex;
  flex-direction: row;
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
    <Avatar alt='avatar' width='50px' height='50px' src={props.src}/>
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
      <div><img alt={props.title} src={props.url_img_src}/></div>
      <div>{props.url_title}</div>
      {/* <div>{props.url_description}</div> */}
    </div>
  )
}

const TimeStamp = () => {
  return (
    <Time>{new Date().toLocaleDateString()}</Time>
  )
}

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      img_src: ''
    }
  }

  componentDidMount () {
    let video_id = '';
    const yt_api_key = 'AIzaSyAA86cQC5o_v0koYynJ2mhUfmlAQHeD3As'
    let urls = this.props.entities.urls;
    if (urls.length > 0) {
      video_id = youtube_parser(urls[0]);
      const endpoint = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + video_id + '&key=' + yt_api_key;
      fetch(endpoint)
      .then((res) => res.json())
      .then(
        (data) => {
          // add urls validation later e.g. invalid video url
          let title = data.items[0].snippet.title;
          let description = data.items[0].snippet.description;
          let img_src = data.items[0].snippet.thumbnails.default.url;
          this.setState({
            title,
            description,
            img_src
          })
        },
        (error) => {
          console.log('error')
        }
      )
    } else {
      return;
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
          <TimeStamp/>
        </Head>
        <TweetBody
          body={this.props.body} 
          url_img_src={this.state.img_src}
          url_title={this.state.title} 
          url_description={this.state.description}
        />
      </Text>
    </Wrapper>
    )
  }
}

export default FeedItem;