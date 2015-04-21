import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  parent: DS.belongsTo('user', {inverse: 'children'}),
  children: DS.hasMany('user', {inverse: 'parent'}),
  goals: DS.hasMany('goal')
});

export default User;
