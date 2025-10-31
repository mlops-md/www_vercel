"use client";

import Link from "next/link";
import MotionSection from "../components/MotionSection";

export default function Home() {
  return (
    <main>
      <MotionSection
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mt-12 grid md:grid-cols-3 gap-6"
      >
        <Link href="/community" className="p-4 border rounded-xl">Community</Link>
        <Link href="/tools" className="p-4 border rounded-xl">Tools</Link>
        <Link href="/join" className="p-4 border rounded-xl">Join</Link>
      </MotionSection>
    </main>
  );
}