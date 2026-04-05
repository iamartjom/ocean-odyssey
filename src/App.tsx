import { motion, AnimatePresence } from "motion/react";
import { Facebook, Instagram, Twitter, ArrowLeft, ArrowRight, ArrowDown, MoreHorizontal, X, Anchor, Camera, Microscope, Waves } from "lucide-react";
import { useState, useEffect } from "react";

const Logo = ({ className = "", onClick }: { className?: string; onClick?: () => void }) => (
  <div className={`flex items-center gap-2 cursor-pointer ${className}`} onClick={onClick}>
    <div className="relative w-10 h-10 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M20 50 Q35 35 50 50 T80 50" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M20 60 Q35 45 50 60 T80 60" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M20 70 Q35 55 50 70 T80 70" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
    <div className="flex flex-col leading-none font-display font-bold tracking-tighter">
      <span className="text-xl">CEAN</span>
      <span className="text-xl">DDESEY</span>
    </div>
  </div>
);

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <div className="relative w-24 h-24">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
              <motion.circle 
                cx="50" cy="50" r="45" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.2 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path 
                d="M20 50 Q35 35 50 50 T80 50" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
              <motion.path 
                d="M20 60 Q35 45 50 60 T80 60" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
              <motion.path 
                d="M20 70 Q35 55 50 70 T80 70" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
            </svg>
          </div>
          <div className="flex flex-col items-center font-display font-bold tracking-[0.5em] text-white">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xs"
            >
              OCEAN ODYSSEY
            </motion.span>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-[1px] bg-white/20 mt-4"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const CustomO = ({ className = "" }: { className?: string }) => (
  <div className={`relative inline-flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 200 200" className="w-full h-full fill-white">
      <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="12" />
      <g className="translate-y-10">
        <path d="M30 100 Q65 70 100 100 T170 100" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M30 115 Q65 85 100 115 T170 115" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M30 130 Q65 100 100 130 T170 130" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M30 145 Q65 115 100 145 T170 145" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M30 160 Q65 130 100 160 T170 160" fill="none" stroke="currentColor" strokeWidth="4" />
      </g>
    </svg>
  </div>
);

const activities = [
  {
    id: 1,
    title: "Tiefsee-Expedition",
    description: "Tauchen Sie in einem modernen Forschungs-U-Boot bis zu 2.000 Meter tief und entdecken Sie biolumineszente Wesen.",
    price: "450 €",
    duration: "4 Stunden",
    icon: <Waves className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Unterwasser-Fotografie",
    description: "Lernen Sie von Profis, wie man die majestätische Stille und Farbenpracht der Korallenriffe perfekt einfängt.",
    price: "180 €",
    duration: "3 Stunden",
    icon: <Camera className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Meeresbiologie-Workshop",
    description: "Begleiten Sie unsere Wissenschaftler bei der Erforschung bedrohter Arten und helfen Sie beim Korallenschutz.",
    price: "120 €",
    duration: "Ganztägig",
    icon: <Microscope className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Wal-Beobachtung",
    description: "Eine exklusive Tour zu den Wanderrouten der Buckelwale. Erleben Sie die Giganten der Meere aus nächster Nähe.",
    price: "290 €",
    duration: "5 Stunden",
    icon: <Anchor className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1518144591331-17a5dd71c477?auto=format&fit=crop&q=80&w=800"
  }
];

const MitmachenPage = ({ onBack }: { onBack: () => void }) => {
  return (
    <motion.div 
      key="mitmachen-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md overflow-y-auto pt-32 pb-20 px-8 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-5xl lg:text-7xl font-display font-bold tracking-tighter mb-4">MITMACHEN</h2>
            <p className="text-gray-400 max-w-xl text-lg font-light">
              Werden Sie Teil unserer Mission. Wählen Sie eine Aktivität und tauchen Sie ein in die faszinierende Welt von Ocean Odyssey.
            </p>
          </motion.div>
          <button 
            onClick={onBack}
            className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/10 group"
          >
            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.3 }}
              className="group relative bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/10 transition-all duration-500"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-white/10 text-white">
                    {activity.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{activity.title}</h3>
                    <span className="text-xs text-gray-400 tracking-widest uppercase">{activity.duration}</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-8 font-light leading-relaxed">
                  {activity.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest">Preis ab</span>
                    <span className="text-2xl font-bold">{activity.price}</span>
                  </div>
                  <button className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-all active:scale-95">
                    JETZT BUCHEN
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-r from-blue-900/20 to-transparent border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-2">Haben Sie Fragen?</h3>
            <p className="text-gray-400">Unser Team berät Sie gerne bei der Planung Ihres individuellen Abenteuers.</p>
          </div>
          <button className="px-10 py-5 rounded-full border border-white/20 hover:bg-white/10 transition-all font-medium tracking-widest text-sm">
            KONTAKT AUFNEHMEN
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ScienceNetworkPage = ({ onBack }: { onBack: () => void }) => {
  const stats = [
    { label: "Partner-Institute", value: "42" },
    { label: "Aktive Expeditionen", value: "12" },
    { label: "Publizierte Studien", value: "150+" },
    { label: "Überwachte Riffe", value: "850" }
  ];

  const projects = [
    {
      title: "Korallen-Resilienz 2026",
      institute: "Institut für Meereskunde, Kiel",
      status: "Laufend",
      description: "Untersuchung der genetischen Anpassung von Korallen an steigende Wassertemperaturen im Indischen Ozean."
    },
    {
      title: "Deep-Scan Kartierung",
      institute: "Oceanic Research Center, Oslo",
      status: "Abgeschlossen",
      description: "Hochauflösende 3D-Kartierung des Marianengrabens zur Identifizierung neuer hydrothermaler Quellen."
    },
    {
      title: "Plastik-Tracker Projekt",
      institute: "Global Marine Initiative, San Diego",
      status: "Planung",
      description: "Einsatz von KI-gestützten Drohnen zur Echtzeit-Verfolgung von Mikroplastik-Strömungen im Pazifik."
    }
  ];

  return (
    <motion.div 
      key="science-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md overflow-y-auto pt-32 pb-20 px-8 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-5xl lg:text-7xl font-display font-bold tracking-tighter mb-4 uppercase">Wissenschaftsnetzwerk</h2>
            <p className="text-gray-400 max-w-xl text-lg font-light">
              Zusammenarbeit ist der Schlüssel zum Schutz unserer Ozeane. Wir verbinden weltweit führende Institute und Forscher.
            </p>
          </motion.div>
          <button 
            onClick={onBack}
            className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/10 group"
          >
            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index + 0.3 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center"
            >
              <span className="text-4xl lg:text-5xl font-display font-bold mb-2">{stat.value}</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Microscope className="text-blue-400" /> Aktuelle Forschungsprojekte
            </h3>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index + 0.5 }}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h4>
                    <span className="text-sm text-gray-500">{project.institute}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                    project.status === "Laufend" ? "bg-blue-500/20 text-blue-400" : 
                    project.status === "Abgeschlossen" ? "bg-green-500/20 text-green-400" : 
                    "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 font-light leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10">
              <h3 className="text-xl font-bold mb-4">Wissenschaftlicher Beirat</h3>
              <p className="text-sm text-gray-400 mb-6 font-light">
                Unser Beirat besteht aus international anerkannten Experten, die unsere strategische Ausrichtung und wissenschaftliche Integrität sicherstellen.
              </p>
              <button className="w-full py-4 rounded-full bg-white text-black font-bold text-xs tracking-widest hover:bg-gray-200 transition-all">
                BEIRAT ANSEHEN
              </button>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-4">Open Data Initiative</h3>
              <p className="text-sm text-gray-400 mb-6 font-light">
                Wir glauben an Transparenz. Greifen Sie auf unsere Rohdaten und Analyse-Tools für Ihre eigene Forschung zu.
              </p>
              <div className="flex flex-col gap-3">
                <button className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all text-xs font-medium">
                  API Dokumentation <ArrowRight size={14} />
                </button>
                <button className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all text-xs font-medium">
                  Datensätze (CSV/JSON) <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const EntdeckungenPage = ({ onBack }: { onBack: () => void }) => {
  const discoveries = [
    {
      id: 1,
      title: "Die Saphir-Grotte",
      location: "Azoren, Atlantik",
      depth: "45m",
      description: "Eine erst kürzlich entdeckte Unterwasserhöhle, deren Wände mit seltenen, biolumineszenten Algen bewachsen sind, die in einem tiefen Saphirblau leuchten.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Das Wrack der 'Aethelgard'",
      location: "Nordsee",
      depth: "120m",
      description: "Ein legendäres Handelsschiff aus dem 18. Jahrhundert, das fast perfekt erhalten am Meeresgrund liegt und nun ein künstliches Riff für tausende Fische bildet.",
      image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Kristall-Korallengarten",
      location: "Great Barrier Reef",
      depth: "12m",
      description: "Ein versteckter Abschnitt des Riffs mit extrem klarem Wasser und einer Dichte an seltenen Hartkorallen, die wie geschliffene Kristalle wirken.",
      image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <motion.div 
      key="discoveries-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md overflow-y-auto pt-32 pb-20 px-8 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-5xl lg:text-7xl font-display font-bold tracking-tighter mb-4 uppercase">Entdeckungen</h2>
            <p className="text-gray-400 max-w-xl text-lg font-light">
              Jede Expedition bringt neue Geheimnisse ans Licht. Hier teilen wir unsere bedeutendsten Funde aus den Tiefen der Weltmeere.
            </p>
          </motion.div>
          <button 
            onClick={onBack}
            className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/10 group"
          >
            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        <div className="space-y-24">
          {discoveries.map((discovery, index) => (
            <motion.div
              key={discovery.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.3 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2 aspect-video rounded-[3rem] overflow-hidden border border-white/10 group">
                <img 
                  src={discovery.image} 
                  alt={discovery.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex gap-4 items-center">
                  <span className="px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase">
                    {discovery.location}
                  </span>
                  <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">
                    Tiefe: {discovery.depth}
                  </span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-display font-bold tracking-tighter">{discovery.title}</h3>
                <p className="text-gray-400 text-lg font-light leading-relaxed">
                  {discovery.description}
                </p>
                <button className="flex items-center gap-4 text-sm font-bold tracking-widest group">
                  EXPEDITIONS-LOG LESEN <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const NewsEventsPage = ({ onBack }: { onBack: () => void }) => {
  const events = [
    {
      date: "15. MAI 2026",
      title: "Gala der Ozeane",
      type: "Event",
      description: "Ein exklusiver Abend in Hamburg zur Unterstützung unserer Korallen-Schutzprojekte mit Gastrednern aus der Wissenschaft."
    },
    {
      date: "02. JUNI 2026",
      title: "Launch: Deep-Explorer 3",
      type: "News",
      description: "Wir stellen unser neuestes autonomes Forschungs-U-Boot vor, das in der Lage ist, bis zu 6.000 Meter tief zu tauchen."
    },
    {
      date: "22. JULI 2026",
      title: "Expedition: Arktisches Eis",
      type: "Expedition",
      description: "Begleiten Sie unser Team bei der Untersuchung der marinen Biodiversität unter dem schmelzenden Packeis der Arktis."
    }
  ];

  return (
    <motion.div 
      key="news-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md overflow-y-auto pt-32 pb-20 px-8 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-5xl lg:text-7xl font-display font-bold tracking-tighter mb-4 uppercase">News & Events</h2>
            <p className="text-gray-400 max-w-xl text-lg font-light">
              Bleiben Sie auf dem Laufenden über unsere neuesten Entdeckungen, technologischen Durchbrüche und exklusiven Veranstaltungen.
            </p>
          </motion.div>
          <button 
            onClick={onBack}
            className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/10 group"
          >
            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.3 }}
              className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col lg:flex-row gap-8 items-start lg:items-center hover:bg-white/10 transition-all group"
            >
              <div className="flex flex-col min-w-[150px]">
                <span className="text-blue-400 font-bold tracking-widest text-sm mb-1">{event.date}</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">{event.type}</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{event.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed max-w-2xl">
                  {event.description}
                </p>
              </div>
              <button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white text-white hover:text-black transition-all text-xs font-bold tracking-widest">
                MEHR ERFAHREN
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-12 rounded-[3rem] bg-blue-600/10 border border-white/10 flex flex-col justify-between aspect-video lg:aspect-auto">
            <div>
              <h3 className="text-3xl font-bold mb-4">Newsletter abonnieren</h3>
              <p className="text-gray-400 font-light">Erhalten Sie monatliche Einblicke in unsere Arbeit und exklusive Vorab-Infos zu Expeditionen.</p>
            </div>
            <div className="flex gap-4 mt-8">
              <input 
                type="email" 
                placeholder="Ihre E-Mail Adresse" 
                className="flex-grow bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="px-8 py-4 rounded-full bg-white text-black font-bold text-xs tracking-widest">
                SENDEN
              </button>
            </div>
          </div>
          <div className="p-12 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col justify-center items-center text-center">
            <h3 className="text-3xl font-bold mb-4">Folgen Sie uns</h3>
            <p className="text-gray-400 font-light mb-8">Tägliche Updates und atemberaubende Aufnahmen direkt von unseren Expeditionen.</p>
            <div className="flex gap-8">
              <Instagram size={32} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
              <Facebook size={32} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
              <Twitter size={32} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MenuOverlay = ({ 
  isOpen, 
  onClose, 
  onNavigate 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onNavigate: (view: "home" | "mitmachen" | "science" | "discoveries" | "news") => void 
}) => {
  const menuItems = [
    { id: "home", label: "ÜBER UNS" },
    { id: "mitmachen", label: "MITMACHEN" },
    { id: "science", label: "WISSENSCHAFTSNETZWERK" },
    { id: "discoveries", label: "ENTDECKUNGEN" },
    { id: "news", label: "NEWS & EVENTS" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-8 text-center"
        >
          <div className="absolute top-8 right-8 flex items-center gap-4">
            <span className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase hidden sm:block">Schließen</span>
            <button 
              onClick={onClose}
              className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/10 group"
            >
              <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          <div className="flex flex-col items-center gap-6 lg:gap-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
                onClick={() => {
                  onNavigate(item.id as any);
                  onClose();
                }}
                className="group relative"
              >
                <span className="text-4xl lg:text-7xl font-display font-bold tracking-tighter hover:text-blue-400 transition-all duration-500 uppercase block">
                  {item.label}
                </span>
                <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-[10px] font-bold text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  0{index + 1}
                </span>
              </motion.button>
            ))}
          </div>

          <div className="absolute bottom-12 flex flex-col items-center gap-4">
            <div className="w-12 h-[1px] bg-white/20 mb-4" />
            <div className="flex gap-8">
              <Instagram size={20} className="text-gray-500 hover:text-white transition-colors cursor-pointer" />
              <Facebook size={20} className="text-gray-500 hover:text-white transition-colors cursor-pointer" />
              <Twitter size={20} className="text-gray-500 hover:text-white transition-colors cursor-pointer" />
            </div>
            <p className="text-[8px] tracking-[0.5em] text-gray-600 uppercase mt-4">Ocean Odyssey © 2026</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState<"home" | "mitmachen" | "science" | "discoveries" | "news">("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-y-auto overflow-x-hidden relative scroll-smooth">
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      <MenuOverlay 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onNavigate={setCurrentView} 
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto">
          <Logo onClick={() => setCurrentView("home")} />
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-[10px] font-medium tracking-[0.2em] text-gray-400 pointer-events-auto">
          <button onClick={() => setCurrentView("home")} className={`hover:text-white transition-colors ${currentView === "home" ? "text-white" : ""}`}>ÜBER UNS</button>
          <button onClick={() => setCurrentView("mitmachen")} className={`hover:text-white transition-colors ${currentView === "mitmachen" ? "text-white" : ""}`}>MITMACHEN</button>
          <button onClick={() => setCurrentView("science")} className={`hover:text-white transition-colors ${currentView === "science" ? "text-white" : ""}`}>WISSENSCHAFTSNETZWERK</button>
          <button onClick={() => setCurrentView("discoveries")} className={`hover:text-white transition-colors ${currentView === "discoveries" ? "text-white" : ""}`}>ENTDECKUNGEN</button>
          <button onClick={() => setCurrentView("news")} className={`hover:text-white transition-colors ${currentView === "news" ? "text-white" : ""}`}>NEWS & EVENTS</button>
        </div>

        <div className="flex items-center gap-4 pointer-events-auto">
          <button className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-medium tracking-widest hover:bg-white/20 transition-all">
            KONTAKTIEREN SIE UNS •
          </button>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-[10px] font-medium tracking-widest flex items-center gap-2 hover:bg-white/30 transition-all"
          >
            MENÜ <MoreHorizontal size={14} />
          </button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {currentView === "mitmachen" && (
          <MitmachenPage onBack={() => setCurrentView("home")} />
        )}
        {currentView === "science" && (
          <ScienceNetworkPage onBack={() => setCurrentView("home")} />
        )}
        {currentView === "discoveries" && (
          <EntdeckungenPage onBack={() => setCurrentView("home")} />
        )}
        {currentView === "news" && (
          <NewsEventsPage onBack={() => setCurrentView("home")} />
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-end justify-start pt-48 px-12 lg:px-24">
        {/* Background Video (Hero Only) */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-60"
          >
            <source src="https://res.cloudinary.com/dlarfzczb/video/upload/v1775330465/Animate_image_without_202604042120_bbtoyj.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </div>

        <main className={`relative z-10 w-full h-full flex flex-col items-end justify-start transition-opacity duration-500 ${currentView !== "home" ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <div className="relative w-full max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-end"
            >
              <div className="flex items-center leading-none">
                <CustomO className="w-[12vw] h-[12vw] max-w-[160px] max-h-[160px] mr-4" />
                <h1 className="text-[10vw] lg:text-[7rem] font-display font-bold tracking-tighter leading-none">
                  CEAN
                </h1>
              </div>
              
              <div className="flex flex-col items-end -mt-3 lg:-mt-6">
                <h2 className="text-[4vw] lg:text-[3rem] font-display font-bold tracking-tighter leading-none">
                  ODYSSEY
                </h2>
                <p className="mt-4 max-w-xs text-right text-[10px] lg:text-sm text-gray-300 font-light leading-relaxed opacity-80">
                  Wir lassen Ihre Träume von <br />
                  Unterwasserabenteuern <br />
                  Wirklichkeit werden.
                </p>
              </div>
            </motion.div>
          </div>

          <MissionSection currentView={currentView} />
          <LiveStatusBar currentView={currentView} />
          <BottomLeftCard currentView={currentView} />
          <BottomRightSocials currentView={currentView} />
        </main>
      </section>

      {currentView === "home" && <OceanDetailsSection />}
      {currentView === "home" && <ScubaDivingSection />}
    </div>
  );
}

