import { connect } from 'react-redux';
import CurrentView from '../components/CurrentView';
import { fetchTopDestinations } from '../actions.js';

const mapStateToProps = (state, ownProps) => {
  return {
    currentView: state.currentView
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchTopDestinations: () => {
      dispatch(fetchTopDestinations());
    }
  };
};

const ShowCurrentView = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentView);

export default ShowCurrentView;