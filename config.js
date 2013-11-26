// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'),
    config;

config = {
    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        url: 'http://joshkerr.com',

        // Example mail config
        // Visit http://docs.ghost.org/mail for instructions
        // ```
          mail: {
              transport: 'sendgrid',
              host: 'smtp.sendgrid.net',
              options: {
                  service: 'Sendgrid',
                  auth: {
                      user: 'postmaster@ghost.joshkerr.com', // Super secret username
                      pass: '3wzl8l9sp9n4'  // Super secret password
                  }
              }
          },
        // ```

        database: {
            client: 'mysql',
            connection: {
                host: 'localhost',
                user: 'ghost',
                password: 'rrek1209',
                database: 'ghostdev',
                charset: 'utf8'
            },
            debug: false
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        }
    },

    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
     production: {
        url: 'http://joshkerr.com',
        mail: {
              transport: 'sendgrid',
              host: 'smtp.sendgrid.net',
              options: {
                  service: 'Sendgrid',
                  auth: {
                      user: 'postmaster@ghost.joshkerr.com', // Super secret username
                      pass: '3wzl8l9sp9n4'  // Super secret password
                  }
              }
          },
        database: {
            client: 'mysql',
            connection: {
                host: 'localhost',
                user: 'ghost',
                password: 'rrek1209',
                database: 'ghost',
                charset: 'utf8'
            },
            debug: false
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        }
    },


    // **Developers only need to edit below here**

    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        }
    },

    // ### Travis
    // Automated testing run through Github
    travis: {
        url: 'http://127.0.0.1:2368',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-travis.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2368'
        }
    }
};

// Export config
module.exports = config;