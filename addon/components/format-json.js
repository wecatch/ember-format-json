import Component from '@ember/component'
import layout from '../templates/components/format-json';
import JSONFormatter from 'json-formatter-js'


export default Component.extend({
    layout,
    open: 0,
    didInsertElement(){
        const formatter = new JSONFormatter(this.value, this.open);
        let v = formatter.render();
        this.element.append(v);
    },
    value: '',
});