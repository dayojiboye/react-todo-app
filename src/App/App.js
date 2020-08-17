import React, { Component } from 'react';
import './App.css';
import Alert from '../components/Alert Component/Alert';
import Header from '../components/Header/Header';
import Main from '../components/Main Section/Main';
import Backdrop from '../components/Backdrop/backdrop';
import Modal from '../components/Modal-Component/modal';
import DeleteItem from '../components/DeleteItem/DeleteItem';

class App extends Component {
  state = {
    items: JSON.parse(localStorage.getItem('items')) || [],
    text: '',
    showAlert: false,
    alertType: '',
    showModal: false,
  };

  modal = null;

  hideAlert = () => {
    setTimeout(() => {
      this.setState({ showAlert: false });
    }, 2000);
  };

  inputVal = (event) => {
    this.setState({ text: event.target.value });
  };

  hideModalHandler = () => {
    this.setState({ showModal: false });
  };

  showModalHandler = () => {
    this.setState({ showModal: true });
  };

  markItemHandler = (event) => {
    event.target.closest('li').classList.toggle('done');
  };

  confirmDeleteHandler = (itemIndex) => {
    const filteredItems = this.state.items.filter((item, index) => {
      return index !== itemIndex;
    });

    this.setState({
      items: filteredItems,
      showModal: false,
      showAlert: true,
      alertType: 'delete',
    });

    this.hideAlert();
  };

  startDeleteHandler = (itemIndex) => {
    this.showModalHandler();

    this.modal = (
      <DeleteItem
        cancel={this.hideModalHandler}
        delete={this.confirmDeleteHandler.bind(this, itemIndex)}
      />
    );
  };

  addItemHandler = () => {
    if (this.state.text.trim() === '') {
      this.setState({ showAlert: true, alertType: 'caution' });
      this.hideAlert();
      return;
    }

    const newItem = {
      id: Date.now(),
      item: this.state.text.toUpperCase(),
    };

    const itemsArr = [...this.state.items];
    itemsArr.push(newItem);

    this.setState({
      items: itemsArr,
      text: '',
      showAlert: true,
      alertType: 'success',
    });

    this.hideAlert();
  };

  render() {
    let modal;

    this.state.showModal ? (modal = this.modal) : (modal = null);

    return (
      <div className="App">
        <Backdrop
          showmodal={this.state.showModal}
          hide={this.hideModalHandler}
        />
        <Modal showModal={this.state.showModal}>{modal}</Modal>
        <Alert showalert={this.state.showAlert} type={this.state.alertType} />
        <Header />
        <Main
          change={this.inputVal}
          clicked={this.addItemHandler}
          text={this.state.text}
          items={this.state.items}
          delete={this.startDeleteHandler}
          done={this.markItemHandler}
        />
      </div>
    );
  }
}

export default App;
