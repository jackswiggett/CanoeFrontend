import { connect } from 'react-redux';
import TripDetailsView from '../components/TripDetailsView';
import { setCurrentView, Views }  from '../actions.js';

const mapStateToProps = (state, ownProps) => {
  let trip = state.tripDigest.items[state.tripDetailsIndex];

  return {
    destinationName: trip.city,
    startDate: trip.departure_date,
    endDate: trip.return_date,
    price: trip.price
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    returnToDigest: () => {
      dispatch(setCurrentView(Views.TRIP_DIGEST))
    }
  };
};

const TripDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(TripDetailsView);

export default TripDetails;