import Ember from 'ember';
import layout from '../templates/components/format-json';
import JSONFormatter from 'json-formatter';

export default Ember.Component.extend({
    layout,
    didInsertElement(){
        const formatter = new JSONFormatter(this.value, 0);
        let v = formatter.render();
        this.$().append(v);
    },
    value: {}
});