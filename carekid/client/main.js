import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';

import { name as Carekid } from '../imports/ui/components/carekid/carekid';

function onReady() {
	angular.bootstrap(document, [
		Carekid
	], {
		strictDi: true
	});
}

if (Meteor.isCordova) {
	angular.element(document).on('deviceready', onReady);
} else {
	angular.element(document).ready(onReady);
}