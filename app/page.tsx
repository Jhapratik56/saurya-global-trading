import { Wrench } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="bg-blue-600 p-6 rounded-full shadow-lg">
            <Wrench className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Coming Soon
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-8">
          Our website is currently under maintenance.
          <br />
          We're working hard to launch something amazing.
        </p>

        {/* Status Box */}
        <div className="inline-block rounded-xl bg-white/10 border border-white/20 px-8 py-4">
          <p className="text-gray-200">
            🚀 We'll be back shortly.
          </p>
        </div>

        {/* Footer */}
        <p className="mt-10 text-gray-500">
          © {new Date().getFullYear()} Saurya Global Trading
        </p>
      </div>
    </main>
  );
}