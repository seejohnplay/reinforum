import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadCategories } from '../actions'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  componentDidMount() {
    this.props.loadCategories()
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">Reinforum</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.props.categories.map(category => (
                <NavItem key={category.name}>
                  <NavLink className={category.name} tag={Link} to={"/" + category.name}>{category.name}</NavLink>
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

function mapStateToProps ({ categories, posts }) {
  return {
    categories: categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadCategories: () => dispatch(loadCategories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)
