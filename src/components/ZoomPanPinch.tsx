import React, { useState } from 'react';
import Modal from 'react-modal';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

export default function ZoomPanPinch({
  children,
}: {
  children: React.ReactElement;
}): JSX.Element {
  const [show, setShow] = useState(false);

  return (
    <>
      <p>
        {React.cloneElement(children.props.children, {
          onClick: () => setShow(true),
          onKeyDown: () => setShow(true),
          style: { maxHeight: '50vw', width: 'auto', cursor: 'zoom-in' },
        })}
      </p>
      <Modal
        isOpen={show}
        onRequestClose={() => setShow(false)}
        style={{
          overlay: {
            zIndex: 'var(--ifm-z-index-fixed)',
            backgroundColor: 'var(--docsearch-container-background)',
          },
          content: {
            border: 'none',
            backgroundColor: 'var(--docsearch-modal-background)',
            boxShadow: 'var(--docsearch-modal-shadow)',
            color: 'var(--docsearch-text-color)',
            borderRadius: '6px',
            overflow: 'hidden',
            padding:
              'var(--ifm-alert-padding-vertical) var(--ifm-alert-padding-horizontal)',
          },
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1em',
            fontSize: '1.2em',
          }}
        >
          <span>{children.props.children.props.alt}</span>
          <button
            type="button"
            aria-label="Close"
            className="clean-btn close"
            style={{
              color: 'var(--ifm-color-primary-contrast-foreground)',
              width: '1em',
              height: '1em',
              padding: 0,
            }}
            onClick={() => setShow(false)}
          >
            <svg viewBox="0 0 15 15" width="14" height="14">
              <g stroke="currentColor" strokeWidth="3.1">
                <path d="M.75.75l13.5 13.5M14.25.75L.75 14.25"></path>
              </g>
            </svg>
          </button>
        </div>
        <TransformWrapper
          initialScale={0.5}
          minScale={0.25}
          maxScale={2}
          centerOnInit
        >
          <TransformComponent
            wrapperStyle={{
              width: '100%',
              height: '100%',
            }}
          >
            {children.props.children}
          </TransformComponent>
        </TransformWrapper>
      </Modal>
    </>
  );
}
