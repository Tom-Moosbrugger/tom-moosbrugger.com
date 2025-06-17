declare module '*.svg' {
  import React from 'react';

  // This is for importing as a React component: `import MyIcon from './my-icon.svg';`
  // MyIcon will be a functional React component.
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  // This is for importing as a URL (if you use `?url` in your import, e.g., `import imageUrl from './my-icon.svg?url';`)
  // The default export will be the string URL.
  const src: string;
  export default src;
}