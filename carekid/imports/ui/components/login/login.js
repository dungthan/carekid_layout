import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import './login.html';

class Login {
	constructor($state) {
		'ngInject';
		this.$state = $state;
		this.user = {};
	}

	login() {
		console.log('list');
		this.$state.go('requirementList');
	}
}

const name = 'login';

export default angular.module(name, [
	angularMeteor,
	uiRouter
]).component(name, {
	templateUrl: `imports/ui/components/${name}/${name}.html`,
	controllerAs: name,
	controller: Login
}).config(config);

function config($stateProvider) {
	'ngInject';

	$stateProvider.state('login', {
		url: '/login',
		template: '<login></login>'
	})
}