// mergedWorldWithHK.js

import { worldMill } from '@react-jvectormap/world';
import { hkMill } from './hkMill';

export const mergedWorldWithHK = {
  ...worldMill,
  content: {
    ...worldMill.content,
    paths: {
      // remove 'HK' default if present
      ...Object.fromEntries(
        Object.entries(worldMill.content.paths).filter(([key]) => key !== 'HK')
      ),
      // merge hkMill districts
      ...hkMill.paths,
    },
  },
};
