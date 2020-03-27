import React from 'react';
import styled, { css } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../redux/actions/operations';

import SignIn from './SignIn'
import  { ReactComponent as AppLogo } from '../assets/logo.svg';
import  { ReactComponent as HomeIconSvg } from '../assets/header_home.svg';
import  { ReactComponent as ExploreIconSvg } from '../assets/header_explore.svg';
import  { ReactComponent as NotifIconSvg } from '../assets/header_notification.svg';
import  { ReactComponent as MessageIconSvg } from '../assets/header_message.svg';
import  { ReactComponent as BookmarkIconSvg } from '../assets/header_bookmark.svg';
import  { ReactComponent as ListsIconSvg } from '../assets/header_lists.svg';
import  { ReactComponent as MoreIconSvg } from '../assets/header_more.svg';

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
  height: 100vh;
  overflow-y: auto;
`
const MenuItemContainer = styled(NavLink)`
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

  &.active {
    svg {
      fill: rgb(29, 161, 242);
    }
    div {
      color: rgb(29, 161, 242);
    }
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

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
    this.renderAuthBtn = this.renderAuthBtn.bind(this);
    this.state = {
      loggedIn: false
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.auth !== prevProps.auth) {
      this.setState({ loggedIn: !this.state.loggedIn });
    }
  }

  renderAuthBtn() {
    const { loggedIn } = this.state;
    return loggedIn ? (<div><a href="/" onClick={this.onLogout}>Logout</a></div>) : <SignIn/>
  }

  onLogout(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(startLogout());
  }

  render () {
    return (
      <Wrapper>
        <MenuList>
          <Link to='/'>
            <Icon/>
          </Link>
          {
            items.map((item, index) => {
              return (
                <MenuItemContainer key={index} to={item.route} exact activeClassName="active">
                  {item.icon}
                  <MenuItem>{item.title}</MenuItem>
                </MenuItemContainer>
              )
            })
          }
          {this.renderAuthBtn()}
        </MenuList>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Header);