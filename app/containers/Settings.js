import { connect } from 'react-redux';
import SettingsView from '../components/SettingsView';
import { setMaxPrice, setTripDurations, setCurrentView, Views }  from '../actions.js';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.userId,
    maxPrice: state.maxPrice
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setMaxPrice: (newMaxPrice) => {
      dispatch(setMaxPrice(newMaxPrice));
    },
    setTripDurations: (short, medium, long) => {
      dispatch(setTripDurations(short, medium, long));
    },
    exit: () => {
      dispatch(setCurrentView(Views.TRIP_DIGEST))
    }
  };
};

const Settings = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsView);

export default Settings;