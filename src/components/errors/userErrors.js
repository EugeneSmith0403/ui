import React, {Component} from 'react'
import { Button, Form, Message, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const UserErrors = ({message, status, statusText}) => {
  return (
    <div className="ui container">
      <Grid.Row width={3}>
        {status &&
          <Message negative>
            <Message.Header>{status} {statusText}</Message.Header>
              <p>{message}</p>
            </Message>
        }
        </Grid.Row>
      </div>
  )
}

const mapStateToProps = (state) => {
  const data = state.errors.data;
  return {
    message: data && data.results.errors.message,
    status: state.errors.status,
    statusText: state.errors.statusText
  }
}

UserErrors.propTypes = {
  message:  PropTypes.string,
  status:  PropTypes.number,
  statusText:  PropTypes.string
}

export default connect(mapStateToProps, null)(UserErrors)
