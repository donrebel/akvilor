/**
 * Add barrels and stuff
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
  	paths: {
        // paths serve as alias
        'npm:': 'node_modules/'
      },
  	map: {
  	    '@angular2-material/core': 'npm:@angular2-material/core/core.umd.js',
        '@angular2-material/card': 'npm:@angular2-material/card/card.umd.js',
        '@angular2-material/button': 'npm:@angular2-material/button/button.umd.js',

        'angular2-jwt': 'npm:angular2-jwt/angular2-jwt.js',
        'ng2-file-upload': 'npm:ng2-file-upload/ng2-file-upload.js',
        'socket.io-client': 'npm:socket.io-client/socket.io.js'

  	},
    packages: {
  	  'socket.io-client': {
          defaultExtension: 'js'
  	  },
      'ng2-file-upload': {
        defaultExtension: 'js'
      },
      'angular2-jwt': {
        defaultExtension: 'js'
      }
    }
  });
})(this);
