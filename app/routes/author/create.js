import Route from '@ember/routing/route';

export default Route.extend({
   /* resetController(controller) {
        this._super(...arguments);

      controller.reset();
    },*/

    model() {

        return {
            first: '',
            last: ''
        }
    }
     
});
