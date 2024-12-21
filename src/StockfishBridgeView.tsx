import { requireNativeView } from 'expo';
import * as React from 'react';

import { StockfishBridgeViewProps } from './StockfishBridge.types';

const NativeView: React.ComponentType<StockfishBridgeViewProps> =
  requireNativeView('StockfishBridge');

export default function StockfishBridgeView(props: StockfishBridgeViewProps) {
  return <NativeView {...props} />;
}
