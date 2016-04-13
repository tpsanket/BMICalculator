var HelathCare = function() {
  var self= this;
  self.prefix = ko.observableArray(['Mr.','Mrs']);
  self.FirstName = ko.observable();
  self.LastName = ko.observable();
  self.FullName = ko.computed(function() {
    return self.FirstName() + " " + self.LastName();
  },self);
  self.members = ko.observableArray ([
    { FirstName: 'Roshan' , LastName: 'Singh'},
    { FirstName:'Bill', LastName:'Clinton'}
  ]);
  self.Add = function () {
    self.members.push({FirstName: self.FirstName(), LastName: self.LastName()});
    self.FirstName(null);
    self.LastName(null);
  }
  self.removeMember = function() {
    self.members.remove(this);
  }
}
ko.applyBindings(new HelathCare());