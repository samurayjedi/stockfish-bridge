import { NativeModule, requireNativeModule } from 'expo';

import { StockfishBridgeModuleEvents } from './StockfishBridge.types';

declare class StockfishBridgeModule extends NativeModule<StockfishBridgeModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<StockfishBridgeModule>('StockfishBridge');
