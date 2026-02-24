"use client";

import { FEES } from "@/data/fees";
import { Check, Info, Users, AlertCircle } from "lucide-react";
import { CONFIG } from "@/constants/config";

export default function FeesPage() {
  const dissectorTier = FEES.find((t) => t.category === "Dissector");
  const observerTier = FEES.find((t) => t.category === "Observer");
  const lectureTier = FEES.find((t) => t.category === "Lecture");

  return (
    <div className="py-12 lg:py-20 container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: 'var(--text)' }}>Registration Fees</h1>
        <p className="text-lg max-w-2xl mx-auto mb-6" style={{ color: 'var(--text2)' }}>
          Early bird rates apply until 30 April 2026.
        </p>
        <div className="max-w-3xl mx-auto bg-blue-50 border border-blue-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-left">
              <p className="text-sm font-medium text-blue-900">
                <strong>Payment Currency:</strong> Malaysian participants should pay in <strong>RM (Ringgit Malaysia)</strong>. International participants should pay in <strong>USD (US Dollars)</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* All Three Tables */}
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Dissector Table */}
        {dissectorTier && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="bg-brand-900 p-6 text-center text-white">
              <div className="flex items-center justify-center gap-3">
                <h2 className="text-2xl font-bold">26-28 June 2026 — Lecture + Cadaveric Workshop (Dissector)</h2>
                {CONFIG.DISSECTOR_FULL && (
                  <span className="inline-flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-sm uppercase tracking-wide">
                    Sold Out
                  </span>
                )}
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-900 text-white">
                    <th className="text-left py-4 px-6 font-bold uppercase tracking-wider">Category</th>
                    <th className="text-center py-4 px-6 font-bold uppercase tracking-wider">Early Bird</th>
                    <th className="text-center py-4 px-6 font-bold uppercase tracking-wider">Late</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <td className="py-5 px-6 font-medium text-slate-700">Surgeon (Local)</td>
                    <td className="py-5 px-6 text-center text-xl font-bold text-slate-900">RM {dissectorTier.rates.earlyBird.surgeon?.myr}</td>
                    <td className="py-5 px-6 text-center text-xl font-bold text-slate-900">RM {dissectorTier.rates.standard.surgeon?.myr}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-5 px-6 font-medium text-slate-700">Surgeon (International)</td>
                    <td className="py-5 px-6 text-center text-xl font-bold text-slate-900">USD {dissectorTier.rates.earlyBird.surgeon?.usd}</td>
                    <td className="py-5 px-6 text-center text-xl font-bold text-slate-900">USD {dissectorTier.rates.standard.surgeon?.usd}</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <td className="py-5 px-6 font-medium text-slate-700">Resident/Master (Local)</td>
                    <td className="py-5 px-6 text-center text-xl font-bold text-slate-900">RM {dissectorTier.rates.earlyBird.resident?.myr}</td>
                    <td className="py-5 px-6 text-center text-xl font-bold text-slate-900">RM {dissectorTier.rates.standard.resident?.myr}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-5 px-6 font-medium text-slate-700">Resident/Master (International)</td>
                    <td className="py-5 px-6 text-center text-xl font-bold text-slate-900">USD {dissectorTier.rates.earlyBird.resident?.usd}</td>
                    <td className="py-5 px-6 text-center text-xl font-bold text-slate-900">USD {dissectorTier.rates.standard.resident?.usd}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-slate-50">
              {CONFIG.DISSECTOR_FULL ? (
                <button
                  disabled
                  className="w-full py-3 px-6 rounded-xl bg-slate-300 text-slate-500 font-bold text-lg cursor-not-allowed"
                >
                  Sold Out
                </button>
              ) : (
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfI9-izLjBON1F0kOE3JKeaGWAiRgQCryxp-7wwNEZoQLGQ3A/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg text-center transition-colors shadow-md hover:shadow-lg"
                >
                  Register Now
                </a>
              )}
            </div>
          </div>
        )}

        {/* Observer Table */}
        {observerTier && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="bg-brand-900 p-6 text-center text-white">
              <h2 className="text-2xl font-bold">26-28 June 2026 — Lecture + Cadaveric Workshop (Observer)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-900 text-white">
                    <th className="text-left py-4 px-6 font-bold uppercase tracking-wider">Category</th>
                    <th className="text-center py-4 px-6 font-bold uppercase tracking-wider">Early Bird</th>
                    <th className="text-center py-4 px-6 font-bold uppercase tracking-wider">Late</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <td className="py-5 px-6 font-medium text-slate-700">Surgeon (Local)</td>
                    <td className="py-5 px-6 text-center text-xl font-bold text-slate-900">RM {observerTier.rates.earlyBird.surgeon?.myr}</td>
                    <td className="py-5 px-6 text-center text-xl font-bold text-slate-900">RM {observerTier.rates.standard.surgeon?.myr}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-5 px-6 font-medium text-slate-700">Surgeon (International)</td>
                    <td className="py-5 px-6 text-center text-xl font-bold text-slate-900">USD {observerTier.rates.earlyBird.surgeon?.usd}</td>
                    <td className="py-5 px-6 text-center text-xl font-bold text-slate-900">USD {observerTier.rates.standard.surgeon?.usd}</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <td className="py-5 px-6 font-medium text-slate-700">Resident/Master (Local)</td>
                    <td className="py-5 px-6 text-center text-xl font-bold text-slate-900">RM {observerTier.rates.earlyBird.resident?.myr}</td>
                    <td className="py-5 px-6 text-center text-xl font-bold text-slate-900">RM {observerTier.rates.standard.resident?.myr}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-5 px-6 font-medium text-slate-700">Resident/Master (International)</td>
                    <td className="py-5 px-6 text-center text-xl font-bold text-slate-900">USD {observerTier.rates.earlyBird.resident?.usd}</td>
                    <td className="py-5 px-6 text-center text-xl font-bold text-slate-900">USD {observerTier.rates.standard.resident?.usd}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-slate-50">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfI9-izLjBON1F0kOE3JKeaGWAiRgQCryxp-7wwNEZoQLGQ3A/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg text-center transition-colors shadow-md hover:shadow-lg"
              >
                Register Now
              </a>
            </div>
          </div>
        )}

        {/* Lecture Only Table */}
        {lectureTier && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="bg-brand-900 p-6 text-center text-white">
              <h2 className="text-2xl font-bold">26 June 2026 — Lecture Only</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-900 text-white">
                    <th className="text-left py-4 px-6 font-bold uppercase tracking-wider">Category</th>
                    <th className="text-center py-4 px-6 font-bold uppercase tracking-wider">Fee (Early / Late)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <td className="py-5 px-6 font-medium text-slate-700">Lecture Only (Local)</td>
                    <td className="py-5 px-6 text-center text-xl font-bold text-slate-900">RM {lectureTier.rates.earlyBird.flat?.myr}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-5 px-6 font-medium text-slate-700">Lecture Only (International)</td>
                    <td className="py-5 px-6 text-center text-xl font-bold text-slate-900">USD {lectureTier.rates.earlyBird.flat?.usd}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-slate-50">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfI9-izLjBON1F0kOE3JKeaGWAiRgQCryxp-7wwNEZoQLGQ3A/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg text-center transition-colors shadow-md hover:shadow-lg"
              >
                Register Now
              </a>
            </div>
          </div>
        )}

      </div>

      {/* What's Included Section */}
      <div className="max-w-3xl mx-auto mt-16">
        <h3 className="text-2xl font-bold text-white/90 mb-6 text-center">What's Included</h3>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
          <ul className="space-y-4">
            <li className="flex items-start">
              <Check className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-white/90 text-lg">Full access to didactic lectures and/or cadaveric workshop</span>
            </li>
            <li className="flex items-start">
              <Check className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-white/90 text-lg">Workshop materials and certificate of completion</span>
            </li>
            <li className="flex items-start">
              <Check className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-white/90 text-lg">Meals and refreshments throughout the event</span>
            </li>
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto mt-16">
         <h3 className="text-2xl font-bold text-white/90 mb-6 text-center">Frequently Asked Questions</h3>
         <div className="space-y-4">
            {CONFIG.DISSECTOR_FULL && (
              <div className="bg-amber-50 p-6 rounded-xl shadow-sm border border-amber-200">
                 <h4 className="font-bold text-amber-900 mb-2 flex items-center">
                   <AlertCircle className="h-4 w-4 mr-2 text-amber-600" /> Dissector Slots Full
                 </h4>
                 <p className="text-amber-800">
                   All dissector positions (hands-on cadaveric workshop) have been filled. Observer registration remains open for those who wish to attend the lectures and observe the cadaveric sessions.
                 </p>
              </div>
            )}
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