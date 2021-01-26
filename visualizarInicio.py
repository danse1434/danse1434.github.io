#!/usr/bin/env python3

# Usado para crear un servidor Web Local
# Legacy: # import SimpleHTTPServer # import SocketServer

import http.server
import socketserver

PORT = 8887

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    # ".js": "application/javascript",
    '.manifest': 'text/cache-manifest',
    '.html': 'text/html',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.svg':	'image/svg+xml',
    '.css':	'text/css',
    '.js':	'text/javascript',
    '.module.js': 'module',
	'': 'application/octet-stream', # Default
})

httpd = socketserver.TCPServer(("", PORT), Handler)

print("Serving at port", PORT)
print(Handler.extensions_map[".js"])
httpd.serve_forever()
