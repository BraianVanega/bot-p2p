declare module "@binance/connector" {
  export class Spot {
    constructor(apiKey: string, apiSecret: string, options?: any);
    account(): Promise<any>;
    getOrders(symbol: string, params?: any): Promise<any>;
    newOrder(
      symbol: string,
      side: string,
      type: string,
      options?: any
    ): Promise<any>;
    cancelOrder(symbol: string, options?: any): Promise<any>;
    exchangeInfo(): Promise<any>;
    klines(symbol: string, interval: string, params?: any): Promise<any>;
  }
}
