import React from 'react';
import styled, { css } from 'styled-components';
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
const MenuItemContainer = styled(Link)`
  width: fit-content;
  display: flex;
  flex-direction; row;
  justify-content: flex-start;
  padding: 10px 5px;
  margin-bottom: 5px;
  border-radius: 999px;
  text-decoration: none;
  transition: background-color .2s;
  transition: all .2s;
  cursor: pointer;

  &:hover {
    background-color: #20303D;
    color: rgb(29, 161, 242);
  }
`
const MenuItem = styled.div `
  color: white;
  font-size: 18px;
  line-height: 25px;
  text-transform: capitalize;
  font-weight: bold;
  width: fit-content;
  margin-left: 15px;
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

const createStyle = () => {
  let styles = '';
  for (let i = 0; i < 20; i += 1) {
     styles += `  
       fill: white;
       padding: 0 5px;
       ${MenuItemContainer}:hover & {
         fill: rgb(29, 161, 242);
       }
     `
  }
  return css`${styles}`;
}

const HomeIcon = styled(HomeIconSvg)`${createStyle()};`
const ExploreIcon = styled(ExploreIconSvg)`${createStyle()};`
const NotifIcon = styled(NotifIconSvg)`${createStyle()};`
const MessageIcon = styled(MessageIconSvg)`${createStyle()};`
const BookmarkIcon = styled(BookmarkIconSvg)`${createStyle()};`
const ListsIcon = styled(ListsIconSvg)`${createStyle()};`
const MoreIcon = styled(MoreIconSvg)`${createStyle()};`

const items = [
  {
      route: '/',
      icon: <HomeIcon />,
      title: 'Home',
  },
  {
      route: '/explore',
      icon: <ExploreIcon />,
      title: 'Explore',
  },
  {
      route: '/notifications',
      icon: <NotifIcon />,
      title: 'Notifications',
  },
  {
      route: '/messages',
      icon: <MessageIcon />,
      title: 'Messages',
  },
  {
      route: '/bookmarks',
      icon: <BookmarkIcon />,
      title: 'Bookmarks',
  },
  {
    route: '/lists',
    icon: <ListsIcon />,
    title: 'Lists',
  },
  {
    route: '/profile',
    icon: <MoreIcon />,
    title: 'Profile',
  },
  {
    route: '/more',
    icon: <MoreIcon />,
    title: 'More',
  }
];

function Header () {
  return (
    <Wrapper>
      <MenuList>
        <MenuItemContainer>
          <Icon/>
        </MenuItemContainer>
        {
          items.map((item, index) => {
            return (
              <MenuItemContainer key={index} to={item.route}>
                {item.icon}
                <MenuItem>{item.title}</MenuItem>
              </MenuItemContainer>
            )
          })
        }
      </MenuList>
    </Wrapper>
  );
}

export default Header;