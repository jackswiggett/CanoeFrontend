import { connect } from 'react-redux';
import TripDigestView from '../components/TripDigestView';
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

const TripDigest = connect(
  mapStateToProps,
  mapDispatchToProps
)(TripDigestView);

export default TripDigest;