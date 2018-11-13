import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        {this.props.loading === true
          ? null
          : <Dashboard />}
      </div>
    )
  }
}

/* se o authedUser for null então queremos em vez de renderizar Dashboard renderizar null
E se não for null então renderiza-se o componente dashboard
*/
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)