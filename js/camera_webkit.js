function invokeFilePicker() {
	var details = {
		mode: blackberry.invoke.card.FILEPICKER_MODE_PICKER,
		type: [blackberry.invoke.card.FILEPICKER_TYPE_PICTURE] // type está configurado para apenas imagens
	};

	blackberry.invoke.card.invokeFilePicker(details, function (path){
           //path retorna um array, com o caminho das imagens, para acessar a imagem use "file://" + path
	},

	function (reason) {
		alert("cancelled " + reason);
	},
	function (error) {
		if (error) {
			console.log("invoke error "+ error);
		} else {
			console.log("invoke success " );
		}
	}
	);
}