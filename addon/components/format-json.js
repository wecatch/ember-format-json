import Component from '@ember/component'
import layout from '../templates/components/format-json';
import JSONFormatter from 'json-formatter-js'

export default Component.extend({
  layout,
  open: 0,
  value: '',

  didRender() {
    const formatter = new JSONFormatter(this.value, this.open);
    this.element.innerHTML = '';
    this.element.append(formatter.render());
  },
});
