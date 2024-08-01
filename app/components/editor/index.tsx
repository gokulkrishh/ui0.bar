import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';

import SandpackHeader from './header';

type EditorProps = Readonly<{
  styles?: string;
  doc: string;
}>;

export default function Editor({ styles = '', doc }: EditorProps) {
  return (
    <SandpackProvider
      options={{
        initMode: 'immediate',
        externalResources: ['https://cdn.tailwindcss.com'],
      }}
      customSetup={{
        dependencies: {
          'framer-motion': 'latest',
        },
      }}
      files={{
        '/App.js': {
          code: doc,
          active: true,
        },
        '/styles.css': {
          code: styles,
          hidden: !styles,
        },
      }}
      template="react"
      theme={'dark'}
    >
      <SandpackHeader />
      <SandpackLayout className="flex p-0 !rounded-t-none">
        <SandpackCodeEditor
          style={{ height: '450px' }}
          showTabs
          showLineNumbers={false}
        />
        <SandpackPreview
          style={{ height: '450px' }}
          showOpenInCodeSandbox={false}
          showRefreshButton={true}
        />
      </SandpackLayout>
    </SandpackProvider>
  );
}
