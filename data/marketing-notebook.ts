export interface FrameworkLens {
  number: number;
  name: string;
  description: string;
}

export interface TeardownItem {
  id: string;
  brand: string;
  title: string;
  format: string;
  sourceUrl: string;
  sourceLabel: string;
  whatStoodOut: string[];
  takeaway: string;
}

export interface StoryboardStep {
  step: number;
  title: string;
  description: string;
}

export interface ConceptAData {
  title: string;
  format: string;
  objective: string;
  storyboard: StoryboardStep[];
  cta: string;
  visualStyle: string;
}

export interface ConceptBData {
  title: string;
  format: string;
  image: {
    file: string;
    small: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
  };
  idea: string;
  headline: string;
  alternateLine: string;
  thinking: string;
  objective: string;
  cta: string;
  linkText: string;
  linkHref: string;
}

export interface ReelTimelineSegment {
  timeframe: string;
  phase: string;
  description: string;
  onScreenText?: string;
  subText?: string;
  isToBeDeveloped?: boolean;
}

export interface ConceptCData {
  title: string;
  format: string;
  subtitle: string;
  disclaimer: string;
  tone: string;
  timeline: ReelTimelineSegment[];
}

export interface TakeawayItem {
  number: number;
  text: string;
}

export interface WorkLinkItem {
  id: string;
  title: string;
  href: string;
  annotation: string;
}

export interface SourcePdfItem {
  fileName: string;
  title: string;
  pages: number;
  size: string;
  href: string;
}

export interface MarketingNotebookData {
  header: {
    classificationLabel: string;
    seriesLabel: string;
    h1: string;
    standfirst: string;
    metadata: {
      focus: string;
      skillsDemonstrated: string;
      formats: string;
      timeline: string | null;
    };
    visibleNote: string;
  };
  framework: {
    sectionNumber: string;
    sectionTitle: string;
    h2: string;
    intro: string;
    lenses: FrameworkLens[];
  };
  teardowns: {
    sectionNumber: string;
    sectionTitle: string;
    h2: string;
    note: string;
    items: TeardownItem[];
  };
  originalConcepts: {
    sectionNumber: string;
    sectionTitle: string;
    h2: string;
    intro: string;
    conceptA: ConceptAData;
    conceptB: ConceptBData;
    conceptC: ConceptCData;
  };
  takeaways: {
    sectionNumber: string;
    sectionTitle: string;
    h2: string;
    items: TakeawayItem[];
    closingLine: string;
    whereItShowsUp: WorkLinkItem[];
  };
  workingNotes: {
    sectionNumber: string;
    sectionTitle: string;
    h2: string;
    showSourcePdfs: boolean;
    pdfs: SourcePdfItem[];
  };
}

