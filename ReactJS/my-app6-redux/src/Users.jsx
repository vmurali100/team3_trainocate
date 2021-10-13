import React, { Component } from "react";
import { connect } from "react-redux";
class Users extends Component {
  render() {
      console.log(this.props);
    return <div></div>;
  }
}

function mapStateToProps(state) {
    return{
        users:state.users
    }
}

export default connect(mapStateToProps)(Users)
