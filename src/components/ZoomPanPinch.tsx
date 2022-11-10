import React from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

export default function ZoomPanPinch({
  children,
}: {
  children: React.ReactElement;
}): JSX.Element {
  return (
    <p>
      <TransformWrapper maxScale={4} centerOnInit>
        <TransformComponent
          wrapperStyle={{
            width: '100%',
            backgroundColor: 'var(--ifm-code-background)',
            borderRadius: 'var(--ifm-alert-border-radius)',
          }}
        >
          {children.props.children}
        </TransformComponent>
      </TransformWrapper>
    </p>
  );
}
