import ItemDetail from './ItemDetail'
import {connect} from 'react-redux'
import {oneTripRequest} from './../../actions/trip'


const mapStateToProps = (state) => {
  return {
    trip: state.ownerTrip && state.ownerTrip.trip,
    userEmail: state.user.email
  }
}

export default connect(mapStateToProps, {getOneTrip: oneTripRequest})(ItemDetail)
