import CopyButton from './copy-button';
import ResetButton from './reset-button';

const SourceCodeSquareIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={21}
    height={21}
    fill={'none'}
    {...props}
  >
    <path
      d="M16 10L17.2265 11.0572C17.7422 11.5016 18 11.7239 18 12C18 12.2761 17.7422 12.4984 17.2265 12.9428L16 14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 10L6.77346 11.0572C6.25782 11.5016 6 11.7239 6 12C6 12.2761 6.25782 12.4984 6.77346 12.9428L8 14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 9L11 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

export default function SandpackHeader() {
  return (
    <div className="flex justify-between px-4 h-[49px] items-center bg-[#151515] border-[#252525] border-t rounded-t-md text-white">
      <h3 className="font-medium flex items-center gap-1.5 tracking-tighter text-base">
        <SourceCodeSquareIcon className="text-neutral-300" />
        <span className="text-neutral-300">Playground</span>
      </h3>
      <div className="flex gap-2 items-center">
        <ResetButton />
        <CopyButton />
      </div>
    </div>
  );
}
