export type ContentPillar =
  | "Promotional"
  | "Entertainment"
  | "Nostalgia & culture"
  | "Community";

export type ContentFormat =
  | "Static / carousel"
  | "Reel"
  | "Static / poll"
  | "Carousel"
  | "Static graphic";

export interface CalendarEntry {
  date: string; // YYYY-MM-DD
  pillar: ContentPillar;
  format: ContentFormat;
  title: string;
  direction: string;
  captionEn: string;
  captionBn: string;
}

export interface PillarMeta {
  name: ContentPillar;
  postCount: number;
  description: string;
  colors: {
    bgLight: string;
    textLight: string;
    accentLight: string;
    bgDark: string;
    textDark: string;
    accentDark: string;
    dot: string;
  };
}

export interface HeroMetric {
  id: string;
  value: string;
  label: string;
  numericTarget: number;
  prefix?: string;
  suffix?: string;
  sublabel?: string;
}

export interface InsightTableRow {
  id: string;
  metric: string;
  value: string;
  isCustomRange?: boolean;
}

export interface UnverifiedMetric {
  id: string;
  label: string;
  value: string;
  note: string;
  verified: boolean;
}

export interface InterpretationCard {
  id: string;
  title: string;
  body: string;
}

export interface GalleryImage {
  id: string;
  file: string;
  fallback: string;
  small: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  customRangeNotice?: string;
  badge?: string;
}

export interface ZeeBanglaSonarData {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    statPills: string[];
    honestyNote: string;
  };
  strategicPremise: {
    objective: string;
    pillars: PillarMeta[];
  };
  calendar: CalendarEntry[];
  accountPerformance: {
    heading: string;
    honestyNote: string;
    heroSectionTitle: string;
    supportingLine: string;
    heroTiles: HeroMetric[];
    splitBar: {
      nonFollowers: number;
      followers: number;
      labelNonFollowers: string;
      labelFollowers: string;
    };
    insightTable: InsightTableRow[];
    unverifiedMetrics: UnverifiedMetric[];
    interpretations: InterpretationCard[];
    copyMetricsTemplate: {
      title: string;
      source: string;
    };
  };
  gallery: {
    recapPanels: GalleryImage[];
    extendedPanels: GalleryImage[];
    independentAnalysisNote: string;
  };
  strategicRecommendation: {
    quote: string;
  };
}

