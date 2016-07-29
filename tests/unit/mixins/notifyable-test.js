import Ember from 'ember';
import NotifyableMixin from '../../../mixins/notifyable';
import { module, test } from 'qunit';

module('Unit | Mixin | notifyable');

// Replace this with your real tests.
test('it works', function(assert) {
  let NotifyableObject = Ember.Object.extend(NotifyableMixin);
  let subject = NotifyableObject.create();
  assert.ok(subject);
});
