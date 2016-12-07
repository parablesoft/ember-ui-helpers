import Ember from 'ember';
import AutoFocusControlMixin from 'ember-ui-helpers/mixins/auto-focus-control';
import { module, test } from 'qunit';

module('Unit | Mixin | auto focus control');

// Replace this with your real tests.
test('it works', function(assert) {
  let AutoFocusControlObject = Ember.Object.extend(AutoFocusControlMixin);
  let subject = AutoFocusControlObject.create();
  assert.ok(subject);
});
