import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 14px;
  border: 1px solid rgb(56, 68, 77);
  margin-top: 10px;
  margin-right: 20px;
  overflow: hidden;
`
const ImgContainer = styled.div`
  width: 25%;

  img {
    object-fit: cover;
  }
`
const DetailContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
`
const Title = styled.div`
  width: 350px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
`
const Detail = styled.div`
  color: rgb(136, 153, 166);
  width: 350px;
  text-overflow: ellipsis; 
  overflow: hidden; 
  white-space: nowrap;
`

class FeedUrl extends React.Component {
  render () {
    return (
      <Wrapper href={this.props.url}>
        <Container>
          <ImgContainer><img width="120" height="120" alt={this.props.title} src={this.props.img_src}/></ImgContainer>
          <DetailContainer>
            <Title>{this.props.title}</Title>
            <Detail>{this.props.description}</Detail>
          </DetailContainer>
        </Container>
      </Wrapper>
    )
  }
}

export default FeedUrl;