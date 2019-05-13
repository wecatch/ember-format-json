import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | format-json', function(hooks) {
  setupRenderingTest(hooks);

  test('render json', async function(assert) {
      assert.expect(2);

      await render(hbs`{{format-json}}`);
      assert.equal(this.element.innerText.trim(), '""');

      this.set('value', {'a': 1})
      await render(hbs`<FormatJson @value={{this.value}}/>`);
      assert.equal(this.element.querySelector("div.json-formatter-row").getAttribute("class"), 'json-formatter-row', 'render to json');
  });

});
