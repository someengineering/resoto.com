import { translate } from '@docusaurus/Translate';
import useIsBrowser from '@docusaurus/useIsBrowser';
import type { Props } from '@theme/ColorModeToggle';
import IconDarkMode from '@theme/IconDarkMode';
import IconLightMode from '@theme/IconLightMode';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

function ColorModeToggle({
  className,
  checked: defaultChecked,
  onChange,
}: Props): JSX.Element {
  const isBrowser = useIsBrowser();
  const [checked, setChecked] = useState(defaultChecked);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);

  return (
    <div
      className={clsx(styles.toggle, className, {
        [styles.toggleChecked]: checked,
        [styles.toggleFocused]: focused,
        [styles.toggleDisabled]: !isBrowser,
      })}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        className={styles.toggleButton}
        role="button"
        tabIndex={-1}
        onClick={() => inputRef.current?.click()}
      >
        <IconLightMode
          className={clsx(styles.toggleIcon, styles.lightToggleIcon)}
        />
        <IconDarkMode
          className={clsx(styles.toggleIcon, styles.darkToggleIcon)}
        />
      </div>

      <input
        ref={inputRef}
        checked={checked}
        type="checkbox"
        className={styles.toggleScreenReader}
        aria-label={translate(
          {
            message: 'Switch between dark and light mode (currently {mode})',
            id: 'theme.colorToggle.ariaLabel',
            description: 'The ARIA label for the navbar color mode toggle',
          },
          {
            mode: checked
              ? translate({
                  message: 'dark mode',
                  id: 'theme.colorToggle.ariaLabel.mode.dark',
                  description: 'The name for the dark color mode',
                })
              : translate({
                  message: 'light mode',
                  id: 'theme.colorToggle.ariaLabel.mode.light',
                  description: 'The name for the light color mode',
                }),
          }
        )}
        onChange={onChange}
        onClick={() => setChecked(!checked)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            inputRef.current?.click();
          }
        }}
      />
    </div>
  );
}

export default React.memo(ColorModeToggle);
