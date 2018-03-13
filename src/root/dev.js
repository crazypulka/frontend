import React  from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Routes from '../routes';

/**
 * Initializing Google Analytics
 */
ReactGA.initialize(window.gaTrackingId, {
    debug: true
});

/**
 * logs the new page view
 */
function logPageView() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
}

const Root = ({ store, history }) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Routes />
            </div>
        </ConnectedRouter>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Root
