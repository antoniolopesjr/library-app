"use strict";

module.exports = function (environment) {
  let ENV = {
    modulePrefix: "library-app",
    environment,
    rootURL: "/",
    locationType: "auto",

    firebase: {
      apiKey: "AIzaSyAtGPKLEVvesZ_uV0eysy6F4hb_wv-AlP8",
      authDomain: "library-app-1989.firebaseapp.com",
      databaseURL: "https://library-app-1989-default-rtdb.firebaseio.com/",
      projectId: "library-app-1989",
      storageBucket: "library-app-1989.appspot.com",
      messagingSenderId: "241814412772",
    },

    // if using ember-cli-content-security-policy
    contentSecurityPolicy: {
      "script-src": "'self' 'unsafe-eval' apis.google.com",
      "frame-src": "'self' https://*.firebaseapp.com",
      "connect-src": "'self' wss://*.firebaseio.com https://*.googleapis.com",
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
    ENV.APP.autoboot = false;
  }

  if (environment === "production") {
    // here you can enable a production-specific feature
    ENV["ember-faker"] = {
      enabled: true,
    };
  }

  return ENV;
};
