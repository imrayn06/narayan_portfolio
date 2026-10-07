"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiCalendar, 
  FiList, 
  FiSearch, 
  FiCopy, 
  FiCheck, 
  FiChevronDown, 
  FiVideo, 
  FiLayers,
  FiZap,
  FiEye,
  FiFilter
} from "react-icons/fi";

interface PostItem {
  id: number;
  d: string;
  cat: "Branding" | "Promotional" | "Social Event" | "Informational/Educational";
  by: string;
  type?: string;
  cap: string;
  plot: string[];
  idea: string;
}

const POSTS: PostItem[] = [
  {
    id: 1,
    d: "2025-12-01",
    cat: "Branding",
    by: "Sneh",
    cap: "“Winters get colder. Purity stays constant. This December, stay hydrated the pure way.”",
    plot: [
      "Visual: A frosty morning window, someone opens it, takes a sip from a chilled Bisleri bottle.",
      "Breathes fog in the cold ambience",
      "Final frame: Bisleri bottle with tagline “Purity that stays. Even in winters.”"
    ],
    idea: "Show Bisleri as the constant purity in the cold winter season."
  },
  {
    id: 2,
    d: "2025-12-02",
    cat: "Promotional",
    by: "Sneh",
    cap: "“This party season, focus on fun. We’ll handle the hydration. Order your party pack now!”",
    plot: [
      "Christmas lights with New Year confetti",
      "A table full of food & Bisleri bottles",
      "Text: “Party Hydration Pack – Order Now”"
    ],
    idea: "Promote Bisleri bulk-buy for home parties."
  },
  {
    id: 3,
    d: "2025-12-03",
    cat: "Social Event",
    by: "Sneh",
    cap: "“Team Cold Bisleri in December? Comment if you agree!”",
    plot: [
      "Design: Freezing weather visual",
      "Text overlay: “The weather is cold. But my loyalty to cold Bisleri is colder.”"
    ],
    idea: "A fun Gen-Z meme tying cold weather with cold Bisleri."
  },
  {
    id: 4,
    d: "2025-12-04",
    cat: "Informational/Educational",
    by: "Sneh",
    cap: "“Winter reduces thirst, not water needs. Stay hydrated, stay healthy.”",
    plot: [
      "Info/graphic with:",
      "Dry skin",
      "Low thirst response",
      "Dehydration risk in winter",
      "Recommended 2–2.5L/day"
    ],
    idea: "Teach users why winter hydration matters."
  },
  {
    id: 5,
    d: "2025-12-08",
    cat: "Branding",
    by: "Sneh",
    cap: "“Every drop has a journey. 10 steps. Zero compromise. Only purity.”",
    plot: [
      "Fast cuts of purification stages",
      "UV treatment, ozonization, RO shots",
      "Scientist placing a droplet under microscope",
      "End with the bottle filling line"
    ],
    idea: "Show the 10-step purification process in a modern, crisp reel."
  },
  {
    id: 6,
    d: "2025-12-10",
    cat: "Promotional",
    by: "Sneh",
    cap: "“New Year, new habits. Pure water delivered to your door every day.”",
    plot: [
      "Doorstep delivery visual",
      "A Bisleri truck",
      "Text: “Start 2026 with pure hydration – Order now.”"
    ],
    idea: "Promote monthly subscriptions at year end."
  },
  {
    id: 7,
    d: "2025-12-12",
    cat: "Social Event",
    by: "Sneh",
    cap: "“POV: The only thing keeping you going this December.”",
    plot: [
      "Camera POV opening fridge",
      "Everything dark except glowing Bisleri bottle",
      "Dramatic sound effect",
      "Hand grabs bottle then sips"
    ],
    idea: "Show a relatable late-night moment."
  },
  {
    id: 8,
    d: "2025-12-13",
    cat: "Informational/Educational",
    by: "Sneh",
    cap: "“Clean habits create a cleaner planet. Recycle responsibly - every bottle counts.”",
    plot: [
      "Image of crushed bottles going into recycling",
      "Tagline: “Every bottle deserves a second life.”"
    ],
    idea: "Connect to Bisleri’s recycling initiative."
  },
  {
    id: 9,
    d: "2025-12-15",
    cat: "Branding",
    by: "Sneh",
    cap: "“Everyday moments feel lighter with pure hydration.”",
    plot: [
      "Visuals:",
      "Gym workout",
      "Road trip",
      "Family dinner",
      "Office desk",
      "Final: “One bottle. Many moments.”"
    ],
    idea: "Show Bisleri in everyday life moments."
  },
  {
    id: 10,
    d: "2025-12-16",
    cat: "Promotional",
    by: "Sneh",
    cap: "“Wherever December takes you, take purity with you.”",
    plot: [
      "POV shot packing a bag",
      "Passport, charger, then Bisleri bottle",
      "Text: “Don’t travel without purity.”"
    ],
    idea: "December travel spike to promote 500ml bottles."
  },
  {
    id: 11,
    d: "2025-12-18",
    cat: "Social Event",
    by: "Sneh",
    cap: "“Let’s settle this winter debate. Vote in the poll!”",
    plot: [
      "Design text: “How do you drink your Bisleri in winter?”",
      "Ice Cold with ice picture",
      "Room Temperature with thermometer picture"
    ],
    idea: "Story post for engagement."
  },
  {
    id: 12,
    d: "2025-12-20",
    cat: "Informational/Educational",
    by: "Sneh",
    cap: "“Merry Christmas! May your celebrations be joyful and your hydration pure.”",
    plot: [
      "A cozy Christmas table",
      "Green Bisleri bottles matching Christmas theme",
      "Text: “Purity for every celebration.”"
    ],
    idea: "Feel-good festive post."
  },
  {
    id: 13,
    d: "2025-12-23",
    cat: "Branding",
    by: "Sneh",
    type: "Reel/Video",
    cap: "“As the year slows down, your hydration shouldn’t. Reset with purity before stepping into 2026.”",
    plot: [
      "Soft morning light",
      "Someone journaling their year goals",
      "Takes a sip of Bisleri",
      "Text overlay: “Reset. Refresh. Hydrate.”"
    ],
    idea: "Encourage people to reset, refresh and end the year on a pure note."
  },
  {
    id: 14,
    d: "2025-12-25",
    cat: "Promotional",
    by: "Sneh",
    cap: "“Big night tomorrow? Keep the celebrations fun and the hydration pure. Stock your party essentials today!”",
    plot: [
      "Table being set for NYE party",
      "Sparkling decorations",
      "Bisleri bottles arranged beside snacks",
      "Flashing text: “Hydration Before Celebration”"
    ],
    idea: "Promote stocking up hydration for New Year’s Eve parties."
  },
  {
    id: 15,
    d: "2025-12-27",
    cat: "Social Event",
    by: "Sneh",
    cap: "“Your moments make our December pure. Share your Bisleri picture with #BisleriMoments and get featured on our page!”",
    plot: [
      "Reel with fast cuts of people clicking selfies with Bisleri in:",
      "Travel",
      "Home",
      "Gym",
      "Office",
      "Text: “Share your #BisleriMoments & get featured!”"
    ],
    idea: "Create user-generated content by making people share their winter/festive photos with Bisleri."
  },
  {
    id: 16,
    d: "2025-12-29",
    cat: "Informational/Educational",
    by: "Sneh",
    cap: "“In winters, your thirst reflex drops by almost 40%. But your body still needs the same amount of water. Stay hydrated, even when you don’t feel it.”",
    plot: [
      "Person working indoors in sweater with no thirst",
      "Text pops: “Did you know?”",
      "Body heat rises & thirst sense decreases",
      "Cut to sipping Bisleri",
      "End card: “Don’t skip hydration this winter.”"
    ],
    idea: "Educate people about the “winter thirst suppression phenomenon” and why they must drink water even when they don’t feel thirsty."
  }
];

