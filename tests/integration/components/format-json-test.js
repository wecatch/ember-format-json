import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, waitFor } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | format-json', function(hooks) {
  setupRenderingTest(hooks);

  test('render json', async function(assert) {
    await render(hbs`{{format-json}}`);
    assert.equal(this.element.innerText.trim(), '""');

    this.set('value', { a: 1 });
    await render(hbs`<FormatJson @value={{value}}/>`);
    assert.equal(
      this.element.querySelector('div.json-formatter-row').getAttribute("class"),
      'json-formatter-row',
      'render to json'
    );
  });

  test('rerender on update the value', async function(assert) {
    this.set('value', { a: "initial value" });
    await render(hbs`<FormatJson @value={{value}}/>`);
    await click('.json-formatter-toggler-link');
    await waitFor('.json-formatter-string');

    assert.equal(
      this.element.querySelector('.json-formatter-string').innerText.trim(),
      '"initial value"',
      'it renders initial value'
    );

    this.set('value', { b: 'updated value' });
    await click('.json-formatter-toggler-link');
    await waitFor('.json-formatter-string');

    assert.equal(
      this.element.querySelector('.json-formatter-string').innerText.trim(),
      '"updated value"',
      'it renders new value'
    );
  });
});
