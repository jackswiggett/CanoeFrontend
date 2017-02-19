import { connect } from 'react-redux';
import RateCitiesView from '../components/RateCitiesView';
import { setCurrentView, Views }  from '../actions.js';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.userId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    continue: () => {
      dispatch(setCurrentView(Views.SETTINGS))
    }
  };
};

const RateCities = connect(
  mapStateToProps,
  mapDispatchToProps
)(RateCitiesView);

export default RateCities;