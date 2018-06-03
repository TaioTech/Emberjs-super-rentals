import Controller from '@ember/controller';

export default Controller.extend({
  users: [
    {
      id: 1,
      name: 'Dave',
      occupation: 'CEO'
    },
    {
      id: 2,
      name: 'Jeff',
      occupation: 'Lead Developer'
    },
    {
      id: 3,
      name: 'Alicia',
      occupation: 'Content Analyst'
    }
  ],

  actions: {
    testAction() {
      alert('hey there');
    }
  }
});
