/*jshint node:true*/
module.exports = {
  description: '',
  normalizeEntityName: function() {},
  afterInstall: function(options) {
    this.addBowerPackageToProject("sweetalert","^1.1.3");
    this.addAddonToProject('ember-font-awesome', '2.2.0');
    return this.addAddonToProject('ember-bootstrap', '0.11.1');
  }
};
