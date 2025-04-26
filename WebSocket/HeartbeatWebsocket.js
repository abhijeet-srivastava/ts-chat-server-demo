var HeartbeatWebsocket = /** @class */ (function () {
    function HeartbeatWebsocket(url, heartbeatInterval) {
        if (heartbeatInterval === void 0) { heartbeatInterval = 30000; }
        var _this = this;
        this.heartbeatTimer = null;
        this.heartbeatInterval = heartbeatInterval;
        this.connection = new WebSocket(url);
        this.connection.onopen = function () {
            console.log('Connection established');
            _this.startHeartbeat();
        };
        this.connection.onclose = function () {
            console.log('Connection closed');
            _this.stopHeartbeat();
            // Reconnect logic would go here
        };
        this.connection.onmessage = function (event) {
            var message = JSON.parse(event.data);
            if (message.type === 'pong') {
                // Reset heartbeat timer on pong
                _this.resetHeartbeat();
            }
            else {
                // Handle regular messages
                _this.handleMessage(message);
            }
        };
    }
    HeartbeatWebsocket.prototype.startHeartbeat = function () {
        var _this = this;
        this.heartbeatTimer = setInterval(function () {
            if (_this.connection.readyState === WebSocket.OPEN) {
                _this.connection.send(JSON.stringify({ type: 'ping' }));
                // Set a timeout to detect missed pongs
                _this.heartbeatTimer = setTimeout(function () {
                    console.log('Pong not received, connection may be dead');
                    _this.connection.close();
                }, 5000);
            }
        }, this.heartbeatInterval);
    };
    HeartbeatWebsocket.prototype.resetHeartbeat = function () {
        if (this.heartbeatTimer) {
            clearTimeout(this.heartbeatTimer);
            this.heartbeatTimer = null;
        }
    };
    HeartbeatWebsocket.prototype.stopHeartbeat = function () {
        if (this.heartbeatTimer) {
            clearInterval(this.heartbeatTimer);
            this.heartbeatTimer = null;
        }
        this.resetHeartbeat();
    };
    HeartbeatWebsocket.prototype.handleMessage = function (message) {
        // Handle incoming messages
        console.log('Received message:', message);
    };
    HeartbeatWebsocket.prototype.send = function (message) {
        if (this.connection.readyState === WebSocket.OPEN) {
            this.connection.send(JSON.stringify(message));
        }
    };
    return HeartbeatWebsocket;
}());
