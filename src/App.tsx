import DevCard from "./components/DevCard";
import Hero from "./components/Hero";
import { devs, pod } from "./data/pod";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero info={pod} />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-8 text-center text-2xl font-semibold text-slate-900">
          Meet the team
        </h2>
        <ul className="flex flex-wrap justify-center gap-6">
          {devs.map((dev) => (
            <DevCard key={dev.github} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}