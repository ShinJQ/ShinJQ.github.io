import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Bot,
  ChevronRight,
  Cpu,
  ExternalLink,
  Factory,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
} from "lucide-react";

/*
  Deployment note
  ----------------
  If this site is deployed at https://<username>.github.io/, keep BASE_PATH as "/".
  If this site is deployed at https://<username>.github.io/<repository-name>/,
  change BASE_PATH to "/<repository-name>/".

  Example:
  const BASE_PATH = "/jungkyoo-portfolio/";
*/
const BASE_PATH = "/";
const CV_PATH = "cv/JungKyoo_Shin_CV.pdf";

function normalizeBasePath(basePath) {
  if (!basePath || basePath === ".") return "/";
  let value = String(basePath);
  if (!value.startsWith("/")) value = `/${value}`;
  if (!value.endsWith("/")) value = `${value}/`;
  return value;
}

function stripLeadingSlash(path) {
  const value = String(path || "");
  return value.startsWith("/") ? value.slice(1) : value;
}

function asset(path) {
  const base = normalizeBasePath(BASE_PATH);
  return `${base}${stripLeadingSlash(path)}`;
}

function runSelfTests() {
  const cases = [
    [normalizeBasePath("/"), "/", "root base path"],
    [normalizeBasePath("portfolio"), "/portfolio/", "repository base path without slashes"],
    [normalizeBasePath("/portfolio"), "/portfolio/", "repository base path without trailing slash"],
    [stripLeadingSlash("/figures/calm.png"), "figures/calm.png", "leading slash removed"],
    [stripLeadingSlash("figures/calm.png"), "figures/calm.png", "relative path unchanged"],
    [asset("figures/calm_cvpr2025.png"), `${normalizeBasePath(BASE_PATH)}figures/calm_cvpr2025.png`, "asset path join"],
  ];

  cases.forEach(([actual, expected, label]) => {
    console.assert(actual === expected, `Path test failed: ${label}. Expected ${expected}, got ${actual}`);
  });
}

runSelfTests();

const publications = [
  {
    title: "Generative Modeling of Class Probability for Multi-Modal Representation Learning",
    authors: "JungKyoo Shin, Bumsoo Kim, Eunwoo Kim",
    venue: "CVPR 2025",
    note: "Highlight",
    category: "Multi-modal Representation Learning",
    selected: true,
    summary:
      "A probabilistic multimodal representation learning approach that models class probability distributions for robust semantic alignment across modalities.",
    visual: "Class probability distributions for multimodal semantic alignment",
    figure: "figures/calm_cvpr2025.png",
    links: {
      paper: "",
      code: "",
      project: "",
      bibtex: "",
    },
  },
  {
    title: "Learning to Combine the Modalities of Language and Video for Temporal Moment Localization",
    authors: "JungKyoo Shin, Jinyoung Moon",
    venue: "Computer Vision and Image Understanding, 2022",
    note: "",
    category: "Multi-modal Representation Learning",
    selected: true,
    summary:
      "A cross-modal interaction framework for aligning natural-language queries with relevant temporal segments in videos.",
    visual: "Language-video interaction for temporal moment localization",
    figure: "figures/cviu_tml_2022.png",
    links: {
      paper: "",
      code: "",
      project: "",
      bibtex: "",
    },
  },
  {
    title: "Dynamic Scale Position Embedding for Cross-Modal Representation Learning",
    authors: "JungKyoo Shin, Sungmin Kang, Yoonsik Cho, Eunwoo Kim",
    venue: "Neural Networks, 2026",
    note: "",
    category: "Multi-modal Representation Learning",
    selected: true,
    summary:
      "A temporal representation method that adjusts position embeddings to model multiple temporal scales for video-language tasks.",
    visual: "Dynamic temporal-scale position embedding",
    figure: "figures/dspe_neuralnetworks2026.png",
    links: {
      paper: "",
      code: "",
      project: "",
      bibtex: "",
    },
  },
  {
    title: "Stake the Points: Structure-Faithful Instance Unlearning",
    authors: "Kiseong Hong, JungKyoo Shin, Eunwoo Kim",
    venue: "CVPR 2026",
    note: "",
    category: "Multi-modal Representation Learning",
    selected: true,
    summary:
      "A structure-preserving instance unlearning method designed to remove target instances while maintaining the representation structure.",
    visual: "Structure-faithful instance unlearning",
    figure: "figures/stake_cvpr2026.png",
    links: {
      paper: "",
      code: "",
      project: "",
      bibtex: "",
    },
  },
  {
    title: "Task Planning for Long-Horizon Cooking Tasks Based on Large Language Models",
    authors: "JungKyoo Shin, Jieun Han, SeungJun Kim, Yoonseon Oh, Eunwoo Kim",
    venue: "IROS 2024",
    note: "Selected Oral",
    category: "Robotics & Data Construction",
    selected: true,
    summary:
      "An LLM-based task planning framework that converts cooking instructions and object knowledge into long-horizon robot action plans.",
    visual: "LLM-based long-horizon cooking task planning",
    figure: "figures/iros_task_planning_2024.png",
    links: {
      paper: "",
      code: "",
      project: "",
      bibtex: "",
    },
  },
  {
    title: "Dual-Branch Scale Disentanglement for Text–Video Retrieval",
    authors: "Hyunjoon Koo, JungKyoo Shin, Eunwoo Kim",
    venue: "Pattern Recognition Letters, 2025",
    category: "Full Publications",
    links: {
      paper: "",
      code: "",
      project: "",
      bibtex: "",
    },
  },
  {
    title: "Gravitated Latent Space Loss Generated by Metric Tensor for High-Dynamic Range Imaging",
    authors: "Heunseung Lim, JungKyoo Shin, Hyoungki Choi, Dohoon Kim, Eunwoo Kim, Joonki Paik",
    venue: "ICASSP 2024",
    category: "Full Publications",
    links: {
      paper: "",
      code: "",
      project: "",
      bibtex: "",
    },
  },
  {
    title: "Multi-Perspective Attention Network for Fast Temporal Moment Localization",
    authors: "JungKyoo Shin, Jinyoung Moon",
    venue: "IEEE Access, 2021",
    category: "Full Publications",
    links: {
      paper: "",
      code: "",
      project: "",
      bibtex: "",
    },
  },
  {
    title: "Fast Temporal Information Retrieval in Videos with Visual Memory",
    authors: "JungKyoo Shin, Jinyoung Moon",
    venue: "ICAIIC 2021",
    category: "Full Publications",
    links: {
      paper: "",
      code: "",
      project: "",
      bibtex: "",
    },
  },
];

