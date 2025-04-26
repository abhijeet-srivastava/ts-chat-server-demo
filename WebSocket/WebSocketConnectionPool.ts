
class WebSocketConnectionPool {
    private serverUrl: string;
    private serverPoolSize: number;
    private connections: WebSocket[];
    private currentIndex: number;
    constructor(serverUrl:string, serverPoolSize:number = 10) {
        this.serverUrl = serverUrl;
        this.serverPoolSize = serverPoolSize;
        this.connections = [];
        this.currentIndex = 0;
        this.createConnections();
    }
    createConnections() {
        for (let i = 0; i < this.serverPoolSize; i++) {
            this.connections.push(this.createNewConnection(i));
        }
    }
    createNewConnection(index:number):WebSocket {
        console.log(`Creating new connection ${index}`);
        const ws = new WebSocket(this.serverUrl);
        ws.onopen = () => {
            console.log(`Connection ${index} opened`);
        };

        ws.onerror = (error) => {
            console.error(`Connection ${index} error:`, error);
            // Handle reconnection
            this.handleReconnection(this.connections.indexOf(ws));
        };
        return ws;
    }

    handleReconnection(index:number):void {
        console.log(`Reconnecting connection ${index}`);
        setTimeout(() => {
            if(index >= 0 && index < this.connections.length) {
                this.connections[index] = this.createNewConnection(index);
            }
        }, 1000); // Retry after 1 second
    }

    getConnection():WebSocket {
        const connection = this.connections[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.serverPoolSize;
        return connection;
    }
    sendMessage(message:any):boolean {
        const connection = this.getConnection();
        if (connection.readyState === WebSocket.OPEN) {
            connection.send(JSON.stringify(message));
            return true
        } else {
            console.error('Connection is not open');
        }
        return false;
    }
}