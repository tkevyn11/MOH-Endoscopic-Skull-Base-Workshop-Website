import { FACULTY } from "@/data/faculty";
import { cn } from "@/lib/utils";

function getFlagAsset(country: string) {
  switch (country) {
    case "Japan":
      return "/flags/jp.svg";
    case "Korea":
      return "/flags/kr.svg";
    case "Hong Kong":
      return "/flags/hk.svg";
    case "Malaysia":
      return "/flags/my.svg";
    default:
      return "/flags/jp.svg";
  }
}

export default function FacultyPage() {
  const international = FACULTY.filter(f => f.isInternational);
  const local = FACULTY.filter(f => !f.isInternational);

  return (
    <div className="py-12 lg:py-20 container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-3xl font-extrabold sm:text-4xl mb-4" style={{ color: 'var(--text)' }}>Faculty</h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text2)' }}>
          Distinguished speakers and demonstrators leading the 2026 workshop.
        </p>
      </div>

      <div className="space-y-20">
        <FacultySection title="International Faculty" members={international} />
        <FacultySection title="Local Faculty" members={local} />
      </div>
    </div>
  );
}

function FacultySection({ title, members }: { title: string; members: typeof FACULTY }) {
  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xl font-bold sm:text-2xl text-brand-400">{title}</h2>
        <div className="h-px flex-grow" style={{ background: 'var(--border)' }}></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {members.map((member, index) => (
          <div key={index} className="glass-card p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center group">
            <div className="relative mb-4 h-24 w-24 sm:h-28 sm:w-28">
              <div className="h-full w-full rounded-full overflow-hidden border-4 transition-colors" style={{ 
                background: 'var(--surface)',
                borderColor: 'var(--border)' 
              }}>
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={`Portrait of ${member.name}`}
                    className="h-full w-full object-cover"
                    style={{
                      objectPosition: member.photoPosition ?? "center",
                      transform: member.photoScale ? `scale(${member.photoScale})` : undefined,
                    }}
                  />
                ) : (
                  <svg className="h-full w-full" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--muted)' }}>
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 0 018 0z" />
                  </svg>
                )}
              </div>
              <img
                src={getFlagAsset(member.country)}
                alt={`${member.country} flag`}
                className={cn("absolute -bottom-1 -right-1 z-20 h-7 w-10 object-contain")}
              />
            </div>
            <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>{member.name}</h3>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" style={{ 
              background: 'var(--surface)',
              color: 'var(--text2)',
              border: '1px solid var(--border)' 
            }}>
              {member.country}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}