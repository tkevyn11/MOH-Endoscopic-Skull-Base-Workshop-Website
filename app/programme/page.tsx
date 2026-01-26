"use client";

import { useState } from "react";
import { PROGRAMME } from "@/data/programme";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

export default function ProgrammePage() {
  const [activeDay, setActiveDay] = useState(PROGRAMME[0].day);

  const activeSchedule = PROGRAMME.find((p) => p.day === activeDay);

  return (
    <div className="py-12 lg:py-20 container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: 'var(--text)' }}>Programme</h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text2)' }}>
          A comprehensive 3-day curriculum covering didactic lectures and intensive hands-on cadaveric dissection.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {PROGRAMME.map((schedule) => (
          <button
            key={schedule.day}
            onClick={() => setActiveDay(schedule.day)}
            className={cn(
              "px-6 py-3 rounded-full text-sm font-bold transition-all",
              activeDay === schedule.day
                ? "bg-accent text-white shadow-lg scale-105"
                : "glass-card hover:bg-white/10"
            )}
            style={activeDay !== schedule.day ? { color: 'var(--text2)' } : {}}
          >
            <span className="block text-xs opacity-80 uppercase tracking-wider">{schedule.day}</span>
            <span className="block text-base">{schedule.date}</span>
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto glass-card rounded-2xl shadow-xl overflow-hidden min-h-[400px]">
        {activeSchedule && (
          <div style={{ borderColor: 'var(--border)' }}>
             <div className="p-6 border-b" style={{ 
               background: 'rgba(11, 107, 92, 0.15)',
               borderColor: 'var(--border)' 
             }}>
                <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>{activeSchedule.date}</h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>Day {PROGRAMME.findIndex(p => p.day === activeDay) + 1} Schedule</p>
             </div>
            {activeSchedule.sessions.map((session, index) => {
               if (session.type === 'header') {
                 return (
                   <div key={index} className="p-4 border-y mt-2 first:mt-0" style={{ 
                     background: 'rgba(11, 107, 92, 0.1)',
                     borderColor: 'var(--border)' 
                   }}>
                     <h3 className="text-sm font-bold uppercase tracking-widest text-center sm:text-left text-brand-400">{session.title}</h3>
                   </div>
                 );
               }
               return (
                <div key={index} className="p-6 hover:bg-white/5 transition-colors group">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Time Column */}
                    <div className="sm:w-40 flex-shrink-0">
                      {session.time && (
                        <div className="inline-flex items-center text-xs sm:text-sm font-semibold text-brand-400 px-2.5 py-1 rounded-md whitespace-nowrap" style={{ 
                          background: 'var(--surface)',
                          border: '1px solid var(--border)' 
                        }}>
                          <Clock className="h-3.5 w-3.5 mr-1.5" />
                          {session.time}
                        </div>
                      )}
                    </div>
                    {/* Content Column */}
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold mb-1 group-hover:text-brand-400 transition-colors leading-snug" style={{ color: 'var(--text)' }}>
                        {session.title}
                      </h4>
                      {session.speaker && (
                        <p className="text-sm mb-2 font-medium" style={{ color: 'var(--muted)' }}>
                          Speaker: <span style={{ color: 'var(--text2)' }}>{session.speaker}</span>
                        </p>
                      )}
                      
                      {/* Detailed Descriptions */}
                      {session.description && (
                         <div className="mt-3 space-y-2">
                           {session.description.map((desc, i) => (
                             <div key={i} className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                               {desc}
                             </div>
                           ))}
                         </div>
                      )}

                      <div className="flex items-center gap-2 mt-2">
                         <Badge type={session.type} />
                      </div>
                    </div>
                  </div>
                </div>
               );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function Badge({ type }: { type: string }) {
  const styles = {
    lecture: "bg-blue-100 text-blue-800",
    break: "bg-orange-100 text-orange-800",
    practical: "bg-purple-100 text-purple-800",
    ceremony: "bg-slate-100 text-slate-800",
    header: "hidden"
  };
  
  // @ts-ignore
  const className = styles[type];
  if (!className) return null;

  return (
    <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium uppercase tracking-wide", className)}>
      {type}
    </span>
  );
}