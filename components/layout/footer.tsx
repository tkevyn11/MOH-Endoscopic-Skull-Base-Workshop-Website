import Link from "@/lib/router";

export function Footer() {
  return (
    <footer className="border-t pt-16 pb-32 md:pb-16" style={{ 
      background: 'rgba(11, 31, 42, 0.6)',
      borderColor: 'var(--border)' 
    }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>MOH Skull Base</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text2)' }}>
              Comprehensive Endoscopic Skull Base Cadaveric Workshop 2026.
              Advanced training for neurosurgical excellence.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text)' }}>
              Links
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text2)' }}>
              <li><Link href="/programme" className="hover:text-brand-400 transition-colors">Programme</Link></li>
              <li><Link href="/faculty" className="hover:text-brand-400 transition-colors">Faculty</Link></li>
              <li><Link href="/fees" className="hover:text-brand-400 transition-colors">Registration Fees</Link></li>
              <li><Link href="/contact" className="hover:text-brand-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text)' }}>
              Venue
            </h4>
            <address className="text-sm not-italic leading-relaxed" style={{ color: 'var(--text2)' }}>
              Advanced Surgical Skills Centre (ASSC)<br />
              Hospital Canselor Tuanku Muhriz<br />
              Kuala Lumpur, Malaysia
            </address>
          </div>

          <div>
             <h4 className="mb-4 text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text)' }}>
              Legal
            </h4>
            <p className="text-sm" style={{ color: 'var(--text2)' }}>
              Refund Policy: Strictly non-refundable.
            </p>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 text-center text-xs" style={{ 
          borderColor: 'var(--border)',
          color: 'var(--muted)' 
        }}>
          © 2026 MOH Skull Base Workshop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}