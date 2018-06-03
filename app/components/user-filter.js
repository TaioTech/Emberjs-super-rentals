import Component from '@ember/component';
import Ember from 'ember';

const {
  get,
  set
} = Ember;

export default Component.extend({
  firstName: null,
  users: null,
  filteredUsers: null,

  didReceiveAttrs() {
    this._super(...arguments);
    let users = get(this, 'users');
    set(this, 'filteredUsers', users);
  },

  actions: {
    filterListOfUsers() {
      let firstName = get(this, 'firstName');
      let users = get(this, 'users');
      let narrowedUserList = users.findBy('name', firstName);
      if (narrowedUserList) {
        set(this, 'filteredUsers', [ narrowedUserList ]); // had to make an array to allow each loop for accessibility
      } else {
        set(this, 'filteredUsers', users);
      }
    },
    newTest() {
      // All of these ways do the same things just slightly susceptible to unique results
      // By default       this.sendAction('action');
      this.sendAction();
      //this.attrs.heyThere();
      //get(this, 'heyThere')();
      // let heyThere = get(this, 'heyThere');
      // heyThere();
    }
  }

});

  // tagName: 'form',
  // classNames: ['Tutorial'],
  // users: null,  // this is required for this component to work
  // firstUser: null,
  // attributeBindings: ['action'],

  // action: 'http://google.com',    //sends you to told address by action on a button of component

  // didReceiveAttrs() {
  //   this._super(...arguments);
  //   let firstUser = get(this, 'users.firstObject');
  //   set(this, 'firstUser', firstUser);
  // },

  // input() {
  //   console.log('We are inputting');
  // },

  // submit(event) {
  //   event.preventDefault(); //keeps from allowing to submit
  // }

