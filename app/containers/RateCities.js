import { connect } from 'react-redux';
import RateCitiesView from '../components/RateCitiesView';
//import { setUserId, setCurrentView, Views }  from '../actions.js';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.userId
  };
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

const RateCities = connect(
  mapStateToProps,
  mapDispatchToProps
)(RateCitiesView);

export default RateCities;