"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FiDownload, FiPrinter, FiMail, FiPhone, FiLinkedin, FiMapPin, FiArrowLeft, FiFileText } from "react-icons/fi";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RobotMascot } from "@/components/RobotMascot";
import ExperienceCertificates from "@/components/ExperienceCertificates";

export default function ResumePage() {
  // Prevent right-click, drag, and inspection shortcuts across the resume tab
  useEffect(() => {
    // 1. Disable right-click context menu (blocks native inspect and save image)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // 2. Disable dragging images or elements
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // 3. Block Developer Tools & Inspection keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12 (DevTools)
      if (e.key === "F12") {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+Shift+I / Cmd+Option+I (Inspect DevTools)
      // Ctrl+Shift+J / Cmd+Option+J (Console)
      // Ctrl+Shift+C / Cmd+Option+C (Inspect Element)
      if (
        (e.ctrlKey || e.metaKey) &&
        e.shiftKey &&
        ["I", "i", "J", "j", "C", "c"].includes(e.key)
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+U / Cmd+U (View Page Source)
      if ((e.ctrlKey || e.metaKey) && (e.key === "u" || e.key === "U")) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+S / Cmd+S (Save Page / Save Document)
      if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "S")) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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

          {/* Interactive Screen View */}
          <div className="screen-only print-container bg-dark-surface border border-white/[0.08] p-8 sm:p-12 rounded-3xl space-y-12">
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

          {/* ══════════════════════════════════════════════════════════════════
              EXACT PORTFOLIO RESUME REPLICA (PRINT VIEW)
              ══════════════════════════════════════════════════════════════════ */}
          <div className="ats-print-cv hidden print:block text-black bg-white w-full leading-tight font-sans">
            {/* Header with Photo & Details */}
            <div className="ats-header flex items-start justify-between gap-4 pb-2 mb-2 border-b border-black">
              <div className="flex-1">
                <h1 className="text-[19pt] font-black tracking-tight text-[#0f172a] leading-none mb-1">
                  Narayan Shenehashis Dutta
                </h1>
                <div className="text-[9pt] font-bold text-[#1e40af] tracking-tight leading-tight mb-1.5">
                  Digital Marketing Executive | SEO | Social Media Marketing | Performance Marketing
                </div>
                <div className="text-[7.5pt] text-neutral-800 leading-[1.3] space-y-0.5 font-medium">
                  <div>Kolkata, West Bengal 700032, India | +91 9073277478 | duttarayan3@gmail.com</div>
                  <div>
                    LinkedIn: linkedin.com/in/im-rayn | GitHub: github.com/imrayn06
                  </div>
                  <div>
                    Portfolio: narayan-portfolio-three.vercel.app
                  </div>
                </div>
              </div>

              {/* Profile Photo */}
              <div className="w-[68px] h-[68px] rounded-full overflow-hidden border-2 border-amber-400 shrink-0 relative bg-amber-400">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/resume-photo.png"
                  alt="Narayan Shenehashis Dutta"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* PROFESSIONAL SUMMARY */}
            <section className="ats-section mb-2">
              <h2 className="ats-section-title">Professional Summary</h2>
              <p className="text-[7.5pt] text-neutral-900 leading-[1.3] text-justify">
                Digital Marketing Professional with agency experience in social media marketing, content strategy, SEO, and campaign execution. Worked with brands including Zee Bangla Sonar, MSP Steel, Walplast, and Drychem, contributing to content planning, community engagement, campaign coordination, and brand communication. Brings nearly four years of combined experience across digital marketing, software development, and testing (Wipro, Q3 Technologies), with hands-on Google Ads, Meta Ads, and on-page SEO skills. Passionate about creating data-driven marketing strategies that improve visibility, audience engagement, and lead generation.
              </p>
            </section>

            {/* CORE SKILLS */}
            <section className="ats-section mb-2">
              <h2 className="ats-section-title">Core Skills</h2>
              <div className="text-[7.5pt] text-neutral-900 leading-[1.25] space-y-0.5">
                <p>
                  <strong className="font-bold text-black">Social Media Marketing:</strong> Social Media Marketing, Content Strategy, Content Calendar Planning, Community Management, Campaign Planning, Client Coordination, Hashtag Research, Brand Communication, Brand Strategy, Media Coordination, Social Listening, Marketing Analytics
                </p>
                <p>
                  <strong className="font-bold text-black">Content &amp; Design:</strong> Content Writing, Copywriting, Caption Writing, Canva, CapCut, VN
                </p>
                <p>
                  <strong className="font-bold text-black">SEO:</strong> Keyword Research, On-Page SEO, Website Optimization, Competitor Analysis, Google Search Console
                </p>
                <p>
                  <strong className="font-bold text-black">Performance Marketing:</strong> Google Ads, Meta Ads Manager, Audience Targeting, Campaign Optimization, Ad Copy Creation, Keyword Campaigns, Bidding Strategies, Campaign Monitoring and Performance Analysis
                </p>
                <p>
                  <strong className="font-bold text-black">Technical Background:</strong> Full Stack Development, Software Testing
                </p>
              </div>
            </section>

            {/* WORK EXPERIENCE */}
            <section className="ats-section mb-2">
              <h2 className="ats-section-title">Work Experience</h2>

              <div className="space-y-1.5 text-[7.5pt] leading-[1.25]">
                {/* Role 1 */}
                <div className="ats-item">
                  <div className="flex items-baseline justify-between font-bold text-black">
                    <span>Founder &amp; Digital Marketing Consultant | Digitally Kolkata, Kolkata</span>
                    <span className="font-normal text-neutral-800">Dec 2025 – Present</span>
                  </div>
                  <ul className="list-disc ml-3.5 space-y-0.5 text-neutral-900 mt-0.5">
                    <li>Offer freelance digital marketing consulting covering social media strategy, content creation, and campaign support for businesses.</li>
                  </ul>
                </div>

                {/* Role 2 */}
                <div className="ats-item">
                  <div className="flex items-baseline justify-between font-bold text-black">
                    <span>Digital Marketing Intern | Mind &amp; Matter, Kolkata</span>
                    <span className="font-normal text-neutral-800">Feb 2026 – Aug 2026</span>
                  </div>
                  <ul className="list-disc ml-3.5 space-y-0.5 text-neutral-900 mt-0.5">
                    <li>Planned, scheduled, and published social media content for multiple client brands, including Zee Bangla Sonar, MSP Steel, Walplast, and Drychem, using Meta Business Suite.</li>
                    <li>Built content calendars aligned with brand tone, campaign goals, and seasonal events; designed creatives in Canva and edited short-form videos in CapCut and VN.</li>
                    <li>Wrote captions and ad copy; researched hashtags and trends to improve reach and engagement; supported Google Ads and Meta Ads targeting, monitoring, and reporting.</li>
                    <li>Reviewed engagement data (Meta Business Suite, Google Analytics) to refine content, and coordinated with clients and the team on briefs, approvals, and timelines.</li>
                  </ul>
                </div>

                {/* Role 3 */}
                <div className="ats-item">
                  <div className="flex items-baseline justify-between font-bold text-black">
                    <span>Digital Marketing Intern | JRD Ayurveda, Kolkata</span>
                    <span className="font-normal text-neutral-800">Jan 2026 – Feb 2026</span>
                  </div>
                  <ul className="list-disc ml-3.5 space-y-0.5 text-neutral-900 mt-0.5">
                    <li>Supported social media content planning and designed Canva creatives for a wellness and Ayurveda brand.</li>
                    <li>Conducted keyword and competitor research to identify content and SEO opportunities; drafted captions and hashtags.</li>
                  </ul>
                </div>

                {/* Role 4 */}
                <div className="ats-item">
                  <div className="flex items-baseline justify-between font-bold text-black">
                    <span>Digital Marketing Intern | KDMI (Kolkata Digital Marketing Institute), Kolkata</span>
                    <span className="font-normal text-neutral-800">Nov 2025 – Jan 2026</span>
                  </div>
                  <ul className="list-disc ml-3.5 space-y-0.5 text-neutral-900 mt-0.5">
                    <li>Completed hands-on training and live assignments in SEO, social media, Google Ads, Meta Ads, and analytics, including keyword research, on-page SEO audits, and campaign planning.</li>
                  </ul>
                </div>

                {/* Tech roles */}
                <div className="ats-item flex items-baseline justify-between font-bold text-black pt-0.5">
                  <span>Software Engineer | Q3 Technologies, Gurgaon</span>
                  <span className="font-normal text-neutral-800">Apr 2025 – Oct 2025</span>
                </div>
                <div className="ats-item flex items-baseline justify-between font-bold text-black">
                  <span>Test Engineer | Wipro, Bengaluru</span>
                  <span className="font-normal text-neutral-800">Sep 2021 – Mar 2024</span>
                </div>
              </div>
            </section>

            {/* DIGITAL MARKETING PROJECTS */}
            <section className="ats-section mb-2">
              <h2 className="ats-section-title">Digital Marketing Projects</h2>
              <ul className="list-disc ml-3.5 space-y-0.5 text-[7.5pt] leading-[1.25] text-neutral-900">
                <li>
                  <strong className="font-bold text-black">FIFA 2026 Campaign (Walplast):</strong> Planned and ran an interactive prediction-contest campaign around the FIFA 2026 knockout stages to grow organic reach, attract followers, and drive community interaction.
                </li>
                <li>
                  <strong className="font-bold text-black">SEO &amp; Website Optimization:</strong> Keyword research with Google Keyword Planner, Ubersuggest, and Google Trends; on-page SEO recommendations to improve website visibility.
                </li>
                <li>
                  <strong className="font-bold text-black">Campaign Support:</strong> Google Ads and Meta Ads planning, audience targeting, ad copy, monitoring, and performance analysis.
                </li>
              </ul>
            </section>

            {/* EDUCATION & CERTIFICATIONS */}
            <section className="ats-section mb-2">
              <h2 className="ats-section-title">Education &amp; Certifications</h2>
              <div className="text-[7.5pt] leading-[1.25] text-neutral-900 space-y-0.5">
                <div className="flex items-baseline justify-between">
                  <span><strong className="font-bold text-black">Digital Marketing</strong> – Kolkata Digital Marketing Institute, Kolkata</span>
                  <span>Oct 2025 – Jan 2026</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span><strong className="font-bold text-black">Full Stack Development</strong> – MASAI (Remote)</span>
                  <span>Mar 2024 – Apr 2025</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span><strong className="font-bold text-black">Bachelor of Computer Applications (B.C.A)</strong> – Dinabandhu Andrews Institute of Technology and Management, Kolkata | CGPA: 8.96 / 10</span>
                  <span>2018 – 2021</span>
                </div>
                <p className="pt-0.5">
                  <strong className="font-bold text-black">Certifications:</strong> HubSpot Academy – Digital Marketing Certified; Social Media Marketing II Certified; Inbound Marketing Certified; Social Media Certified
                </p>
              </div>
            </section>

            {/* TOOLS & PLATFORMS */}
            <section className="ats-section">
              <h2 className="ats-section-title">Tools &amp; Platforms</h2>
              <div className="text-[7.5pt] leading-[1.25] text-neutral-900 space-y-0.5">
                <p>
                  <strong className="font-bold text-black">Marketing:</strong> Meta Business Suite, Google Analytics, Google Ads, Mailchimp, Looker Studio, Microsoft Excel
                </p>
                <p>
                  <strong className="font-bold text-black">SEO:</strong> Google Keyword Planner, Google Trends, Ubersuggest, SEMrush, Ahrefs Webmaster Tools, Moz
                </p>
                <p>
                  <strong className="font-bold text-black">Creative &amp; AI:</strong> Canva, CapCut, Figma, Notion, WordPress, ChatGPT, Gemini
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <div className="no-print">
        <Footer />
      </div>
    </>
  );
}
