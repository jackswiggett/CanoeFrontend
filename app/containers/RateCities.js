import { connect } from 'react-redux';
import RateCitiesView from '../components/RateCitiesView';
import { rateDestination, setCurrentView, Views }  from '../actions.js';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.userId,
    loading: state.topDestinations.isFetching,
    destinations: state.topDestinations.items
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    continue: () => {
      dispatch(setCurrentView(Views.SETTINGS))
    },
    rateDestination: (destination, rating) => {
      dispatch(rateDestination(destination, rating))
    }
  };
};

const RateCities = connect(
  mapStateToProps,
  mapDispatchToProps
)(RateCitiesView);

export default RateCities;