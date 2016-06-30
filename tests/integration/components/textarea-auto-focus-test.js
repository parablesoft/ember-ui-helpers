import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('textarea-auto-focus', 'Integration | Component | textarea auto focus', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{textarea-auto-focus}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#textarea-auto-focus}}
      template block text
    {{/textarea-auto-focus}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
