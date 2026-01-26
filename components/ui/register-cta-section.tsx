import { EVENT_DETAILS } from "@/data/event";
import { Button } from "./button";

export function RegisterCTASection() {
  return (
    <section className="relative py-20 text-center overflow-hidden" style={{ background: 'rgba(11, 31, 42, 0.6)' }}>
      {/* Background with Neon Skull / Abstract */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/hero/hero-endoscope.png"
          alt="" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/80 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl" style={{ color: 'var(--text)' }}>
          Ready to join the workshop?
        </h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto text-brand-400">
          Secure your seat for the hands-on cadaveric dissection sessions or join as an observer to learn from world-renowned experts.
        </p>
        <Button
          asChild
          size="lg"
          variant="primary"
          className="shadow-xl"
        >
          <a href={EVENT_DETAILS.registration.link} target="_blank" rel="noopener noreferrer">
            Register Now
          </a>
        </Button>
      </div>
    </section>
  );
}