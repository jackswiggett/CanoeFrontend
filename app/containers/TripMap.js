import { connect } from 'react-redux';
import TripMapView from '../components/TripMapView';
import { setTripDetailsIndex, setCurrentView, Views }  from '../actions.js';

const mapStateToProps = (state, ownProps) => {
  return {
    trips: state.tripDigest.items
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showTripDigestView: () => {
      dispatch(setCurrentView(Views.TRIP_DIGEST));
    },
    showSettings: () => {
      dispatch(setCurrentView(Views.SETTINGS))
    },
    showTripDigest: () => {
      dispatch(setCurrentView(Views.TRIP_DIGEST))
    }
  };
};

const TripMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(TripMapView);

export default TripMap;
