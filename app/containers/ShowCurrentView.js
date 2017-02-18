import { connect } from 'react-redux';
//import { setVisibilityFilter } from '../actions';
import CurrentView from '../components/CurrentView';

const mapStateToProps = (state, ownProps) => {
  return {
    currentView: state.currentView
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
/*    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  };*/
};

const ShowCurrentView = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentView);

export default ShowCurrentView;