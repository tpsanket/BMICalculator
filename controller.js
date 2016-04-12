var calculateBMI = function() {
  this.weight = ko.observable("");
  this.height = ko.observable("");
  this.bmi = ko.observable("");
  this.BMI = function() {
    this.bmi((this.height() / (this.weight() * this.weight())));
  }.bind(this);

}

ko.applyBindings(new calculateBMI());
