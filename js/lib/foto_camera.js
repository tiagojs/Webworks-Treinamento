function openCamera() {
	var mode = blackberry.invoke.card.CAMERA_MODE_PHOTO;

	blackberry.invoke.card.invokeCamera(mode, function(path) {
		//path retorna o caminho da imagem para acessar a imagem use "file://" + path
	},

	// caso o usuário cancele o card
	function(reason) {
		alert("cancelled " + reason);
	},

	// caso erro no card
	function(error) {
		if(error) {
			alert("invoke error " + error);
		} else {
			console.log("invoke success ");
		}
	});
}