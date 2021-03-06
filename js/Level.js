var IngredientTypes = ["onion", "tomato", "egg", "cheese", "meat", "lettuce"];

var IngredientPrice = {
	onion:0.69,
	tomato: 0.57,
	egg:0.57,
	meat:0.86 ,
	lettuce:0.57 ,
	cheese:1.02
};
var veryEasyOrders = [];
var easyOrders = [];
var normalOrders = [];
var hardOrders = [];

var level = null;

veryEasyOrders.push({
		 name:'Meatburger',
		 ingredients:[
			 {type:'meat', num: 1 }
		 ]
 });
veryEasyOrders.push({
		 name:'Onionburger',
		 ingredients:[
			 {type:'onion', num: 1 }
		 ]
 });
easyOrders.push({
		 name:'Prizeburger',
		 ingredients:[
			 {type:'meat', num: 1 },
			 {type:'tomato', num:1 },
			 {type:'onion', num: 1 },
			 {type:'cheese', num:3 }

		 ]
 });
easyOrders.push({
		 name:'BLOOP',
		 ingredients:[

			 {type:'meat', num: 4 },
			 {type:'egg', num:2 },
			 {type:'onion', num: 4 },
			 {type:'lettuce', num:2 }

		 ]
 });
	 	
normalOrders.push({
		 name:'Raccoburger',
		 ingredients:[
			 {type:'onion', num:2},
			 {type:'tomato', num: 4 },
			 {type:'cheese', num: 2 },
			 {type:'meat', num: 1 },
			 {type:'egg', num: 6 },
			 {type:'lettuce', num: 3 }
			 
		 ]
 });
normalOrders.push({
		 name:'Idontknowwhat',
		 ingredients:[
			 {type:'onion', num:8},
			 {type:'tomato', num: 4 },
			 {type:'cheese', num: 4 },
			 {type:'meat', num: 4 },
			 {type:'egg', num: 4 }		 ]
	 });
normalOrders.push({
		 name:'Idontknowwhat',
		 ingredients:[
			 {type:'onion', num:8},
			 {type:'tomato', num: 4 },
			 {type:'cheese', num: 4 },
			 {type:'meat', num: 4 },
			 {type:'egg', num: 4 }		 ]
	 });
normalOrders.push({
		 name:'PLOT',
		 ingredients:[
			 {type:'onion', num:5},
			 {type:'tomato', num: 5 },
			 {type:'lettuce', num: 5 },
			 {type:'meat', num: 15 },
			 {type:'egg', num: 5 }		 ]
	 });
normalOrders.push({
		 name:'Tomaintno',
		 ingredients:[
			 {type:'onion', num:6},
			 {type:'lettuce', num: 6 },
			 {type:'meat', num: 12 },
			 {type:'egg', num: 6 }		 ]
	 });
normalOrders.push({
		 name:'Crybaby',
		 ingredients:[
			 {type:'onion', num:21},
			 {type:'lettuce', num: 7 },
			 {type:'meat', num: 14 }
		]
	 });
normalOrders.push({
		 name:'Salsaburger',
		 ingredients:[
			 {type:'onion', num:16},
			 {type:'lettuce', num: 16 },
			 {type:'meat', num: 16 }
		]
	 });
	 
hardOrders.push({
		 name:'SkyBurger',
		 ingredients:[
			 {type:'onion', num:9},
			 {type:'tomato', num:9 },
			 {type:'cheese', num:9 },
			 {type:'meat', num:9 },
			 {type:'egg', num:9 },
			 {type:'lettuce', num:9 }
			 
		 ]
});


function getOrder(difficulty) {
	
	if ( 'veryeasy' == difficulty ) {
		return veryEasyOrders[Math.random()*veryEasyOrders.length|0]
	}	
	else if( 'easy' == difficulty ) {
		return easyOrders[Math.random()*easyOrders.length|0]
		
	} else if ( 'normal' == difficulty ) {
		return normalOrders[Math.random()*normalOrders.length|0]
		
	} else {
		return hardOrders[Math.random()*hardOrders.length|0]
	}
}


function Level() {
	this.levelNum = 0;
	this.order = null;
}

Level.prototype.generateNextLevel = function() {
	this.levelNum++;
	
	if ( this.levelNum < 3 ) {
		this.order = getOrder('veryeasy');
	} else if (this.levelNum < 5 ){
		this.order = getOrder('easy');
	} else if ( 0 == (this.levelNum % 10))  {
		this.order = getOrder('hard');
	} else {
		this.order = getOrder('normal');
	}
	
}

function initLevel() {
	level = new Level();
}


