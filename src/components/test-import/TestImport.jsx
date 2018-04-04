import React from 'react';

import { ComponentOne } from 'lib/index.js';
import DummyTwo from 'components/common/dummy-two/DummyTwo.jsx';
import something from 'components/common/my-file/myFile.js';

import DummyOne from '../common/dummy-one/DummyOne.jsx';
import somethingElse from '../common/my-file/myFile2.js';

import SubComponent from './sub-component/SubComponent.jsx';
import styles from './TestImport.module.scss';


const TestImport = () => (
  <div className={styles.testImport}>
    <p>Test Import</p>
    <p>{something}</p>
    <p>{somethingElse}</p>
    <DummyOne />
    <SubComponent />
    <DummyTwo />
    <ComponentOne />
  </div>
);

export default TestImport;
