import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Containet } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},  
    ],
    filter: '',
  };
  createContact = (data) => {
    const newContact = {
      ...data, 
      id: nanoid()
      }  
      const nameCheck = this.state.contacts.find(({name})=> name === data.name)
      if(nameCheck){
        return alert(`${data.name} is already in contacts`)
      }
      this.setState((prevState) => ({
        contacts :[...prevState.contacts,(newContact)]}
      )) 
  }
  handleFind = ({ target }) => {
    const normalizedValue = target.value.trim().toLocaleLowerCase()
    this.setState({
      [target.name]: normalizedValue,
    });
  };
  findContact = () =>{
    return this.state.contacts.filter(({name}) => name.toLocaleLowerCase().includes(this.state.filter)
  )}
  removeContact = (id) => {
    const updatedContact = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({ contacts: updatedContact });
  };
  render() {
    return (
      <Containet>
        <h1>Phonebook</h1>
        <ContactForm createContact={this.createContact}/>

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleFind={this.handleFind}/>
        {this.findContact().length ? (<ContactList contacts={this.findContact()} removeContact={this.removeContact}/>
        ):(<p>No matches found!</p>)} 
      </Containet>
    );
  }
}
