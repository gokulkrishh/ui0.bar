import Editor from './components/editor';

const doc = `import { motion } from "framer-motion";

export default function App() {
  return (
    <motion.div
    className="w-24 h-24 bg-blue-500"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  />
  );
}
`;

export default function Home() {
  return (
    <main className="flex flex-col max-w-7xl w-full items-center justify-between p-24">
      <Editor doc={doc} />
    </main>
  );
}
