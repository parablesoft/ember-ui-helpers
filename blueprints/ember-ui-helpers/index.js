/*jshint node:true*/
module.exports = {
  description: ''

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
    this.addPackageToProject('ember-font-awesome', '2.2.0');
    return this.addPackageToProject('ember-bootstrap', '0.11.1');
  }
};
