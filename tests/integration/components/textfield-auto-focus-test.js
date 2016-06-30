import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('textfield-auto-focus', 'Integration | Component | textfield auto focus', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{textfield-auto-focus}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#textfield-auto-focus}}
      template block text
    {{/textfield-auto-focus}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
