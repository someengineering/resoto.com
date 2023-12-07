import clsx from 'clsx';
import {
  cloneElement,
  isValidElement,
  useState,
  type ReactElement,
} from 'react';
import Modal from 'react-modal';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import styles from './styles.module.css';

export default function ZoomPanPinch({
  children,
}: {
  children: ReactElement;
}): JSX.Element {
  const [show, setShow] = useState(false);

  let img: ReactElement = children;

  while (isValidElement(img.props.children)) {
    img = img.props.children;
  }

  return (
    <>
      <p className={styles.paragraph}>
        {cloneElement(img, {
          onClick: () => setShow(true),
          onKeyDown: () => setShow(true),
          className: styles.image,
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
        <div className={styles.modalHeader}>
          <span>{img.props.alt}</span>
          <button
            type="button"
            aria-label="Close"
            className={clsx('clean-btn close', styles.closeButton)}
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
          initialScale={0.75}
          minScale={0.25}
          maxScale={8}
          centerOnInit
        >
          <TransformComponent
            wrapperStyle={{
              width: '100%',
              height: '100%',
            }}
          >
            {img}
          </TransformComponent>
        </TransformWrapper>
      </Modal>
    </>
  );
}
