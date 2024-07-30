import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';

type EditorProps = Readonly<{
  styles?: string;
  doc: string;
}>;

export default function Editor({ styles = '', doc }: EditorProps) {
  return (
    <SandpackProvider
      style={{ height: '100%', width: '100%' }}
      options={{
        initMode: 'immediate',
        experimental_enableServiceWorker: true,
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
      <SandpackLayout className="flex p-0">
        <SandpackCodeEditor showTabs showLineNumbers={false} />
        <SandpackPreview
          showOpenInCodeSandbox={false}
          showRefreshButton={true}
        />
      </SandpackLayout>
    </SandpackProvider>
  );
}
