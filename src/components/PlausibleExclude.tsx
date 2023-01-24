import React, { useEffect, useState } from 'react';

export default function PlausibleExclude(): JSX.Element {
  const [exclusionState, setExclusionState] = useState<boolean>(false);

  useEffect(() => {
    setExclusionState(
      window.localStorage.getItem('plausible_ignore') === 'true'
    );
  }, []);

  return (
    <>
      <p>
        <strong>
          You currently <em>{exclusionState ? 'are' : 'are not'}</em> excluding
          your visits.
        </strong>
      </p>
      <p>
        <button
          onClick={() => {
            if (exclusionState) {
              window.localStorage.removeItem('plausible_ignore');
            } else {
              window.localStorage.setItem('plausible_ignore', 'true');
            }

            setExclusionState(!exclusionState);
          }}
          className="button button--primary"
        >
          {exclusionState ? 'Stop Excluding My Visits' : 'Exclude My Visits'}
        </button>
      </p>
    </>
  );
}
