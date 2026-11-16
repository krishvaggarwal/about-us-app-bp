import type { PodInfo } from "../types/dev";

interface HeroProps {
  info: PodInfo;
}

export default function Hero({ info }: HeroProps) {
  return (
    <header className="bg-slate-900 px-6 py-16 text-center text-white sm:py-24">
      <p className="text-sm font-medium text-indigo-300">UCSC Blueprint</p>
      <h1 className="mt-2 text-4xl font-bold sm:text-6xl">{info.podName}</h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100 sm:text-xl">
      </p>
      <p className="mx-auto mt-6 max-w-2xl text-slate-300">{info.mission}</p>
    </header>
  );
}