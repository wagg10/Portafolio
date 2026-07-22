import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Moon,
  Sun,
  Code2,
  Brain,
  Server,
  Database,
  ArrowUpRight,
  Download,
  Menu,
  X,
} from "lucide-react";

export default function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [imgOk, setImgOk] = useState(true);

  const t = dark
    ? {
        bg: "bg-zinc-950",
        bgSoft: "bg-zinc-900",
        card: "bg-zinc-900 border-zinc-800",
        text: "text-zinc-100",
        subtle: "text-zinc-400",
        border: "border-zinc-800",
        chip: "bg-zinc-800 text-zinc-300",
        navbg: "bg-zinc-950/80",
        imgbg: "bg-zinc-900",
      }
    : {
        bg: "bg-stone-50",
        bgSoft: "bg-white",
        card: "bg-white border-stone-200",
        text: "text-stone-900",
        subtle: "text-stone-600",
        border: "border-stone-200",
        chip: "bg-stone-100 text-stone-700",
        navbg: "bg-white/80",
        imgbg: "bg-stone-100",
      };

  const nav = [
    { id: "sobre-mi", label: "Sobre mí" },
    { id: "servicios", label: "Servicios" },
    { id: "proyectos", label: "Proyectos" },
    { id: "tecnologias", label: "Tecnologías" },
    { id: "contacto", label: "Contacto" },
  ];

  const servicios = [
    {
      icon: Brain,
      title: "Soluciones con IA / LLM",
      desc: "Asistentes y tutores basados en modelos de lenguaje: fine-tuning (QLoRA/PEFT), RAG y despliegue local con endpoints tipo OpenAI.",
    },
    {
      icon: Code2,
      title: "Desarrollo backend & full stack",
      desc: "Aplicaciones en Java y Python con arquitectura limpia (MVC, POO), consumo de APIs y buenas prácticas de ingeniería de software.",
    },
    {
      icon: Server,
      title: "Despliegue e infraestructura",
      desc: "Contenerización con Docker, administración básica de servidores Linux y puesta en producción de plataformas como Moodle/LMS.",
    },
    {
      icon: Database,
      title: "Datos y machine learning",
      desc: "Entrenamiento y evaluación de modelos, clasificación de imágenes con TensorFlow y manejo de bases de datos MySQL / Oracle SQL.",
    },
  ];

  const proyectos = [
    {
      year: "2026",
      title: "Tutor académico de Química con LLM",
      desc: "Prototipo de tutoría con IA generativa que explica conceptos y resuelve ejercicios paso a paso. Corpus de 684 ejercicios, fine-tuning de 3 modelos (Phi-4, Qwen2.5-14B, DeepSeek-R1) con QLoRA y sistema RAG con ChromaDB.",
      metric: "96,3 % de precisión",
      image: "/proyecto-quimica.svg",
      link: "https://github.com/wagg10",
      tags: ["Python", "PyTorch", "Hugging Face", "QLoRA", "ChromaDB"],
    },
    {
      year: "2024–2025",
      title: "Predicción de enfermedades en plantas",
      desc: "Modelos de deep learning para clasificar enfermedades en cultivos de banano, arroz y café a partir de imágenes. Redes neuronales con TensorFlow e interfaz web propia.",
      metric: "+90 % de precisión",
      image: "/proyecto-plantas.svg",
      link: "https://github.com/wagg10",
      tags: ["Python", "TensorFlow", "HTML5", "CSS", "JavaScript"],
    },
    {
      year: "2024",
      title: "Gestión de inversiones en acciones",
      desc: "Aplicación de escritorio en Java para registrar y gestionar inversiones, con patrón MVC, consumo de APIs externas y persistencia en base de datos.",
      metric: "Arquitectura MVC",
      image: "/proyecto-inversiones.svg",
      link: "https://github.com/wagg10",
      tags: ["Java", "NetBeans", "MySQL"],
    },
  ];

  const skills = {
    Lenguajes: ["Java", "Python", "JavaScript", "C++"],
    "Web & Frontend": ["HTML5", "CSS", "JavaScript", "Streamlit"],
    "IA / ML": ["TensorFlow", "PyTorch", "Transformers", "QLoRA/PEFT", "RAG", "ChromaDB"],
    "Bases de datos": ["MySQL", "Oracle SQL"],
    "DevOps & Tools": ["Git/GitHub", "Docker", "Linux (Ubuntu/WSL)", "VS Code"],
    Metodologías: ["Scrum", "XP", "MVC", "POO"],
  };

  const go = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const email = "guevara10wilmer@gmail.com";
  const btnPrimary =
    "inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-medium transition-colors";

  return (
    <div className={`${t.bg} ${t.text} min-h-screen font-sans transition-colors`}>
      {/* NAV */}
      <header className={`sticky top-0 z-50 backdrop-blur border-b ${t.border} ${t.navbg}`}>
        <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
          <button onClick={() => go("inicio")} className="font-bold tracking-tight text-lg">
            Wilmer<span className="text-amber-500">.</span>dev
          </button>

          <nav className="hidden md:flex items-center gap-7 text-sm">
            {nav.map((n) => (
              <button key={n.id} onClick={() => go(n.id)} className={`${t.subtle} hover:text-amber-500 transition-colors`}>
                {n.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="/CV_Wilmer_Guevara.pdf" download className={`hidden sm:inline-flex text-sm px-4 py-2 rounded-lg ${btnPrimary}`}>
              <Download size={16} /> CV
            </a>
            <button onClick={() => setDark(!dark)} className={`p-2 rounded-lg ${t.chip} hover:opacity-80`} aria-label="Cambiar tema">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden p-2 rounded-lg ${t.chip}`}>
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className={`md:hidden border-t ${t.border} px-5 py-3 flex flex-col gap-3`}>
            {nav.map((n) => (
              <button key={n.id} onClick={() => go(n.id)} className={`text-left ${t.subtle}`}>
                {n.label}
              </button>
            ))}
            <a href="/CV_Wilmer_Guevara.pdf" download className="inline-flex items-center gap-2 text-amber-500 font-medium">
              <Download size={16} /> Descargar CV
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="max-w-5xl mx-auto px-5 pt-16 pb-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-14">
          <div className="flex-1 flex flex-col items-start gap-6 text-left">
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Disponible para nuevas oportunidades
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Wilmer Guevara
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-amber-500 -mt-3">
              Ingeniero de Software & IA
            </p>
            <p className={`text-lg max-w-xl ${t.subtle}`}>
              Construyo aplicaciones backend, full stack y soluciones con modelos de lenguaje (LLM), desde el
              fine-tuning hasta el despliegue en producción. Graduado de la Escuela Politécnica Nacional, Quito.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <button onClick={() => go("contacto")} className={`px-5 py-3 rounded-xl ${btnPrimary}`}>
                Contactar <ArrowUpRight size={18} />
              </button>
              <a
                href="/CV_Wilmer_Guevara.pdf"
                download
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium border ${t.border} ${t.bgSoft} hover:text-amber-500 hover:border-amber-500/50 transition`}
              >
                <Download size={18} /> Descargar CV
              </a>
            </div>
            <div className={`flex items-center gap-5 pt-3 ${t.subtle}`}>
              <a href="https://github.com/wagg10" target="_blank" rel="noreferrer" className="hover:text-amber-500">
                <Github size={22} />
              </a>
              <a href="https://linkedin.com/in/wilmerguevara-dev" target="_blank" rel="noreferrer" className="hover:text-amber-500">
                <Linkedin size={22} />
              </a>
              <a href={`mailto:${email}`} className="hover:text-amber-500">
                <Mail size={22} />
              </a>
              <span className="inline-flex items-center gap-1 text-sm">
                <MapPin size={16} /> Quito, Ecuador
              </span>
            </div>
          </div>

          {/* FOTO */}
          <div className="shrink-0">
            <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-full p-1 bg-gradient-to-br from-amber-300 to-amber-600 shadow-xl shadow-amber-500/10">
              <div className={`w-full h-full rounded-full overflow-hidden ${t.imgbg} flex items-center justify-center`}>
                {imgOk ? (
                  <img
                    src="/foto.jpg"
                    alt="Wilmer Guevara"
                    onError={() => setImgOk(false)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-6xl font-bold text-amber-500">WG</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MI */}
      <section id="sobre-mi" className={`${t.bgSoft} border-y ${t.border}`}>
        <div className="max-w-5xl mx-auto px-5 py-16 grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold">Sobre mí</h2>
            <p className={`mt-2 text-sm ${t.subtle}`}>Ingeniería de Software · EPN 2021–2026</p>
          </div>
          <div className="md:col-span-2 space-y-4">
            <p className={t.subtle}>
              Ingeniero de software recién graduado con experiencia práctica en desarrollo e inteligencia
              artificial, adquirida en prácticas preprofesionales y proyectos académicos. Administré plataformas de
              aprendizaje en línea (Moodle) con despliegue en Docker, y desarrollé como trabajo de titulación un
              tutor académico basado en LLM con fine-tuning y RAG.
            </p>
            <p className={t.subtle}>
              Manejo Java, Python y JavaScript, bases de datos relacionales, control de versiones con Git y
              metodologías ágiles. Busco crecer como desarrollador con apertura a roles backend, frontend, full
              stack o con componentes de IA/ML.
            </p>
            <div className="flex flex-wrap gap-6 pt-2">
              <Stat value="Titulado" label="Ing. de Software, EPN" t={t} />
              <Stat value="Inglés B2+" label="Academic Three, CEC-EPN" t={t} />
              <Stat value="Híbrido/Remoto" label="Disponibilidad inmediata" t={t} />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="max-w-5xl mx-auto px-5 py-20">
        <h2 className="text-2xl font-bold">Qué puedo hacer por ti</h2>
        <p className={`mt-2 ${t.subtle}`}>Servicios en los que puedo aportar valor desde el primer día.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-5">
          {servicios.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className={`rounded-2xl border p-6 ${t.card} hover:border-amber-500/50 transition-colors`}>
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
                <p className={`mt-2 text-sm ${t.subtle}`}>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className={`${t.bgSoft} border-y ${t.border}`}>
        <div className="max-w-5xl mx-auto px-5 py-20">
          <h2 className="text-2xl font-bold text-center">Proyectos Destacados</h2>
          <p className={`mt-2 text-center ${t.subtle}`}>Trabajo académico y de titulación con resultados medibles.</p>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {proyectos.map((p) => (
              <div
                key={p.title}
                className={`rounded-2xl border overflow-hidden ${t.card} group hover:border-amber-500/50 transition-colors flex flex-col`}
              >
                <div className={`aspect-video overflow-hidden ${t.imgbg} border-b ${t.border}`}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <span className={`text-xs font-mono ${t.subtle}`}>{p.year}</span>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 whitespace-nowrap">
                      {p.metric}
                    </span>
                  </div>
                  <h3 className="mt-2 font-semibold text-lg">{p.title}</h3>
                  <p className={`mt-2 text-sm ${t.subtle}`}>{p.desc}</p>
                  <p className={`mt-4 text-xs font-medium ${t.subtle}`}>Tecnologías utilizadas:</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className={`text-xs px-2.5 py-1 rounded-md ${t.chip}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 pt-4 flex justify-end">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-1.5 text-sm font-medium border ${t.border} px-4 py-2 rounded-lg hover:text-amber-500 hover:border-amber-500/50 transition`}
                    >
                      Ver Proyecto <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section id="tecnologias" className="max-w-5xl mx-auto px-5 py-20">
        <h2 className="text-2xl font-bold">Tecnologías y habilidades</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className={`rounded-2xl border p-5 ${t.card}`}>
              <h3 className="font-semibold text-sm text-amber-500">{cat}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((i) => (
                  <span key={i} className={`text-xs px-2.5 py-1 rounded-md ${t.chip}`}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className={`${t.bgSoft} border-t ${t.border}`}>
        <div className="max-w-5xl mx-auto px-5 py-20 text-center">
          <h2 className="text-3xl font-bold">¿Construimos algo juntos?</h2>
          <p className={`mt-3 max-w-xl mx-auto ${t.subtle}`}>
            Estoy abierto a oportunidades como desarrollador de software y proyectos con IA. Escríbeme y conversamos.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${email}`} className={`px-6 py-3 rounded-xl ${btnPrimary}`}>
              <Mail size={18} /> {email}
            </a>
            <a
              href="https://wa.me/593998395372"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium border ${t.border} ${t.card} hover:text-amber-500 hover:border-amber-500/50`}
            >
              <Phone size={18} /> +593 99 839 5372
            </a>
          </div>
          <div className={`mt-6 flex justify-center gap-5 ${t.subtle}`}>
            <a href="https://github.com/wagg10" target="_blank" rel="noreferrer" className="hover:text-amber-500">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/wilmerguevara-dev" target="_blank" rel="noreferrer" className="hover:text-amber-500">
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </section>

      <footer className={`border-t ${t.border} py-8`}>
        <p className={`text-center text-sm ${t.subtle}`}>
          © {new Date().getFullYear()} Wilmer Alexander Guevara Guevara · Quito, Ecuador
        </p>
      </footer>
    </div>
  );
}

function Stat({ value, label, t }) {
  return (
    <div>
      <div className="text-xl font-bold text-amber-500">{value}</div>
      <div className={`text-xs ${t.subtle}`}>{label}</div>
    </div>
  );
}
