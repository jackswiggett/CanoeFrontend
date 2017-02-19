import { connect } from 'react-redux';
import TripMapView from '../components/TripMapView';
//import { setUserId, setCurrentView, Views }  from '../actions.js';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
/*    setUserId: (newId) => {
      dispatch(setUserId(newId))
    },
    loginClicked: () => {
      dispatch(setCurrentView(Views.RATE_CITIES))
    }
  };*/
};

const TripMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(TripMapView);

export default TripMap;
