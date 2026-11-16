import type { Dev } from "../types/dev";

interface DevCardProps {
  dev: Dev;
}

export default function DevCard({ dev }: DevCardProps) {
  return (
    <li className="flex w-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:w-80">      
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100 text-2xl font-semibold text-indigo-700">
        {dev.name[0]}
        </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{dev.name}</h3>
      <span className="mt-1 rounded-full bg-indigo-50 px-3 py-0.5 text-sm font-medium text-indigo-700">
        {dev.role}
      </span>
      <p className="mt-3 text-sm text-slate-600">{dev.bio}</p>
      <div className="mt-4 flex gap-4 text-sm font-medium">
        <a
          href={`https://github.com/${dev.github}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${dev.name} on GitHub`}
          className="text-slate-700 hover:underline"
        >
          @{dev.github}
        </a>
        <a
          href={dev.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${dev.name} on LinkedIn`}
          className="text-indigo-700 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </li>
  );
}