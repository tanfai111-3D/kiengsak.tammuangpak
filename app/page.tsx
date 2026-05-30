"use client";

import React, { useState } from "react";

export default function ResumeQrPortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    title: string;
  }>(null);

  const profile = {
    name: "Kriengsak Tammuangpak",
    nickname: "Fai / King Fai",
    position: "Automation Engineer / Mechanical Design Engineer",
    email: "your.email@example.com",
    phone: "+66 XX XXX XXXX",
    location: "Thailand",
    portfolioUrl: "https://your-portfolio-url.com",
    resumeFile: "#",
    headline:
      "Machine design projects, automation works, and engineering skills from my professional experience.",
    about:
      "This digital portfolio is designed to be opened from a QR code on my resume. It shows project details, machine design background, automation work, software skills, control system knowledge, and certificates.",
  };

  const qrImageUrl = "/qr/portfolio-qr.png";

  const projectCards = [
    {
      title: "SCARA Vision Integrated Dispensing Machine",
      tag: "SVIDMA",
      image: "/projects/svidma.jpg",
      description:
        "Designed and developed a SCARA vision integrated dispensing machine for automation and production applications.",
    },
    {
      title: "Assembly Fixture for Production Line",
      tag: "Fixture",
      image: "/projects/assembly-fixture.jpg",
      description:
        "Designed assembly fixtures to support production line process, repeatability, and operator usability.",
    },
    {
      title: "Common Dispensing Feeder System",
      tag: "Dispensing",
      image: "/projects/dispensing-feeder.jpg",
      description:
        "Designed a common dispensing feeder system for flexible dispensing process support.",
    },
    {
      title: "Quick-Change End-Effector",
      tag: "End-Effector",
      image: "/projects/quick-change-end-effector.jpg",
      description:
        "Designed quick-change end-effector concept to reduce setup time and support multiple production needs.",
    },
    {
      title: "AMR Stencil & Fixture Carrier Module",
      tag: "AMR Module",
      image: "/projects/amr-carrier-module.jpg",
      description:
        "Designed common stencil and fixture carrier module for AMR-mounted delivery application.",
    },
    {
      title: "Cartesian Robot / Universal Bench Top",
      tag: "Cartesian Robot",
      image: "/projects/cartesian-robot.jpg",
      description:
        "Designed Cartesian robot and universal bench top automation space for flexible machine applications.",
    },
    {
      title: "Multi-Size End-Effector",
      tag: "End-Effector",
      image: "/projects/multi-size-end-effector.jpg",
      description:
        "Designed end-effector concept to support multiple product sizes and production variations.",
    },
    {
      title: "Common Leak Testing System",
      tag: "Leak Test",
      image: "/projects/leak-test.jpg",
      description:
        "Developed common leak testing system for production verification and quality support.",
    },
    {
      title: "Turnstile Gate Machine",
      tag: "Machine Concept",
      image: "/projects/turnstile-gate.jpg",
      description:
        "Designed turnstile gate machine concept for controlled product or material flow.",
    },
    {
      title: "Machine Cover Design",
      tag: "Safety Cover",
      image: "/projects/machine-cover.jpg",
      description:
        "Designed machine cover and safety cover structure for equipment protection and operator safety.",
    },
    {
      title: "Common Labeling Fixture",
      tag: "Labeling Fixture",
      image: "/projects/labeling-fixture.jpg",
      description:
        "Developed common labeling fixture to improve positioning, repeatability, and production usability.",
    },
    {
      title: "High-Frequency Test Fixture",
      tag: "Test Fixture",
      image: "/projects/high-frequency-test-fixture.jpg",
      description:
        "Designed high-frequency test fixture for testing process support and repeatable product handling.",
    },
    {
      title: "Multifunction Conveyor System",
      tag: "Conveyor",
      image: "/projects/multifunction-conveyor.jpg",
      description:
        "Designed multifunction conveyor system and supported conveyor modification for production flow improvement.",
    },
    {
      title: "Karakuri Load-in / Load-out System",
      tag: "Karakuri",
      image: "/projects/karakuri-load-in-out.jpg",
      description:
        "Designed Karakuri load-in and load-out system for material handling and manual work reduction.",
    },
    {
      title: "3-Axis Pick-and-Place System",
      tag: "Pick & Place",
      image: "/projects/3-axis-pick-and-place.jpg",
      description:
        "Designed a 3-axis pick-and-place system during internship and contract work.",
    },
    {
      title: "PLC Logic for Conveyor Modification",
      tag: "PLC / Conveyor",
      image: "/projects/plc-conveyor-modification.jpg",
      description:
        "Programmed PLC logic to modify conveyor operation and support production requirements.",
    },
  ];

  const skillGroups = [
    {
      group: "CAD & Design Software",
      icon: "🛠️",
      skills: [
        "SOLIDWORKS",
        "SOLIDWORKS Visualize",
        "MISUMI Frame",
        "Onshape",
        "EasyEDA",
        "Homestyler",
        "Home Design 3D",
      ],
    },
    {
      group: "Control Software",
      icon: "⚙️",
      skills: [
        "GX Works2, 3",
        "KV Studio",
        "SATOL",
        "SANMOTION C Software Tool",
        "Arduino IDE",
        "Arduino App Lab",
        "SANMOTION Motor Setup",
        "DOPSoft",
        "VT Studio",
        "Samsoar II",
      ],
    },
    {
      group: "Manufacturing & Tools",
      icon: "🏭",
      skills: ["3D Printer", "Milling Machine", "Lathe Machine", "Measuring Tools"],
    },
    {
      group: "Additional Software",
      icon: "💻",
      skills: ["DaVinci Resolve", "Canva", "Microsoft Office"],
    },
  ];

  const certificates = [
    "DASSAULT SYSTEMES - Mechanical Design at the level of ASSOCIATE",
    "Green Belt",
    "Suranaree University of Technology - Development of Digital Twin for Industrial Robots",
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <nav className="mb-8 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-zinc-400">QR Code Resume Web Page</p>
            <p className="text-xl font-bold tracking-tight">{profile.name}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={profile.resumeFile}
              className="inline-flex items-center rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
            >
              <span className="mr-2">⬇️</span> Resume PDF
            </a>
            <a
              href={profile.portfolioUrl}
              className="inline-flex items-center rounded-2xl border border-white/15 bg-transparent px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Open Portfolio <span className="ml-2">↗</span>
            </a>
          </div>
        </nav>

        <header className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-cyan-400/15 via-white/[0.06] to-white/[0.03] p-7 md:p-10">
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-sm font-medium text-cyan-300">
              {profile.position}
            </p>
            <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              {profile.headline}
            </h1>
            <p className="mt-4 text-lg text-zinc-400">Nickname: {profile.nickname}</p>
            <p className="mt-6 max-w-4xl text-base leading-8 text-zinc-300 md:text-lg">
              {profile.about}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-zinc-950/50 p-5">
                <p className="text-3xl font-black text-cyan-300">2021+</p>
                <p className="mt-1 text-sm text-zinc-400">Professional Experience</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-zinc-950/50 p-5">
                <p className="text-3xl font-black text-cyan-300">16+</p>
                <p className="mt-1 text-sm text-zinc-400">Project Gallery Items</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-zinc-950/50 p-5">
                <p className="text-3xl font-black text-cyan-300">4</p>
                <p className="mt-1 text-sm text-zinc-400">Skill Categories</p>
              </div>
            </div>
          </div>

          <aside className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-7 text-white">
            <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-[1.75rem] bg-cyan-300 text-4xl font-black text-zinc-950">
              KF
            </div>
            <h2 className="text-2xl font-bold">Contact</h2>
            <div className="mt-5 space-y-4 text-sm text-zinc-300">
              <p className="flex items-center gap-3"><span className="text-cyan-300">✉️</span>{profile.email}</p>
              <p className="flex items-center gap-3"><span className="text-cyan-300">📞</span>{profile.phone}</p>
              <p className="flex items-center gap-3"><span className="text-cyan-300">📍</span>{profile.location}</p>
            </div>

            <div className="mt-8 rounded-3xl border border-cyan-300/20 bg-zinc-950/80 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-cyan-300">
                <span>▦</span> Scan from Resume
              </div>
              <div className="flex gap-4">
                <div className="rounded-2xl bg-white p-3">
                  <img src={qrImageUrl} alt="Portfolio QR Code" className="h-[104px] w-[104px]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-zinc-500">Or type URL</p>
                  <a
                    href={profile.portfolioUrl}
                    className="mt-1 block break-all text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                  >
                    {profile.portfolioUrl}
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </header>

        <section className="mt-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-2xl text-cyan-300">🖼️</span>
            <div>
              <p className="text-sm font-semibold text-cyan-300">Visual Proof of Work</p>
              <h2 className="text-3xl font-black">Project Gallery</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-400">
                Project list from resume experience, expanded into visual cards for machines,
                fixtures, automation systems, and control-related work.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projectCards.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] text-white"
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage({ src: project.image, title: project.title })}
                  className="h-44 w-full overflow-hidden border-b border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-950 text-left cursor-zoom-in"
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-300 hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-center">
                      <div>
                        <div className="text-4xl text-cyan-300">🖼️</div>
                        <p className="mt-3 text-sm text-zinc-400">Add project image here</p>
                      </div>
                    </div>
                  )}
                </button>

                <div className="p-6">
                  <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    {project.tag}
                  </p>
                  <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-2xl text-cyan-300">✅</span>
            <div>
              <p className="text-sm font-semibold text-cyan-300">Technical Ability</p>
              <h2 className="text-3xl font-black">Hard Skills</h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.group}
                className="rounded-[1.75rem] border border-white/10 bg-zinc-950/60 p-6 text-white"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-2xl text-cyan-300">{group.icon}</span>
                  <h3 className="text-xl font-bold">{group.group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[2.25rem] border border-cyan-300/20 bg-cyan-300/10 p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-2xl text-cyan-300">🏆</span>
            <div>
              <p className="text-sm font-semibold text-cyan-300">Training & Certificate</p>
              <h2 className="text-3xl font-black">Certificate</h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {certificates.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-zinc-950/50 p-5 text-zinc-300">
                {item}
              </div>
            ))}
          </div>
        </section>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-6xl rounded-[2rem] border border-white/10 bg-zinc-950 p-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-2xl text-white hover:bg-white hover:text-zinc-950"
              aria-label="Close image preview"
            >
              ×
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[78vh] w-full rounded-[1.5rem] object-contain"
            />

            <div className="px-2 pt-4">
              <p className="text-sm font-semibold text-cyan-300">Project Preview</p>
              <h3 className="mt-1 text-xl font-bold text-white">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
