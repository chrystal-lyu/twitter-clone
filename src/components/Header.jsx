import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import  { ReactComponent as AppLogo } from '../media/logo.svg';
import  { ReactComponent as HomeIconSvg } from '../media/header_home.svg';
import  { ReactComponent as ExploreIconSvg } from '../media/header_explore.svg';
import  { ReactComponent as NotifIconSvg } from '../media/header_notification.svg';
import  { ReactComponent as MessageIconSvg } from '../media/header_message.svg';
import  { ReactComponent as BookmarkIconSvg } from '../media/header_bookmark.svg';
import  { ReactComponent as ListsIconSvg } from '../media/header_lists.svg';
import  { ReactComponent as MoreIconSvg } from '../media/header_more.svg';

const Wrapper = styled.div `
  position: relative;
  width: 260px;
`
const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin-top: 5px;
  position: fixed;
  top: 0;
`
const MenuItemContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction; row;
  justify-content: flex-start;
  padding: 10px 5px;
  margin-bottom: 5px;
  border-radius: 999px;
  transition: background-color .2s;
  transition: all .2s;
  cursor: pointer;

  &:hover {
    background-color: #20303D;
    color: rgb(29, 161, 242);
  }
`
const MenuItem = styled(Link) `
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: bold;
  width: fit-content;
  margin-left: 20px;
  margin-right: 15px;
  transition: all .2s;

  ${MenuItemContainer}:hover & {
    color: rgb(29, 161, 242);
  }
`
const Icon = styled(AppLogo) `
  fill: white;
  padding: 0 5px;
`
const HomeIcon = styled(HomeIconSvg)`
  fill: white;
  padding: 0 5px;
  ${MenuItemContainer}:hover & {
    fill: rgb(29, 161, 242);
  }
`
const ExploreIcon = styled(ExploreIconSvg)`
  fill: white;
  padding: 0 5px;
  ${MenuItemContainer}:hover & {
    fill: rgb(29, 161, 242);
  }
`
const NotifIcon = styled(NotifIconSvg)`
  fill: white;
  padding: 0 5px;
  ${MenuItemContainer}:hover & {
    fill: rgb(29, 161, 242);
  }
`
const MessageIcon = styled(MessageIconSvg)`
  fill: white;
  padding: 0 5px;
  ${MenuItemContainer}:hover & {
    fill: rgb(29, 161, 242);
  }
`
const BookmarkIcon = styled(BookmarkIconSvg)`
  fill: white;
  padding: 0 5px;
  ${MenuItemContainer}:hover & {
    fill: rgb(29, 161, 242);
  }
`
const ListsIcon = styled(ListsIconSvg)`
  fill: white;
  padding: 0 5px;
  ${MenuItemContainer}:hover & {
    fill: rgb(29, 161, 242);
  }
`
const MoreIcon = styled(MoreIconSvg)`
  fill: white;
  padding: 0 5px;
  ${MenuItemContainer}:hover & {
    fill: rgb(29, 161, 242);
  }
`

function Header () {
  return (
    <Wrapper>
      <MenuList>
        <MenuItemContainer>
          <Icon/>
        </MenuItemContainer>
        <MenuItemContainer>
          <HomeIcon/>
          <MenuItem to='/'>Home</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          <ExploreIcon/>
          <MenuItem to='/explore'>Explore</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          <NotifIcon/>
          <MenuItem to='/'>Notifications</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          <MessageIcon/>
          <MenuItem to='/'>Messages</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          <BookmarkIcon/>
          <MenuItem to='/'>Bookmarks</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          <ListsIcon/>
          <MenuItem to='/'>Lists</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          <MoreIcon/>
          <MenuItem to='/'>Profile</MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          <MoreIcon/>
          <MenuItem to='/'>More</MenuItem>
        </MenuItemContainer>
      </MenuList>
    </Wrapper>
  );
}

export default Header;