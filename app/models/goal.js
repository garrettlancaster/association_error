import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  user: DS.belongsTo('user'),
  parent: DS.belongsTo('goal', {inverse: 'children'}),
  children: DS.hasMany('goal', {inverse: 'parent'})
});
