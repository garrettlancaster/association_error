import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('user');
  },

  afterModel: function(){
    this.store.find('user');
    return;
  }
});
