import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca')
    }
    render() {
        return (
            <div>
                <h1>Will Mount Class</h1>
            </div>
        );
    }
}

export const WillUnmountHook = () => {

    useEffect(() => {
       return () => {
        console.log('Comportamiento antes de que el componente desaparezca')
       };
    }, []);

    return (
        <div>
              <h1>Will UnMount Function</h1>
        </div>
    );
}
