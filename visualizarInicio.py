#!/usr/bin/env python3

# Usado para crear un servidor Web Local
# Legacy: # import SimpleHTTPServer # import SocketServer

import http.server
import socketserver

PORT = 8887

Handler = http.server.SimpleHTTPRequestHandler

# Handler.extensions_map.update({
#     # ".js": "application/javascript",
#     '.manifest': 'text/cache-manifest',
#     '.html': 'text/html',
#     '.png': 'image/png',
#     '.jpg': 'image/jpg',
#     '.svg':	'image/svg+xml',
#     '.css':	'text/css',
#     '.js':	'text/javascript',
#     '.module.js': 'module',
# 	'': 'application/octet-stream', # Default
# })

# httpd = socketserver.TCPServer(("", PORT), Handler)

# print("Serving at port", PORT)
# print(Handler.extensions_map[".js"])
# httpd.serve_forever()


# Crea un servidor web en el puerto especificado
with socketserver.TCPServer(("", PORT), Handler) as server_custom:
    print(f"Servidor web en el puerto {PORT}")
    
    # Inicia el servidor
    server_custom.serve_forever()

