'use strict';

define("library-ui/tests/integration/components/author-form-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | author-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "E3Ne4eb6",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"author-form\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "n+WWQTlP",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"author-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("library-ui/tests/integration/components/author-list-item-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | author-list-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "80FUGVp2",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"author-list-item\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "glpwKQ2i",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"author-list-item\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("library-ui/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/author-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/author-form.js should pass ESLint\n\n');
  });
  QUnit.test('components/author-list-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/author-list-item.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/author/create.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/author/create.js should pass ESLint\n\n15:13 - Unexpected console statement. (no-console)');
  });
  QUnit.test('controllers/author/detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/author/detail.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/author/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/author/edit.js should pass ESLint\n\n');
  });
  QUnit.test('models/author.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/author.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/author.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/author.js should pass ESLint\n\n');
  });
  QUnit.test('routes/author/create.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/author/create.js should pass ESLint\n\n');
  });
  QUnit.test('routes/author/detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/author/detail.js should pass ESLint\n\n');
  });
  QUnit.test('routes/author/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/author/edit.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
});
define("library-ui/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('library-ui/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'library-ui/templates/application.hbs should pass TemplateLint.\n\nlibrary-ui/templates/application.hbs\n  2:1  error  Incorrect indentation for `<nav>` beginning at L2:C1. Expected `<nav>` to be at an indentation of 2 but was found at 1.  block-indentation\n  15:1  error  Incorrect indentation for `<main>` beginning at L15:C1. Expected `<main>` to be at an indentation of 2 but was found at 1.  block-indentation\n  3:5  error  Incorrect indentation for `<h1>` beginning at L3:C5. Expected `<h1>` to be at an indentation of 3 but was found at 5.  block-indentation\n  10:5  error  Incorrect indentation for `<ul>` beginning at L10:C5. Expected `<ul>` to be at an indentation of 3 but was found at 5.  block-indentation\n  4:9  error  Incorrect indentation for `{{#link-to}}` beginning at L4:C9. Expected `{{#link-to}}` to be at an indentation of 7 but was found at 9.  block-indentation\n  7:20  error  Incorrect indentation for `link-to` beginning at L4:C9. Expected `{{/link-to}}` ending at L7:C20 to be at an indentation of 9 but was found at 8.  block-indentation\n  5:12  error  Incorrect indentation for `<img>` beginning at L5:C12. Expected `<img>` to be at an indentation of 11 but was found at 12.  block-indentation\n  6:12  error  Incorrect indentation for `<span>` beginning at L6:C12. Expected `<span>` to be at an indentation of 11 but was found at 12.  block-indentation\n  11:9  error  Incorrect indentation for `<li>` beginning at L11:C9. Expected `<li>` to be at an indentation of 7 but was found at 9.  block-indentation\n  12:7  error  HTML comment detected  no-html-comments\n');
  });
  QUnit.test('library-ui/templates/author.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'library-ui/templates/author.hbs should pass TemplateLint.\n\nlibrary-ui/templates/author.hbs\n  21:28  error  Incorrect indentation of attribute \'first\' beginning at L21:C28. Expected \'first\' to be at L22:C11.  attribute-indentation\n  21:47  error  Incorrect indentation of attribute \'last\' beginning at L21:C47. Expected \'last\' to be at L23:C11.  attribute-indentation\n  22:11  error  Incorrect indentation of attribute \'authorId\' beginning at L22:C11. Expected \'authorId\' to be at L24:C11.  attribute-indentation\n  22:31  error  Incorrect indentation of attribute \'tagName\' beginning at L22:C31. Expected \'tagName\' to be at L25:C11.  attribute-indentation\n  22:43  error  Incorrect indentation of close curly braces \'}}\' for the component \'{{author-list-item}}\' beginning at L22:C43. Expected \'{{author-list-item}}\' to be at L26:C9.  attribute-indentation\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  7:5  error  Incorrect indentation for `{{#link-to}}` beginning at L7:C5. Expected `{{#link-to}}` to be at an indentation of 2 but was found at 5.  block-indentation\n  4:10  error  Incorrect indentation for `<input>` beginning at L4:C10. Expected `<input>` to be at an indentation of 6 but was found at 10.  block-indentation\n  11:16  error  Incorrect indentation for `link-to` beginning at L7:C5. Expected `{{/link-to}}` ending at L11:C16 to be at an indentation of 5 but was found at 4.  block-indentation\n  8:8  error  Incorrect indentation for `<div>` beginning at L8:C8. Expected `<div>` to be at an indentation of 7 but was found at 8.  block-indentation\n  8:29  error  Incorrect indentation for `\n            Add New Author\n        ` beginning at L8:C29. Expected `\n            Add New Author\n        ` to be at an indentation of 10 but was found at 12.  block-indentation\n  16:4  error  Incorrect indentation for `<h3>` beginning at L16:C4. Expected `<h3>` to be at an indentation of 2 but was found at 4.  block-indentation\n  19:4  error  Incorrect indentation for `<ul>` beginning at L19:C4. Expected `<ul>` to be at an indentation of 2 but was found at 4.  block-indentation\n  16:28  error  Incorrect indentation for `\n        Authors\n    ` beginning at L16:C28. Expected `\n        Authors\n    ` to be at an indentation of 6 but was found at 8.  block-indentation\n  20:7  error  Incorrect indentation for `{{#each}}` beginning at L20:C7. Expected `{{#each}}` to be at an indentation of 6 but was found at 7.  block-indentation\n');
  });
  QUnit.test('library-ui/templates/author/create.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'library-ui/templates/author/create.hbs should pass TemplateLint.\n\nlibrary-ui/templates/author/create.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:8  error  Incorrect indentation for `<div>` beginning at L3:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  4:12  error  Incorrect indentation for `{{#link-to}}` beginning at L4:C12. Expected `{{#link-to}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  8:12  error  Incorrect indentation for `<div>` beginning at L8:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  13:12  error  Incorrect indentation for `<div>` beginning at L13:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  5:13  error  Incorrect indentation for `<span>` beginning at L5:C13. Expected `<span>` to be at an indentation of 14 but was found at 13.  block-indentation\n  9:16  error  Incorrect indentation for `<div>` beginning at L9:C16. Expected `<div>` to be at an indentation of 14 but was found at 16.  block-indentation\n  10:20  error  Incorrect indentation for `<h3>` beginning at L10:C20. Expected `<h3>` to be at an indentation of 18 but was found at 20.  block-indentation\n  14:16  error  Incorrect indentation for `<form>` beginning at L14:C16. Expected `<form>` to be at an indentation of 14 but was found at 16.  block-indentation\n  16:21  error  Incorrect indentation for `<div>` beginning at L16:C21. Expected `<div>` to be at an indentation of 18 but was found at 21.  block-indentation\n  21:22  error  Incorrect indentation for `<div>` beginning at L21:C22. Expected `<div>` to be at an indentation of 18 but was found at 22.  block-indentation\n  27:19  error  Incorrect indentation for `<div>` beginning at L27:C19. Expected `<div>` to be at an indentation of 18 but was found at 19.  block-indentation\n  19:26  error  Incorrect indentation for `div` beginning at L16:C21. Expected `</div>` ending at L19:C26 to be at an indentation of 21 but was found at 20.  block-indentation\n  17:24  error  Incorrect indentation for `<label>` beginning at L17:C24. Expected `<label>` to be at an indentation of 23 but was found at 24.  block-indentation\n  25:26  error  Incorrect indentation for `div` beginning at L21:C22. Expected `</div>` ending at L25:C26 to be at an indentation of 22 but was found at 20.  block-indentation\n  23:23  error  Incorrect indentation for `{{input}}` beginning at L23:C23. Expected `{{input}}` to be at an indentation of 24 but was found at 23.  block-indentation\n  29:23  error  Incorrect indentation for `<button>` beginning at L29:C23. Expected `<button>` to be at an indentation of 21 but was found at 23.  block-indentation\n  29:50  error  Incorrect indentation for `\n                           save\n                       ` beginning at L29:C50. Expected `\n                           save\n                       ` to be at an indentation of 25 but was found at 27.  block-indentation\n');
  });
  QUnit.test('library-ui/templates/author/detail.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'library-ui/templates/author/detail.hbs should pass TemplateLint.\n\nlibrary-ui/templates/author/detail.hbs\n  4:6  error  Incorrect indentation for `<div>` beginning at L4:C6. Expected `<div>` to be at an indentation of 4 but was found at 6.  block-indentation\n  5:10  error  Incorrect indentation for `{{#link-to}}` beginning at L5:C10. Expected `{{#link-to}}` to be at an indentation of 8 but was found at 10.  block-indentation\n  8:10  error  Incorrect indentation for `<div>` beginning at L8:C10. Expected `<div>` to be at an indentation of 8 but was found at 10.  block-indentation\n  20:10  error  Incorrect indentation for `<div>` beginning at L20:C10. Expected `<div>` to be at an indentation of 8 but was found at 10.  block-indentation\n  9:17  error  Incorrect indentation for `<div>` beginning at L9:C17. Expected `<div>` to be at an indentation of 12 but was found at 17.  block-indentation\n  12:17  error  Incorrect indentation for `<div>` beginning at L12:C17. Expected `<div>` to be at an indentation of 12 but was found at 17.  block-indentation\n  10:21  error  Incorrect indentation for `<h3>` beginning at L10:C21. Expected `<h3>` to be at an indentation of 19 but was found at 21.  block-indentation\n  13:21  error  Incorrect indentation for `{{#link-to}}` beginning at L13:C21. Expected `{{#link-to}}` to be at an indentation of 19 but was found at 21.  block-indentation\n  16:21  error  Incorrect indentation for `<button>` beginning at L16:C21. Expected `<button>` to be at an indentation of 19 but was found at 21.  block-indentation\n  14:0  error  Incorrect indentation for `                      edit \n` beginning at L14:C0. Expected `                      edit \n` to be at an indentation of 23 but was found at 22.  block-indentation\n');
  });
  QUnit.test('library-ui/templates/author/edit.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'library-ui/templates/author/edit.hbs should pass TemplateLint.\n\nlibrary-ui/templates/author/edit.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:8  error  Incorrect indentation for `<div>` beginning at L3:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  4:12  error  Incorrect indentation for `{{#link-to}}` beginning at L4:C12. Expected `{{#link-to}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  8:12  error  Incorrect indentation for `<div>` beginning at L8:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  13:12  error  Incorrect indentation for `<div>` beginning at L13:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  5:13  error  Incorrect indentation for `<span>` beginning at L5:C13. Expected `<span>` to be at an indentation of 14 but was found at 13.  block-indentation\n  9:16  error  Incorrect indentation for `<div>` beginning at L9:C16. Expected `<div>` to be at an indentation of 14 but was found at 16.  block-indentation\n  10:20  error  Incorrect indentation for `<h3>` beginning at L10:C20. Expected `<h3>` to be at an indentation of 18 but was found at 20.  block-indentation\n  14:16  error  Incorrect indentation for `{{author-form}}` beginning at L14:C16. Expected `{{author-form}}` to be at an indentation of 14 but was found at 16.  block-indentation\n');
  });
  QUnit.test('library-ui/templates/components/author-form.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'library-ui/templates/components/author-form.hbs should pass TemplateLint.\n\nlibrary-ui/templates/components/author-form.hbs\n  3:4  error  Incorrect indentation for `<div>` beginning at L3:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  8:4  error  Incorrect indentation for `<div>` beginning at L8:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  14:4  error  Incorrect indentation for `<div>` beginning at L14:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:8  error  Incorrect indentation for `<label>` beginning at L4:C8. Expected `<label>` to be at an indentation of 6 but was found at 8.  block-indentation\n  5:8  error  Incorrect indentation for `{{input}}` beginning at L5:C8. Expected `{{input}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  9:8  error  Incorrect indentation for `<label>` beginning at L9:C8. Expected `<label>` to be at an indentation of 6 but was found at 8.  block-indentation\n  10:8  error  Incorrect indentation for `{{input}}` beginning at L10:C8. Expected `{{input}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  16:8  error  Incorrect indentation for `<button>` beginning at L16:C8. Expected `<button>` to be at an indentation of 6 but was found at 8.  block-indentation\n  16:35  error  Incorrect indentation for `\n            save\n        ` beginning at L16:C35. Expected `\n            save\n        ` to be at an indentation of 10 but was found at 12.  block-indentation\n');
  });
  QUnit.test('library-ui/templates/components/author-list-item.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'library-ui/templates/components/author-list-item.hbs should pass TemplateLint.\n\nlibrary-ui/templates/components/author-list-item.hbs\n  2:3  error  Incorrect indentation for `<strong>` beginning at L2:C3. Expected `<strong>` to be at an indentation of 2 but was found at 3.  block-indentation\n');
  });
  QUnit.test('library-ui/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'library-ui/templates/index.hbs should pass TemplateLint.\n\nlibrary-ui/templates/index.hbs\n  4:1  error  Incorrect indentation for `<img>` beginning at L4:C1. Expected `<img>` to be at an indentation of 2 but was found at 1.  block-indentation\n  5:1  error  Incorrect indentation for `<h2>` beginning at L5:C1. Expected `<h2>` to be at an indentation of 2 but was found at 1.  block-indentation\n  6:1  error  Incorrect indentation for `<hr>` beginning at L6:C1. Expected `<hr>` to be at an indentation of 2 but was found at 1.  block-indentation\n  7:1  error  Incorrect indentation for `<h3>` beginning at L7:C1. Expected `<h3>` to be at an indentation of 2 but was found at 1.  block-indentation\n');
  });
});
define("library-ui/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/author-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/author-form-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/author-list-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/author-list-item-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/author/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/author/create-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/author/detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/author/detail-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/author/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/author/edit-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/author-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/author-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/author-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/author-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/author/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/author/create-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/author/detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/author/detail-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/author/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/author/edit-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
});
define("library-ui/tests/test-helper", ["library-ui/app", "library-ui/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("library-ui/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("library-ui/tests/unit/controllers/author/create-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | author/create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:author/create');
      assert.ok(controller);
    });
  });
});
define("library-ui/tests/unit/controllers/author/detail-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | author/detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:author/detail');
      assert.ok(controller);
    });
  });
});
define("library-ui/tests/unit/controllers/author/edit-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | author/edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:author/edit');
      assert.ok(controller);
    });
  });
});
define("library-ui/tests/unit/models/author-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | author', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('author', {});
      assert.ok(model);
    });
  });
});
define("library-ui/tests/unit/routes/author-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | author', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:author');
      assert.ok(route);
    });
  });
});
define("library-ui/tests/unit/routes/author/create-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | author/create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:author/create');
      assert.ok(route);
    });
  });
});
define("library-ui/tests/unit/routes/author/detail-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | author/detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:author/detail');
      assert.ok(route);
    });
  });
});
define("library-ui/tests/unit/routes/author/edit-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | author/edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:author/edit');
      assert.ok(route);
    });
  });
});
define("library-ui/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('library-ui/config/environment', [], function() {
  var prefix = 'library-ui';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('library-ui/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
