import React, { children } from 'react';

const Layout = ({children}) => {
    return (
        <div className='Layout'>
            {children}
        </div>
    );
}

export { Layout };