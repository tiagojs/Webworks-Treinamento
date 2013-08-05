
    
			function onLine()
			{
				blackberry.ui.toast.show('Conexão Ativa!');
			}

			function offLine()
			{
				blackberry.ui.toast.show('Conexao Perdida');
			}
             window.addEventListener("online",onLine);
            window.addEventListener("offline",offLine);