import Link from "@/lib/router";
import { CalendarDays, MapPin, Users, GraduationCap, ChevronRight } from "lucide-react";
import { EVENT_DETAILS } from "@/data/event";
import { FACULTY } from "@/data/faculty";
import { Button } from "@/components/ui/button";

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

function LogoPlaceholder({
  src,
  alt,
  className = "",
  imgClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div className={`h-20 glass-card rounded-lg shadow-sm flex items-center justify-center p-3 text-center hover:shadow-md transition-all ${className}`} style={{ 
      background: 'rgba(255, 255, 255, 0.95)',
      borderColor: 'var(--border)' 
    }}>
      <img src={src} alt={alt} className={`max-h-full w-auto object-contain mx-auto ${imgClassName}`} />
    </div>
  );
}

export default function Home() {
  const internationalFaculty = FACULTY.filter(f => f.isInternational);
  const localFaculty = FACULTY.filter(f => !f.isInternational);

  return (
    <div className="flex flex-col gap-12 lg:gap-24 pb-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 text-white overflow-hidden" style={{ background: 'var(--bg)' }}>
        {/* Background Image - Dynamic from Context */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero/hero-endoscope.png"
            alt="Endoscopic instruments background" 
            className="w-full h-full object-cover opacity-70 transition-all duration-500"
          />
          {/* Gradient Overlay for Text Readability and Seamless Blending */}
          <div className="absolute inset-0" style={{
            background: `
              linear-gradient(to bottom, var(--bg) 0%, rgba(11, 31, 42, 0) 25%),
              linear-gradient(to top, var(--bg) 0%, rgba(11, 31, 42, 0) 35%),
              linear-gradient(to right, rgba(11, 31, 42, 0.75) 0%, rgba(11, 31, 42, 0.45) 30%, rgba(11, 31, 42, 0.15) 60%, rgba(11, 31, 42, 0) 80%)
            `
          }} />

          {/* Subtle vignette for depth */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse at center, rgba(11, 31, 42, 0) 40%, rgba(11, 31, 42, 0.25) 75%, var(--bg) 100%)'
          }} />
        </div>
          
        <div className="container relative z-10 mx-auto px-4 max-w-6xl text-center lg:text-left">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center rounded-full bg-brand-800/80 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-brand-200 ring-1 ring-inset ring-brand-400/30">
              <CalendarDays className="mr-2 h-4 w-4" />
              {EVENT_DETAILS.dates.full}
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl drop-shadow-sm">
              {EVENT_DETAILS.title}
            </h1>
            <p className="mb-8 text-lg text-brand-100 sm:text-xl max-w-2xl drop-shadow-sm">
              Join leading experts for an intensive hands-on experience at the {EVENT_DETAILS.venue.name}, {EVENT_DETAILS.venue.university}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start lg:transform lg:translate-y-[20px] lg:translate-x-[120px] md:transform md:translate-y-[10px] md:translate-x-[60px]">
              <Button asChild size="lg" className="w-full sm:w-48 bg-white/[0.84] backdrop-blur-md text-brand-900 hover:bg-white/90 shadow-lg shadow-brand-900/20 border border-white/35 min-h-[44px] whitespace-nowrap" style={{ WebkitBackdropFilter: 'blur(6px)' }}>
                <a href={EVENT_DETAILS.registration.link} target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-48 border-white text-white hover:bg-white/10 backdrop-blur-sm min-h-[44px] whitespace-nowrap">
                <Link href="/programme">View Programme</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="container mx-auto px-4 max-w-6xl -mt-16 relative z-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Venue", value: "ASSC, HCTM UKM", icon: MapPin },
            { label: "Capacity", value: EVENT_DETAILS.registration.capacity, icon: Users },
            { label: "CPD", value: "Points Provided", icon: GraduationCap },
            { label: "Early Bird", value: "Ends 30 April", icon: CalendarDays },
          ].map((item, idx) => (
            <div key={idx} className="rounded-xl glass-card p-6 shadow-xl hover:shadow-2xl transition-shadow" style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
              <item.icon className="h-8 w-8 mb-4 text-brand-400" />
              <h3 className="text-sm font-medium uppercase tracking-wide" style={{ color: 'var(--muted)' }}>{item.label}</h3>
              <p className="mt-1 text-lg font-bold" style={{ color: 'var(--text)' }}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Highlights */}
      <section className="py-12 lg:py-16 border-y" style={{ 
        background: 'rgba(11, 31, 42, 0.4)',
        borderColor: 'var(--border)' 
      }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl mb-6" style={{ color: 'var(--text)' }}>
                Master Endoscopic Skull Base Surgery
              </h2>
              <div className="space-y-6">
                 <p className="text-base sm:text-lg" style={{ color: 'var(--text2)' }}>
                  This comprehensive workshop offers a unique opportunity to refine your skills through didactic lectures and hands-on cadaveric dissection.
                </p>
                <ul className="space-y-4">
                  {[
                    "Endoscopic Endonasal Approaches",
                    "Transorbital Approaches",
                    "Microscopic Dissection Techniques",
                    "Complication Management"
                  ].map((item, i) => (
                     <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-0.5" style={{ background: 'var(--accent)' }}>
                        <ChevronRight className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-medium" style={{ color: 'var(--text2)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                   <Link href="/programme" className="text-brand-400 font-semibold hover:text-brand-300 inline-flex items-center transition-colors">
                    See Full Schedule <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="relative h-[400px] rounded-xl overflow-hidden"
              style={{
                backgroundImage: "url('/hero/hero-skullbase.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                border: '1px solid var(--border)',
              }}
            >
            </div>
          </div>
        </div>
      </section>
      
      {/* Faculty Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl text-center">
           <h2 className="text-2xl font-bold sm:text-3xl mb-4" style={{ color: 'var(--text)' }}>Distinguished Faculty</h2>
           <p className="text-base sm:text-lg mb-12 max-w-2xl mx-auto" style={{ color: 'var(--text2)' }}>
             Learn from internationally renowned experts from Japan, Korea, Hong Kong, and Malaysia.
           </p>
           
           {/* International Row */}
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-12 justify-items-center">
              {internationalFaculty.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center">
                  <div className="relative mb-3 h-16 w-16 sm:h-20 sm:w-20">
                    <div className="h-full w-full rounded-full overflow-hidden border-2 shadow-sm" style={{ 
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
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                    </div>
                    <img
                      src={getFlagAsset(member.country)}
                      alt={`${member.country} flag`}
                      className="absolute -bottom-1 -right-1 z-20 h-6 w-9 object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-sm text-center leading-tight mb-1" style={{ color: 'var(--text)' }}>{member.name}</h4>
                  <span className="text-xs" style={{ color: 'var(--muted)' }}>{member.country}</span>
                </div>
              ))}
           </div>

           {/* Local Row */}
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-10 justify-items-center">
              {localFaculty.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center">
                  <div className="relative mb-3 h-16 w-16 sm:h-20 sm:w-20">
                    <div className="h-full w-full rounded-full overflow-hidden border-2 shadow-sm" style={{ 
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
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                    </div>
                    <img
                      src={getFlagAsset(member.country)}
                      alt={`${member.country} flag`}
                      className="absolute -bottom-1 -right-1 z-20 h-5 w-8 object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-sm text-center leading-tight mb-1" style={{ color: 'var(--text)' }}>{member.name}</h4>
                  <span className="text-xs" style={{ color: 'var(--muted)' }}>{member.country}</span>
                </div>
              ))}
           </div>
           
           <Button asChild variant="outline" className="mt-8">
             <Link href="/faculty">View Faculty Details</Link>
           </Button>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-16 border-t" style={{ 
        background: 'rgba(11, 31, 42, 0.3)',
        borderColor: 'var(--border)' 
      }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Organisers */}
            <div className="text-center lg:text-left">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-8" style={{ color: 'var(--muted)' }}>Jointly Organised By</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 justify-items-center lg:justify-items-start gap-4 sm:gap-6 transition-all duration-500">
                <LogoPlaceholder src="/logos/moh.png" alt="MOH Malaysia logo" className="w-20" imgClassName="scale-110" />
                <LogoPlaceholder src="/logos/neurosurgery-hkl.jpeg" alt="Neurosurgery HKL logo" className="w-20" />
                <LogoPlaceholder src="/logos/postgrad-hkl.jpg" alt="Postgrad Medical Society HKL logo" className="w-20" />
                <LogoPlaceholder src="/logos/ukm.png" alt="UKM logo" className="w-20" imgClassName="scale-125" />
                <LogoPlaceholder src="/logos/hctm.png" alt="HCTM logo" className="w-32 col-span-2 sm:col-span-1" />
              </div>
            </div>

            {/* Endorsers */}
            <div className="text-center lg:text-right">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-8" style={{ color: 'var(--muted)' }}>Endorsed By</h3>
              <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4 sm:gap-6 transition-all duration-500">
                 <LogoPlaceholder src="/logos/acns.png" alt="ACNS logo" className="w-20" imgClassName="scale-110" />
                 <LogoPlaceholder src="/logos/ismins.png" alt="ISMINS logo" className="w-20" />
                 <LogoPlaceholder src="/logos/apsen.jpeg" alt="APSEN logo" className="w-20" />
                 <LogoPlaceholder src="/logos/college-surgeons-amm.png" alt="College of Surgeons AMM logo" className="w-20" imgClassName="scale-110" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}