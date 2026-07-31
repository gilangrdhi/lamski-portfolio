export const personalInfo = {
  name: "Gilang",
  nickname: "Lamski",
  role: "Mahasiswa Pendidikan Teknologi Informasi",
  subtitle: "Software Engineering & Fullstack Web Developer",
  institution: "Universitas Brawijaya",
  bio: "Mahasiswa Pendidikan Teknologi Informasi (PTI) di Universitas Brawijaya yang berfokus pada pengembangan aplikasi web modern, arsitektur perangkat lunak yang bersih, dan antarmuka pengguna yang responsif. Suka memecahkan masalah kompleks melalui kode yang terstruktur.",
  location: "Malang, Indonesia",
  email: "gilang.dev@example.com",
  socials: {
    instagram: "https://instagram.com/gln.hooks",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/6281234567890"
  }
};

export const projectCategories = ["Semua", "Web App", "Mobile App", "UI/UX", "Lainnya"];

export const projects = [
  {
    id: 1,
    title: "Edutrack Academic Portal",
    category: "Web App",
    description: "Sistem manajemen akademik berbasis web untuk memantau nilai, presensi, dan jadwal kuliah mahasiswa secara real-time.",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    highlights: ["Sistem Autentikasi JWT", "Dashboard Realtime Stats", "Export PDF Transkrip"]
  },
  {
    id: 2,
    title: "CodeCraft IDE Companion",
    category: "Web App",
    description: "Web application tool untuk menganalisis kompleksitas kode algoritma dan visualisasi struktur data bagi mahasiswa pemula.",
    tags: ["React", "TypeScript", "Framer Motion", "Tailwind"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    highlights: ["Syntax Highlighting Custom", "Interactive Tree Diagram", "Dark Theme Native"]
  },
  {
    id: 3,
    title: "Lab Inventory Mobile",
    category: "Mobile App",
    description: "Aplikasi peminjaman dan pemantauan perangkat laboratorium komputer kampus dengan fitur scan QR Code.",
    tags: ["React Native", "Firebase", "Tailwind", "Expo"],
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: false,
    highlights: ["Scanner QR Code Cepat", "Notifikasi Pengembalian", "Role Admin & Student"]
  },
  {
    id: 4,
    title: "Campus Event Dashboard",
    category: "UI/UX",
    description: "Perancangan UI/UX antarmuka sistem informasi pendaftaran seminar dan workshop teknologi di lingkungan departemen.",
    tags: ["Figma", "UI/UX", "Prototyping", "Design System"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: false,
    highlights: ["User Flow Streamlined", "Design Tokens Modern", "Usability Tested"]
  },
  {
    id: 5,
    title: "Algorithm Visualizer Bot",
    category: "Lainnya",
    description: "Bot pemrosesan data otomatis dan visualisasi eksekusi algoritma pencarian & pengurutan untuk tugas praktikum.",
    tags: ["Python", "Algorithms", "CLI", "Data Structures"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: false,
    highlights: ["Interactive Step-by-Step", "Benchmarking Runtime", "Clean Architecture"]
  },
  {
    id: 6,
    title: "Smart Classroom Manager",
    category: "Web App",
    description: "Platform IoT web dashboard untuk kontrol ruang kelas cerdas, termasuk lampu, proyektor, dan reservasi ruangan.",
    tags: ["React", "MQTT", "Tailwind CSS", "Chart.js"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    highlights: ["Websocket Real-time Data", "Interactive Map Floorplan", "Power Consumption Tracker"]
  }
];

export const skills = {
  languages: [
    { name: "JavaScript", level: "Lanjutan", color: "#f7df1e" },
    { name: "TypeScript", level: "Menengah", color: "#3178c6" },
    { name: "Python", level: "Lanjutan", color: "#3776ab" },
    { name: "HTML5 / CSS3", level: "Ahli", color: "#e34f26" },
    { name: "SQL", level: "Menengah", color: "#4479a1" }
  ],
  frontend: [
    { name: "React.js", level: "Ahli" },
    { name: "Tailwind CSS", level: "Ahli" },
    { name: "Framer Motion", level: "Lanjutan" },
    { name: "Vite", level: "Lanjutan" },
    { name: "Next.js", level: "Menengah" }
  ],
  backendTools: [
    { name: "Node.js & Express", level: "Lanjutan" },
    { name: "Git & GitHub", level: "Ahli" },
    { name: "PostgreSQL / MySQL", level: "Menengah" },
    { name: "VS Code", level: "Ahli" },
    { name: "Figma", level: "Menengah" },
    { name: "Docker Basics", level: "Dasar" }
  ]
};

export const timeline = [
  {
    year: "2024 - Sekarang",
    title: "Mahasiswa Pendidikan Teknologi Informasi",
    institution: "Universitas Brawijaya",
    description: "Mempelajari Pemrograman Berorientasi Objek, Arsitektur Perangkat Lunak, Rekayasa Perangkat Lunak, Struktur Data & Algoritma, serta Pengembangan Web."
  },
  {
    year: "2024",
    title: "Web Developer - Project Mahasiswa",
    institution: "Universitas Brawijaya",
    description: "Merancang dan merintis portal informasi dan aplikasi akademis interaktif bagi tugas besar mahasiswa."
  },
  {
    year: "2023 - 2024",
    title: "Front-End Development & Self Project",
    institution: "Self-Driven Learning",
    description: "Fokus mendalami ekosistem React.js, Tailwind CSS, serta animasi interaktif menggunakan Framer Motion."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Dosen Pembimbing PTI",
    role: "Universitas Brawijaya",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    text: "Gilang memiliki logika pemrograman yang rapi dan konsisten. Hasil pengembangan aplikasi web selalu bersih secara struktur kode dan responsif.",
    rating: 5
  },
  {
    id: 2,
    name: "Rizky A.",
    role: "Rekan Tim Project",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    text: "Rekan kerja tim yang sangat solutif. Menguasai pembuatan UI interaktif dengan cepat serta komunikasi yang baik dalam proyek.",
    rating: 5
  }
];
