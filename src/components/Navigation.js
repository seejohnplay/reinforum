import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadCategories, toggleIsOpen } from '../actions'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

class Navigation extends React.Component {
  componentDidMount() {
    this.props.loadCategories()
  }

  render() {
    const { categories, isOpen, toggleIsOpen } = this.props

    return (
      <div>
        <Navbar color="faded" light toggleable>
            <NavbarBrand className="logo" href="/">Reinforum</NavbarBrand>
            <NavbarToggler right onClick={toggleIsOpen} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem key="all">
                  <NavLink className="all-posts" tag={Link} to="/">All Posts</NavLink>
                </NavItem>
                {categories.map(category => (
                  <NavItem key={category.name}>
                    <NavLink className={category.url} tag={Link} to={"/" + category.url}>{category.name}</NavLink>
                  </NavItem>))}
                <NavItem key="add">
                  <NavLink className="new-post" tag={Link} to="/posts/new">New Post</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </Navbar>
      </div>
    )
  }
}

function mapStateToProps ({ categories, navigation }) {
  return {
    categories,
    isOpen: navigation
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadCategories: () => dispatch(loadCategories()),
    toggleIsOpen: () => dispatch(toggleIsOpen())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)
