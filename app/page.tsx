import Hero from '../components/Hero'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section>
      <Hero />

      <motion.section initial={{opacity:0, y:10}} animate={{opacity:1,y:0}} transition={{delay:0.15}} className="mt-12 grid md:grid-cols-3 gap-6">
        <Card title="Community" description="Join discussions, events and meetups." href="/community" />
        <Card title="Tools" description="Curated list of MLOps tools and resources." href="/tools" />
        <Card title="Join" description="How to join the community or contribute." href="/join" />
      </motion.section>

      <section className="mt-16">
        <h3 className="text-xl font-semibold mb-4">Latest posts</h3>
        <p className="opacity-80">Soon — integrate with GitHub for blog posts (MDX).</p>
      </section>
    </section>
  )
}

function Card({ title, description, href }: { title: string; description: string; href: string }){
  return (
    <Link href={href} className="block p-6 rounded-2xl border border-white/6 bg-gradient-to-b from-white/2 to-transparent hover:scale-[1.01] transition-transform">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="opacity-80">{description}</p>
    </Link>
  )
}
