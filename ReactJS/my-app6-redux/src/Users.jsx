import React, { Component } from 'react'
import { connect } from 'react-redux';
class Users extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <ul>
                    {this.props.users && this.props.users.map(user => <li key={user}>{user}</li>)}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        users:state.users
    }
}

export default connect(mapStateToProps)(Users);