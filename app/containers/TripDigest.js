import { connect } from 'react-redux';
import TripDigestView from '../components/TripDigestView';
import { setTripDetailsIndex, setCurrentView, Views }  from '../actions.js';

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.tripDigest.isFetching,
    trips: state.tripDigest.items
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setTripDetailsIndex: (index) => {
      dispatch(setTripDetailsIndex(index));
    },
    showTripDetails: () => {
      dispatch(setCurrentView(Views.TRIP_DETAILS));
    },
    showSettings: () => {
      dispatch(setCurrentView(Views.SETTINGS))
    },
    showTripMapView: () => {
      dispatch(setCurrentView(Views.TRIP_MAP));
    }
  };
};

const TripDigest = connect(
  mapStateToProps,
  mapDispatchToProps
)(TripDigestView);

export default TripDigest;
