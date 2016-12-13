import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import logUserIn from '../actions/logUserIn'
import boardRequest from '../actions/boardRequest'

class FastLogin extends Component {
  handleOnClick(event){
//     This email and password would be better stored in the secrets.yml of your rails app.
//     So logUserIn would make the ajax call to ultimately log in the user.
    
    this.props.logUserIn({email: "drew@d.com", password:"me"})
  }

  render(){
    return(
      <div>
        <Button onClick={this.handleOnClick.bind(this)}></Button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logUserIn, boardRequest }, dispatch)
}

export default connect(null, mapDispatchToProps)(FastLogin)
