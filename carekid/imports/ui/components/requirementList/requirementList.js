import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './requirementList.html';

class RequirementList {
	constructor($scope, $reactive, $ionicSideMenuDelegate, $ionicListDelegate) {
		'ngInject';

		$reactive(this).attach($scope);

		this.toggleLeft = function() {
			console.log('menu');
			$ionicSideMenuDelegate.toggleLeft();
		};
	}
}

const name = 'requirementList';

export default angular.module(name, [
	angularMeteor,
	uiRouter
]).component(name, {
	templateUrl: `imports/ui/components/${name}/${name}.html`,
	controllerAs: name,
	controller: RequirementList
}).config(config);

function config($stateProvider) {
	'ngInject';

	$stateProvider.state('requirementList', {
		url: '/requirement-list',
		template: '<requirement-list></requirement-list>'
	})
}

