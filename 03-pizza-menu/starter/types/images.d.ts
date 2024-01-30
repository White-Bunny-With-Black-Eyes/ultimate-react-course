declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGAElement>
  >;
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}
