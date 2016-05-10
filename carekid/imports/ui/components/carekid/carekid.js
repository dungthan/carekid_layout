import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';
import ngAnimate from 'angular-animate';
import 'ionic-sdk/release/js/ionic';
import 'ionic-sdk/release/js/ionic-angular';
import 'ionic-sdk/release/css/ionic.css';

import './carekid.html';
import { name as Login } from '../login/login';
import { name as Register } from '../register/register';
import { name as ForgetPassword } from '../forgetPassword/forgetPassword';
import { name as RequirementList } from '../requirementList/requirementList';

class Carekid {}

const name = 'carekid';

export default angular.module(name, [
	angularMeteor,
	uiRouter,
	ngAnimate,
	ngSanitize,
	Login,
	Register,
	ForgetPassword,
	RequirementList,
	'ionic'
]).component(name, {
	templateUrl: `imports/ui/components/${name}/${name}.html`,
	controllerAs: name,
	controller: Carekid
}).config(config);

function config($locationProvider, $urlRouterProvider) {
	'ngInject';

	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise('/login');
}