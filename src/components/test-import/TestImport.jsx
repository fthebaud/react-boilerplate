import React from 'react';


// https://github.com/benmosher/eslint-plugin-import/issues/496
import DummyTwo from 'components/common/dummy-two/DummyTwo.jsx';
import something from 'components/common/Truc';

import DummyOne from '../common/dummy-one/DummyOne.jsx';

import SubComponent from './sub-component/SubComponent.jsx';
import styles from './TestImport.module.scss';


const TestImport = () => (
  <div className={styles.testImport}>
    <p>Test Import</p>
    <DummyOne />
    <SubComponent />
    <DummyTwo />
  </div>
);

export default TestImport;
