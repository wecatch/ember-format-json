import Component from '@ember/component'
import layout from '../templates/components/format-json';
import JSONFormatter from 'json-formatter';

export default Component.extend({
    layout,
    didInsertElement(){
        const formatter = new JSONFormatter(this.value, 0);
        let v = formatter.render();
        this.$().append(v);
    },
    value: null,
    init(){
        this._super(...arguments);
        this.set('value', {});
    }
});