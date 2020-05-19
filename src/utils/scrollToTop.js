import React, { useEffect, Fragment } from 'react';

import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ history, children }) => {
    useEffect(() => {
        const unListen = history.listen(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        });
        return () => {
            unListen();
        }
    }, [history]);
    return <Fragment>{children}</Fragment>
};
export default withRouter(ScrollToTop);