const MissionSection = ({ currentView }: { currentView: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -50 }}
    animate={currentView === "home" ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
    transition={{ duration: 1, delay: 0.7 }}
    className="absolute left-12 lg:left-24 top-1/2 -translate-y-1/2 z-20 hidden md:block"
  >
    <div className="flex items-start gap-6">
      <div className="w-[1px] h-48 bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent" />
      <div className="space-y-6 max-w-sm">
        <div className="space-y-2 text-left">
          <span className="text-[10px] font-bold tracking-[0.4em] text-blue-400 uppercase">Pioniergeist</span>
          <h3 className="text-3xl lg:text-4xl font-display font-bold leading-tight tracking-tighter">
            Forschung ohne <br /> Kompromisse.
          </h3>
        </div>
        <p className="text-sm text-gray-400 font-light leading-relaxed text-left">
          Ocean Odyssey steht für die Verbindung von High-End-Expeditionen und ernsthafter Meeresforschung. Wir öffnen die Tore zur Tiefsee für diejenigen, die mehr als nur eine Reise suchen – wir suchen Erkenntnis.
        </p>
        <div className="flex gap-8 pt-4">
          <div className="flex flex-col items-start">
            <span className="text-2xl font-display font-bold">11.000m</span>
            <span className="text-[8px] text-gray-500 uppercase tracking-widest">Max. Tiefe</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-2xl font-display font-bold">100%</span>
            <span className="text-[8px] text-gray-500 uppercase tracking-widest">Nachhaltig</span>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const LiveStatusBar = ({ currentView }: { currentView: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={currentView === "home" ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ duration: 1, delay: 0.9 }}
    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:block"
  >
    <div className="px-8 py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/5 flex items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase">Systeme: Online</span>
      </div>
      <div className="w-[1px] h-4 bg-white/10" />
      <div className="flex items-center gap-4">
         <span className="text-[9px] font-bold tracking-widest text-gray-500 uppercase">Aktuelle Position:</span>
         <span className="text-[9px] font-mono text-blue-400 tracking-wider">18.2482° N, 64.4412° W</span>
      </div>
      <div className="w-[1px] h-4 bg-white/10" />
      <div className="flex items-center gap-4">
         <span className="text-[9px] font-bold tracking-widest text-gray-500 uppercase">Wassertemperatur:</span>
         <span className="text-[9px] font-mono text-blue-400 tracking-wider">4.2°C (1200m)</span>
      </div>
    </div>
  </motion.div>
);

const BottomLeftCard = ({ currentView }: { currentView: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -50 }}
    animate={currentView === "home" ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="absolute bottom-8 left-8 w-full max-w-sm z-20"
  >
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 flex gap-4 items-center">
      <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
        <img 
          src="https://images.unsplash.com/photo-1518144591331-17a5dd71c477?auto=format&fit=crop&q=80&w=400" 
          alt="Whale" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-col gap-1 text-left">
        <span className="text-[10px] font-bold text-gray-500">01.</span>
        <h3 className="text-sm font-bold">Experten-Guides</h3>
        <p className="text-[10px] text-gray-400 leading-tight line-clamp-3">
          Unser erfahrenes Team aus Meeresbiologen und zertifizierten Tauchern garantiert eine fesselnde und informative Reise unter die Wellen.
        </p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-white" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>
          <div className="flex gap-2">
            <button className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <ArrowLeft size={12} />
            </button>
            <button className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const BottomRightSocials = ({ currentView }: { currentView: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: 50 }}
    animate={currentView === "home" ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="absolute bottom-8 right-8 z-20"
  >
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center gap-6">
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Facebook size={16} />
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Instagram size={16} />
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Twitter size={16} />
      </a>
      <div className="w-1 h-1 rounded-full bg-gray-600" />
    </div>
  </motion.div>
);

const OceanDetailsSection = () => {
  return (
    <section className="relative min-h-[140vh] lg:min-h-screen flex flex-col items-center justify-center py-20 px-8 lg:px-24 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 scale-110">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dlarfzczb/video/upload/v1775417600/animate_image_without_202604042316_nyo6jy.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent h-[40vh]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent h-[40vh] top-auto" />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-24"
        >
            <span className="text-[10px] font-bold tracking-[0.6em] text-blue-400 uppercase mb-8 block opacity-80">TEAM</span>
            <h2 className="text-[14vw] lg:text-[9rem] font-display font-bold tracking-tighter leading-[0.85] mb-8">
                Blue <br className="lg:hidden" /> ocean.
            </h2>
            <div className="flex flex-col items-center gap-2">
                <span className="text-2xl lg:text-4xl font-display font-bold tracking-[0.2em] text-white/90">HAKIM</span>
                <span className="text-[10px] tracking-[0.4em] text-white/30 uppercase mt-2">All rights reserved</span>
            </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="mb-16 lg:mb-32"
        >
            <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group cursor-pointer hover:bg-white/10 transition-colors">
                <ArrowDown size={20} className="text-white/60 group-hover:text-blue-400 transition-colors" />
            </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 w-full">
            {[
                { num: "01", title: "250 Nachrichten wöchentlich", desc: "Detaillierte Berichte über den Fortschritt und neue Entdeckungen." },
                { num: "02", title: "Einhaltung aller Aufgaben", desc: "Absolute Transparenz bei der Durchführung unserer Missionen." },
                { num: "03", title: "Nichts Persönliches", desc: "Fokus auf wissenschaftliche Exzellenz und den Schutz der Meere." }
            ].map((card, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="relative group p-10 lg:p-14 rounded-[3rem] bg-white/5 backdrop-blur-3xl border border-white/10 hover:bg-white/[0.08] transition-all duration-700 overflow-hidden text-left"
                >
                    <div className="flex flex-col relative z-10">
                        <span className="text-4xl lg:text-5xl font-display font-bold mb-8 text-white/20 group-hover:text-blue-500/50 transition-colors duration-700">
                           {card.num}
                        </span>
                        <h3 className="text-xl lg:text-2xl font-bold mb-4 tracking-tight leading-tight">
                            {card.title}
                        </h3>
                        <p className="text-sm lg:text-base text-gray-400 font-light leading-relaxed">
                            {card.desc}
                        </p>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute right-0 bottom-0 w-32 h-32 bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/20 transition-all duration-700" />
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

const ScubaDivingSection = () => {
  return (
    <section className="relative min-h-[140vh] lg:min-h-screen flex items-center justify-between overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/scuba-bg.png" 
          alt="Scuba diving background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent h-[40vh]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent h-[40vh] top-auto" />
      </div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between px-12 lg:px-24">
        {/* Left Side: Large Text */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-start"
        >
          <div className="flex flex-col leading-[0.8] mb-8">
            <h2 className="text-[15vw] lg:text-[12rem] font-display font-medium tracking-tighter opacity-100 mb-0">
              scuba
            </h2>
            <h2 className="text-[15vw] lg:text-[12rem] font-display font-bold tracking-tighter text-white opacity-100">
              diving
            </h2>
          </div>
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 0.6 }}
             transition={{ delay: 0.5, duration: 1 }}
             viewport={{ once: true }}
             className="flex flex-col items-start gap-1"
          >
             <span className="text-xl lg:text-3xl font-display font-bold tracking-widest text-white/90 uppercase">Game of Sea</span>
             <div className="w-12 h-[1px] bg-blue-500 mt-2" />
          </motion.div>
        </motion.div>

        {/* Right Side: Information Panel */}
        <motion.div
           initial={{ opacity: 0, x: 100 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
           viewport={{ once: true }}
           className="w-full lg:w-[450px] bg-white/[0.02] backdrop-blur-3xl border-l border-white/5 min-h-[60vh] lg:h-screen flex flex-col justify-center p-12 lg:p-16 gap-12"
        >
          {[
            { 
              num: "01", 
              title: "Atemtechnik", 
              desc: "Meistern Sie die Kunst der kontrollierten Atmung für längere Tauchgänge.", 
              img: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=200" 
            },
            { 
              num: "02", 
              title: "Ausrüstung", 
              desc: "Hochmoderne Tech-Gear für maximale Sicherheit in extremen Tiefen.", 
              img: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&q=80&w=200" 
            },
            { 
              num: "03", 
              title: "Team-Support", 
              desc: "Erfahrene Partner begleiten jede Expedition für höchste Sicherheit.", 
              img: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&q=80&w=200" 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-blue-400 transition-colors duration-500">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <span className="absolute -top-2 -right-2 text-[10px] font-bold text-blue-500 bg-white/10 backdrop-blur-md rounded-full w-6 h-6 flex items-center justify-center border border-white/10">
                  {item.num}
                </span>
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-lg lg:text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">
                   {item.title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-400 font-light leading-relaxed">
                   {item.desc}
                </p>
                <div className="mt-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">Mehr erfahren</span>
                  <div className="w-4 h-[1px] bg-blue-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
