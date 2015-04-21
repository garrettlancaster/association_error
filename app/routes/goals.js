import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('goal');
  },

  afterModel: function(){
    return this.store.find('goal');
  }
});
