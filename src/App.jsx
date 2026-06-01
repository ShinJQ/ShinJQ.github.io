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
  Portfolio deployment note
  -------------------------
  For https://ShinJQ.github.io/, keep BASE_PATH as "/".
  For a project page such as https://ShinJQ.github.io/portfolio/,
  change BASE_PATH to "/portfolio/".
*/
const BASE_PATH = "/";
const CV_PATH = "cv/Shin_JungKyoo_CV.pdf";
const PROFILE_IMAGE_PATH = "profile/jungkyoo_shin.jpg";

function normalizeBasePath(basePath) {
  if (!basePath || basePath === ".") return "/";

  let value = String(basePath);

  if (!value.startsWith("/")) {
    value = `/${value}`;
  }

  if (!value.endsWith("/")) {
    value = `${value}/`;
  }

  return value;
}

function stripLeadingSlash(path) {
  const value = String(path || "");
  return value.startsWith("/") ? value.slice(1) : value;
}

function asset(path) {
  return `${normalizeBasePath(BASE_PATH)}${stripLeadingSlash(path)}`;
}

function runSelfTests() {
  const cases = [
    {
      actual: normalizeBasePath("/"),
      expected: "/",
      label: "root base path",
    },
    {
      actual: normalizeBasePath("portfolio"),
      expected: "/portfolio/",
      label: "repository base path without slashes",
    },
    {
      actual: normalizeBasePath("/portfolio"),
      expected: "/portfolio/",
      label: "repository base path without trailing slash",
    },
    {
      actual: normalizeBasePath("/portfolio/"),
      expected: "/portfolio/",
      label: "repository base path with both slashes",
    },
    {
      actual: normalizeBasePath(""),
      expected: "/",
      label: "empty base path",
    },
    {
      actual: stripLeadingSlash("/figures/calm.png"),
      expected: "figures/calm.png",
      label: "leading slash removed",
    },
    {
      actual: stripLeadingSlash("figures/calm.png"),
      expected: "figures/calm.png",
      label: "relative path unchanged",
    },
    {
      actual: stripLeadingSlash(""),
      expected: "",
      label: "empty relative path",
    },
    {
      actual: asset("figures/calm_cvpr2025.png"),
      expected: `${normalizeBasePath(BASE_PATH)}figures/calm_cvpr2025.png`,
      label: "asset path join",
    },
    {
      actual: asset(PROFILE_IMAGE_PATH),
      expected: `${normalizeBasePath(BASE_PATH)}profile/jungkyoo_shin.jpg`,
      label: "profile image asset path",
    },
    {
      actual: asset(CV_PATH),
      expected: `${normalizeBasePath(BASE_PATH)}cv/Shin_JungKyoo_CV.pdf`,
      label: "cv asset path",
    },
  ];

  cases.forEach(({ actual, expected, label }) => {
    console.assert(
      actual === expected,
      `Path test failed: ${label}. Expected ${expected}, got ${actual}`
    );
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
    featured: true,
    summary:
      "This work proposes a probabilistic semantic alignment framework for multimodal representation learning. It structures image-language representations through class-probability modeling, enabling more robust semantic alignment under uncertain cross-modal correspondence.",
    visual: "Class probability distributions for multimodal semantic alignment",
    figure: "figures/calm_cvpr2025.png",
    links: {
      paper:
        "https://openaccess.thecvf.com/content/CVPR2025/html/Shin_Generative_Modeling_of_Class_Probability_for_Multi-Modal_Representation_Learning_CVPR_2025_paper.html",
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
    featured: true,
    summary:
      "This work studies LLM-based long-horizon robot task planning for cooking tasks. It enhances robot task knowledge construction through real-world recipe crawling and converts procedural knowledge into structured action plans for embodied agents.",
    visual: "LLM-based long-horizon cooking task planning",
    figure: "figures/iros_task_planning_2024.png",
    links: {
      paper: "https://ieeexplore.ieee.org/abstract/document/10801687/",
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
    featured: true,
    summary:
      "This work introduces dynamic scale-aware temporal position embeddings for video-language representation learning. It enables a model to capture multiple temporal granularities without being restricted to a single fixed temporal scale.",
    visual: "Dynamic temporal-scale position embedding",
    figure: "figures/dspe_neuralnetworks2026.png",
    links: {
      paper: "https://www.sciencedirect.com/science/article/pii/S0893608025009670",
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
    featured: false,
    summary:
      "This work develops a cross-modal interaction framework for temporal moment localization. It focuses on how natural-language queries can identify semantically relevant temporal segments in videos through video-language context modeling.",
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
    title: "Stake the Points: Structure-Faithful Instance Unlearning",
    authors: "Kiseong Hong, JungKyoo Shin, Eunwoo Kim",
    venue: "CVPR 2026",
    note: "",
    category: "Multi-modal Representation Learning",
    selected: true,
    featured: false,
    summary:
      "This work studies structure-faithful instance unlearning. It aims to remove target instances while preserving the geometry and semantic structure of the learned representation space.",
    visual: "Structure-faithful instance unlearning",
    figure: "figures/stake_cvpr2026.png",
    links: {
      paper:
        "https://openaccess.thecvf.com/content/CVPR2026/html/Hong_Stake_the_Points_Structure-Faithful_Instance_Unlearning_CVPR_2026_paper.html",
      code: "",
      project: "",
      bibtex: "",
    },
  },
  {
    title: "Dual-Branch Scale Disentanglement for Text-Video Retrieval",
    authors: "Hyunjoon Koo, JungKyoo Shin, Eunwoo Kim",
    venue: "Pattern Recognition Letters, 2025",
    category: "Full Publications",
    selected: false,
    featured: false,
    links: {
      paper: "https://www.sciencedirect.com/science/article/pii/S0167865525002292",
      code: "",
      project: "",
      bibtex: "",
    },
  },
  {
    title: "Gravitated Latent Space Loss Generated by Metric Tensor for High-Dynamic Range Imaging",
    authors:
      "Heunseung Lim, JungKyoo Shin, Hyoungki Choi, Dohoon Kim, Eunwoo Kim, Joonki Paik",
    venue: "ICASSP 2024",
    category: "Full Publications",
    selected: false,
    featured: false,
    links: {
      paper: "https://ieeexplore.ieee.org/abstract/document/10448122/",
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
    selected: false,
    featured: false,
    links: {
      paper: "https://ieeexplore.ieee.org/abstract/document/9520423/",
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
    selected: false,
    featured: false,
    links: {
      paper: "https://ieeexplore.ieee.org/abstract/document/9415226/",
      code: "",
      project: "",
      bibtex: "",
    },
  },
];

const projects = [
  {
    title: "ETRI DeepView",
    period: "2019-2021",
    subtitle: "High-Performance Visual Discovery Platform",
    icon: Cpu,
    summary:
      "A national-scale visual intelligence R&D project for large-scale real-time video understanding, temporal analysis, and visual discovery. I worked on preprocessing real-world video data, understanding video context, and developing temporal moment localization methods for practical visual intelligence scenarios.",
    points: [
      "Real-world video data preprocessing for visual intelligence research",
      "Video context understanding and temporal structure modeling",
      "Temporal moment localization for video-language grounding",
    ],
  },
  {
    title: "Samsung Robot Task Planning",
    period: "2022-2024",
    subtitle: "Learning Transferable Task Knowledge for Social Robots",
    icon: Bot,
    summary:
      "A research project on transferable task knowledge and LLM-based long-horizon task planning for service robots. I used real-world recipe crawling to enhance LLM-based robot task knowledge and connect internet-scale procedural knowledge to robot task planning.",
    points: [
      "Real-world recipe crawling and procedural knowledge structuring",
      "LLM-based robot task knowledge construction",
      "Long-horizon cooking task planning for embodied agents",
    ],
  },
  {
    title: "HD Hyundai Construction Equipment",
    period: "2023",
    subtitle: "AI-Based Wheel Loader Work-Mode Classification and Deformation Estimation",
    icon: Factory,
    summary:
      "An industry-academia AI project focused on construction equipment monitoring. I participated in developing models for predicting wheel-loader strain-gauge signals and approximating equipment states from sensor measurements.",
    points: [
      "Wheel-loader strain-gauge signal prediction",
      "Equipment-state approximation from sensor measurements",
      "Industrial AI modeling for construction equipment monitoring",
    ],
  },
];

const education = [
  {
    period: "Mar. 2022 - Present",
    degree: "Ph.D. Candidate in Artificial Intelligence",
    school: "Chung-Ang University",
    advisor: "Prof. Eunwoo Kim",
    thesis:
      "Bridging Multi-Level Video-Language Mismatch via Semantic and Temporal Representations",
  },
  {
    period: "Mar. 2019 - Feb. 2021",
    degree: "M.S. in Information Communication Technology",
    school: "University of Science and Technology / ETRI",
    advisor: "Prof. Jinyoung Moon",
    thesis: "Cross-modal Interaction Based Temporal Moment Localization in a Video",
  },
  {
    period: "Mar. 2017 - Feb. 2019",
    degree: "B.S. in Information and Communication Engineering & Bioinformatics",
    school: "Dongguk University",
    advisor: "",
    thesis: "",
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

const others = [
  {
    title: "Short Bio",
    items: [
      "Researcher in multimodal understanding and robot learning.",
      "My research investigates contextual understanding across images, videos, and natural language, with an emphasis on learning frameworks that can generalize beyond a single task and apply knowledge to real-world decision-making and action.",
    ],
  },
  {
    title: "Teaching Experiences",
    items: [
      "Capstone Design, Teaching Assistant - Chung-Ang University, 2022 Fall",
      "Machine Learning, Teaching Assistant - Chung-Ang University, 2023 Spring",
      "Advanced AI, Teaching Assistant - Chung-Ang University, 2024 Fall",
    ],
  },
  {
    title: "Invited Talks",
    items: [
      "The 1st Physical AI Research Group Workshop, 2026",
      "KRoC Flagship Conference, 2025",
      "AI Graduate School Symposium, 2025",
      "Chung-Ang University AI Symposium / AI Graduate School Academic Seminar, 2024",
    ],
  },
  {
    title: "Academic Services",
    items: [
      "Conference Reviewer - CVPR 2026",
      "Conference Reviewer - NeurIPS 2026",
      "Conference Reviewer - ECCV 2026",
    ],
  },
  {
    title: "Patents",
    items: [
      "Method and System for Retrieving Video Segment by a Semantic Query - US Patent No. 12,019,678, granted Jun. 25, 2024",
    ],
  },
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
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950">{title}</h2>
      {description ? (
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}

function Header({ page, setPage }) {
  const items = [
    ["home", "Home"],
    ["academic", "Academic Contributions"],
    ["projects", "Projects"],
    ["others", "Others"],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <button onClick={() => setPage("home")} className="text-left">
          <div className="text-sm font-semibold tracking-tight text-slate-950">JungKyoo Shin</div>
          <div className="text-xs text-slate-500">AI Ph.D. Candidate</div>
        </button>

        <nav className="flex flex-wrap items-center justify-end gap-2">
          {items.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setPage(key)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                page === key
                  ? "bg-slate-950 text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
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
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            <GraduationCap size={14} /> Ph.D. Candidate in Artificial Intelligence,
            Chung-Ang University
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
            <span className="block">Multimodal</span>
            <span className="block">understanding for</span>
            <span className="block">real-world knowledge.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            I study how knowledge can be acquired, structured, and utilized from multimodal data.
            My research focuses on contextual understanding across images, videos, and natural
            language for semantic alignment, temporal reasoning, robot task planning, and
            task-agnostic model training.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:neo293@cau.ac.kr"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
            >
              <Mail size={16} /> Contact
            </a>

            <a
              href="https://scholar.google.com/citations?user=BmBtnK4AAAAJ"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50"
            >
              <BookOpen size={16} /> Google Scholar
            </a>

            <a
              href={asset(CV_PATH)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50"
            >
              <FileText size={16} /> CV Download
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60"
        >
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
            <img
              src={asset(PROFILE_IMAGE_PATH)}
              alt="Portrait of JungKyoo Shin"
              className="h-80 w-full object-cover object-center"
              loading="lazy"
            />
          </div>

          <div className="mt-5 space-y-3 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Seoul, South Korea</span>
            </div>
            <a
              href="mailto:neo293@cau.ac.kr"
              className="flex items-center gap-2 transition hover:text-slate-950"
            >
              <Mail size={16} />
              <span>neo293@cau.ac.kr</span>
            </a>
          </div>

          <h3 className="mt-8 text-lg font-semibold text-slate-950">Research Keywords</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <Badge key={keyword}>{keyword}</Badge>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Highlights
            </p>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div className="flex gap-3">
                <Award size={18} className="mt-0.5" />
                <span>CVPR 2025 Highlight</span>
              </div>
              <div className="flex gap-3">
                <Award size={18} className="mt-0.5" />
                <span>IROS 2024 Selected Oral</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="mb-16">
      <SectionTitle
        eyebrow="Education"
        title="Academic background"
        description="Education history with advisors and thesis topics."
      />

      <div className="space-y-6">
        {education.map((item) => (
          <div key={`${item.period}-${item.degree}`} className="grid gap-4 md:grid-cols-[180px_1fr]">
            <div className="text-sm font-medium text-slate-500">{item.period}</div>
            <div>
              <h3 className="text-lg font-semibold text-slate-950">{item.degree}</h3>
              <p className="mt-1 text-sm text-slate-700">
                {item.school}
                {item.advisor ? ` · Advisor: ${item.advisor}` : ""}
              </p>
              {item.thesis ? (
                <p className="mt-2 text-sm leading-6 text-slate-600">Thesis: {item.thesis}</p>
              ) : null}
            </div>
          </div>
        ))}
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
      {!compact ? (
        <div className="mb-5 overflow-hidden rounded-2xl bg-slate-100">
          {pub.figure ? (
            <img
              src={asset(pub.figure)}
              alt={`${pub.title} representative figure`}
              className="h-44 w-full object-contain bg-white p-2 transition duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-44 items-center justify-center px-5 text-center text-sm font-medium text-slate-500">
              {pub.visual || "Publication visual placeholder"}
            </div>
          )}
        </div>
      ) : null}

      <div className="mb-3 flex flex-wrap gap-2">
        <Badge>{pub.venue}</Badge>
        {pub.note ? <Badge>{pub.note}</Badge> : null}
      </div>

      <h3 className="text-lg font-semibold leading-snug text-slate-950">{pub.title}</h3>
      <p className="mt-2 text-sm text-slate-500">{pub.authors}</p>

      {pub.summary ? <p className="mt-4 text-sm leading-6 text-slate-600">{pub.summary}</p> : null}

      {linkItems.length > 0 ? (
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
      ) : null}
    </article>
  );
}

function ProjectCard({ project }) {
  const Icon = project.icon;

  return (
    <article className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-slate-950 p-3 text-white">
            <Icon size={20} />
          </div>
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

function OthersSection({ standalone = false }) {
  return (
    <section className={standalone ? "" : "mt-16 border-t border-slate-200 pt-14"}>
      <SectionTitle
        eyebrow="Others"
        title="Additional academic activities"
        description="Teaching, invited talks, academic services, patent, and short bio."
      />

      <div className="space-y-8">
        {others.map((group) => (
          <div key={group.title} className="grid gap-4 md:grid-cols-[220px_1fr]">
            <h3 className="text-lg font-semibold text-slate-950">{group.title}</h3>
            <ul className="space-y-2 text-sm leading-6 text-slate-700">
              {group.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Home({ setPage }) {
  const featuredPublications = publications.filter((publication) => publication.featured);

  return (
    <>
      <Hero />

      <main className="mx-auto max-w-6xl px-5 py-14">
        <EducationSection />

        <section className="mb-16">
          <SectionTitle
            eyebrow="Selected Publications"
            title="Representative research contributions"
            description="Representative works from computer vision, robotics, and neural network-based multimodal learning."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {featuredPublications.map((publication) => (
              <PublicationCard key={publication.title} pub={publication} />
            ))}
          </div>

          <button
            onClick={() => setPage("academic")}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white"
          >
            View Academic Contributions <ChevronRight size={16} />
          </button>
        </section>

        <section>
          <SectionTitle
            eyebrow="Selected Projects"
            title="Research projects across video intelligence, robot planning, and industrial AI"
          />

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <button
            onClick={() => setPage("projects")}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-800 shadow-sm"
          >
            View Projects <ChevronRight size={16} />
          </button>
        </section>

        <OthersSection />
      </main>
    </>
  );
}

function AcademicContributions() {
  const selected = publications.filter((publication) => publication.selected);
  const full = publications.filter((publication) => !publication.selected);

  const grouped = useMemo(() => {
    return selected.reduce((accumulator, publication) => {
      if (!accumulator[publication.category]) {
        accumulator[publication.category] = [];
      }

      accumulator[publication.category].push(publication);
      return accumulator;
    }, {});
  }, [selected]);

  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <SectionTitle
        eyebrow="Academic Contributions"
        title="Selected publications"
        description="Representative publications are organized by research theme. Each card supports a figure, summary, and external links."
      />

      <div className="space-y-14">
        {Object.entries(grouped).map(([category, categoryPublications]) => (
          <section key={category}>
            <h3 className="mb-5 text-xl font-semibold text-slate-950">{category}</h3>
            <div className="grid gap-5 md:grid-cols-2">
              {categoryPublications.map((publication) => (
                <PublicationCard key={publication.title} pub={publication} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-16">
        <SectionTitle eyebrow="Full Publications" title="Additional publications" />

        <div className="grid gap-4 md:grid-cols-2">
          {full.map((publication) => (
            <PublicationCard key={publication.title} pub={publication} compact />
          ))}
        </div>
      </section>
    </main>
  );
}

function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <SectionTitle
        eyebrow="Projects"
        title="Research and applied AI projects"
        description="Selected projects connecting video intelligence, robot task planning, and industrial AI applications."
      />

      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  );
}

function OthersPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <OthersSection standalone />
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
      {page === "home" ? <Home setPage={setPage} /> : null}
      {page === "academic" ? <AcademicContributions /> : null}
      {page === "projects" ? <ProjectsPage /> : null}
      {page === "others" ? <OthersPage /> : null}
      <Footer />
    </div>
  );
}