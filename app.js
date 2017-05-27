( function(){

	var app = angular.module("planets",[]);

	app.controller('planetControl', function($timeout){
		var self = this;
		self.planet = "";
		self.planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];

		self.setPlanet = function(planet){
			self.planet = planet;
		};


		self.pause = function()
		{	
			if(self.planet == 1)
			self.anim1 = {
				"animation" : "none"
			};
			if(self.planet == 2)
			self.anim2 = {
				"animation" : "none"
			};
			if(self.planet == 3)
			self.anim3 = {
				"animation" : "none"
			};
			if(self.planet == 4)
			self.anim4 = {
				"animation" : "none"
			};
			if(self.planet == 5)
			self.anim5 = {
				"animation" : "none"
			};
			if(self.planet == 6)
			self.anim6 = {
				"animation" : "none"
			};
			if(self.planet == 7)
			self.anim7 = {
				"animation" : "none"
			};
			if(self.planet == 8)
			self.anim8 = {
				"animation" : "none"
			};
			if(self.planet == 9)
			self.anim9 = {
				"animation" : "none"
			};

			self.planet = null;

		};

		self.start = function()
		{	
			if(self.planet == 1)
			self.anim1 = {
				"animation" : "rotate1 0.8s infinite linear"
			};
			if(self.planet == 2)
			self.anim2 = {
				"animation" : "rotate2 2.4s infinite linear"
			};
			if(self.planet == 3)
			self.anim3 = {
				"animation" : "rotate3 4s infinite linear"
			};
			if(self.planet == 4)
			self.anim4 = {
				"animation" : "rotate4 7.6s infinite linear"
			};
			if(self.planet == 5)
			self.anim5 = {
				"animation" : "rotate5 57.6s infinite linear"
			};
			if(self.planet == 6)
			self.anim6 = {
				"animation" : "rotate6 118s infinite linear"
			};
			if(self.planet == 7)
			self.anim7 = {
				"animation" : "rotate7 336s infinite linear"
			};
			if(self.planet == 8)
			self.anim8 = {
				"animation" : "rotate8 659.2s infinite linear"
			};
			if(self.planet == 9)
			self.anim9 = {
				"animation" : "rotate9 992s infinite linear"
			};
			self.planet = null;
		};

		self.reset = function()
		{	
			self.anim1 = {
				"animation" : "none"
						};
			self.anim2 = {
							"animation" : "none"
						};
			self.anim3 = {
							"animation" : "none"
						};
			self.anim4 = {
							"animation" : "none"
						};
			self.anim5 = {
							"animation" : "none"
						};
			self.anim6 = {
							"animation" : "none"
						};
			self.anim7 = {
							"animation" : "none"
						};
			self.anim8 = {
							"animation" : "none"
						};
			self.anim9 = {
							"animation" : "none"
						};
			
			var restart = function(){
			self.anim1 = {
							"animation" : "rotate1 0.8s infinite linear"
						};
			self.anim2 = {
							"animation" : "rotate2 2.4s infinite linear"
						};
			self.anim3 = {
							"animation" : "rotate3 4s infinite linear"
						};
			self.anim4 = {
							"animation" : "rotate4 7.6s infinite linear"
						};
			self.anim5 = {
							"animation" : "rotate5 57.6s infinite linear"
						};
			self.anim6 = {
							"animation" : "rotate6 118s infinite linear"
						};
			self.anim7 = {
							"animation" : "rotate7 336s infinite linear"
						};
			self.anim8 = {
							"animation" : "rotate8 659.2s infinite linear"
						};
			self.anim9 = {
							"animation" : "rotate9 992s infinite linear"
						};
			};

			$timeout(restart,10);
		};
	
	});

}) ();