const CATEGORIES = [
  "Branding",
  "Promotional",
  "Social Event",
  "Informational/Educational"
] as const;

const DOW = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const CATEGORY_STYLES = {
  Branding: {
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
    dot: "bg-blue-500",
    borderLeft: "border-l-blue-500",
    bgSoft: "bg-blue-50/60 dark:bg-blue-950/20",
    accent: "text-blue-500"
  },
  Promotional: {
    badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
    dot: "bg-amber-500",
    borderLeft: "border-l-amber-500",
    bgSoft: "bg-amber-50/60 dark:bg-amber-950/20",
    accent: "text-amber-500"
  },
  "Social Event": {
    badge: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30",
    dot: "bg-purple-500",
    borderLeft: "border-l-purple-500",
    bgSoft: "bg-purple-50/60 dark:bg-purple-950/20",
    accent: "text-purple-500"
  },
  "Informational/Educational": {
    badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    dot: "bg-emerald-500",
    borderLeft: "border-l-emerald-500",
    bgSoft: "bg-emerald-50/60 dark:bg-emerald-950/20",
    accent: "text-emerald-500"
  }
};

const LABEL_REGEX = /^(Visuals?|Design text|Design|Text overlay|Text pops|Flashing text|Text|Final frame|Final|Tagline|End card):\s*(.+)$/i;

