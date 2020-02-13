import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

//session action creators
export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

//thunk action creators
export const signup = user => dispatch => (
    APIUtil.signup(user)
        .then(userPayload => (dispatch(receiveCurrentUser(userPayload))),
        error => (dispatch(receiveErrors(error.responseJSON))))
);

export const login = user => dispatch => (
    APIUtil.login(user)
        .then(userPayload => (dispatch(receiveCurrentUser(userPayload))),
        error => (dispatch(receiveErrors(error.responseJSON))))
);

export const logout = () => (
    APIUtil.logout()
        .then(user => dispatch(logoutCurrentUser()))
);