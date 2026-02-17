import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FlowerOfLife from "@/components/jiva/FlowerOfLife";

// ─── Tab Navigation ───
const tabs = [
  { id: "vision", label: "The Harmony Vision" },
  { id: "system", label: "Integrated System" },
  { id: "architecture", label: "Technology Architecture" },
  { id: "flows", label: "Living Flows" },
  { id: "blueprint", label: "National Blueprint" },
];

// ─── Flow Diagram (animated) ───
function FlowDiagram() {
  const flows = [
    { from: "🏠 Household", to: "🥚 Eggs", label: "production", color: "terracotta" },
    { from: "🥚 Eggs", to: "📊 Data", label: "recording", color: "copper" },
    { from: "📊 Data", to: "💰 Credit Score", label: "scoring", color: "gold" },
    { from: "💰 Credit Score", to: "🏦 Cooperative", label: "lending", color: "leaf" },
    { from: "🏦 Cooperative", to: "🔄 Federation", label: "federation", color: "water" },
    { from: "🔄 Federation", to: "🏛️ Indigenous Bank", label: "scaling", color: "sky" },
  ];
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setActiveStep((s) => (s + 1) % flows.length), 2500);
    return () => clearInterval(interval);
  }, []);

  const colorMap: Record<string, string> = {
    terracotta: "border-terracotta bg-terracotta/10 text-terracotta",
    copper: "border-copper bg-copper/10 text-copper",
    gold: "border-gold bg-gold/10 text-gold",
    leaf: "border-leaf bg-leaf/10 text-leaf",
    water: "border-water bg-water/10 text-water",
    sky: "border-sky bg-sky/10 text-sky",
  };
  const lineColorMap: Record<string, string> = {
    terracotta: "bg-terracotta",
    copper: "bg-copper",
    gold: "bg-gold",
    leaf: "bg-leaf",
    water: "bg-water",
    sky: "bg-sky",
  };
  const arrowColorMap: Record<string, string> = {
    terracotta: "border-l-terracotta",
    copper: "border-l-copper",
    gold: "border-l-gold",
    leaf: "border-l-leaf",
    water: "border-l-water",
    sky: "border-l-sky",
  };

  return (
    <div>
      {flows.map((f, i) => (
        <div
          key={i}
          onClick={() => setActiveStep(i)}
          className={`flex items-center gap-4 px-5 py-3.5 my-2 rounded-lg border cursor-pointer transition-all duration-500 ${
            activeStep === i ? colorMap[f.color] : "border-transparent"
          }`}
        >
          <span className="text-xl min-w-[100px] text-center">{f.from}</span>
          <div className="flex-1 flex items-center gap-2">
            <div
              className={`h-px flex-1 transition-all duration-500 ${
                activeStep === i ? lineColorMap[f.color] : "bg-copper/20"
              }`}
            />
            <span
              className={`font-mono-dm text-[10px] tracking-wider uppercase transition-all duration-500 ${
                activeStep === i ? "" : "text-cream/30"
              }`}
            >
              {f.label}
            </span>
            <div
              className={`w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] transition-all duration-500 ${
                activeStep === i ? arrowColorMap[f.color] : "border-l-copper/30"
              }`}
            />
          </div>
          <span className="text-xl min-w-[100px] text-center">{f.to}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Integration Map ───
function IntegrationMap() {
  const nodes = [
    { id: "aadhaar", label: "Aadhaar", sub: "Identity Layer", x: 50, y: 15, color: "terracotta", isCore: false },
    { id: "upi", label: "UPI", sub: "Payment Rails", x: 80, y: 35, color: "gold", isCore: false },
    { id: "ondc", label: "ONDC", sub: "Market Network", x: 20, y: 35, color: "leaf", isCore: false },
    { id: "aa", label: "Account Aggregator", sub: "Data Consent", x: 50, y: 55, color: "water", isCore: false },
    { id: "core", label: "Jīva Platform", sub: "Biological Banking Core", x: 50, y: 35, color: "copper", isCore: true },
    { id: "digilocker", label: "DigiLocker", sub: "Document Store", x: 15, y: 60, color: "sage", isCore: false },
    { id: "esign", label: "eSign", sub: "Digital Consent", x: 85, y: 60, color: "terracotta", isCore: false },
  ];

  const colorTextMap: Record<string, string> = {
    terracotta: "text-terracotta border-terracotta/60",
    gold: "text-gold border-gold/60",
    leaf: "text-leaf border-leaf/60",
    water: "text-water border-water/60",
    copper: "text-copper border-copper",
    sage: "text-sage border-sage/60",
  };

  return (
    <div className="relative h-[360px] my-8">
      {nodes.map((n) => (
        <div
          key={n.id}
          className={`absolute -translate-x-1/2 -translate-y-1/2 text-center z-[1] ${
            n.isCore
              ? `bg-copper/20 border-2 border-copper rounded-2xl px-7 py-5 z-[2]`
              : `bg-soil border ${colorTextMap[n.color]} rounded-lg px-4 py-3`
          }`}
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <div
            className={`${n.isCore ? "font-playfair text-lg font-bold" : "font-cormorant text-sm"} ${
              colorTextMap[n.color]?.split(" ")[0]
            }`}
          >
            {n.label}
          </div>
          <div className={`font-mono-dm text-[9px] tracking-wide mt-0.5 ${colorTextMap[n.color]?.split(" ")[0]} opacity-70`}>
            {n.sub}
          </div>
        </div>
      ))}
      <svg className="absolute inset-0 w-full h-full z-0">
        {[
          ["50%", "17%", "50%", "30%"],
          ["22%", "37%", "45%", "35%"],
          ["78%", "37%", "55%", "35%"],
          ["50%", "42%", "50%", "52%"],
          ["17%", "58%", "45%", "53%"],
          ["83%", "58%", "55%", "53%"],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--copper) / 0.2)" strokeWidth="1" strokeDasharray="4,4" />
        ))}
      </svg>
    </div>
  );
}

// ─── Data Model ───
function DataModel() {
  const entities = [
    { name: "Household", fields: ["aadhaar_ref", "location_geo", "flock_register[]", "members[]", "cooperative_id"], color: "terracotta" },
    { name: "Flock", fields: ["bird_count", "breed_type", "daily_production", "vaccination_log[]", "mortality_rate"], color: "gold" },
    { name: "Transaction", fields: ["egg_qty", "price_unit", "buyer_type", "upi_ref", "timestamp"], color: "leaf" },
    { name: "CreditScore", fields: ["production_consistency", "flock_trajectory", "market_regularity", "vaccination_compliance", "peer_score", "composite_score"], color: "copper" },
    { name: "Cooperative", fields: ["member_households[]", "common_fund_balance", "loan_portfolio[]", "insurance_pool", "federation_id"], color: "water" },
    { name: "LoanProduct", fields: ["type: flock|feed|emergency|cross", "principal", "rate_monthly", "tenure_days", "collateral_birds", "status"], color: "sky" },
  ];

  const headerColorMap: Record<string, string> = {
    terracotta: "bg-terracotta/10 border-terracotta/30 text-terracotta",
    gold: "bg-gold/10 border-gold/30 text-gold",
    leaf: "bg-leaf/10 border-leaf/30 text-leaf",
    copper: "bg-copper/10 border-copper/30 text-copper",
    water: "bg-water/10 border-water/30 text-water",
    sky: "bg-sky/10 border-sky/30 text-sky",
  };
  const borderColorMap: Record<string, string> = {
    terracotta: "border-terracotta/30",
    gold: "border-gold/30",
    leaf: "border-leaf/30",
    copper: "border-copper/30",
    water: "border-water/30",
    sky: "border-sky/30",
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {entities.map((e) => (
        <div key={e.name} className={`bg-soil border ${borderColorMap[e.color]} rounded-lg overflow-hidden`}>
          <div className={`px-4 py-2.5 border-b ${headerColorMap[e.color]} font-mono-dm text-sm font-bold`}>
            {e.name}
          </div>
          <div className="px-4 py-2">
            {e.fields.map((f, i) => (
              <div
                key={i}
                className={`py-1 font-mono-dm text-[11px] text-cream/50 ${i > 0 ? "border-t border-copper/10" : ""}`}
              >
                {f}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Main Blueprint Page ───
export default function Blueprint() {
  const [active, setActive] = useState("vision");
  const [activeNode, setActiveNode] = useState("people");

  return (
    <div className="min-h-screen bg-earth text-cream font-source-serif">
      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-16 pt-12 pb-8 max-w-[1200px] mx-auto relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-[0.06]">
          <FlowerOfLife className="w-[280px] h-[280px] text-copper" opacity={0.06} />
        </div>

        <Link to="/" className="inline-flex items-center gap-2 text-copper font-mono-dm text-xs tracking-widest uppercase mb-6 hover:text-gold transition-colors">
          ← Back to Home
        </Link>

        <div className="font-mono-dm text-[10px] text-copper tracking-[0.2em] uppercase mb-3">
          Jīva · जीव · The Living System
        </div>
        <h1 className="font-playfair text-cream font-bold leading-tight mb-4 max-w-[700px]" style={{ fontSize: "clamp(28px, 5vw, 48px)" }}>
          From Biological Capital<br />
          <span className="text-gold">to Indigenous Banking</span>
        </h1>
        <p className="font-source-serif text-base text-cream/60 leading-relaxed max-w-[600px]">
          An integrated system architecture connecting household poultry, community cooperatives,
          and India's digital public infrastructure into a self-sustaining financial ecosystem —
          guided by the ancient principle that <em className="text-sage">all living systems grow from harmony, not extraction</em>.
        </p>

        <div className="flex gap-6 mt-8 flex-wrap">
          {[
            { value: "190", unit: "M", label: "Invisible entrepreneurs", color: "text-terracotta" },
            { value: "₹56", unit: "B", label: "Combined TAM", color: "text-gold" },
            { value: "130", unit: "%", label: "Annual ROI per hen", color: "text-leaf" },
            { value: "4.2", unit: "×", label: "Economic multiplier", color: "text-water" },
          ].map((m) => (
            <div key={m.label} className="text-center px-4">
              <div className={`font-playfair text-4xl ${m.color} leading-none`}>
                {m.value}<span className="text-base opacity-60">{m.unit}</span>
              </div>
              <div className="font-mono-dm text-[10px] text-cream/40 tracking-wider uppercase mt-1.5">{m.label}</div>
            </div>
          ))}
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="flex justify-center border-b border-copper/20 bg-earth sticky top-0 z-50 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`px-6 py-4 font-cormorant text-sm tracking-wider whitespace-nowrap border-b-2 transition-all duration-300 ${
              active === t.id
                ? "bg-copper/10 border-gold text-gold"
                : "border-transparent text-cream/50 hover:text-cream/70"
            }`}
          >
            {t.label}
          </button>
        ))}
      </nav>

      {/* ─── VISION TAB ─── */}
      {active === "vision" && (
        <section className="px-4 sm:px-6 lg:px-16 py-12 max-w-[1200px] mx-auto">
          <div className="font-mono-dm text-[10px] text-copper tracking-[0.15em] uppercase mb-2">
            Part III · The Harmony Framework
          </div>
          <h2 className="font-playfair text-3xl text-cream mb-1">
            King Charles's Vision of Harmony
          </h2>
          <p className="font-playfair text-xl text-gold mb-6">
            as Operating System for Indigenous Economics
          </p>

          <blockquote className="border-l-[3px] border-gold px-7 py-5 my-8 bg-copper/5 relative">
            <span className="absolute top-1 left-2 text-5xl text-gold/25 font-playfair">"</span>
            <p className="font-cormorant text-lg text-cream italic leading-relaxed">
              The world is not a machine. It is a living system with its own patterns, its own rhythms, and its own inherent intelligence. When we work with those patterns rather than against them, we find that nature is the most sophisticated technology available to us.
            </p>
            <footer className="font-mono-dm text-[11px] text-copper mt-3 tracking-wider not-italic">
              — HRH King Charles III, Harmony: A New Way of Looking at Our World
            </footer>
          </blockquote>

          <p className="font-source-serif text-[15px] text-cream/75 leading-relaxed mb-8">
            The King's Harmony thesis — that sustainable prosperity emerges from aligning human systems with natural patterns — maps precisely onto an indigenous banking architecture built on biological capital. Where industrial finance extracts value through abstraction and debt, a Harmony-aligned system generates value through production, reproduction, and symbiosis. The hen does not borrow to create. She converts sunlight, grain, and water into protein and life. This is the original economic engine — one the King recognised as containing principles far more sophisticated than any financial derivative.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {[
              {
                icon: "🌀", title: "Cyclical Economics",
                harmony: "Nature operates in cycles, not lines. Every output becomes an input. Waste does not exist in natural systems.",
                system: "Egg → Revenue → Feed → Egg. Manure → Soil → Grain → Feed → Egg. Chick → Flock → Surplus → Neighbour's Flock. Zero waste, infinite cycling.",
              },
              {
                icon: "🌱", title: "Organic Growth",
                harmony: "Growth in nature is proportional and self-regulating. A tree does not grow faster than its roots can support.",
                system: "Credit limits tied to biological production capacity. A household cannot borrow beyond what their flock can repay. The biology enforces prudence automatically.",
              },
              {
                icon: "⚖️", title: "Dynamic Balance",
                harmony: "Health emerges from balance — between growth and rest, individual and community, production and regeneration.",
                system: "Cooperative governance balances individual household autonomy with collective risk pooling. Insurance premiums fund prevention (vaccination), not just compensation.",
              },
              {
                icon: "🕸️", title: "Interconnected Wholeness",
                harmony: "No part of a living system exists in isolation. The health of each element depends on the health of all.",
                system: "Nutrition → Labour Productivity → Income → Education → Next Generation. The system cannot be decomposed into isolated 'programs' without destroying its efficacy.",
              },
              {
                icon: "📐", title: "Sacred Geometry",
                harmony: "Natural forms follow mathematical harmonies — the golden ratio, Fibonacci sequences, fractal self-similarity.",
                system: "The system is fractal: household mirrors cooperative mirrors federation mirrors national bank. Same governance pattern, same data model, same feedback loops at every scale.",
              },
              {
                icon: "🌍", title: "Rooted Sovereignty",
                harmony: "True sustainability requires local stewardship, indigenous knowledge, and community governance — not remote control.",
                system: "Each cooperative is sovereign. Credit intelligence, capital, and governance originate locally. Federation is voluntary and additive, never extractive. Data sovereignty is absolute.",
              },
            ].map((p) => (
              <div key={p.title} className="bg-soil/80 border border-copper/20 rounded-lg px-6 py-7">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-playfair text-gold text-lg mb-2">{p.title}</h3>
                <div className="font-mono-dm text-[10px] text-copper tracking-widest uppercase mb-2">Harmony Principle</div>
                <p className="font-source-serif text-sm text-cream/75 leading-relaxed mb-4">{p.harmony}</p>
                <div className="font-mono-dm text-[10px] text-leaf tracking-widest uppercase mb-2">System Expression</div>
                <p className="font-source-serif text-sm text-sage leading-relaxed">{p.system}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── SYSTEM TAB ─── */}
      {active === "system" && (
        <section className="px-4 sm:px-6 lg:px-16 py-12 max-w-[1200px] mx-auto">
          <h2 className="font-playfair text-[28px] text-cream mb-2">The Integrated Living System</h2>
          <p className="font-source-serif text-[15px] text-cream/50 leading-relaxed mb-8">
            Three pillars — People, Capital, and Supply Chain — connected through a digital nervous system that makes biological economic activity legible to formal institutions without destroying its indigenous character.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {([
              {
                icon: "👥", title: "People", subtitle: "SOCIAL INFRASTRUCTURE", nodeId: "people", color: "terracotta",
                items: [
                  "Household producers (women-led)", "Para-vets (Pashu Sakhis)", "Cooperative governance councils",
                  "Block federation coordinators", "Market aggregators & traders", "Institutional buyers (schools, Anganwadi)",
                ],
              },
              {
                icon: "💰", title: "Capital", subtitle: "FINANCIAL INFRASTRUCTURE", nodeId: "capital", color: "gold",
                items: [
                  "Biological savings (flock as account)", "Egg-denominated unit of account", "Cooperative common lending fund",
                  "Mutual livestock insurance pool", "Federation working capital facility", "Formal bank bridge via credit score",
                ],
              },
              {
                icon: "🔗", title: "Supply Chain", subtitle: "MARKET INFRASTRUCTURE", nodeId: "supply", color: "leaf",
                items: [
                  "Village-level egg aggregation", "Cold chain (block-level)", "Institutional procurement contracts",
                  "Feed bulk purchasing network", "Chick distribution (peer-to-peer)", "ONDC market listing integration",
                ],
              },
              {
                icon: "📡", title: "Digital Nervous System", subtitle: "DATA INFRASTRUCTURE", nodeId: "data", color: "water",
                items: [
                  "Production ledger (daily egg data)", "Credit score engine", "Aadhaar-linked identity (opt-in)",
                  "UPI payment rails", "Account Aggregator consent", "DigiLocker document store",
                ],
              },
            ] as const).map((node) => {
              const isActive = activeNode === node.nodeId;
              const borderColor: Record<string, string> = {
                terracotta: "border-terracotta",
                gold: "border-gold",
                leaf: "border-leaf",
                water: "border-water",
              };
              const bgColor: Record<string, string> = {
                terracotta: "bg-terracotta/10",
                gold: "bg-gold/10",
                leaf: "bg-leaf/10",
                water: "bg-water/10",
              };
              const textColor: Record<string, string> = {
                terracotta: "text-terracotta",
                gold: "text-gold",
                leaf: "text-leaf",
                water: "text-water",
              };
              const dotColor: Record<string, string> = {
                terracotta: "bg-terracotta",
                gold: "bg-gold",
                leaf: "bg-leaf",
                water: "bg-water",
              };
              return (
                <div
                  key={node.nodeId}
                  onClick={() => setActiveNode(node.nodeId)}
                  className={`rounded-xl px-5 py-6 cursor-pointer transition-all duration-400 min-w-[220px] border ${
                    isActive ? `${bgColor[node.color]} ${borderColor[node.color]}` : `bg-soil border-copper/40`
                  } ${isActive ? "scale-[1.02]" : "scale-100"}`}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-2xl">{node.icon}</span>
                    <div>
                      <div className={`font-playfair text-base ${isActive ? textColor[node.color] : "text-cream"}`}>{node.title}</div>
                      <div className={`font-mono-dm text-[10px] tracking-wider ${textColor[node.color]} ${isActive ? "opacity-70" : "opacity-50"}`}>{node.subtitle}</div>
                    </div>
                  </div>
                  {isActive && (
                    <div className="mt-2">
                      {node.items.map((item, i) => (
                        <div key={i} className={`py-1.5 font-source-serif text-[13px] text-cream/75 flex items-center gap-2 ${i > 0 ? `border-t ${borderColor[node.color]}/10` : ""}`}>
                          <span className={`w-1 h-1 rounded-full flex-shrink-0 ${dotColor[node.color]}`} />
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <h3 className="font-playfair text-xl text-copper mb-4">Data Model</h3>
            <DataModel />
          </div>
        </section>
      )}

      {/* ─── ARCHITECTURE TAB ─── */}
      {active === "architecture" && (
        <section className="px-4 sm:px-6 lg:px-16 py-12 max-w-[1200px] mx-auto">
          <div className="font-mono-dm text-[10px] text-copper tracking-[0.15em] uppercase mb-2">
            Part III · Technology Architecture
          </div>
          <h2 className="font-playfair text-[28px] text-cream mb-2">
            National Scale on India's Digital Public Infrastructure
          </h2>
          <p className="font-source-serif text-[15px] text-cream/50 leading-relaxed mb-8">
            The Jīva platform does not build new rails. It connects biological economic activity to India's existing DPI stack — turning Aadhaar, UPI, ONDC, and Account Aggregator into instruments of indigenous banking.
          </p>

          <IntegrationMap />

          <div className="mt-6 space-y-3">
            {[
              { layer: "L1", title: "Identity & Consent Layer", color: "terracotta",
                components: ["Aadhaar eKYC (opt-in)", "DigiLocker", "eSign 2.0", "Video KYC fallback", "Cooperative membership registry"] },
              { layer: "L2", title: "Production Data Layer", color: "gold",
                components: ["Mobile app (Android/KaiOS)", "USSD fallback (*99# pattern)", "Para-vet vaccination logger", "IoT egg counter (optional)", "Offline-first sync engine"] },
              { layer: "L3", title: "Credit Intelligence Layer", color: "copper",
                components: ["OpenCredit scoring engine", "Production consistency index", "Flock trajectory model", "Peer reputation graph", "Composite score API"] },
              { layer: "L4", title: "Financial Services Layer", color: "leaf",
                components: ["UPI Collect / AutoPay", "NACH mandate (insurance)", "Cooperative loan management", "NBFC/bank co-lending bridge", "MUDRA Shishu integration"] },
              { layer: "L5", title: "Market & Supply Chain Layer", color: "water",
                components: ["ONDC seller node", "PM POSHAN procurement API", "Feed procurement aggregator", "Cold chain logistics partner", "Price discovery engine"] },
              { layer: "L6", title: "Governance & Reporting Layer", color: "sky",
                components: ["Account Aggregator (FIP/FIU)", "RBI regulatory reporting", "NABARD SHG portal sync", "Cooperative audit automation", "Impact dashboard"] },
            ].map((block) => {
              const borderMap: Record<string, string> = {
                terracotta: "border-terracotta/30",
                gold: "border-gold/30",
                copper: "border-copper/30",
                leaf: "border-leaf/30",
                water: "border-water/30",
                sky: "border-sky/30",
              };
              const textMap: Record<string, string> = {
                terracotta: "text-terracotta",
                gold: "text-gold",
                copper: "text-copper",
                leaf: "text-leaf",
                water: "text-water",
                sky: "text-sky",
              };
              const badgeBgMap: Record<string, string> = {
                terracotta: "bg-terracotta/10 border-terracotta/20",
                gold: "bg-gold/10 border-gold/20",
                copper: "bg-copper/10 border-copper/20",
                leaf: "bg-leaf/10 border-leaf/20",
                water: "bg-water/10 border-water/20",
                sky: "bg-sky/10 border-sky/20",
              };
              const layerBgMap: Record<string, string> = {
                terracotta: "bg-terracotta/10 border-terracotta/40",
                gold: "bg-gold/10 border-gold/40",
                copper: "bg-copper/10 border-copper/40",
                leaf: "bg-leaf/10 border-leaf/40",
                water: "bg-water/10 border-water/40",
                sky: "bg-sky/10 border-sky/40",
              };
              return (
                <div key={block.layer} className={`bg-soil border ${borderMap[block.color]} rounded-lg p-5`}>
                  <div className="flex items-center gap-3 mb-3.5">
                    <div className={`w-9 h-9 rounded-lg ${layerBgMap[block.color]} border flex items-center justify-center font-mono-dm text-xs font-bold ${textMap[block.color]}`}>
                      {block.layer}
                    </div>
                    <div className={`font-playfair text-base text-cream`}>{block.title}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {block.components.map((c, i) => (
                      <span key={i} className={`px-3 py-1 ${badgeBgMap[block.color]} border rounded-full font-mono-dm text-[11px] ${textMap[block.color]} opacity-80`}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Offline-First Architecture */}
          <div className="mt-8 p-6 bg-copper/5 border border-copper/20 rounded-xl">
            <h3 className="font-playfair text-lg text-copper mb-3">Offline-First Architecture</h3>
            <p className="font-source-serif text-sm text-cream/65 leading-relaxed">
              80% of target users operate in low-connectivity environments. The system is designed offline-first: all data entry happens locally on-device, syncs opportunistically via mobile data or village-level WiFi, and resolves conflicts through CRDT-based merge logic. A woman recording her morning egg count at 5:30 AM should never see a loading spinner. The data reaches the cooperative ledger when connectivity allows — but the local record is always authoritative.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["SQLite local store", "CRDT sync protocol", "SMS data backup", "USSD command interface", "< 5MB app size"].map((t) => (
                <span key={t} className="px-3 py-1 bg-copper/10 border border-copper/15 rounded-2xl font-mono-dm text-[10px] text-copper/80">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── FLOWS TAB ─── */}
      {active === "flows" && (
        <section className="px-4 sm:px-6 lg:px-16 py-12 max-w-[1200px] mx-auto">
          <h2 className="font-playfair text-[28px] text-cream mb-2">Living Flows</h2>
          <p className="font-source-serif text-[15px] text-cream/50 leading-relaxed mb-8">
            The value chain from household production to indigenous banking — each transformation building on the one before, like rings of a living tree.
          </p>

          <FlowDiagram />

          <div className="mt-10">
            <h3 className="font-playfair text-xl text-gold mb-4">The Compounding Cycle</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                { icon: "🌾", title: "Kitchen Waste", sub: "Zero-cost feed input", value: "₹0/day" },
                { icon: "🐔", title: "10 Hens", sub: "Biological capital", value: "₹2,000" },
                { icon: "🥚", title: "5-7 Eggs/Day", sub: "Daily production", value: "₹30-56/day" },
                { icon: "🍳", title: "2-3 Consumed", sub: "Protein sovereignty", value: "18g protein" },
                { icon: "💵", title: "3-4 Sold", sub: "Market income", value: "₹18-32/day" },
                { icon: "🐣", title: "30-50 Chicks/Yr", sub: "Biological compounding", value: "₹1.5-2.5K" },
                { icon: "💩", title: "80-100 kg Manure", sub: "Fertilizer value", value: "₹1.5-2K/yr" },
                { icon: "📈", title: "Credit Score", sub: "Financial visibility", value: "Priceless" },
              ].map((c) => (
                <div key={c.title} className="bg-soil border border-copper/15 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">{c.icon}</div>
                  <div className="font-playfair text-sm text-cream">{c.title}</div>
                  <div className="font-mono-dm text-[10px] text-cream/40 mb-1.5">{c.sub}</div>
                  <div className="font-playfair text-base text-gold">{c.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── BLUEPRINT TAB ─── */}
      {active === "blueprint" && (
        <section className="px-4 sm:px-6 lg:px-16 py-12 max-w-[1200px] mx-auto">
          <h2 className="font-playfair text-[28px] text-cream mb-2">National Blueprint</h2>
          <p className="font-source-serif text-[15px] text-cream/50 leading-relaxed mb-8">
            A 15-year sovereign path from village cooperatives to a national indigenous banking institution — growing at the speed of biology, not venture capital.
          </p>

          {/* Timeline */}
          <div className="relative pl-8">
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-copper/20" />
            {[
              { title: "Seed: Village Cooperatives", period: "YEAR 1–3", color: "terracotta",
                desc: "200-household cooperatives in 10,000 villages. Daily production ledgers. Mutual insurance pools. First micro-loans from common funds. Para-vet networks established. USSD + basic Android app deployed." },
              { title: "Root: Block Federations", period: "YEAR 3–5", color: "gold",
                desc: "50–100 cooperatives federate at block level. Cold chain infrastructure. Institutional procurement contracts (PM POSHAN, Anganwadi). Credit scores issued. First formal bank linkages via Account Aggregator." },
              { title: "Branch: District Banking", period: "YEAR 5–8", color: "leaf",
                desc: "District federations apply for cooperative banking licenses. ₹200–400 crore annual revenue per district. Full UPI integration. ONDC market listings. NBFC co-lending partnerships. Professional management." },
              { title: "Canopy: State Apex Institutions", period: "YEAR 8–12", color: "water",
                desc: "State-level apex cooperative banks. ₹5,000–15,000 crore asset base per state. Reinsurance partnerships. Full-spectrum financial products: savings, credit, insurance, pensions. Cross-enterprise lending (dairy, agriculture, crafts)." },
              { title: "Forest: National Indigenous Bank", period: "YEAR 12–15", color: "sky",
                desc: "National banking network serving 50–100 million households. ₹1–3 lakh crore in managed assets. Complete DPI integration. International replication model (Bangladesh, Ethiopia, Vietnam, East Africa). Biological banking as a recognised financial paradigm." },
            ].map((item, i) => {
              const borderMap: Record<string, string> = {
                terracotta: "border-terracotta",
                gold: "border-gold",
                leaf: "border-leaf",
                water: "border-water",
                sky: "border-sky",
              };
              const bgMap: Record<string, string> = {
                terracotta: "bg-terracotta/10",
                gold: "bg-gold/10",
                leaf: "bg-leaf/10",
                water: "bg-water/10",
                sky: "bg-sky/10",
              };
              const textMap: Record<string, string> = {
                terracotta: "text-terracotta",
                gold: "text-gold",
                leaf: "text-leaf",
                water: "text-water",
                sky: "text-sky",
              };
              return (
                <div key={i} className="relative mb-7">
                  <div className={`absolute -left-8 top-1 w-[22px] h-[22px] rounded-full ${bgMap[item.color]} border-2 ${borderMap[item.color]} flex items-center justify-center font-mono-dm text-[10px] ${textMap[item.color]}`}>
                    {i + 1}
                  </div>
                  <h3 className={`font-playfair text-[17px] ${textMap[item.color]} mb-1`}>{item.title}</h3>
                  <div className="font-mono-dm text-[10px] text-cream/35 tracking-wider mb-1.5">{item.period}</div>
                  <p className="font-source-serif text-sm text-cream/75 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Closing Quote */}
          <blockquote className="border-l-[3px] border-gold px-7 py-5 my-8 bg-copper/5 relative">
            <span className="absolute top-1 left-2 text-5xl text-gold/25 font-playfair">"</span>
            <p className="font-cormorant text-lg text-cream italic leading-relaxed">
              If we can find a way to work with the grain of nature rather than against it, we will discover that the solutions to our greatest challenges have been here all along — growing quietly in the places we forgot to look.
            </p>
            <footer className="font-mono-dm text-[11px] text-copper mt-3 tracking-wider not-italic">
              — The Harmony Principle, applied
            </footer>
          </blockquote>

          {/* Thesis Card */}
          <div className="mt-8 p-7 bg-gradient-to-br from-soil to-earth border border-gold/25 rounded-xl text-center">
            <div className="font-mono-dm text-[10px] text-copper tracking-[0.2em] uppercase mb-3">
              The Jīva Thesis
            </div>
            <p className="font-playfair text-xl text-cream leading-relaxed max-w-[600px] mx-auto">
              A hen is not a metaphor for capital.<br />
              <span className="text-gold">She is capital.</span><br />
              And from her, everything else follows.
            </p>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 text-center border-t border-copper/15 mt-8">
        <p className="font-mono-dm text-[10px] text-cream/25 tracking-widest">
          JĪVA · SETIENT LTD · INFRASTRUCTURE FOR CONSCIOUSNESS · 2025
        </p>
      </footer>
    </div>
  );
}
