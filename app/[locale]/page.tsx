import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-white via-gray-50 to-gray-200 dark:from-black dark:via-zinc-900 dark:to-black">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-100 h-100 bg-blue-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse" />
      <div className="absolute w-75 h-75 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse" />

      {/* CONTENT */}
      <div className="relative flex flex-col items-center text-center px-6">

        {/* LOGO */}
        <div className="mb-6">
          <Image
            src="/logo_global_marketx_light_mode.png"
            alt="Global MarketX Logo"
            width={180}
            height={180}
            className="drop-shadow-2xl animate-fade-in"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Global MarketX
        </h1>

        {/* SUBTITLE */}
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl text-base md:text-lg">
          A global marketplace connecting people, services, and opportunities worldwide.
        </p>

        {/* BADGE */}
        <div className="mt-6 px-5 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium">
          🚀 Coming Soon
        </div>

        {/* STATUS TEXT */}
        <p className="mt-8 text-xs text-gray-500">
          We are building something powerful. Stay tuned.
        </p>

      </div>

    </main>
  );
}