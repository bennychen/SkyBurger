(function(window) {

	function IngredientFactory() {
		this.ingredients = ["onion", "tomato", "egg", "cheese", "meat", "lettuce",'top'];
	}
	
	Ingredient.ingredients;
	
	
	IngredientFactory.prototype.CreateRandomIngredient = function()
	{
		
		var type;
		while(true) {
			type = this.ingredients[Math.random()*this.ingredients.length|0];
			if(orderSummary.ingredientCountToGo[type] == undefined || 
				orderSummary.ingredientCountToGo[type] == 0 ) {
				var newRand = Math.random();
				if(newRand < 0.5) {
					break;
				}	
			}
			else {
				break;
			}
		}
		
		
		var width = utils.getIngredientWidth();
		var height = utils.getIngredientHeight(type);
		var ingredient = new Ingredient(type, width, height);
		ingredient.x = utils.lerp( BOUND_LEFT, BOUND_RIGHT, Math.random() );
		ingredient.y =  - 100;
		return ingredient;
	}
	
	IngredientFactory.prototype.CreatePlayer = function()
	{
		var width = utils.getIngredientWidth();
		var height = utils.getIngredientHeight('bottom');
		var player = new Ingredient("bottom",width,height);
		player.x = canvas.width / 2;
		player.y = canvas.height - 35;
		player.catched = true;
		return player;
	}
	
	
	IngredientFactory.prototype.CreateIngredient = function(type)
	{
		return new Ingredient(type);
	}
	
	IngredientFactory.prototype.DistroyIngredient = function(ingredient)
	{
		ingredient.active = false;
	}
	
	window.IngredientFactory = IngredientFactory;

}(window));
