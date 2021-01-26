@REM Inicio de Página sin protocolos
@REM Antes se usaba la extensión: Web Server for Chrome

@REM Abrir chrome 
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --new-window "http://127.0.0.1:8887/index.html"

@REM Crear servidor
python -m http.server 8887

PAUSE