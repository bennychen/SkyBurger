
function OnEnterInGameState()
{	
	//register key functions
	document.onkeydown = handleKeyDown;
	document.onkeyup = handleKeyUp;
	$('#inGameMenu-replay').click( function(e) {
		controller.restartGame();
	});

	
	showOrderSummaryUI();
	
	controller.setOnCatchIngredient( OnCatchIngredient )
	controller.startGame();

	Ticker.addListener(window);
	
	
	
}

function OnExitInGameState()
{
	document.onkeydown = null;
	document.onkeyup = null;
	
	controller.stopGame();
	hideOrderSummaryUI();
	Ticker.removeListener(window)
}

//allow for WASD and arrow control scheme
function handleKeyDown(e) {
	//cross browser issues exist
	if(!e){ var e = window.event; }
	switch(e.keyCode) {
		case KEYCODE_LEFT:	lfHeld = true; return false;
		case KEYCODE_RIGHT: rtHeld = true; return false;
	}
}

function handleKeyUp(e) {
	//cross browser issues exist
	if(!e){ var e = window.event; }
	switch(e.keyCode) {
		case KEYCODE_LEFT:	lfHeld = false; break;
		case KEYCODE_RIGHT: rtHeld = false; break;
	}
}

	
function tick() {
	if(SM.currentState.name == 'ingame') {
		controller.interaction();
	}
	if(SM.currentState.name == 'ingame') {
		controller.update();
	}
	if(SM.currentState.name == 'ingame') {
		orderSummary.render();
	}
}

function OnCatchIngredient( ingredient )
{
	SoundJS.play( "short", SoundJS.INTERRUPT_ANY );
	orderSummary.addIngredient(ingredient);
	if(ingredient.getType() == 'top')
	{
		SM.SetStateByName( "gameover" );
	} 
}

var InGameState = new State( OnEnterInGameState, OnExitInGameState );

