import React from 'react';

import { ComponentOne } from 'lib/index';
import DummyTwo from 'components/common/dummy-two/DummyTwo';
import something from 'components/common/my-file/myFile';

import DummyOne from '../common/dummy-one/DummyOne';
import somethingElse from '../common/my-file/myFile2';

import SubComponent from './sub-component/SubComponent';
import styles from './TestImport.module';


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
