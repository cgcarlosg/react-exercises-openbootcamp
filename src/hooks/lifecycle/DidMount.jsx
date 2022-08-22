import React, { Component, useEffect } from 'react';

export class Didmount extends Component {

    componentDidMount() {
        console.log('comportamiento antes de que el componente sea añadido al DOM o que se renderice')
    }
    render() {
        return (
            <div>
                <h1>Did Mount Class</h1>
            </div>
        );
    }
}

export const DidmountHook = () => {

    useEffect(() => {
          console.log('comportamiento antes de que el componente sea añadido al DOM o que se renderice')
    }, []);

    return (
        <div>
              <h1>Did Mount Function</h1>
        </div>
    );
}
