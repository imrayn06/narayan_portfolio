"use client"

export default function AnimatedCar() {
  return (
    <section className="relative overflow-hidden py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-full border border-slate-200/70 bg-slate-100/80 py-6 shadow-lg shadow-slate-300/20 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20">
          <div className="car-track relative h-14">
            <div className="car absolute left-[-25%] top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 px-5 py-3 text-white shadow-2xl shadow-purple-500/30 dark:from-sky-500 dark:via-indigo-500 dark:to-violet-600 dark:shadow-sky-500/25">
              <span className="text-4xl">🚗</span>
              <span className="ml-3 text-sm font-semibold uppercase tracking-[0.18rem]">
                cruising through the portfolio
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
