# Jiva — The Living Ledger

India's first bio-digital bank for rural households. Jiva converts biological capital — livestock, poultry, agricultural productivity — into formal credit scores, unlocking financial access for 190 million households whose wealth has never been recognized by traditional finance.

## The Problem

Rural India isn't poor — it's invisible to formal finance. Three colonial-era interventions erased biological capital from the ledger:

1. **Enclosure of Commons** — Land wealth was privatized, making traditional collective stewardship illegal
2. **Monetization of Barter** — Only rupee transactions count; bio-exchange networks are erased
3. **Formalization of Finance** — Only bank collateral counts; livestock-rich communities became "unbanked"

## How It Works

1. **Register Bio-Capital** — Register flocks, livestock, and land via mobile phone (no bank needed)
2. **Track Productivity** — Daily production data builds a living financial record (offline-first)
3. **Generate Credit Score** — Bio productivity becomes a credit score via India's first AA-connected Financial Information Provider for the informal economy
4. **Access Finance** — Scores unlock loans, insurance, and market access via UPI/ONDC/eNAM
5. **Cooperative Growth** — Cooperatives pool resources, modeled on Amul and scaled via digital infrastructure

## Entry Points (Bio-Capital Ladder)

| Tier | Path | Entry Cost |
|------|------|------------|
| Pastoralist | GPS tracking and productivity scoring for mobile herds | Existing herd |
| Farmer | Register existing assets and convert to credit | Existing land |
| Landless | Poultry keeping — the lowest barrier to entry | ~₹500 + 3 hens |

## Impact

- **500+** active households
- **₹100** customer acquisition cost per family
- **130–175%** bio returns
- **23.6x** social return on investment (SROI)

## Tech Stack

- **React** + **TypeScript** — UI framework
- **Vite** — Build tool and dev server
- **Tailwind CSS** — Utility-first styling
- **shadcn/ui** + **Radix UI** — Accessible component primitives
- **TanStack React Query** — Server state management
- **Recharts** — Data visualization
- **Vitest** + **Testing Library** — Testing

## Getting Started

Requires Node.js and npm ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd jiva-the-living

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Architecture

```
src/
├── components/
│   ├── jiva/          # Domain-specific components (Hero, Problem, HowItWorks, etc.)
│   └── ui/            # shadcn/ui component library
├── pages/
│   ├── Index.tsx      # Main landing page
│   └── NotFound.tsx
├── hooks/
├── lib/
├── test/
├── App.tsx            # Root component with routing
├── main.tsx           # Entry point
└── index.css          # Global styles and design tokens
```

## Design Philosophy

- **Privacy-first** — Aadhaar hashing, no raw PII stored
- **Offline-first** — Works in low-connectivity rural environments
- **Cooperative governance** — Community-owned, not extractive
- **India Stack native** — Built on Aadhaar, UPI, ONDC, eNAM, and Account Aggregator

## License

MIT
