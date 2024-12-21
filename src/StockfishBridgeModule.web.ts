import { registerWebModule, NativeModule } from 'expo';

import { StockfishBridgeModuleEvents } from './StockfishBridge.types';

class StockfishBridgeModule extends NativeModule<StockfishBridgeModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(StockfishBridgeModule);
