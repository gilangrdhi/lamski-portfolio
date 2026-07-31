export const personalInfo = {
  name: "Gilang",
  nickname: "Lamski",
  role: "Mahasiswa Pendidikan Teknologi Informasi",
  subtitle: "Software Engineering & Fullstack Web Developer",
  institution: "Universitas Brawijaya",
  bio: "Mahasiswa Pendidikan Teknologi Informasi (PTI) di Universitas Brawijaya yang berfokus pada pengembangan aplikasi web modern, arsitektur perangkat lunak yang bersih, dan antarmuka pengguna yang responsif. Suka memecahkan masalah kompleks melalui kode yang terstruktur.",
  location: "Malang, Indonesia",
  email: "gilangardhi87@gmail.com",
  socials: {
    instagram: "https://www.instagram.com/gln.hooks/",
    github: "https://github.com/gilangrdhi",
    linkedin: "https://www.linkedin.com/in/gilang-ardhi-maulana-2b883b333/",
    whatsapp: "https://wa.me/6285895728196",
  },
};

export const projectCategories = [
  "Semua",
  "Web App",
  "Mobile App",
  "UI/UX",
  "Lainnya",
];

export const projects = [
  {
    id: 1,
    title: "Edutrack Academic Portal",
    category: "Web App",
    description:
      "Sistem manajemen akademik berbasis web untuk memantau nilai, presensi, dan jadwal kuliah mahasiswa secara real-time.",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    highlights: [
      "Sistem Autentikasi JWT",
      "Dashboard Realtime Stats",
      "Export PDF Transkrip",
    ],
  },
  {
    id: 2,
    title: "CodeCraft IDE Companion",
    category: "Web App",
    description:
      "Web application tool untuk menganalisis kompleksitas kode algoritma dan visualisasi struktur data bagi mahasiswa pemula.",
    tags: ["React", "TypeScript", "Framer Motion", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    highlights: [
      "Syntax Highlighting Custom",
      "Interactive Tree Diagram",
      "Dark Theme Native",
    ],
  },
  {
    id: 3,
    title: "Lab Inventory Mobile",
    category: "Mobile App",
    description:
      "Aplikasi peminjaman dan pemantauan perangkat laboratorium komputer kampus dengan fitur scan QR Code.",
    tags: ["React Native", "Firebase", "Tailwind", "Expo"],
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: false,
    highlights: [
      "Scanner QR Code Cepat",
      "Notifikasi Pengembalian",
      "Role Admin & Student",
    ],
  },
  {
    id: 4,
    title: "Campus Event Dashboard",
    category: "UI/UX",
    description:
      "Perancangan UI/UX antarmuka sistem informasi pendaftaran seminar dan workshop teknologi di lingkungan departemen.",
    tags: ["Figma", "UI/UX", "Prototyping", "Design System"],
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: false,
    highlights: [
      "User Flow Streamlined",
      "Design Tokens Modern",
      "Usability Tested",
    ],
  },
  {
    id: 5,
    title: "Algorithm Visualizer Bot",
    category: "Lainnya",
    description:
      "Bot pemrosesan data otomatis dan visualisasi eksekusi algoritma pencarian & pengurutan untuk tugas praktikum.",
    tags: ["Python", "Algorithms", "CLI", "Data Structures"],
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: false,
    highlights: [
      "Interactive Step-by-Step",
      "Benchmarking Runtime",
      "Clean Architecture",
    ],
  },
  {
    id: 6,
    title: "Smart Classroom Manager",
    category: "Web App",
    description:
      "Platform IoT web dashboard untuk kontrol ruang kelas cerdas, termasuk lampu, proyektor, dan reservasi ruangan.",
    tags: ["React", "MQTT", "Tailwind CSS", "Chart.js"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    highlights: [
      "Websocket Real-time Data",
      "Interactive Map Floorplan",
      "Power Consumption Tracker",
    ],
  },
];

export const skills = {
  languages: [
    { name: "JavaScript", level: "Lanjutan", color: "#f7df1e" },
    { name: "TypeScript", level: "Menengah", color: "#3178c6" },
    { name: "PHP", level: "Lanjutan", color: "#777bb4" },
    { name: "HTML5 / CSS3", level: "Ahli", color: "#e34f26" },
    { name: "Python", level: "Menengah", color: "#b6a50fff" },
    { name: "SQL", level: "Menengah", color: "#4479a1" },
  ],
  frontend: [
    { name: "React.js", level: "Ahli" },
    { name: "Tailwind CSS", level: "Ahli" },
    { name: "Ant Design", level: "Lanjutan" },
    { name: "React Query", level: "Lanjutan" },
    { name: "Next.js", level: "Menengah" },
    { name: "Inertia.js", level: "Menengah" },
  ],
  backendTools: [
    { name: "Laravel", level: "Lanjutan" },
    { name: "Prisma ORM", level: "Lanjutan" },
    { name: "Git & GitHub", level: "Ahli" },
    { name: "VS Code", level: "Ahli" },
    { name: "Telegram Bot API", level: "Menengah" },
    { name: "Figma", level: "Menengah" },
  ],
};

export const timeline = [
  {
    year: "2026 - Sekarang",
    title: "Mahasiswa Pendidikan Teknologi Informasi",
    institution: "Universitas Brawijaya (FILKOM)",
    description:
      "Mempelajari pengembangan teknologi, pendidikan, dan rekayasa perangkat lunak. Diterima melalui jalur SNBP.",
  },
  {
    year: "2025 - 2026",
    title: "Frontend Web Developer (Internship & Projects)",
    institution: "BEE",
    description:
      "Diberi amanah untuk mengembangkan web frontend untuk platform BEE, salah satu startup yang berbasis teknologi, serta membantu dalam pengembangan project yang sedang berjalan.",
  },
  {
    year: "2023 - 2026",
    title: "Siswa Rekayasa Perangkat Lunak (RPL)",
    institution: "SMKS PGRI 3 Malang",
    description:
      "Fokus mendalami arsitektur pengembangan web full-stack menggunakan ekosistem React, integrasi API, dan perancangan database.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Dosen Pembimbing PTI",
    role: "Universitas Brawijaya",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    text: "Gilang memiliki logika pemrograman yang rapi dan terstruktur. Hasil pengembangan web selalu bersih secara kode dan sangat responsif.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rizky A.",
    role: "Product Client",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    text: "Sangat puas dengan hasilnya! Animasi smooth, desain modern, dan pengerjaan tepat waktu sesuai kesepakatan.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah N.",
    role: "UI/UX Designer",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    text: "Hasil slicing dari Figma ke React.js presisi banget! Komunikasi juga sangat solutif sepanjang penggarapan project.",
    rating: 5,
  },
  {
    id: 4,
    name: "Budi S.",
    role: "Tech Lead Partner",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    text: "Struktur kodenya clean, mudah dirawat, dan siap di-deploy secara handal tanpa kendala.",
    rating: 5,
  },
];
