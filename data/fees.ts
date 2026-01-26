export interface PriceTier {
  category: "Dissector" | "Observer" | "Lecture";
  description: string;
  rates: {
    earlyBird: {
      surgeon?: { myr: number; usd: number };
      resident?: { myr: number; usd: number };
      flat?: { myr: number; usd: number };
    };
    standard: {
      surgeon?: { myr: number; usd: number };
      resident?: { myr: number; usd: number };
      flat?: { myr: number; usd: number };
    };
  };
}

export const FEES: PriceTier[] = [
  {
    category: "Dissector",
    description: "Full Hands-on Experience (Lecture + Cadaveric)",
    rates: {
      earlyBird: {
        surgeon: { myr: 3000, usd: 900 },
        resident: { myr: 2500, usd: 800 },
      },
      standard: {
        surgeon: { myr: 3500, usd: 1400 },
        resident: { myr: 3000, usd: 1300 },
      },
    },
  },
  {
    category: "Observer",
    description: "Observation only (Lecture + Cadaveric Observation)",
    rates: {
      earlyBird: {
        surgeon: { myr: 1500, usd: 500 },
        resident: { myr: 1000, usd: 400 },
      },
      standard: {
        surgeon: { myr: 2000, usd: 1000 },
        resident: { myr: 1500, usd: 900 },
      },
    },
  },
  {
    category: "Lecture",
    description: "Didactic Lecture Only (26 June 2026)",
    rates: {
      earlyBird: {
        flat: { myr: 500, usd: 150 },
      },
      standard: {
        flat: { myr: 500, usd: 150 },
      },
    },
  },
];