export const ZEE_BANGLASONAR_DATA: ZeeBanglaSonarData = {
  hero: {
    eyebrow: "Portfolio case study · Zee BanglaSonar",
    title: "July 2026 Instagram Content Calendar",
    subtitle:
      "Stories, emotions & the Bengali audience: a 16-post editorial framework.",
    statPills: [
      "16 concepts",
      "4 content pillars",
      "9 Reels",
      "Bengali captions",
    ],
    honestyNote:
      "This is an independent social media analysis and content-planning exercise, not an official Zee BanglaSonar campaign. The concepts and captions are proposed portfolio copy, not verified original captions, and exact publication dates are unverified.",
  },

  strategicPremise: {
    objective:
      "Examine how a Bengali entertainment channel can use Instagram to extend the viewing experience beyond television, turning dramatic moments, familiar films and beloved characters into shareable social content.",
    pillars: [
      {
        name: "Promotional",
        postCount: 4,
        description:
          "Show reminders, programme schedules and serial highlights.",
        colors: {
          bgLight: "#e2ecff",
          textLight: "#1b3f9e",
          accentLight: "#2f63e0",
          bgDark: "rgba(47, 99, 224, 0.16)",
          textDark: "#93b5ff",
          accentDark: "#4d7eff",
          dot: "#2f63e0",
        },
      },
      {
        name: "Entertainment",
        postCount: 4,
        description: "Dramatic scenes, actor moments and film clips.",
        colors: {
          bgLight: "#ffe0ec",
          textLight: "#8a1049",
          accentLight: "#c2275f",
          bgDark: "rgba(194, 39, 95, 0.16)",
          textDark: "#ff8ab4",
          accentDark: "#e6397b",
          dot: "#c2275f",
        },
      },
      {
        name: "Nostalgia & culture",
        postCount: 4,
        description:
          "Classic Bengali cinema and familiar emotional moments.",
        colors: {
          bgLight: "#fff0c2",
          textLight: "#5e4100",
          accentLight: "#a56a00",
          bgDark: "rgba(165, 106, 0, 0.18)",
          textDark: "#ffd566",
          accentDark: "#e59b12",
          dot: "#a56a00",
        },
      },
      {
        name: "Community",
        postCount: 4,
        description:
          "Quizzes, character debates and audience-choice posts.",
        colors: {
          bgLight: "#d9f5e6",
          textLight: "#0b5b3d",
          accentLight: "#17855a",
          bgDark: "rgba(23, 133, 90, 0.16)",
          textDark: "#79e2b1",
          accentDark: "#22aa74",
          dot: "#17855a",
        },
      },
    ],
  },

  calendar: [
    {
      date: "2026-07-01",
      pillar: "Promotional",
      format: "Static / carousel",
      title: "The daily viewing guide",
      direction:
        "Turn the daily programme schedule into an easy-to-save viewing guide.",
      captionEn: "Your day, your favourite stories.",
      captionBn: "আজকের কোন অনুষ্ঠানটা মিস করবেন না?",
    },
    {
      date: "2026-07-03",
      pillar: "Entertainment",
      format: "Reel",
      title: "The unexpected twist",
      direction:
        "Open on the most suspenseful moment of a serial scene, then cut before the reveal.",
      captionEn: "One decision. A thousand questions.",
      captionBn: "এরপর কী হবে বলে মনে হয়?",
    },
    {
      date: "2026-07-05",
      pillar: "Community",
      format: "Static / poll",
      title: "Choose your favourite",
      direction:
        "Put two recognisable characters head-to-head and invite a choice.",
      captionEn: "There can only be one favourite.",
      captionBn: "আপনার প্রিয় কে? কমেন্টে জানান!",
    },
    {
      date: "2026-07-07",
      pillar: "Nostalgia & culture",
      format: "Reel",
      title: "A scene that stays with you",
      direction:
        "Use a memorable Bengali film moment to trigger recognition and nostalgia.",
      captionEn: "Some scenes never get old.",
      captionBn: "এই দৃশ্যটা মনে আছে তো?",
    },
    {
      date: "2026-07-09",
      pillar: "Promotional",
      format: "Reel",
      title: "Meet the story",
      direction:
        "Introduce a show through its central conflict rather than a generic title announcement.",
      captionEn: "Every story has a turning point.",
      captionBn: "এই গল্পের মোড় কোন দিকে?",
    },
    {
      date: "2026-07-11",
      pillar: "Entertainment",
      format: "Reel",
      title: "Expression speaks louder",
      direction:
        "Build a short Reel around a powerful actor reaction or comic expression.",
      captionEn: "No dialogue needed.",
      captionBn: "এই এক্সপ্রেশনটাই যথেষ্ট!",
    },
    {
      date: "2026-07-13",
      pillar: "Community",
      format: "Carousel",
      title: "Guess the character",
      direction:
        "Reveal clues across slides and ask viewers to identify the character or show.",
      captionEn: "Think you know the answer?",
      captionBn: "চিনতে পারছেন কে?",
    },
    {
      date: "2026-07-15",
      pillar: "Nostalgia & culture",
      format: "Static / carousel",
      title: "Classic Bengali cinema",
      direction:
        "Celebrate an iconic film moment and invite people to share their memories.",
      captionEn: "Old films, timeless feelings.",
      captionBn: "পুরনো দিনের কোন ছবিটা আপনার প্রিয়?",
    },
    {
      date: "2026-07-17",
      pillar: "Promotional",
      format: "Static graphic",
      title: "Tonight's watchlist",
      direction:
        "Make the evening programme lineup easy to scan and remember.",
      captionEn: "Your evening plans are sorted.",
      captionBn: "আজ সন্ধ্যায় দেখা হচ্ছে তো?",
    },
    {
      date: "2026-07-19",
      pillar: "Entertainment",
      format: "Reel",
      title: "The moment everyone discusses",
      direction:
        "Highlight a dramatic confrontation and ask viewers whose side they support.",
      captionEn: "Whose side are you on?",
      captionBn: "আপনি কার পক্ষ নিচ্ছেন?",
    },
    {
      date: "2026-07-21",
      pillar: "Community",
      format: "Static / poll",
      title: "Complete the dialogue",
      direction:
        "Post a recognisable dialogue with a missing phrase for followers to complete.",
      captionEn: "True fans will know this one.",
      captionBn: "ডায়লগটা শেষ করে দেখান!",
    },
    {
      date: "2026-07-23",
      pillar: "Nostalgia & culture",
      format: "Reel",
      title: "The music brings it back",
      direction:
        "Pair a recognisable Bengali entertainment moment with its emotional or musical hook.",
      captionEn: "One tune, a thousand memories.",
      captionBn: "এই সুরে কোন স্মৃতিটা মনে পড়ে?",
    },
    {
      date: "2026-07-25",
      pillar: "Promotional",
      format: "Reel",
      title: "Your next must-watch",
      direction:
        "Package a programme highlight as a short teaser with a clear viewing prompt.",
      captionEn: "Your next favourite story might start here.",
      captionBn: "নতুন গল্পের জন্য তৈরি তো?",
    },
    {
      date: "2026-07-27",
      pillar: "Entertainment",
      format: "Reel",
      title: "Funny moments, replayed",
      direction:
        "Compile a light-hearted character moment or relatable scene from available footage.",
      captionEn: "Tell me you wouldn't laugh.",
      captionBn: "হাসি আটকাতে পারবেন?",
    },
    {
      date: "2026-07-29",
      pillar: "Community",
      format: "Carousel",
      title: "Build your dream watchlist",
      direction:
        "Let followers select the type of story they want more of: romance, comedy, drama or thriller.",
      captionEn: "Your watchlist, your rules.",
      captionBn: "কোন ধরনের গল্প আরও দেখতে চান?",
    },
    {
      date: "2026-07-31",
      pillar: "Nostalgia & culture",
      format: "Reel",
      title: "A month of Bengali emotions",
      direction:
        "Close the month with a montage of memorable entertainment moments and an invitation to revisit favourites.",
      captionEn: "Different stories, one Bengali heart.",
      captionBn: "এই মাসের আপনার প্রিয় মুহূর্ত কোনটা?",
    },
  ],

  accountPerformance: {
    heading: "July 2026 account performance",
    heroSectionTitle: "ZEE BANGLASONAR · JULY 2026",
    honestyNote:
      "Data source: Instagram Monthly Recap and Insights, July 2026. These are observed account metrics, not results generated by the content calendar proposed in this case study. Figures are rounded as shown in Instagram and use Instagram's own reporting definitions. Some Insights panels use a custom date range and are labelled as such.",
    supportingLine: "60K followers at month recap.",
    heroTiles: [
      {
        id: "views",
        value: "1.5M",
        label: "Views generated",
        numericTarget: 1.5,
        suffix: "M",
      },
      {
        id: "non-follower-views",
        value: "81%",
        label: "Non-follower views",
        numericTarget: 81,
        suffix: "%",
      },
      {
        id: "net-followers",
        value: "+741",
        label: "Net follower change (vs. June)",
        numericTarget: 741,
        prefix: "+",
      },
      {
        id: "pieces-published",
        value: "247",
        label: "Pieces published (246 Reels + 1 post)",
        numericTarget: 247,
      },
    ],
    splitBar: {
      nonFollowers: 81,
      followers: 19,
      labelNonFollowers: "81% Non-followers",
      labelFollowers: "19% Followers",
    },
    insightTable: [
      {
        id: "activity-windows",
        metric: "Best audience activity windows",
        value: "Monday, Tuesday and Friday",
      },
      {
        id: "posting-window",
        metric: "Recommended posting window",
        value: "6–9 PM",
      },
      {
        id: "mom-views",
        metric: "Month-over-month views",
        value: "Described by Instagram as holding steady",
      },
      {
        id: "top-posts",
        metric: "Top posts by views (custom range)",
        value: "33K, 33K, 19K and 18K",
        isCustomRange: true,
      },
      {
        id: "interactions",
        metric: "Interactions by content type (custom range)",
        value: "Reels 38.4K, Posts 941, Stories 749",
        isCustomRange: true,
      },
      {
        id: "profile-visits",
        metric: "Profile visits (custom range)",
        value: "3,329",
        isCustomRange: true,
      },
      {
        id: "bio-link-taps",
        metric: "Bio link taps (custom range)",
        value: "9",
        isCustomRange: true,
      },
    ],
    unverifiedMetrics: [
      {
        id: "best-reel-conversion",
        label: "Best-performing Reel conversion",
        value: "over 46K views · 45 followers gained · ~0.10% views-to-followers",
        note: "I need to confirm which date range this came from.",
        verified: false,
      },
    ],
    interpretations: [
      {
        id: "discovery",
        title: "Discovery opportunity",
        body: "81% of views came from non-followers, suggesting the content reached well beyond the existing follower base.",
      },
      {
        id: "publishing-schedule",
        title: "Publishing schedule",
        body: "Monday, Tuesday and Friday, 6–9 PM are suggested testing windows based on the account's reported audience activity. Test individual times within the window rather than assuming every time performs equally.",
      },
      {
        id: "high-volume",
        title: "High-volume publishing",
        body: "246 Reels in July is about 7.9 Reels per day. This shows a very high cadence; volume alone does not establish quality or efficiency.",
      },
      {
        id: "reels-activity",
        title: "Reels carried the activity",
        body: "Reels account for about 1M of the content-type views and 38.4K of the interactions in the Insights screenshots.",
      },
    ],
    copyMetricsTemplate: {
      title: "Zee BanglaSonar · July 2026 Account Performance",
      source:
        "Source: Instagram Monthly Recap & Insights, July 2026 (60K followers at month recap).",
    },
  },

  gallery: {
    independentAnalysisNote:
      "This section references observed broadcast footage and public channel branding for independent social media case study purposes. All brand marks and serial footage belong to their respective copyright holders.",
    recapPanels: [
      {
        id: "01",
        file: "zee-01-recap-summary.webp",
        fallback: "zee-01-recap-summary.png",
        small: "zee-01-recap-summary-800.webp",
        width: 1200,
        height: 1588,
        alt: "Instagram Monthly Recap for July: 1.5M views, 81% of views from non-followers, 60K followers (+741 from June).",
        caption: "Instagram Monthly Recap, July 2026",
        badge: "Monthly Recap",
      },
      {
        id: "02",
        file: "zee-02-recap-views-steady.webp",
        fallback: "zee-02-recap-views-steady.png",
        small: "zee-02-recap-views-steady-800.webp",
        width: 1200,
        height: 1415,
        alt: "Instagram recap chart comparing cumulative views last month with the previous month, with the note that views are holding steady.",
        caption: "Views held steady versus the previous month",
        badge: "MoM Views",
      },
    ],
    extendedPanels: [
      {
        id: "03",
        file: "zee-03-insights-views-chart.webp",
        fallback: "zee-03-insights-views-chart.png",
        small: "zee-03-insights-views-chart-800.webp",
        width: 1200,
        height: 1061,
        alt: "Instagram Insights overview for a custom date range ending 31 July: 1,188,982 views, +380 net followers, with a daily views chart peaking near 66K.",
        caption: "Custom date range (11 to 31 July), not the full month",
        customRangeNotice:
          "Custom date range (11 to 31 July), not the full month. Totals (1,188,982 views, +380 net followers, 40,186 interactions) reflect this 20-day window, not the full 1.5M monthly recap.",
        badge: "Custom Range (11-31 Jul)",
      },
      {
        id: "04",
        file: "zee-04-insights-views-by-type.webp",
        fallback: "zee-04-insights-views-by-type.png",
        small: "zee-04-insights-views-by-type-800.webp",
        width: 1200,
        height: 904,
        alt: "Views by content type with 221,973 viewers: Reels about 1M views, Posts 85.6K, Stories 9.4K, Live videos 0.",
        caption: "Views by content type (Reels ~1M, Posts 85.6K)",
        badge: "Content Types",
      },
      {
        id: "05",
        file: "zee-05-insights-top-content.webp",
        fallback: "zee-05-insights-top-content.png",
        small: "zee-05-insights-top-content-800.webp",
        width: 1200,
        height: 461,
        alt: "Top content by views: leading posts at 33K, 33K, 19K and 18K views.",
        caption: "Top content by views (33K, 33K, 19K, 18K)",
        badge: "Top Posts",
      },
      {
        id: "06",
        file: "zee-06-insights-interactions.webp",
        fallback: "zee-06-insights-interactions.png",
        small: "zee-06-insights-interactions-800.webp",
        width: 1200,
        height: 921,
        alt: "Interactions by content type: Reels 38.4K, Posts 941, Stories 749, Live videos 0.",
        caption: "Interactions by content type (Reels 38.4K)",
        badge: "Interactions",
      },
      {
        id: "07",
        file: "zee-07-insights-profile-activity.webp",
        fallback: "zee-07-insights-profile-activity.png",
        small: "zee-07-insights-profile-activity-800.webp",
        width: 1200,
        height: 694,
        alt: "Profile activity: 3,329 profile visits, 9 bio link taps, 0 business address taps.",
        caption: "Profile activity (3,329 visits, 9 link taps)",
        badge: "Profile Activity",
      },
    ],
  },

  strategicRecommendation: {
    quote:
      "The strongest presentation would pair this calendar with the actual July grid and a short performance analysis. Reels appear to be the primary view driver, while schedules and interactive creatives serve other purposes. Verify original post dates and captions against the account before publishing this as a July retrospective.",
  },
};
