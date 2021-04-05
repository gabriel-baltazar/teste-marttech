import React, { Component } from 'react'
import '../modal.css'

export default class FormDataComponent extends Component {

  userData;

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCpf = this.onChangeCpf.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      cpf: ''
    }
  }

  // Form Events
  onChangeName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeCpf(e) {
    this.setState({ cpf: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    this.setState({
      name: '',
      cpf: ''
    })
  }

  // React Life Cycle
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem('user'));

    if (localStorage.getItem('user')) {
      this.setState({
        name: this.userData.name,
        email: this.userData.cpf
      })
    } else {
      this.setState({
        name: '',
        cpf: ''
      })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('user', JSON.stringify(nextState));
  }


  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div>
            <input type="text" value={this.state.name} onChange={this.onChangeName} placeholder="Nome" />
          </div>
          <div className="form">
            <input value={this.state.cpf} onChange={this.onChangeCpf} placeholder="CPF" />
          </div>
          <button className="bt-finalizar" type="submit">Finalizar</button>
        </form>
      </div>
    )
  }
}
