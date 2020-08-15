import React, { Component } from 'react'
import { Confirm } from 'semantic-ui-react'

class ConfirmationPopup extends Component {


  render() {
    return (
      <div className="conf-modal">
        <Confirm
          open={this.props.confirm}
          header='Remove this show from your watchlist?'
          onCancel={this.props.closePopup}
          onConfirm={this.props.removeFromWatchlist}
        />
      </div>
    )
  }
}

export default ConfirmationPopup