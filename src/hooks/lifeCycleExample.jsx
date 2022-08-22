import React, { Component } from 'react'

export default class lifeCycleExample extends Component {

    contructor(props) {
        super(props)
        console.log('CONSTRUCTOR: cuando se instancia el componente')
    }

    componentWillMount() {
        console.log('Antes del montaje del componente')
    }

    componentDidMount() {
        console.log('Justo al acabar el montaje del componente anes de pintarlo, como pedir peticiones http pidiendo tareas o personas o algo que pintaremos');
    }

    componentWillReceiveProps(nextProps, nextstate) {
        console.log('si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextstate) {
        // return true / false; actualiza si el componente debe o no actualizarse
    }

    componentWillUpdate(nextProps, nextstate) {
        console.log('Justo antes de actualizarse')
    }

    componentDidUpdate() {
        console.log('Se ejecuta justo despues de actualizarse');
    }

    componentWillUnmount() {
        console.log('Justo antes de desaparecer')
    }

  render() {
    return (
      <div>lifeCycleExample</div>
    )
  }
}
