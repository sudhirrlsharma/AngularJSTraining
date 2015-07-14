'use strict';

eventsApp.directive('availables', function (){ 
   return {
      require: 'ngModel',
      link: function(scope, elem, attr, ngModel) {
          var availableValue = attr.availables.split(',');
          console.log(availableValue);

          //For DOM -> model validation
          ngModel.$parsers.unshift(function(value) {
            if(value){
                  console.log(" value -->" +value);
                 var valid = availableValue.indexOf(value) >= 0;
                 ngModel.$setValidity('availables', valid);
                  console.log(availableValue);
                console.log(" unshift -->" +valid);
            }
             return valid ? value : undefined;
          });

          //For model -> DOM validation
          ngModel.$formatters.unshift(function(value) {
              if(value){
                  var valid = availableValue.indexOf(value) >= 0;
                  console.log(" unshift" +valid);
                 ngModel.$setValidity('availables',valid);
              }
             return value;
          });
      }
   };
});