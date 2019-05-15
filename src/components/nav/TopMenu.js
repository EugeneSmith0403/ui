import React, {Component} from 'react'
import {Menu, Image, Grid} from 'semantic-ui-react'
import MenuNav from './LogoutNav'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import  {Button, OverlayTrigger, Popover} from 'react-bootstrap';
import AuthPermission from './../renderingPermission/AuthPermision'
import {logoutRequest} from './../../actions/auth'
import "./TopMenu.css"
const defaultImage = 'https://react.semantic-ui.com/images/wireframe/media-paragraph.png'
const height = 25
const width = 25
const delay = { show: 250, hide: 1000 }

const PopoverPanel = ({username, email}) => {
  return (
    <Popover id="popover-basic" title='Profile'>
      <p>
        <label htmlFor="">Username: </label>
        <span>{username}</span>
      </p>
      <p>
        <label htmlFor="">Email: </label>
        <span>{email}</span>
      </p>
      <p>
          <Link to="/profile">Edit</Link>
      </p>
    </Popover>
  )
}

const AvatarItem = ({image, username, email}) => {
  const popOver = PopoverPanel({username, email})
  return (
    <OverlayTrigger delay={delay} trigger="hover" placement="left" overlay={popOver}>
      <Menu.Item right={true}>
          <Image src={image} circular style={{width, height}} size='mini'/>
      </Menu.Item>
    </OverlayTrigger>
  )
}


const TopMenu = ({image = defaultImage, username, email, logout}) => {

  return (
    email ?
    <div>
      <Menu className="logo-menu__padding" pointing secondary>
        <Menu.Menu>
          <Link to="/">
            <Menu.Item name='home' active={false}/>
          </Link>
          </Menu.Menu>
        <Menu.Menu>
          <Link to="/profile">
            <Menu.Item name='profile' active={false}/>
          </Link>
        </Menu.Menu>
        <Menu.Menu>
          <Link to="/search-trips">
            <Menu.Item name='search trips' active={false}/>
          </Link>
        </Menu.Menu>
        <Menu.Menu>
          <Link to="/booking">
            <Menu.Item name='book' active={false}/>
          </Link>
        </Menu.Menu>
        <Menu.Menu>
          <Link to="/own-trips">
            <Menu.Item name='own trips' active={false}/>
          </Link>
        </Menu.Menu>
        <Menu.Menu>
          <Link to="/create-trip">
            <Menu.Item name='Create trip' active={false}/>
          </Link>
        </Menu.Menu>
        <Menu.Menu position='right'>
            <Menu.Item onClick={()=>logout()} name='logout' />
          <AvatarItem image={image} username={username} email={email}  />
        </Menu.Menu>
      </Menu>
    </div>
    : ''
  )
}


const mapStateToProps = (state) => {
  return {
    image: state.user.image,
    username: state.user.username,
    email: state.user.email
  }
}

TopMenu.propTypes = {
  image: PropTypes.string,
  username:  PropTypes.string,
  email: PropTypes.string
}
//TODO fix popover delay https://react-bootstrap.github.io/components/overlays/
export default connect(mapStateToProps, {logout: logoutRequest})(TopMenu)
