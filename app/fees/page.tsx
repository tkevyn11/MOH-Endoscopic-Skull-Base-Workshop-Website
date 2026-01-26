"use client";

import { useState } from "react";
import { FEES } from "@/data/fees";
import { cn } from "@/lib/utils";
import { Check, Info, Users } from "lucide-react";

export default function FeesPage() {
  const [isEarlyBird, setIsEarlyBird] = useState(true);
  const [activeTab, setActiveTab] = useState<"Dissector" | "Observer" | "Lecture">("Dissector");

  const currentTier = FEES.find((t) => t.category === activeTab);

  return (
    <div className="py-12 lg:py-20 container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: 'var(--text)' }}>Registration Fees</h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text2)' }}>
          Choose your participation level. Early bird rates apply until 30 April 2026.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-8 mb-12">
        {/* Toggle Early Bird */}
        <div className="glass-card p-1 rounded-xl flex items-center relative">
          <button
            onClick={() => setIsEarlyBird(true)}
            className={cn(
              "px-6 py-2 rounded-lg text-sm font-bold transition-all relative z-10",
              isEarlyBird ? "bg-accent text-white shadow-sm" : "hover:bg-white/5"
            )}
            style={!isEarlyBird ? { color: 'var(--text2)' } : {}}
          >
            Early Bird
          </button>
          <button
             onClick={() => setIsEarlyBird(false)}
             className={cn(
              "px-6 py-2 rounded-lg text-sm font-bold transition-all relative z-10",
              !isEarlyBird ? "bg-accent text-white shadow-sm" : "hover:bg-white/5"
            )}
            style={isEarlyBird ? { color: 'var(--text2)' } : {}}
          >
            Standard Rate
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {FEES.map((tier) => (
            <button
              key={tier.category}
              onClick={() => setActiveTab(tier.category)}
              className={cn(
                "px-6 py-3 border-b-2 text-base font-medium transition-colors",
                activeTab === tier.category
                  ? "border-white/80 text-white"
                  : "border-transparent text-white/60 hover:text-white"
              )}
            >
              {tier.category}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Card Display */}
      <div className="max-w-4xl mx-auto">
        {currentTier && (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
             <div className="bg-brand-900 p-6 text-center text-white">
                <h2 className="text-2xl font-bold">{currentTier.category}</h2>
                <p className="text-brand-200 opacity-90">{currentTier.description}</p>
             </div>
             
             <div className="p-8 lg:p-12">
                <div className="grid md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                  {/* Surgeon Rate */}
                  {currentTier.rates.earlyBird.surgeon && (
                    <div className="text-center md:px-4">
                       <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Surgeon</h3>
                       <div className="flex flex-col items-center justify-center gap-2">
                          <span className="text-4xl font-extrabold text-slate-900">
                            RM {isEarlyBird ? currentTier.rates.earlyBird.surgeon?.myr : currentTier.rates.standard.surgeon?.myr}
                          </span>
                          <span className="text-lg font-medium text-slate-400">
                            USD {isEarlyBird ? currentTier.rates.earlyBird.surgeon?.usd : currentTier.rates.standard.surgeon?.usd}
                          </span>
                       </div>
                    </div>
                  )}

                  {/* Resident/Master Rate */}
                  {currentTier.rates.earlyBird.resident && (
                    <div className="text-center pt-8 md:pt-0 md:px-4">
                       <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Resident / Master</h3>
                       <div className="flex flex-col items-center justify-center gap-2">
                          <span className="text-4xl font-extrabold text-slate-900">
                            RM {isEarlyBird ? currentTier.rates.earlyBird.resident?.myr : currentTier.rates.standard.resident?.myr}
                          </span>
                          <span className="text-lg font-medium text-slate-400">
                            USD {isEarlyBird ? currentTier.rates.earlyBird.resident?.usd : currentTier.rates.standard.resident?.usd}
                          </span>
                       </div>
                    </div>
                  )}

                  {/* Flat Rate (Lecture Only) */}
                  {currentTier.rates.earlyBird.flat && (
                     <div className="col-span-2 text-center">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Standard Fee</h3>
                         <div className="flex flex-col items-center justify-center gap-2">
                          <span className="text-4xl font-extrabold text-slate-900">
                            RM {currentTier.rates.earlyBird.flat.myr}
                          </span>
                          <span className="text-lg font-medium text-slate-400">
                            USD {currentTier.rates.earlyBird.flat.usd}
                          </span>
                       </div>
                     </div>
                  )}
                </div>

                <div className="mt-10 pt-8 border-t border-slate-100">
                   <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-600">Access to {activeTab === "Lecture" ? "Didactic Lecture only" : "Lecture & Cadaveric Workshop"}</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-600">Workshop materials and certificate</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-600">Meals and refreshments included</span>
                      </li>
                   </ul>
                </div>
             </div>
          </div>
        )}
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto mt-20">
         <h3 className="text-2xl font-bold text-white/90 mb-6 text-center">Frequently Asked Questions</h3>
         <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
               <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                 <Info className="h-4 w-4 mr-2 text-brand-500" /> Refund Policy
               </h4>
               <p className="text-slate-600">Strictly non-refundable and non-transferable once payment has been made.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
               <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                 <Users className="h-4 w-4 mr-2 text-brand-500" /> Who should attend?
               </h4>
               <p className="text-slate-600">Neurosurgeons and neurosurgical trainees (local and international).</p>
            </div>
         </div>
      </div>
    </div>
  );
}