const projects = [
  {
    title: "ETRI DeepView",
    period: "2019–2021",
    subtitle: "High-Performance Visual Discovery Platform",
    icon: Cpu,
    summary:
      "A national-scale visual intelligence R&D project for large-scale real-time video understanding, temporal analysis, and visual discovery.",
    points: [
      "Video-language grounding and temporal moment localization",
      "Large-scale video understanding and retrieval",
      "Research experience at ETRI / UST",
    ],
  },
  {
    title: "Samsung Robot Task Planning",
    period: "2022–2024",
    subtitle: "Learning Transferable Task Knowledge for Social Robots",
    icon: Bot,
    summary:
      "A research project on transferable task knowledge and LLM-based long-horizon task planning for service robots.",
    points: [
      "LLM-based task planning for long-horizon cooking tasks",
      "Object-oriented task knowledge representation",
      "Published at IROS 2024 as a Selected Oral paper",
    ],
  },
  {
    title: "HD Hyundai Construction Equipment",
    period: "2023",
    subtitle: "AI-Based Wheel Loader Work-Mode Classification and Deformation Estimation",
    icon: Factory,
    summary:
      "An industry-academia AI project focused on analyzing construction equipment operation and estimating deformation patterns.",
    points: [
      "Industrial AI model development",
      "Work-mode classification",
      "Deformation estimation algorithm development",
    ],
  },
];

const keywords = [
  "Multimodal Understanding",
  "Representation Learning",
  "Video-Language Understanding",
  "Temporal Reasoning",
  "Robot Learning",
  "Task-Agnostic Model Training",
];

function Badge({ children }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950">{title}</h2>
      {description && <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{description}</p>}
    </div>
  );
}

