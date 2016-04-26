localStorage.setItem('data', '[{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"},	{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"},{"name": "bill", "diseases":  "Diabetes", "age": " 45"}]')
var HelathCare = function() {
  var self= this;
  self.prefix = ko.observableArray(['Mr.','Mrs']);
  self.selectedPatient = ko.observable();
  self.toDie = ko.observable(false);
  self.saved = ko.observable(false);
  self.healthy = ko.observable(false);
  self.radioSelectedOptionValue = ko.observable(true);
  self.FirstName = ko.observable();
  self.LastName = ko.observable();
  self.fetchedData = ko.observable();
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
  self.radioSelectedOptionValue = ko.computed({
    read: function() { },
    write: function(newValue) {
    self.toDie(newValue === "Die" ? true : false);
    self.saved(newValue === "canBeSaved" ? true : false);
    self.healthy(newValue === "healthy" ? true : false);
    }
  });
}

ko.bindingHandlers.highlight = {
    update: function(element, valueAccessor, allBindings) {
        // First get the latest data that we're bound to
        var value = valueAccessor();
        // Next, whether or not the supplied model property is observable, get its current value
        var valueUnwrapped = ko.unwrap(value);

        // Now manipulate the DOM element
        if (valueUnwrapped == true)
           $(element).slideDown(5000); // Make the element fade
    }
};
var HelathCare = new HelathCare();
ko.applyBindings(HelathCare);

HelathCare.toDie.subscribe(function () {
   $(document).ready(function(){
    $("#Die").show();
    $("#healthy").hide();
    $("#saved").hide();
  });
});

HelathCare.saved.subscribe(function () {
   $(document).ready(function(){
    $("#saved").show();
    $("#Die").hide();
    $("#healthy").hide();
  });
});

HelathCare.healthy.subscribe(function () {
   $(document).ready(function(){
    $("#healthy").show();
    $("#Die").hide();
    $("#saved").hide();
  });
});
