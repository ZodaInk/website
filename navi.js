function navi(active_button) {
	let buttons = [
		{
			"url": "index.html",
			"text": "\u16A0",
			"key": "home",
		},
		{
			"url": "games.html",
			"text": "Games",
			"key": "games",
		},
		{
			"url": "engine.html",
			"text": "Engine",
			"key": "engine",
		},
	];

	let result = '<header><div class="navi"><ul>';

	for(let i = 0; i < buttons.length; i += 1) {
		let it = buttons[i];
		if(it.key === active_button) {
			result = result.concat("", '\n<li class="active"><a href="', it.url, '">', it.text, '</a></li>');
		} else {
			result = result.concat("", '\n<li><a href="', it.url, '">', it.text, '</a></li>');
		}
	}

	result = result.concat("", '\n</ul><div style="height: 4px;"></div></div><div style="height: 4px; margin-bottom: 24px; background-color: #000;"></div>');
	document.write(result);
}