function Header({ page, setPage }) {
  const items = [
    ["home", "Home"],
    ["academic", "Academic Contributions"],
    ["projects", "Projects"],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <button onClick={() => setPage("home")} className="text-left">
          <div className="text-sm font-semibold tracking-tight text-slate-950">JungKyoo Shin</div>
          <div className="text-xs text-slate-500">AI Ph.D. Candidate</div>
        </button>
        <nav className="flex items-center gap-2">
          {items.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setPage(key)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                page === key ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            <GraduationCap size={14} /> Ph.D. Candidate in Artificial Intelligence, Chung-Ang University
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Multimodal understanding for real-world knowledge and action.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            I study how knowledge can be acquired, structured, and utilized from multimodal data. My research focuses on contextual understanding across images, videos, and natural language for semantic alignment, temporal reasoning, robot task planning, and task-agnostic model training.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:neo293@naver.com" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800">
              <Mail size={16} /> Contact
            </a>
            <a href="https://scholar.google.com/citations?user=BmBtnK4AAAAJ" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50">
              <BookOpen size={16} /> Google Scholar
            </a>
            <a href={asset(CV_PATH)} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50">
              <FileText size={16} /> CV Download
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, delay: 0.1 }} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
          <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={16} /> Seoul, South Korea
          </div>
          <h3 className="text-lg font-semibold text-slate-950">Research Keywords</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {keywords.map((keyword) => <Badge key={keyword}>{keyword}</Badge>)}
          </div>
          <div className="mt-8 rounded-3xl bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Highlights</p>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div className="flex gap-3"><Award size={18} className="mt-0.5" /><span>CVPR 2025 Highlight</span></div>
              <div className="flex gap-3"><Award size={18} className="mt-0.5" /><span>IROS 2024 Selected Oral</span></div>
              <div className="flex gap-3"><Award size={18} className="mt-0.5" /><span>US Patent No. 12,019,678</span></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PublicationCard({ pub, compact = false }) {
  const linkItems = [
    ["paper", "Paper"],
    ["code", "Code"],
    ["project", "Project"],
    ["bibtex", "BibTeX"],
  ].filter(([key]) => pub.links && pub.links[key]);

  return (
    <article className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      {!compact && (
        <div className="mb-5 overflow-hidden rounded-2xl bg-slate-100">
          {pub.figure ? (
            <img
              src={asset(pub.figure)}
              alt={`${pub.title} representative figure`}
              className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-44 items-center justify-center px-5 text-center text-sm font-medium text-slate-500">
              {pub.visual || "Publication visual placeholder"}
            </div>
          )}
        </div>
      )}
      <div className="mb-3 flex flex-wrap gap-2">
        <Badge>{pub.venue}</Badge>
        {pub.note && <Badge>{pub.note}</Badge>}
      </div>
      <h3 className="text-lg font-semibold leading-snug text-slate-950">{pub.title}</h3>
      <p className="mt-2 text-sm text-slate-500">{pub.authors}</p>
      {pub.summary && <p className="mt-4 text-sm leading-6 text-slate-600">{pub.summary}</p>}
      {linkItems.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium text-slate-700">
          {linkItems.map(([key, label]) => (
            <a
              key={key}
              href={pub.links[key]}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-slate-950"
            >
              {label} <ExternalLink size={14} />
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

function ProjectCard({ project }) {
  const Icon = project.icon;
  return (
    <article className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-slate-950 p-3 text-white"><Icon size={20} /></div>
          <div>
            <h3 className="text-lg font-semibold text-slate-950">{project.title}</h3>
            <p className="text-sm text-slate-500">{project.period}</p>
          </div>
        </div>
      </div>
      <p className="font-medium text-slate-800">{project.subtitle}</p>
      <p className="mt-3 text-sm leading-6 text-slate-600">{project.summary}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-600">
        {project.points.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Home({ setPage }) {
  const selected = publications.filter((p) => p.selected).slice(0, 3);
  return (
    <>
      <Hero />
      <main className="mx-auto max-w-6xl px-5 py-14">
        <section className="mb-16">
          <SectionTitle eyebrow="Short Bio" title="Researcher in multimodal understanding and robot learning" description="My research investigates contextual understanding across images, videos, and natural language, with an emphasis on learning frameworks that can generalize beyond a single task and apply knowledge to real-world decision-making and action." />
        </section>
        <section className="mb-16">
          <SectionTitle eyebrow="Selected Publications" title="Representative research contributions" description="A compact selection of works spanning multimodal representation learning, video-language understanding, unlearning, and robot task planning." />
          <div className="grid gap-5 md:grid-cols-3">
            {selected.map((pub) => <PublicationCard key={pub.title} pub={pub} />)}
          </div>
          <button onClick={() => setPage("academic")} className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white">View Academic Contributions <ChevronRight size={16} /></button>
        </section>
        <section>
          <SectionTitle eyebrow="Selected Projects" title="Research projects across video intelligence, robot planning, and industrial AI" />
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
          <button onClick={() => setPage("projects")} className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-800 shadow-sm">View Projects <ChevronRight size={16} /></button>
        </section>
      </main>
    </>
  );
}

function AcademicContributions() {
  const selected = publications.filter((p) => p.selected);
  const full = publications.filter((p) => !p.selected);
  const grouped = useMemo(() => {
    return selected.reduce((acc, pub) => {
      if (!acc[pub.category]) acc[pub.category] = [];
      acc[pub.category].push(pub);
      return acc;
    }, {});
  }, [selected]);

  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <SectionTitle eyebrow="Academic Contributions" title="Selected publications" description="Representative publications are organized by research theme. Each card is designed to support an image, diagram, teaser figure, or project-page link." />
      <div className="space-y-14">
        {Object.entries(grouped).map(([category, pubs]) => (
          <section key={category}>
            <h3 className="mb-5 text-xl font-semibold text-slate-950">{category}</h3>
            <div className="grid gap-5 md:grid-cols-2">
              {pubs.map((pub) => <PublicationCard key={pub.title} pub={pub} />)}
            </div>
          </section>
        ))}
      </div>
      <section className="mt-16">
        <SectionTitle eyebrow="Full Publications" title="Additional publications" />
        <div className="grid gap-4 md:grid-cols-2">
          {full.map((pub) => <PublicationCard key={pub.title} pub={pub} compact />)}
        </div>
      </section>
    </main>
  );
}

function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <SectionTitle eyebrow="Projects" title="Research and applied AI projects" description="Selected projects connecting video intelligence, robot task planning, and industrial AI applications." />
      <div className="grid gap-6">
        {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© JungKyoo Shin</p>
        <p>Multimodal Understanding · Representation Learning · Robot Learning</p>
      </div>
    </footer>
  );
}

export default function PortfolioPrototype() {
  const [page, setPage] = useState("home");
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Header page={page} setPage={setPage} />
      {page === "home" && <Home setPage={setPage} />}
      {page === "academic" && <AcademicContributions />}
      {page === "projects" && <ProjectsPage />}
      <Footer />
    </div>
  );
}
