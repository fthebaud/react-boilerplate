import React from 'react';

import './test.css';
import './test.scss';
import styles1 from './test.module.css';
import styles2 from './test.module.scss';

const TestStyling = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <div className="test-css">
      CSS
    </div>
    <div className="test-sass">
      SASS
    </div>
    <div className={styles1.testCss}>
      CSS MODULE
    </div>
    <div className={styles2.testSass}>
      SASS MODULE
    </div>
  </div>
);

export default TestStyling;
