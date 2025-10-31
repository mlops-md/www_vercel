"use client";


export default function Hero(){
  return (
    <section className="rounded-3xl p-8 bg-gradient-to-br from-white/2 to-transparent border border-white/6">
      <h1 className="text-4xl font-bold">MLOps.md</h1>
      <p className="mt-4 opacity-80 max-w-2xl">Community for building reliable machine learning systems — tools, best practices and meetups.</p>
      <div className="mt-6 flex gap-4">
        <a href="/community" className="px-4 py-2 rounded-lg border">Join Telegram</a>
        <a href="/tools" className="px-4 py-2 rounded-lg border">Explore Tools</a>
      </div>
    </section>
  )
}
