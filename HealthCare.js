localStorage.setItem('data', '[{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"},	{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"}]')
var HelathCare = function() {
  var self= this;
  self.prefix = ko.observableArray(['Mr.','Mrs']);
  self.FirstName = ko.observable();
  self.LastName = ko.observable();
  self.showPeople = ko.observable(false);
  self.retrievedData = ko.observableArray([]);
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
  $( "#dialog-form" ).dialog({
    autoOpen: false,
     modal: true
  });
  self.selfEvaluation = function() {
     $( "#dialog-form" ).dialog( "open" );
     console.log("hello");
  }
  self.showSimilarPeople = function(e) {
    self.showPeople(true);
    self.retrievedData( ko.utils.parseJson(localStorage.getItem('data')));
    console.log(self.retrievedData());
  }
}
ko.applyBindings(new HelathCare());