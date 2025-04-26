class HeartbeatWebsocket {
    private connection: WebSocket;
    private heartbeatInterval: number;
    private heartbeatTimer: NodeJS.Timeout | null = null;
    
    constructor(url: string, heartbeatInterval: number = 30000) {
        this.heartbeatInterval = heartbeatInterval;
        this.connection = new WebSocket(url);
        this.connection.onopen = () => {
            console.log('Connection established');
            this.startHeartbeat();
          };
      
          this.connection.onclose = () => {
            console.log('Connection closed');
            this.stopHeartbeat();
            // Reconnect logic would go here
          };
      
          this.connection.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.type === 'pong') {
              // Reset heartbeat timer on pong
              this.resetHeartbeat();
            } else {
              // Handle regular messages
              this.handleMessage(message);
            }
          };
    }

    startHeartbeat():void {
        this.heartbeatTimer = setInterval(() => {
            if (this.connection.readyState === WebSocket.OPEN) {
                this.connection.send(JSON.stringify({ type: 'ping' }));
        
                // Set a timeout to detect missed pongs
                this.heartbeatTimer = setTimeout(() => {
                  console.log('Pong not received, connection may be dead');
                  this.connection.close();
                }, 5000);
              }
        }, this.heartbeatInterval);
    }

    resetHeartbeat():void {
        if (this.heartbeatTimer) {
            clearTimeout(this.heartbeatTimer);
            this.heartbeatTimer = null;
        }
    }
    
    stopHeartbeat(): void {  
        if (this.heartbeatTimer) {
            clearInterval(this.heartbeatTimer);
            this.heartbeatTimer = null;
        }
        this.resetHeartbeat();
    }

    handleMessage(message: any):void {
        // Handle incoming messages
        console.log('Received message:', message);
    }   

    send(message:any): void {
        if (this.connection.readyState === WebSocket.OPEN) {
          this.connection.send(JSON.stringify(message));
        }
      } 


}