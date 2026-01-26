import { CONTACTS } from "@/data/contacts";
import { formatWhatsAppLink } from "@/lib/utils";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="py-12 lg:py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-white/90 mb-4">Contact Us</h1>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          Reach out to the secretariat for registration enquiries or logistical support.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        
        {/* Contact Cards */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white/90 mb-4">Secretariat</h2>
          {CONTACTS.map((contact, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">{contact.name}</h3>
              <p className="text-slate-500 mb-6">{contact.role}</p>
              
              <div className="flex gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  <a href={`tel:${contact.phone}`}>
                    <Phone className="h-4 w-4 mr-2" /> Call
                  </a>
                </Button>
                <Button asChild variant="secondary" size="sm" className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                  <a href={formatWhatsAppLink(contact.phone)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Venue Info */}
        <div>
          <h2 className="text-2xl font-bold text-white/90 mb-6">Workshop Venue</h2>
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 h-full">
            <div className="flex items-start mb-6">
              <MapPin className="h-6 w-6 text-brand-500 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Advanced Surgical Skills Centre (ASSC)</h3>
                <p className="text-slate-600 mt-1">
                  Hospital Canselor Tuanku Muhriz (HCTM)<br />
                  Universiti Kebangsaan Malaysia (UKM)<br />
                  Jalan Yaacob Latif, Bandar Tun Razak,<br />
                  56000 Cheras, Kuala Lumpur.
                </p>
              </div>
            </div>
            
            {/* Embedded Map */}
            <div className="w-full h-64 bg-slate-200 rounded-lg overflow-hidden relative shadow-inner">
               <iframe 
                 width="100%" 
                 height="100%" 
                 frameBorder="0" 
                 scrolling="no" 
                 marginHeight={0} 
                 marginWidth={0} 
                 src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Advanced%20Surgical%20Skills%20Centre%20(ASSC)%20UKM&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                 title="ASSC UKM Map"
                 className="absolute inset-0"
               >
               </iframe>
            </div>
            <div className="mt-4 text-center">
               <a 
                 href="https://www.google.com/maps/place/Advanced+Surgical+Skills+Centre+(ASSC)/@3.0979864,101.7186367,15.5z/data=!4m6!3m5!1s0x31cc35e9a3212f6d:0xb229c60f5041f9a8!8m2!3d3.0983914!4d101.7273847!16s%2Fg%2F11c61dvfd1?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D" 
                 target="_blank" 
                 rel="noreferrer"
                 className="text-brand-600 font-semibold hover:underline text-sm inline-flex items-center"
                >
                 View on Google Maps
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}