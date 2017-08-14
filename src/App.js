import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadCategories } from './actions'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.loadCategories()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Reinforum</h2>
        </div>
        <p>Categories:</p>
        <ul className="App-intro">
          {this.props.categories.map(category => (
            <li key={category.name}>
              {category.name}
            </li>))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps ({ categories }) {
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
)(App)
