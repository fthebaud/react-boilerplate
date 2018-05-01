import TestStyling from 'components/test-styling/TestStyling.jsx';
import TestImport from 'components/test-import/TestImport.jsx';
import TestFragments from 'components/test-fragments/TestFragments.jsx';
import TestRender from 'components/test-render/TestRender.jsx';

export const COMPONENT_TYPE = {
  TEST_FRAGMENTS: 'TEST_FRAGMENTS',
  TEST_IMPORT: 'TEST_IMPORT',
  TEST_RENDER: 'TEST_RENDER',
  TEST_STYLING: 'TEST_STYLING',
};

export const componentsList = {
  [COMPONENT_TYPE.TEST_FRAGMENTS]: TestFragments,
  [COMPONENT_TYPE.TEST_IMPORT]: TestImport,
  [COMPONENT_TYPE.TEST_RENDER]: TestRender,
  [COMPONENT_TYPE.TEST_STYLING]: TestStyling,
};

