import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  findAll: function(){
    return Ember.RSVP.Promise.resolve({
      goals: [
        {id: 1, title: 'parent goal', parent_id: null, user_id: 1},
        {id: 2, title: 'child goal', parent_id: 1, user_id: 2, parent_id: 1},
      ],
      users: [
        {id: 1, name: 'manager', goal_ids: [1], parent_id: null},
        {id: 2, name: 'pee-on', goal_ids: [2], parent_id: '1'}
      ]
    });
  }
});
