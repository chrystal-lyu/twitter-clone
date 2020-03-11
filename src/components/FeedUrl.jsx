import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 14px;
  border: 1px solid rgb(56, 68, 77);
  margin-top: 10px;
  margin-right: 20px;
  overflow: hidden;
`
const ImgContainer = styled.div`
  img {
    object-fit: cover;
  }
`
const DetailContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Title = styled.div`
`
const Detail = styled.div`
  line-height: 1em;
  height: 2em;       /* height is 2x line-height, so two lines will display */
  overflow: hidden;
`

class FeedUrl extends React.Component {
  render () {
    return (
      <Wrapper>
        <ImgContainer><img width="120" height="120" alt={this.props.title} src={this.props.img_src}/></ImgContainer>
        <DetailContainer>
          <Title>{this.props.title}</Title>
          <Detail>{this.props.description}</Detail>
        </DetailContainer>
      </Wrapper>
    )
  }
}

export default FeedUrl;