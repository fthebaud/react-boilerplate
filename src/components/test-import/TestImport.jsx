import React from 'react';

import DummyOne from '../common/dummy-one/DummyOne.jsx';

import SubComponent from './sub-component/SubComponent.jsx';
import styles from './TestImport.module.scss';


const TestImport = () => (
  <div className={styles.testImport}>
    <p>Test Import</p>
    <DummyOne />
    <SubComponent />
  </div>
);

export default TestImport;