export default function ContentCalendarSection() {
  const [view, setView] = useState<"list" | "calendar">("list");
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedAll, setExpandedAll] = useState(false);
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [highlightedId, setHighlightedId] = useState<number | null>(null);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return POSTS.filter((post) => {
      if (selectedCat && post.cat !== selectedCat) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const searchable = [
          post.cap,
          post.plot.join(" "),
          post.idea,
          post.cat,
          post.type || ""
        ]
          .join(" ")
          .toLowerCase();
        if (!searchable.includes(q)) return false;
      }
      return true;
    });
  }, [selectedCat, searchQuery]);

  // Expand / collapse all toggle
  const handleToggleExpandAll = () => {
    const nextState = !expandedAll;
    setExpandedAll(nextState);
    const updated: Record<number, boolean> = {};
    POSTS.forEach((p) => {
      updated[p.id] = nextState;
    });
    setOpenItems(updated);
  };

  const toggleSingleItem = (id: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCopyCaption = (id: number, text: string) => {
    const cleanText = text.replace(/^“|”$/g, "");
    navigator.clipboard.writeText(cleanText);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 1800);
  };

  const handleSelectCalendarDay = (postId: number) => {
    setView("list");
    setSelectedCat(null);
    setSearchQuery("");
    setOpenItems((prev) => ({ ...prev, [postId]: true }));
    setHighlightedId(postId);

    setTimeout(() => {
      const el = document.getElementById(`calendar-post-${postId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);

    setTimeout(() => {
      setHighlightedId(null);
    }, 2500);
  };

  // Calendar calculations for Dec 2025:
  // Dec 1, 2025 is a Monday (0 offset in Mon-Sun week)
  const daysInMonth = 31;
  const firstDayOffset = 0; // Dec 1, 2025 is Monday

  return (
    <section id="calendar" className="py-20 md:py-32 relative z-10 bg-slate-50/50 dark:bg-[#0B0F1A]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <FiZap className="w-3.5 h-3.5" />
            Social Media Execution &amp; Planning
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans mb-4 text-slate-800 dark:text-gray-100">
            Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400">Calendar</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            A comprehensive 360° social media campaign strategy developed for <span className="font-semibold text-slate-800 dark:text-gray-200">Bisleri (December 2025)</span>. Complete with structured content buckets, creative captions, and shot-by-shot visual directions.
          </p>

          {/* Key Campaign Highlights Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-slate-700">
              <FiCalendar className="w-3.5 h-3.5 text-blue-500" />
              16 Scheduled Posts
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-slate-700">
              <FiLayers className="w-3.5 h-3.5 text-purple-500" />
              4 Strategic Content Pillars
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-slate-700">
              <FiVideo className="w-3.5 h-3.5 text-amber-500" />
              1 Reel &amp; Video Shot Breakdown
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-slate-700">
              <FiEye className="w-3.5 h-3.5 text-emerald-500" />
              Winter Festive Campaign
            </span>
          </div>
        </motion.div>

        {/* Calendar Widget Container */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 shadow-xl overflow-hidden backdrop-blur-sm">
          {/* Calendar Header Bar */}
          <div className="p-5 sm:p-6 md:p-8 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-[11px] sm:text-xs uppercase tracking-widest font-bold text-blue-200">
                Bisleri · Multi-Channel Strategy
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mt-1">
                December 2025 Content Plan
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/90 mt-1 max-w-xl">
                Ready-to-publish copywriting, shot-by-shot visual sequences, and psychological hooks for every scheduled post.
              </p>
            </div>

            {/* Quick Action / View Switcher in Banner */}
            <div className="flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto bg-blue-900/40 p-1 rounded-2xl border border-white/20">
              <button
                type="button"
                onClick={() => setView("list")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  view === "list"
                    ? "bg-white text-blue-700 shadow-md"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <FiList className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                List View
              </button>
              <button
                type="button"
                onClick={() => setView("calendar")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  view === "calendar"
                    ? "bg-white text-blue-700 shadow-md"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <FiCalendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Monthly Grid
              </button>
            </div>
          </div>

          {/* Interactive Controls & Filters */}
          <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1">
                <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search captions, visual shots, hooks, or topics..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Expand / Collapse All Button */}
              {view === "list" && (
                <button
                  type="button"
                  onClick={handleToggleExpandAll}
                  className="px-4 py-2.5 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-500 text-slate-700 dark:text-slate-300 transition whitespace-nowrap self-start sm:self-auto"
                >
                  {expandedAll ? "Collapse All Details" : "Expand All Details"}
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1">
                <FiFilter className="w-3.5 h-3.5" /> Pillar:
              </span>
              <button
                type="button"
                onClick={() => setSelectedCat(null)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition ${
                  selectedCat === null
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-blue-400"
                }`}
              >
                All Posts
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/10 dark:bg-white/10">
                  {POSTS.length}
                </span>
              </button>

              {CATEGORIES.map((cat) => {
                const count = POSTS.filter((p) => p.cat === cat).length;
                const isSelected = selectedCat === cat;
                const style = CATEGORY_STYLES[cat];

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCat(isSelected ? null : cat)}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition ${
                      isSelected
                        ? "bg-slate-800 dark:bg-white text-white dark:text-slate-900 border-slate-800 dark:border-white shadow-sm"
                        : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-400"
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${style.dot}`} />
                    {cat}
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Post Count Indicator */}
          <div className="px-6 py-3 bg-slate-100/50 dark:bg-slate-800/40 border-b border-slate-200/80 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
            <span>
              Showing <b className="text-slate-700 dark:text-slate-200">{filteredPosts.length}</b> of {POSTS.length} posts
            </span>
            {selectedCat && (
              <button
                onClick={() => setSelectedCat(null)}
                className="text-blue-500 hover:underline"
              >
                Reset filter
              </button>
            )}
          </div>

          {/* Main Content Area */}
          <div className="p-4 md:p-6">
            <AnimatePresence mode="wait">
              {view === "list" ? (
                /* ================= LIST VIEW ================= */
                <motion.div
                  key="list-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {filteredPosts.length === 0 ? (
                    <div className="py-16 text-center text-slate-500 dark:text-slate-400">
                      <p className="text-base font-semibold">No posts match your search or filter.</p>
                      <button
                        onClick={() => {
                          setSelectedCat(null);
                          setSearchQuery("");
                        }}
                        className="mt-3 text-xs text-blue-500 font-semibold hover:underline"
                      >
                        Clear search and filters
                      </button>
                    </div>
                  ) : (
                    filteredPosts.map((post) => {
                      const dayNumber = post.d.split("-")[2];
                      const style = CATEGORY_STYLES[post.cat];
                      const isOpen = openItems[post.id] ?? expandedAll;
                      const isHighlighted = highlightedId === post.id;

                      return (
                        <div
                          key={post.id}
                          id={`calendar-post-${post.id}`}
                          className={`rounded-2xl border transition-all duration-300 p-5 md:p-6 bg-white dark:bg-slate-800/80 ${
                            style.borderLeft
                          } border-l-4 ${
                            isHighlighted
                              ? "ring-4 ring-amber-400/80 shadow-2xl scale-[1.01]"
                              : "border-slate-200 dark:border-slate-700/70 hover:shadow-md"
                          }`}
                        >
                          <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
                            {/* Date Block */}
                            <div className="flex sm:flex-col items-center justify-center min-w-[70px] px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-center self-start">
                              <span className="text-2xl font-black text-slate-800 dark:text-slate-100 leading-none">
                                {dayNumber}
                              </span>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">
                                Dec 2025
                              </span>
                            </div>

                            {/* Content Body */}
                            <div className="flex-1 min-w-0">
                              {/* Metadata Tags */}
                              <div className="flex flex-wrap items-center gap-2 mb-3">
                                <span
                                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border ${style.badge}`}
                                >
                                  <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                                  {post.cat}
                                </span>

                                {post.type && (
                                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-500 border border-indigo-500/30">
                                    <FiVideo className="w-3 h-3" />
                                    {post.type}
                                  </span>
                                )}

                                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                                  Strategist: {post.by}
                                </span>
                              </div>

                              {/* Primary Caption */}
                              <p className="text-base md:text-lg font-semibold text-slate-800 dark:text-slate-100 leading-relaxed mb-4">
                                {post.cap}
                              </p>

                              {/* Action Buttons */}
                              <div className="flex flex-wrap items-center gap-3">
                                <button
                                  type="button"
                                  onClick={() => handleCopyCaption(post.id, post.cap)}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 hover:border-blue-500 text-slate-700 dark:text-slate-300 transition"
                                >
                                  {copiedId === post.id ? (
                                    <>
                                      <FiCheck className="w-3.5 h-3.5 text-emerald-500" />
                                      <span className="text-emerald-500">Copied!</span>
                                    </>
                                  ) : (
                                    <>
                                      <FiCopy className="w-3.5 h-3.5 text-slate-400" />
                                      <span>Copy Caption</span>
                                    </>
                                  )}
                                </button>

                                <button
                                  type="button"
                                  onClick={() => toggleSingleItem(post.id)}
                                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 py-1"
                                >
                                  <span>Plot &amp; Visual Breakdown</span>
                                  <FiChevronDown
                                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                      isOpen ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>
                              </div>

                              {/* Expandable Breakdown Drawer */}
                              {isOpen && (
                                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/60 grid grid-cols-1 lg:grid-cols-3 gap-4">
                                  {/* Shot Sequence (2 columns on lg) */}
                                  <div className="lg:col-span-2 space-y-2.5">
                                    <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                      Plot / Visual Execution
                                    </h4>
                                    <div className="space-y-2">
                                      {post.plot.map((line, idx) => {
                                        const match = line.match(LABEL_REGEX);
                                        const isHeading = /:\s*$/.test(line);

                                        if (isHeading) {
                                          return (
                                            <div
                                              key={idx}
                                              className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-2"
                                            >
                                              {line.replace(/:\s*$/, "")}
                                            </div>
                                          );
                                        }

                                        return (
                                          <div
                                            key={idx}
                                            className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300"
                                          >
                                            <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                              {idx + 1}
                                            </span>
                                            <div>
                                              {match ? (
                                                <>
                                                  <span className="font-bold uppercase tracking-wider text-[10px] px-1.5 py-0.5 rounded bg-slate-200/70 dark:bg-slate-700 text-slate-800 dark:text-slate-200 mr-1.5">
                                                    {match[1]}
                                                  </span>
                                                  <span>{match[2]}</span>
                                                </>
                                              ) : (
                                                <span>{line}</span>
                                              )}
                                            </div>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>

                                  {/* Strategic Ideation Note */}
                                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/80 self-start">
                                    <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
                                      Strategic Ideation
                                    </h4>
                                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                                      &ldquo;{post.idea}&rdquo;
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </motion.div>
              ) : (
                /* ================= CALENDAR GRID VIEW ================= */
                <motion.div
                  key="calendar-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div className="p-4 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-900">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                        December 2025 Campaign Schedule
                      </h4>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Click any scheduled day to view full details
                      </span>
                    </div>

                    {/* Day of Week Headers */}
                    <div className="grid grid-cols-7 gap-1 md:gap-2 mb-2 text-center">
                      {DOW.map((day) => (
                        <div
                          key={day}
                          className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 py-1"
                        >
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Calendar Grid Days */}
                    <div className="grid grid-cols-7 gap-1 sm:gap-2">
                      {/* Leading offset days (none needed since Dec 1 is Monday) */}
                      {Array.from({ length: firstDayOffset }).map((_, i) => (
                        <div key={`empty-${i}`} className="min-h-[50px] sm:min-h-[85px] md:min-h-[105px] opacity-0" />
                      ))}

                      {/* Days 1 to 31 */}
                      {Array.from({ length: daysInMonth }).map((_, idx) => {
                        const dayNum = idx + 1;
                        const dateIso = `2025-12-${dayNum < 10 ? `0${dayNum}` : dayNum}`;
                        const post = POSTS.find((p) => p.d === dateIso);
                        const isFilteredMatch = post ? filteredPosts.some((p) => p.id === post.id) : false;

                        if (post) {
                          const style = CATEGORY_STYLES[post.cat];
                          return (
                            <button
                              key={dayNum}
                              type="button"
                              onClick={() => handleSelectCalendarDay(post.id)}
                              className={`min-h-[52px] sm:min-h-[85px] md:min-h-[105px] p-1.5 sm:p-2 rounded-xl text-left border-l-2 sm:border-l-4 transition flex flex-col justify-between group ${
                                style.borderLeft
                              } ${style.bgSoft} border border-slate-200 dark:border-slate-700/80 hover:shadow-lg ${
                                !isFilteredMatch ? "opacity-30" : "opacity-100"
                              }`}
                            >
                              <div className="flex items-center justify-between w-full">
                                <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100">
                                  {dayNum}
                                </span>
                                <span className={`w-2 h-2 rounded-full ${style.dot}`} />
                              </div>

                              <p className="hidden sm:block text-[11px] font-semibold text-slate-700 dark:text-slate-200 line-clamp-2 leading-snug group-hover:underline">
                                {post.cap.replace(/[“”]/g, "")}
                              </p>

                              <span className="hidden sm:block text-[9px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 truncate">
                                {post.cat}
                              </span>
                            </button>
                          );
                        }

                        return (
                          <div
                            key={dayNum}
                            className="min-h-[52px] sm:min-h-[85px] md:min-h-[105px] p-1.5 sm:p-2 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 text-slate-400 dark:text-slate-600 text-xs font-semibold flex flex-col justify-start"
                          >
                            <span>{dayNum}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Legend */}
                    <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-slate-600 dark:text-slate-300">Pillars:</span>
                      {CATEGORIES.map((cat) => (
                        <div key={cat} className="flex items-center gap-1.5">
                          <span className={`w-2.5 h-2.5 rounded-full ${CATEGORY_STYLES[cat].dot}`} />
                          <span>{cat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Helper */}
          <div className="p-4 px-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-xs text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <span>
              💡 Click on any post’s <b>Plot &amp; Visual Breakdown</b> to inspect the creative camera direction, visual hooks, and copywriting rationale.
            </span>
            <span className="text-blue-500 font-medium">Ready for Meta Business Suite / Buffer / Hootsuite</span>
          </div>
        </div>
      </div>
    </section>
  );
}
