"use client";


export default function Hero() {
  return (
    <>
      <section className="mx-auto max-w-2xl lg:max-w-7xl pb-24 px-6 lg:px-8 bg-linear-to-b from-white from-50% to-gray-100 py-[100px]">
        <h2 className="max-w-3xl text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
          A snapshot of your entire sales pipeline.
        </h2>

        <div className="mt-16 h-144 sm:h-auto sm:w-304 relative">
          <div className="absolute rounded-lg shadow-xs ring-1 ring-black/5"></div>

          <img
            alt=""
            src="https://radiant.tailwindui.com/screenshots/app.png"
            className="h-full rounded-lg shadow-2xl ring-1 ring-black/10"
          />
        </div>
      </section>
    </>
  );
}
