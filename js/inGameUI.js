var orderSummaryUI;
var orderFailUI;

$(document).ready(function() {
	orderSummaryUI = $('#inGameMenu');
	orderFailUI = $('#orderFailDialog');
	
	orderFailUI.click(function(){
		
	});
});

function showOrderFailUI() {
	orderFailUI.fadeIn();
}
function hideOrderFailUI() {
	orderFailUI.fadeOut();
}
function showOrderSummaryUI() {
	orderSummaryUI.fadeIn();
}
function hideOrderSummaryUI() {
	orderSummaryUI.fadeOut();
	
}

function initOrderSummaryUIByLevel(level) {
	for(var i=0; i<level.order.ingredients.length; i++){
			
		$('#' + level.order.ingredients[i].type).show();	
		$('#' + level.order.ingredients[i].type + 'Num').text( level.order.ingredients[i].num );

	}	
}

function hideAllIngredients() {
	//hide all ingredient
	for( var i=0; i<IngredientTypes.length; i++) {
		var type = IngredientTypes[i];
		$('#' + type).hide();
		
	}
}

function setOrderSummaryUIByIngredient(ingredientCountToGo) {

	for( var i=0; i<IngredientTypes.length; i++) {
		var type = IngredientTypes[i];
		if(ingredientCountToGo[type] != undefined)
		{
			$('#' + type + 'Num').text( ingredientCountToGo[type] );
		}
		
	}
}