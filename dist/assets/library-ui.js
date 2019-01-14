'use strict';



;define("library-ui/adapters/application", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.JSONAPIAdapter.extend({
    host: 'http://localhost:3000'
  });

  _exports.default = _default;
});
;define("library-ui/app", ["exports", "library-ui/resolver", "ember-load-initializers", "library-ui/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("library-ui/components/author-form", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    didReceiveAttrs() {
      this._super(...arguments);

      this.setProperties({
        first: this.author.get('first'),
        last: this.author.get('last')
      });
    },

    actions: {
      submitChanges(ev) {
        ev.preventDefault();
        this.onsubmit({
          first: this.first,
          last: this.last
        });
      }

    }
  });

  _exports.default = _default;
});
;define("library-ui/components/author-list-item", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("library-ui/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("library-ui/controllers/author/create", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    reset() {
      this.setProperties({
        first: '',
        last: ''
      });
    },

    actions: {
      saveAuthor(ev) {
        ev.preventDefault();
        console.log(this.model.first);
        let author = this.store.createRecord('author', this.model);
        author.save().then(() => {
          this.transitionToRoute('author');
        });
      }

    }
  });

  _exports.default = _default;
});
;define("library-ui/controllers/author/detail", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    actions: {
      deleteAuthor(author) {
        author.deleteRecord().then(() => {
          this.transitionToRoute('author.index');
        });
      }

    }
  });

  _exports.default = _default;
});
;define("library-ui/controllers/author/edit", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    actions: {
      saveAuthor(formValues) {
        this.model.setProperties(formValues);
        this.model.save().then(() => {
          this.transitionToRoute('author');
        });
      }

    }
  });

  _exports.default = _default;
});
;define("library-ui/helpers/app-version", ["exports", "library-ui/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("library-ui/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("library-ui/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("library-ui/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "library-ui/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("library-ui/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("library-ui/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("library-ui/initializers/export-application-global", ["exports", "library-ui/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("library-ui/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("library-ui/models/author", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.Model.extend({
    first: _emberData.default.attr(),
    last: _emberData.default.attr()
  });

  _exports.default = _default;
});
;define("library-ui/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("library-ui/router", ["exports", "library-ui/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('author', {
      path: '/authors'
    }, function () {
      this.route('detail', {
        path: '/:id'
      });
      this.route('create');
      this.route('edit', {
        path: '/:id/edit'
      });
    });
  });
  var _default = Router;
  _exports.default = _default;
});
;define("library-ui/routes/author", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      /*() return fetch('http://localhost:3000/authors')
       .then( (response) => response.json());*/
      return this.store.findAll('author');
    }

  });

  _exports.default = _default;
});
;define("library-ui/routes/author/create", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    /* resetController(controller) {
         this._super(...arguments);
        controller.reset();
     },*/
    model() {
      return {
        first: '',
        last: ''
      };
    }

  });

  _exports.default = _default;
});
;define("library-ui/routes/author/detail", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model({
      id
    }) {
      return this.store.findRecord('author', id);
    }

  });

  _exports.default = _default;
});
;define("library-ui/routes/author/edit", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model({
      id
    }) {
      return this.store.findRecord('author', id);
    }

  });

  _exports.default = _default;
});
;define("library-ui/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("library-ui/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("library-ui/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "S0VGAB2r",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"app\"],[9],[0,\"\\n \"],[7,\"nav\"],[11,\"class\",\"main-nav\"],[9],[0,\"\\n     \"],[7,\"h1\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"            \"],[7,\"img\"],[11,\"src\",\"/logo.svg\"],[11,\"alt\",\"Ember Library\"],[9],[10],[0,\" \\n            \"],[7,\"span\"],[11,\"class\",\"sr-only\"],[9],[0,\"Ember Library\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"     \"],[10],[0,\"\\n     \\n     \"],[7,\"ul\"],[9],[0,\"\\n         \"],[7,\"li\"],[9],[0,\" \"],[4,\"link-to\",[\"author\"],null,{\"statements\":[[0,\" Authors \"]],\"parameters\":[]},null],[0,\" \"],[10],[0,\"\\n       \"],[2,\"  <li> {{#link-to}} Books {{/link-to}} </li> \"],[0,\"\\n     \"],[10],[0,\"\\n \"],[10],[0,\"\\n \"],[7,\"main\"],[11,\"class\",\"app-content\"],[9],[0,\" \"],[1,[21,\"outlet\"],false],[0,\" \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "library-ui/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("library-ui/templates/author", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "jch4jAnj",
    "block": "{\"symbols\":[\"author\"],\"statements\":[[7,\"div\"],[11,\"class\",\"panel-heading\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"search\"],[9],[0,\"\\n\\n          \"],[7,\"input\"],[11,\"placeholder\",\"Search by Author name\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n\"],[4,\"link-to\",[\"author.create\"],[[\"class\"],[\"btn-new\"]],{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"sr-only\"],[9],[0,\"\\n            Add New Author\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"panel-content\"],[9],[0,\"\\n    \"],[7,\"h3\"],[11,\"class\",\"panel-title\"],[9],[0,\"\\n        Authors\\n    \"],[10],[0,\"\\n    \"],[7,\"ul\"],[11,\"class\",\"collection\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[0,\"         \"],[1,[27,\"author-list-item\",null,[[\"first\",\"last\",\"authorId\",\"tagName\"],[[22,1,[\"first\"]],[22,1,[\"last\"]],[22,1,[\"id\"]],\"li\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n \"],[1,[21,\"outlet\"],false],[0,\"\\n\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "library-ui/templates/author.hbs"
    }
  });

  _exports.default = _default;
});
;define("library-ui/templates/author/create", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "BWwZgXsh",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"slide-out-bg\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"slide-out\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"slide-out-card\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"author\"],[[\"class\"],[\"btn-back\"]],{\"statements\":[[0,\"             \"],[7,\"span\"],[11,\"class\",\"sr-only\"],[9],[0,\"Back\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"slide-out-heading\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"title\"],[9],[0,\"\\n                    \"],[7,\"h3\"],[9],[0,\"New Author\"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"slide-out-content\"],[9],[0,\"\\n                \"],[7,\"form\"],[11,\"action\",\"\"],[12,\"onsubmit\",[27,\"action\",[[22,0,[]],\"saveAuthor\"],null]],[9],[0,\"\\n                    \\n                     \"],[7,\"div\"],[11,\"class\",\"field\"],[9],[0,\"\\n                        \"],[7,\"label\"],[11,\"for\",\"\"],[9],[0,\"First Name:\"],[10],[0,\"\\n                       \"],[1,[27,\"input\",null,[[\"type\",\"placeholder\",\"value\"],[\"text\",\"First name\",[23,[\"model\",\"first\"]]]]],false],[0,\"\\n                    \"],[10],[0,\"\\n\\n                      \"],[7,\"div\"],[11,\"class\",\"field\"],[9],[0,\"\\n                        \"],[7,\"label\"],[11,\"for\",\"\"],[9],[0,\"Last Name:\"],[10],[0,\"\\n                       \"],[1,[27,\"input\",null,[[\"type\",\"placeholder\",\"value\"],[\"text\",\"Last name\",[23,[\"model\",\"last\"]]]]],false],[0,\"\\n\\n                    \"],[10],[0,\"\\n                \\n                   \"],[7,\"div\"],[11,\"class\",\"form-footer\"],[9],[0,\"\\n\\n                       \"],[7,\"button\"],[11,\"class\",\"btn-submit\"],[9],[0,\"\\n                           save\\n                       \"],[10],[0,\"\\n                   \"],[10],[0,\"\\n\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "library-ui/templates/author/create.hbs"
    }
  });

  _exports.default = _default;
});
;define("library-ui/templates/author/detail", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "iSTpS4qg",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"slide-out-bg\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"slide-out\"],[9],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"class\",\"slide-out-card\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"author\"],[[\"class\"],[\"btn-back\"]],{\"statements\":[[0,\"            \"],[7,\"span\"],[11,\"class\",\"sr-only\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[7,\"div\"],[11,\"class\",\"slide-out-heading\"],[9],[0,\"\\n                 \"],[7,\"div\"],[11,\"class\",\"title\"],[9],[0,\"\\n                     \"],[7,\"h3\"],[9],[0,\" \"],[1,[23,[\"model\",\"last\"]],false],[0,\", \"],[1,[23,[\"model\",\"first\"]],false],[10],[0,\"\\n                 \"],[10],[0,\"    \\n                 \"],[7,\"div\"],[11,\"class\",\"actions\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"author.edit\",[23,[\"model\",\"id\"]]],[[\"class\"],[\"btn-pop\"]],{\"statements\":[[0,\"                      edit \\n\"]],\"parameters\":[]},null],[0,\"                     \"],[7,\"button\"],[11,\"class\",\"btn-recessed\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"deleteAuthor\",[23,[\"model\"]]],null]],[9],[0,\"delete\"],[10],[0,\"\\n                 \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\\n          \"],[7,\"div\"],[11,\"class\",\"slide-out-content\"],[9],[0,\"\\n          \"],[10],[0,\"\\n           \\n      \"],[10],[0,\"\\n\\n\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "library-ui/templates/author/detail.hbs"
    }
  });

  _exports.default = _default;
});
;define("library-ui/templates/author/edit", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "TpL6DOVH",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"slide-out-bg\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"slide-out\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"slide-out-card\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"author.detail\"],[[\"class\"],[\"btn-back\"]],{\"statements\":[[0,\"             \"],[7,\"span\"],[11,\"class\",\"sr-only\"],[9],[0,\"Back\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"slide-out-heading\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"title\"],[9],[0,\"\\n                    \"],[7,\"h3\"],[9],[0,\"Editing: \"],[1,[23,[\"model\",\"last\"]],false],[0,\", \"],[1,[23,[\"model\",\"first\"]],false],[0,\" \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"slide-out-content\"],[9],[0,\"\\n                \"],[1,[27,\"author-form\",null,[[\"author\",\"onsubmit\"],[[23,[\"model\"]],[27,\"action\",[[22,0,[]],\"saveAuthor\"],null]]]],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "library-ui/templates/author/edit.hbs"
    }
  });

  _exports.default = _default;
});
;define("library-ui/templates/components/author-form", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "CypO0JJX",
    "block": "{\"symbols\":[],\"statements\":[[7,\"form\"],[12,\"onsubmit\",[27,\"action\",[[22,0,[]],\"submitChanges\"],null]],[9],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"field\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"for\",\"\"],[9],[0,\"First Name:\"],[10],[0,\"\\n        \"],[1,[27,\"input\",null,[[\"type\",\"placeholder\",\"value\"],[\"text\",\"First name\",[23,[\"first\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"field\"],[9],[0,\"\\n        \"],[7,\"label\"],[11,\"for\",\"\"],[9],[0,\"Last Name:\"],[10],[0,\"\\n        \"],[1,[27,\"input\",null,[[\"type\",\"placeholder\",\"value\"],[\"text\",\"Last name\",[23,[\"last\"]]]]],false],[0,\"\\n\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"form-footer\"],[9],[0,\"\\n\\n        \"],[7,\"button\"],[11,\"class\",\"btn-submit\"],[9],[0,\"\\n            save\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "library-ui/templates/components/author-form.hbs"
    }
  });

  _exports.default = _default;
});
;define("library-ui/templates/components/author-list-item", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "LfJKFURm",
    "block": "{\"symbols\":[],\"statements\":[[4,\"link-to\",[\"author.detail\",[23,[\"authorId\"]]],null,{\"statements\":[[0,\"   \"],[7,\"strong\"],[9],[1,[21,\"last\"],false],[10],[0,\" ,   \"],[1,[21,\"first\"],false],[0,\" \\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "library-ui/templates/components/author-list-item.hbs"
    }
  });

  _exports.default = _default;
});
;define("library-ui/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "iszr8Cif",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"welcome-page\"],[9],[0,\"\\n \"],[7,\"img\"],[11,\"src\",\"/welcome.svg\"],[11,\"alt\",\"Welcome\"],[9],[10],[0,\"\\n \"],[7,\"h2\"],[9],[0,\" Welcome to Ember Library \"],[10],[0,\"\\n \"],[7,\"hr\"],[9],[10],[0,\"\\n \"],[7,\"h3\"],[9],[0,\"Where anyone can review their favoreite books and authors\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "library-ui/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('library-ui/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("library-ui/app")["default"].create({"name":"library-ui","version":"0.0.0+f14b216c"});
          }
        
//# sourceMappingURL=library-ui.map
