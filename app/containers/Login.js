import { connect } from 'react-redux';
import LoginView from '../components/LoginView';
import { setUserId, setCurrentView, Views }  from '../actions.js';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.userId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setUserId: (newId) => {
      console.log("setting the user id to " + newId);
      dispatch(setUserId(newId));
    },
    loginClicked: () => {
      dispatch(setCurrentView(Views.RATE_CITIES))
    }
  };
};

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView);

export default Login;