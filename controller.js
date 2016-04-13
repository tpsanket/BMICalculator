var calculateBMI = function() {
  var self = this;
  self.weight = ko.observable("");
  self.height = ko.observable("");
  self.bmi = ko.observable("");
  self.BMI = function() {
    self.bmi((this.height() / (self.weight() * self.weight())));
  }.bind(this);
  self.Home = function() {
    window.location.href = "http://www.daptstudy.org/";
  }
  self.addOnOptions = function() {
    window.location.href = "file:///C:/Users/sanketka/Documents/KnockoutJS/knockoutExample/BMICalculator/HealthCare.html";
  }
}

ko.applyBindings(new calculateBMI());
