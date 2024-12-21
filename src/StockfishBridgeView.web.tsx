import * as React from 'react';

import { StockfishBridgeViewProps } from './StockfishBridge.types';

export default function StockfishBridgeView(props: StockfishBridgeViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
