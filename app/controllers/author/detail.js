import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        deleteAuthor(author) {
            author.deleteRecord().
           then(() =>{ this.transitionToRoute('author.index');});

        }
    }
});
