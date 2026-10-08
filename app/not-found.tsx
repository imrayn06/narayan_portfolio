"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RobotMascot } from "@/components/RobotMascot";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-40 pb-24 flex items-center justify-center text-warm-white">
        <div className="max-w-md mx-auto px-6 text-center space-y-6">
          <div className="flex justify-center mb-4">
            <RobotMascot variant="notfound" size={64} />
          </div>

          <span className="font-mono text-xs uppercase tracking-[0.25em] text-warm-muted block">
            404 / NOT FOUND
          </span>

          <h1 className="text-3xl sm:text-5xl font-sans font-bold uppercase text-warm-white">
            Lost In Space
          </h1>

          <p className="text-sm font-light text-warm-gray leading-relaxed">
            The page or asset you were searching for does not exist or has been relocated in the portfolio archive.
          </p>

          <div className="pt-4 flex justify-center gap-4 font-mono text-xs">
            <Link
              href="/"
              className="px-6 py-3 rounded-full btn-primary font-semibold uppercase tracking-wider transition-colors"
            >
              Back to Home
            </Link>

            <Link
              href="/work"
              className="px-6 py-3 rounded-full border border-white/[0.12] hover:border-white/30 text-warm-white uppercase tracking-wider transition-colors"
            >
              Browse Work
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