export const MARKETING_NOTEBOOK_DATA: MarketingNotebookData = {
  header: {
    classificationLabel: "CLASSIFICATION: PERSONAL / LEARNING PROJECTS",
    seriesLabel: "PERSONAL PROJECTS · MARKETING NOTEBOOK",
    h1: "Marketing Notebook",
    standfirst:
      "Ad teardowns and original concepts from my digital marketing training, and what each exercise taught me about planning content.",
    metadata: {
      focus: "Ad analysis · Concept ideation",
      skillsDemonstrated:
        "Creative analysis · Scriptwriting · Copywriting · Visual direction · Topical marketing",
      formats: "Video ad · Reel · Poster",
      timeline: null, // Left out of UI for now until filled in
    },
    visibleNote:
      "Independent learning exercises completed during digital marketing training. This is not client work: no brand commissioned, reviewed or approved any of it. Brand names and marks belong to their owners.",
  },

  framework: {
    sectionNumber: "01",
    sectionTitle: "THE FRAMEWORK",
    h2: "How an ad gets taken apart",
    intro:
      "Every teardown used the same checklist, so different brands could be compared like for like.",
    lenses: [
      {
        number: 1,
        name: "Caption",
        description: "What the line promises, and to whom.",
      },
      {
        number: 2,
        name: "Visibility",
        description: "Where the caption and logo sit, and what is read first.",
      },
      {
        number: 3,
        name: "Colour",
        description: "Brand-colour consistency and the pop colour.",
      },
      {
        number: 4,
        name: "Visual elements & symbolism",
        description: "What each object stands for.",
      },
      {
        number: 5,
        name: "Psychology",
        description: "The emotion or bias being triggered.",
      },
      {
        number: 6,
        name: "Objective",
        description: "What the ad is meant to change (awareness, sales, trial).",
      },
      {
        number: 7,
        name: "Creative idea / plot",
        description: "The story in one line.",
      },
      {
        number: 8,
        name: "Insight",
        description: "The human truth behind the idea.",
      },
      {
        number: 9,
        name: "CTA",
        description: "Hard, soft or absent, and why.",
      },
    ],
  },

  teardowns: {
    sectionNumber: "02",
    sectionTitle: "THE TEARDOWNS",
    h2: "Four ads, one framework",
    note: "Observations are my own readings of publicly available ads, not statements from the brands.",
    items: [
      {
        id: "bisleri-har-maa",
        brand: "Bisleri",
        title: "“Har Maa Jaanti Hai Har Paani Ki Bottle Bisleri Nahin”",
        format: "20s Hindi video",
        sourceUrl: "https://www.youtube.com/watch?v=M0xcQdDCXsw",
        sourceLabel: "Watch on YouTube",
        whatStoodOut: [
          "Objective: brand awareness.",
          "A mother camel stops her calf drinking from a dirty, open tank and finds a Bisleri bottle instead; the ad ends on “Piyo Bisleri”.",
          "Teal brand colour for recall; “Celebrating 50 Years of Trust” adds legacy; desert and camels signal water scarcity; the highlighted ₹10 PET bottle signals affordability.",
          "No direct CTA, but the ₹10 bottle works as a soft push to try.",
        ],
        takeaway:
          "Emotion can carry a trust claim better than a feature can. Comparing the brand to a mother’s instinct makes safety feel obvious instead of argued.",
      },
      {
        id: "bisleri-samajhdaar",
        brand: "Bisleri",
        title: "“Samajhdaar Jaante Hain Har Paani Ki Bottle Bisleri Nahin”",
        format: "30s Hindi video",
        sourceUrl: "https://www.youtube.com/watch?v=tuc7suM3yBI",
        sourceLabel: "Watch on YouTube",
        whatStoodOut: [
          "Objective: brand awareness.",
          "Two camels at a ration shop ask for Bisleri; given an ordinary bottle, one spits the water out and asks again for Bisleri only.",
          "An old Rajasthani man and a camel both drinking Bisleri in the thumbnail signal experience behind the choice.",
          "No aggressive CTA; the highlighted PET bottle is a point-of-purchase reminder.",
        ],
        takeaway:
          "A character’s reaction can position a brand as the smart choice without making a single claim about purity.",
      },
      {
        id: "ikea-start-something-new",
        brand: "IKEA",
        title: "“Start something new.”",
        format: "Reel",
        sourceUrl: "https://www.facebook.com/reel/24884825061176433",
        sourceLabel: "View on Facebook Reel",
        whatStoodOut: [
          "Objective: brand awareness.",
          "An old man’s usual park bench disappears, so he buys a chair and carries it everywhere to keep his routine.",
          "The brand and an IKEA store appear only at the end, so the story is not interrupted.",
          "No CTA; the highlighted store is a visual reminder.",
        ],
        takeaway:
          "Holding the brand back until the end keeps the story from feeling like an ad. The message is small, relatable change.",
      },
      {
        id: "mio-amore-season-of-joy",
        brand: "Mio Amore",
        title: "“Sweet Treats Come with a Bonus” / “Season of Joy”",
        format: "Festive poster",
        sourceUrl:
          "https://www.facebook.com/photo?fbid=895944263005699&set=a.272028072063991",
        sourceLabel: "View on Facebook",
        whatStoodOut: [
          "Objective: brand and product awareness, plus festive sales.",
          "Soft pink and purple for celebration, yellow as the pop colour for attention; a jute bag and two cake packets sit front-facing for recognition.",
          "“Season of Joy” echoes Kolkata’s “City of Joy”.",
          "The “Free Bag” pop-up is the CTA.",
        ],
        takeaway:
          "A free gift turns an ordinary purchase into a festive gifting moment, and a local reference ties a seasonal offer to a place.",
      },
    ],
  },

  originalConcepts: {
    sectionNumber: "03",
    sectionTitle: "ORIGINAL CONCEPTS",
    h2: "From analysis to ideas",
    intro:
      "Three concepts written after the teardowns, each starting from an objective.",

    conceptA: {
      title: "“Why So Serious? Piyo Bisleri.”",
      format: "Reel / digital ad",
      objective:
        "Position Bisleri as a quick refreshment break that relieves stress and keeps you going through the day.",
      storyboard: [
        {
          step: 1,
          title: "Establishing shot",
          description:
            "Camera drifts behind a man working intensely on a laptop; a Bisleri bottle sits in the foreground on the desk.",
        },
        {
          step: 2,
          title: "Stress moment",
          description:
            "Close-up of a tense, overwhelmed face; a dry gulp signals thirst.",
        },
        {
          step: 3,
          title: "Bottle pick-up",
          description:
            "Focus shifts to the bottle; water sparkles as he lifts it; soft crackle and water sound design.",
        },
        {
          step: 4,
          title: "Refreshing sip",
          description:
            "Slow, satisfying sips and a small exhale of relief.",
        },
        {
          step: 5,
          title: "Mood shift",
          description:
            "Bottle back on the table, he smiles and starts typing with new energy.",
        },
        {
          step: 6,
          title: "Message reveal",
          description:
            "The background softly blurs and the line appears: “Why take it seriously, Piyo Bisleri!”",
        },
      ],
      cta: "Piyo Bisleri. Stay Refreshed.",
      visualStyle:
        "Clean minimal office, brand colours kept subtle, soft cinematic lighting, crisp focus on bottle clarity and water sparkle.",
    },

    conceptB: {
      title: "“Every Situation Needs the Same Choice.”",
      format: "Poster",
      image: {
        file: "poster-bisleri-party-or-recovery.webp",
        small: "poster-bisleri-party-or-recovery-800.webp",
        width: 1131,
        height: 1600,
        alt: "Split poster concept: a neon club table on the left and a quiet hospital bedside on the right, each with a Bisleri bottle, headline 'Party or Recovery, Piyo Bisleri'.",
        caption: "Concept mock-up. Not an official Bisleri creative.",
      },
      idea:
        "A dual-environment poster showing that hydration stays constant whatever the situation. Left: club scene, dim neon, blues and purples, energetic. Right: hospital scene, soft whites and medical blues, calm. The Bisleri green connects both halves.",
      headline: "Party or Recovery, Piyo Bisleri.",
      alternateLine: "Different moments. Same hydration.",
      thinking:
        "Shows versatility; trust across situations; a strong lifestyle contrast gives recall; the dual-tone layout grabs attention.",
      objective:
        "Awareness, reinforce Bisleri as the default choice for pure, safe hydration, and lift recall with urban youth and a general audience (situational marketing).",
      cta: "Piyo Bisleri.",
      linkText:
        "This poster is also the hero asset of the Bisleri Winter Campaign Strategy →",
      linkHref: "/work/bisleri",
    },

    conceptC: {
      title: "“Expectation vs Reality”",
      format: "30-second reel (topical / momentary marketing)",
      subtitle:
        "A personal concept for a digital marketing institute, riding a live Kolkata moment.",
      disclaimer:
        "Personal practice concept, not an official KDMI campaign. Prices in the on-screen text are illustrative.",
      tone: "Funny, awareness-led.",
      timeline: [
        {
          timeframe: "0 to 5s",
          phase: "Chaos",
          description:
            "Shaky, fast-cut crowd footage with a loud viral sound.",
          onScreenText:
            "“After spending ₹40,000 just to catch a glimpse of Messi.”",
          subText: "“Worth it… I guess 🥲”",
        },
        {
          timeframe: "5 to 11s",
          phase: "Continuation",
          description: "Continuation with a second crowd clip.",
        },
        {
          timeframe: "11 to 15s",
          phase: "Beat drop",
          description:
            "Quick black screen or blink transition to someone looking confident and relaxed over a chill, confident beat.",
          onScreenText:
            "“After spending ₹30,000 on Digital Marketing at KDMI.”",
          subText: "“Skills + growth + ROI 😌”",
        },
        {
          timeframe: "15 to 20s",
          phase: "Brand punch",
          description:
            "KDMI mention with the CTA prompt.",
          onScreenText: "Join Now!!!",
        },
        {
          timeframe: "20 to 27s",
          phase: "To be developed",
          description:
            "Segment reserved for detailed course takeaways and campus proof points.",
          isToBeDeveloped: true,
        },
        {
          timeframe: "27 to 30s",
          phase: "Ending",
          description:
            "Joining info and contact details with the brand logo.",
        },
      ],
    },
  },

  takeaways: {
    sectionNumber: "04",
    sectionTitle: "WHAT I TOOK FROM THIS",
    h2: "What these exercises taught me",
    items: [
      {
        number: 1,
        text: "Start from the objective, then the idea. Each teardown began with what the ad was meant to change, which made every creative choice easier to judge.",
      },
      {
        number: 2,
        text: "Awareness ads can still carry a soft CTA. A visible price or a product close-up does the job without breaking the story.",
      },
      {
        number: 3,
        text: "Emotion before logic. The strongest ads in the set sold trust through a feeling, a mother's instinct or a smart choice, rather than a claim.",
      },
      {
        number: 4,
        text: "Colour and placement are strategy. Consistent brand colour and logo position are what make an ad recognisable in a second.",
      },
      {
        number: 5,
        text: "Timing is a creative tool. Pairing an offer with a live local moment, a festival or a city event, gives content a reason to be watched now.",
      },
    ],
    closingLine:
      "The same checklist-driven habit carries into my content planning work.",
    whereItShowsUp: [
      {
        id: "bisleri-winter",
        title: "Bisleri Winter Campaign Strategy",
        href: "/work/bisleri",
        annotation:
          "The poster concept became this case study's hero asset.",
      },
      {
        id: "zee-banglasonar",
        title: "Zee BanglaSonar Content Calendar",
        href: "/work/zee-banglasonar",
        annotation:
          "16-post editorial framework and observed July 2026 performance analysis.",
      },
    ],
  },

  workingNotes: {
    sectionNumber: "05",
    sectionTitle: "WORKING NOTES",
    h2: "Source documents",
    showSourcePdfs: true,
    pdfs: [
      {
        fileName: "ad-analysis-for-ideation.pdf",
        title: "Ad analysis for ideation",
        pages: 4,
        size: "115 KB",
        href: "/work/marketing-notebook/pdfs/ad-analysis-for-ideation.pdf",
      },
      {
        fileName: "bisleri-ad-ideation.pdf",
        title: "Bisleri ad ideation",
        pages: 3,
        size: "243 KB",
        href: "/work/marketing-notebook/pdfs/bisleri-ad-ideation.pdf",
      },
      {
        fileName: "momentary-video-ad-ideation.pdf",
        title: "Momentary video ad ideation",
        pages: 1,
        size: "76 KB",
        href: "/work/marketing-notebook/pdfs/momentary-video-ad-ideation.pdf",
      },
    ],
  },
};
