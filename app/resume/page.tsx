"use client";

import React from "react";
import Link from "next/link";
import { FiDownload, FiPrinter, FiMail, FiPhone, FiLinkedin, FiMapPin, FiArrowLeft, FiFileText } from "react-icons/fi";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RobotMascot } from "@/components/RobotMascot";
import ExperienceCertificates from "@/components/ExperienceCertificates";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="no-print">
        <Navbar />
      </div>

      <main className="min-h-screen pt-32 pb-24 text-warm-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          {/* Top Actions Bar (Hidden when printing) */}
          <div className="no-print border-b border-white/[0.08] pb-8 mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="font-mono text-xs uppercase tracking-[0.2em] text-warm-muted hover:text-warm-white transition-colors inline-flex items-center gap-1.5"
              >
                <FiArrowLeft />
                <span>Home</span>
              </Link>
              <span className="text-white/20">/</span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-warm-white font-semibold">
                Curriculum Vitae
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#certificates"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/[0.12] hover:border-accent-blue/50 text-xs font-mono uppercase tracking-wider text-warm-muted hover:text-warm-white transition-colors"
              >
                <FiFileText size={12} className="text-accent-blue" />
                <span>Certificates (4)</span>
              </a>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.12] hover:border-white/30 text-xs font-mono uppercase tracking-wider text-warm-white transition-colors"
              >
                <FiPrinter size={13} />
                <span>Print CV</span>
              </button>

              <a
                href="https://drive.google.com/file/d/1vhGt-nv2sl-yCfW5YDQWV9IJOC2qPUgw/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full btn-primary font-mono text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <FiDownload size={13} />
                <span>Download PDF</span>
              </a>

              <RobotMascot variant="resume" size={38} className="ml-2 hidden sm:inline-flex" />
            </div>
          </div>

          {/* Printable Resume Container */}
          <div className="print-container bg-dark-surface border border-white/[0.08] p-8 sm:p-12 rounded-3xl space-y-12">
            {/* Header / Identity */}
            <header className="border-b border-white/[0.08] pb-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-sans font-black tracking-tight uppercase text-warm-white">
                    SHENEHASHIS DUTTA
                  </h1>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-blue mt-1 font-semibold">
                    Digital Marketing &amp; Social Media Professional (Ex-Software Engineer)
                  </p>
                </div>

                <div className="font-mono text-xs text-warm-gray space-y-1.5 text-left sm:text-right">
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <FiMapPin size={12} className="text-warm-muted" />
                    <span>Kolkata, West Bengal, India</span>
                  </p>
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <FiMail size={12} className="text-warm-muted" />
                    <a href="mailto:duttarayan3@gmail.com" className="hover:text-warm-white">
                      duttarayan3@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <FiPhone size={12} className="text-warm-muted" />
                    <a href="tel:9073277478" className="hover:text-warm-white">
                      +91 907-327-7478
                    </a>
                  </p>
                  <p className="flex items-center sm:justify-end gap-1.5">
                    <FiLinkedin size={12} className="text-warm-muted" />
                    <a
                      href="https://www.linkedin.com/in/im-rayn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-warm-white"
                    >
                      linkedin.com/in/im-rayn
                    </a>
                  </p>
                </div>
              </div>
            </header>

            {/* ─── 01 / PROFESSIONAL PROFILE ─── */}
            <section className="space-y-3">
              <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-warm-muted font-bold">
                01 / PROFESSIONAL SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-warm-gray leading-relaxed font-light">
                Digital marketing professional with hands-on internship experience across social media execution, monthly content planning, organic audience engagement, and SEO research. Combines a disciplined 3-year enterprise software engineering and QA foundation with analytical problem-solving and creative storytelling to coordinate campaigns, format digital collateral, and support brand growth.
              </p>
            </section>

            {/* ─── 02 / WORK EXPERIENCE ─── */}
            <section className="space-y-6 pt-4 border-t border-white/[0.06]">
              <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-warm-muted font-bold">
                02 / PROFESSIONAL EXPERIENCE
              </h2>

              <div className="space-y-8">
                {/* Role 1 */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-base font-sans font-bold text-warm-white">
                      Digital Marketing Intern · Mind &amp; Matter
                    </h3>
                    <span className="font-mono text-xs text-warm-muted">Feb 2026 – Aug 2026 | Kolkata, IN</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-xs text-warm-gray font-light leading-relaxed">
                    <li>Supported monthly content calendar planning and execution aligned with client goals and audience behavior.</li>
                    <li>Assisted in Meta Ads campaign optimization, marketing automation setups, and short-form video concept drafting.</li>
                    <li>Coordinated with graphic designers and internal account leads to review deliverables and maintain brand consistency across accounts (Walplast, MSP Steel, Drychem).</li>
                  </ul>
                </div>

                {/* Role 2 */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-base font-sans font-bold text-warm-white">
                      Digital Marketing Intern · JRD Ayurveda
                    </h3>
                    <span className="font-mono text-xs text-warm-muted">Jan 2026 – Feb 2026 | Remote, IN</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-xs text-warm-gray font-light leading-relaxed">
                    <li>Analyzed business objectives to identify keyword research and SEO opportunities for improving online visibility.</li>
                    <li>Assisted in digital creative planning, social media posting workflows, and Google Ads / Meta Ads performance tracking.</li>
                  </ul>
                </div>

                {/* Role 3 */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-base font-sans font-bold text-warm-white">
                      Digital Marketing Intern · KDMI (Kolkata Digital Marketing Institute)
                    </h3>
                    <span className="font-mono text-xs text-warm-muted">Nov 2025 – Jan 2026 | Kolkata, IN</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-xs text-warm-gray font-light leading-relaxed">
                    <li>Supported practical social media scheduling, on-page SEO audits, and content creation workflows across training modules.</li>
                    <li>Participated in community management and basic campaign performance analysis.</li>
                  </ul>
                </div>

                {/* Role 4 */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-base font-sans font-bold text-warm-white">
                      Founder &amp; Digital Marketing Consultant · Digitally Kolkata
                    </h3>
                    <span className="font-mono text-xs text-warm-muted">Dec 2025 – Present | Kolkata, IN</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-xs text-warm-gray font-light leading-relaxed">
                    <li>Provide localized digital marketing and social media execution support to small businesses.</li>
                    <li>Execute social media marketing, local search visibility audits, and performance creative coordination.</li>
                  </ul>
                </div>

                {/* Prior Technical Experience */}
                <div className="pt-4 border-t border-white/[0.04] space-y-6">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-warm-muted block">
                    PREVIOUS TECHNICAL BACKGROUND (SOFTWARE &amp; QA)
                  </span>

                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h4 className="text-sm font-sans font-bold text-warm-white">
                        Software Engineer · Q3 Technologies
                      </h4>
                      <span className="font-mono text-xs text-warm-muted">Apr 2025 – Oct 2025 | Gurgaon, IN</span>
                    </div>
                    <p className="text-xs text-warm-gray font-light">
                      Collaborated on CRM system enhancements and enterprise application migrations using .NET, Blazor, and Bootstrap.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h4 className="text-sm font-sans font-bold text-warm-white">
                        Test Engineer · Wipro
                      </h4>
                      <span className="font-mono text-xs text-warm-muted">Sep 2021 – Mar 2024 | Kolkata, IN</span>
                    </div>
                    <p className="text-xs text-warm-gray font-light">
                      Performed manual and automated regression testing on Salesforce CPQ systems. Utilized Jira for defect tracking and release validation, establishing deep data discipline.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ─── 03 / DIGITAL MARKETING SKILLS & TOOLS ─── */}
            <section className="space-y-6 pt-4 border-t border-white/[0.06]">
              <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-warm-muted font-bold">
                03 / SKILLS &amp; PLATFORM FLUENCY
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-mono">
                <div className="space-y-1.5">
                  <span className="text-warm-white font-bold block uppercase tracking-wider">
                    Core Marketing Competencies
                  </span>
                  <p className="text-warm-gray leading-relaxed font-light">
                    Social Media Execution · Content Planning · Copywriting · SEO Research · Keyword Research · Community Coordination · Basic Paid Social (Meta/Google Ads) · Marketing Analytics.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-warm-white font-bold block uppercase tracking-wider">
                    SEO &amp; Research Tools
                  </span>
                  <p className="text-warm-gray leading-relaxed font-light">
                    Google Keyword Planner · Google Trends · Ubersuggest · SEMrush · Ahrefs Webmaster Tools · Moz · AnswerThePublic · Yoast SEO.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-warm-white font-bold block uppercase tracking-wider">
                    Creative &amp; Motion Tools
                  </span>
                  <p className="text-warm-gray leading-relaxed font-light">
                    Canva · CapCut · VN Video Editor · YouTube Studio · Basic Figma · Prompt Engineering.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-warm-white font-bold block uppercase tracking-wider">
                    Platforms &amp; Operations
                  </span>
                  <p className="text-warm-gray leading-relaxed font-light">
                    Meta Business Suite · Google Analytics 4 (GA4) · Google Search Console · WordPress · Jira · Notion · Microsoft Excel.
                  </p>
                </div>
              </div>
            </section>

            {/* ─── 04 / EDUCATION & CERTIFICATIONS ─── */}
            <section className="space-y-4 pt-4 border-t border-white/[0.06]">
              <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-warm-muted font-bold">
                04 / CERTIFICATIONS &amp; CREDENTIALS
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-warm-white font-semibold block">Social Media Marketing II</span>
                  <span className="text-warm-muted">HubSpot Academy</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-warm-white font-semibold block">Inbound Marketing Certified</span>
                  <span className="text-warm-muted">HubSpot Academy</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-warm-white font-semibold block">Digital Marketing Certified</span>
                  <span className="text-warm-muted">HubSpot Academy</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-warm-white font-semibold block">Advanced Digital Marketing</span>
                  <span className="text-warm-muted">KDMI (Kolkata Digital Marketing Institute)</span>
                </div>
              </div>
            </section>

            {/* ─── 05 / EXPERIENCE CERTIFICATES ─── */}
            <ExperienceCertificates />
          </div>
        </div>
      </main>

      <div className="no-print">
        <Footer />
      </div>
    </>
  );
}
