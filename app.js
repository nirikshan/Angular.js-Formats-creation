var app = angular.module('Nirikshan_ko_app',[]);


app.controller('MyContRollEr',function($scope) {
	var info = [
      {pl:'php',percent:'10%',salary:10000000,people:234524,date: new Date("May 05, 2010")},
      {pl:'Java',percent:'20%',salary:9822200,people:234443,date: new Date("June 02, 2011")},
      {pl:'python',percent:'10%',salary:8739300000,people:2345521,date: new Date("March 04, 2012")},
      {pl:'C++',percent:'10%',salary:2453456000,people:21234,date: new Date("April 09, 2012")},
      {pl:'c',percent:'10%',salary:10234500,people:2345234,date: new Date("Octuber 05, 2018")},
      {pl:'Node.js',percent:'11%',salary:12345200,people:345551,date: new Date("May 05, 2011")},
      {pl:'C++',percent:'11%',salary:24520200,people:3424551,date: new Date("July 05, 2013")},
      {pl:'Ruby on Rails',percent:'11%',salary:2345040,people:23455321,date: new Date("April 05, 2017")},
      {pl:'Perl',percent:'5%',salary:34500,people:23455531,date: new Date("July 05, 2016")},
      {pl:'other',percent:'2%',salary:23400,people:6342341,date: new Date("Octuber 05, 2015")},

	];
	$scope.info = info;
	$scope.limitingAgent = 2;
	$scope.order = 'salary';
})