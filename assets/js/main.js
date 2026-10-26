/**
 * Portfolio Interactive Logic
 * Antislop Compliant: Functional Completeness (R-26), Keyboard Nav (R-32), Theme Resilience (R-34)
 */

// Project Data Registry (Makes adding photos & projects trivial for GitHub Pages)
const PROJECTS_DATA = [
  {
    id: "kindergarten",
    title: "Website for Kindergarten School",
    organization: "TK Muslimat NU 29 Malang",
    methodology: "Waterfall SDLC",
    summary: "Kindergarten schools are often overlooked and under-promoted online. We built a dedicated profile website showcasing the school's background, active curriculum, programs, and facilities that typically do not fit in a Google Maps business snippet.",
    takeaway: "My first project practicing complete SDLC with the Waterfall model and hands-on frontend web development.",
    techStack: ["HTML5", "CSS3", "Responsive Layout"],
    repoUrl: "https://github.com/Dzaky-Hadyan/TK-Muslimat-NU-29-Malang",
    photos: [
      {
        src: "assets/images/projects/kindergarten/main.png",
        caption: "Landing Page: Header greeting, school introduction, and navigation overview."
      },
      {
        src: "assets/images/projects/kindergarten/profil.png",
        caption: "School Profile: Vision, mission statement, institutional background, and teaching staff."
      },
      {
        src: "assets/images/projects/kindergarten/profil_detail.png",
        caption: "Profile Details: Extended breakdown of educational programs and core values."
      },
      {
        src: "assets/images/projects/kindergarten/kegiatan.png",
        caption: "Student Activities: Photo gallery documenting classroom learning and extracurricular events."
      },
      {
        src: "assets/images/projects/kindergarten/prestasi.png",
        caption: "Student Achievements: Honors, competitions, and academic milestones earned by students."
      },
      {
        src: "assets/images/projects/kindergarten/informasi.png",
        caption: "Announcements: Notice board for school events, holidays, and enrollment schedules."
      },
      {
        src: "assets/images/projects/kindergarten/informasi_detail.png",
        caption: "Announcement Detail: In-depth article view with full event guidelines and dates."
      }
    ]
  },
  {
    id: "campus-lab",
    title: "Campus Laboratory Company Profile",
    organization: "State Polytechnic of Malang",
    methodology: "CMS Development & Project Management",
    summary: "Campus laboratories are crucial for project development, yet public information online was sparse. We engineered a full Content Management System (CMS) web portal for laboratory discovery, equipment inventory, and facility information.",
    takeaway: "Served as Project Manager for this semester project. Learned sprint scheduling, client documentation, and coordinating frontend with backend engineers.",
    techStack: ["PHP", "CSS / Bootstrap", "JavaScript", "PostgreSQL"],
    repoUrl: "https://github.com/MuhammadAryatamaM/Laboratory-Company-Profile-Web",
    photos: [
      {
        src: "assets/images/projects/campus-lab/main.png",
        caption: "Public Portal: Hero overview, laboratory objectives, and quick links to facilities."
      },
      {
        src: "assets/images/projects/campus-lab/berita.png",
        caption: "Laboratory News: Archive of research updates, project announcements, and publications."
      },
      {
        src: "assets/images/projects/campus-lab/produk.png",
        caption: "Research Output & Equipment: Catalog of hardware prototypes and laboratory equipment."
      },
      {
        src: "assets/images/projects/campus-lab/galeri.png",
        caption: "Activity Gallery: Visual documentation of practical sessions and research testing."
      },
      {
        src: "assets/images/projects/campus-lab/tim.png",
        caption: "Research Directory: Laboratory heads, lecturers, and student researcher profiles."
      },
      {
        src: "assets/images/projects/campus-lab/login.png",
        caption: "Admin Access: Authentication portal for lab managers and site operators."
      },
      {
        src: "assets/images/projects/campus-lab/dashboard.png",
        caption: "CMS Dashboard: Administrative control panel with data counts and quick actions."
      },
      {
        src: "assets/images/projects/campus-lab/cms_berita.png",
        caption: "News CMS Table: Record management for drafting, editing, and publishing news posts."
      },
      {
        src: "assets/images/projects/campus-lab/edit_berita.png",
        caption: "Article Editor: Form for post titles, category tags, body content, and cover imagery."
      },
      {
        src: "assets/images/projects/campus-lab/cms_tim.png",
        caption: "Staff Management: Admin table for updating laboratory personnel and roles."
      },
      {
        src: "assets/images/projects/campus-lab/message.png",
        caption: "Contact Inbox: Reviewing student inquiries and external partnership requests."
      },
      {
        src: "assets/images/projects/campus-lab/settings.png",
        caption: "Portal Settings: Updating laboratory identity, opening hours, and contact details."
      }
    ]
  },
  {
    id: "hunian-lestari",
    title: "Housing Complex Company Profile",
    organization: "Hunian Lestari",
    methodology: "Agile SDLC",
    summary: "Housing developments have dense specifications, site plans, and pricing structures that cannot be properly communicated via social media posts alone. We developed a unified CMS web platform presenting full housing details and property units.",
    takeaway: "Adopted Agile SDLC. Navigated iterative developer-stakeholder communication and requirements change under tight timelines.",
    techStack: ["PHP / Blade (Laravel)", "Filament CMS", "Tailwind CSS", "MySQL"],
    repoUrl: "https://github.com/MuhammadAryatamaM/Hunian-Lestari-Company-Profile-Web",
    photos: [
      {
        src: "assets/images/projects/hunian-lestari/main.png",
        caption: "Landing Page: Housing estate hero, cluster previews, and strategic access points."
      },
      {
        src: "assets/images/projects/hunian-lestari/about.png",
        caption: "Developer Profile: Company background, building track record, and legal certifications."
      },
      {
        src: "assets/images/projects/hunian-lestari/perumahan.png",
        caption: "Property Catalog: Filterable overview of housing clusters and available units."
      },
      {
        src: "assets/images/projects/hunian-lestari/detail_perumahan.png",
        caption: "Unit Details: Floor plans, architectural dimensions, site plan, and nearby amenities."
      },
      {
        src: "assets/images/projects/hunian-lestari/promo.png",
        caption: "Promotional Campaigns: Active financing discounts and early-bird buyer packages."
      },
      {
        src: "assets/images/projects/hunian-lestari/promo_detail.png",
        caption: "Promotion Terms: Validity conditions, installment terms, and booking steps."
      },
      {
        src: "assets/images/projects/hunian-lestari/informasi.png",
        caption: "Community News: Development milestones, estate updates, and neighborhood news."
      },
      {
        src: "assets/images/projects/hunian-lestari/kontak.png",
        caption: "Marketing Contact: Office address, interactive map, and inquiry form."
      },
      {
        src: "assets/images/projects/hunian-lestari/login.png",
        caption: "Admin Login: Secure authentication screen for the Filament management console."
      },
      {
        src: "assets/images/projects/hunian-lestari/dashboard.png",
        caption: "Filament CMS Dashboard: Estate metrics, recent inquiries, and property counts."
      },
      {
        src: "assets/images/projects/hunian-lestari/cms_perumahan.png",
        caption: "Property Inventory Table: Administrative list of all units, clusters, and prices."
      },
      {
        src: "assets/images/projects/hunian-lestari/edit_perumahan.png",
        caption: "Property Form (Basics): Editing unit code, cluster selection, pricing, and availability."
      },
      {
        src: "assets/images/projects/hunian-lestari/edit_perumahan2.png",
        caption: "Property Form (Specifications): Input fields for land size, building area, and rooms."
      },
      {
        src: "assets/images/projects/hunian-lestari/edit_perumahan3.png",
        caption: "Property Form (Media & Features): Uploading unit gallery photos and amenity tags."
      },
      {
        src: "assets/images/projects/hunian-lestari/edit_berita.png",
        caption: "News CMS Editor: Rich text authoring for promotional articles and community updates."
      },
      {
        src: "assets/images/projects/hunian-lestari/form.png",
        caption: "Inquiry Management: Reviewing potential buyer submissions and contact numbers."
      },
      {
        src: "assets/images/projects/hunian-lestari/settings.png",
        caption: "System Settings: Configuring company contact channels and social media links."
      }
    ]
  },
  {
    id: "kasir-ringan",
    title: "Kasir Ringan (Lightweight Mobile POS)",
    organization: "Personal Utility Project",
    methodology: "Senior-Centered UI/UX",
    summary: "Created to help my parents replace manual pen-and-paper bookkeeping for daily shop sales and profit calculation. Purposefully engineered with high-contrast text, large touch targets, and a straightforward interface so older users can operate it without friction.",
    takeaway: "Designed around real user constraints: eliminating technical jargon, optimizing tap ergonomics, and ensuring fast offline tallying.",
    techStack: ["Dart", "Flutter", "Local SQLite Storage"],
    repoUrl: "https://github.com/MuhammadAryatamaM/Kasir-Ringan",
    photos: [
      {
        src: "assets/images/projects/kasir-ringan/main_open.jpeg",
        caption: "Active Cashier Screen: Open register interface with high-contrast buttons, cart totals, and quick keypad entry."
      },
      {
        src: "assets/images/projects/kasir-ringan/main_close.jpeg",
        caption: "Register Summary & Shift Close: Daily sales calculation and shift close summary."
      },
      {
        src: "assets/images/projects/kasir-ringan/produk.jpeg",
        caption: "Product Management: Inventory catalog with item prices, stock tags, and quick editing."
      },
      {
        src: "assets/images/projects/kasir-ringan/detail_transaksi.jpeg",
        caption: "Transaction Details: Itemized order history, payment breakdown, and timestamped receipts."
      },
      {
        src: "assets/images/projects/kasir-ringan/setting.jpeg",
        caption: "Application Settings: Store profile, printer connection, and offline SQLite database backup."
      }
    ]
  },
  {
    id: "smartcook",
    title: "SmartCook (WIP)",
    organization: "Project Based Learning (PBL)",
    methodology: "Mobile Engineering & Machine Learning",
    summary: "A mobile recipe assistant addressing food waste. Users can search recipes directly or input leftover ingredients currently available in their pantry to receive suggested recipes. My first project integrating an external database and a machine learning model into a mobile client.",
    takeaway: "Gained practical experience connecting a Flutter frontend with Supabase PostgreSQL and deploying ML models trained via Google Colab.",
    techStack: ["Dart / Flutter", "Supabase PostgreSQL", "Machine Learning (Google Colab)"],
    repoUrl: "https://github.com/Adi-Luhung/PBL-SmartCook",
    photos: [
      {
        src: "assets/images/projects/smartcook/beranda.png",
        caption: "Home Dashboard: Recipe discovery feed, category navigation, and quick recommendations."
      },
      {
        src: "assets/images/projects/smartcook/input_bahan.png",
        caption: "Ingredient Input Interface: Multi-select pantry ingredients to generate ML-driven recipe matches."
      },
      {
        src: "assets/images/projects/smartcook/auth.png",
        caption: "Authentication Screen: User login and registration powered by Supabase backend."
      }
    ]
  }
];

// Carousel state tracker for card-level navigation
const carouselState = {};

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initProjects();
  initModal();
});

/* ==========================================================================
   Theme Management (R-21, R-34: Persistent & Functional)
   ========================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const activeTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

  applyTheme(activeTheme);

  toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (!toggleBtn) return;

  if (theme === "dark") {
    toggleBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
    toggleBtn.setAttribute("aria-label", "Switch to light theme");
  } else {
    toggleBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    toggleBtn.setAttribute("aria-label", "Switch to dark theme");
  }
}

/* ==========================================================================
   Render & Manage Project Cards & In-Card Carousels
   ========================================================================== */
function initProjects() {
  const container = document.getElementById("projects-list");
  if (!container) return;

  container.innerHTML = "";

  PROJECTS_DATA.forEach((project) => {
    carouselState[project.id] = { currentIndex: 0 };
    const cardEl = createProjectCard(project);
    container.appendChild(cardEl);
  });
}

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.id = `project-${project.id}`;

  const initialPhoto = project.photos[0];
  const photoCount = project.photos.length;

  card.innerHTML = `
    <div class="project-media-col">
      <div class="carousel-viewport" id="viewport-${project.id}">
        <img 
          src="${initialPhoto.src}" 
          alt="${project.title} screenshot 1" 
          class="carousel-img" 
          id="img-${project.id}" 
          loading="lazy"
          tabindex="0"
          role="button"
          aria-label="Enlarge image 1 of ${project.title}"
        />
        <div class="carousel-overlay-hint">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="21" y1="3" x2="14" y2="10"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
          Click to inspect photos
        </div>
        <div class="carousel-counter" id="counter-${project.id}">1 / ${photoCount}</div>
      </div>
      <div class="carousel-caption-bar" id="caption-bar-${project.id}">${initialPhoto.caption}</div>
      <div class="carousel-controls">
        <div class="carousel-dots" id="dots-${project.id}">
          ${project.photos.map((_, i) => `
            <button 
              type="button" 
              class="carousel-dot ${i === 0 ? 'active' : ''}" 
              data-index="${i}" 
              aria-label="Go to photo ${i + 1}"
            ></button>
          `).join('')}
        </div>
        <div class="carousel-nav-btns">
          <button type="button" class="carousel-btn btn-prev" aria-label="Previous photo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button type="button" class="carousel-btn btn-next" aria-label="Next photo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="project-body-col">
      <div>
        <div class="project-meta-top">
          <span class="project-badge">${project.methodology}</span>
          <span style="font-size: 0.8125rem; color: var(--text-muted);">${project.organization}</span>
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-summary">${project.summary}</p>
        <div class="project-takeaway">
          <div class="takeaway-heading">Key Lesson & Takeaway</div>
          <div>${project.takeaway}</div>
        </div>
        <div class="project-tags">
          ${project.techStack.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
        </div>
      </div>
      <div class="project-actions">
        <button type="button" class="btn-card-action btn-card-primary btn-open-gallery" data-project-id="${project.id}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
          View Photos (${photoCount})
        </button>
        <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-action">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          Repository
        </a>
      </div>
    </div>
  `;

  // Attach carousel events
  const prevBtn = card.querySelector(".btn-prev");
  const nextBtn = card.querySelector(".btn-next");
  const dotBtns = card.querySelectorAll(".carousel-dot");
  const cardImg = card.querySelector(".carousel-img");
  const galleryBtn = card.querySelector(".btn-open-gallery");

  prevBtn.addEventListener("click", () => advanceCardCarousel(project.id, -1));
  nextBtn.addEventListener("click", () => advanceCardCarousel(project.id, 1));

  dotBtns.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-index"), 10);
      setCardCarouselIndex(project.id, idx);
    });
  });

  // Open modal on click or Enter key
  cardImg.addEventListener("click", () => openModal(project.id, carouselState[project.id].currentIndex));
  cardImg.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(project.id, carouselState[project.id].currentIndex);
    }
  });

  galleryBtn.addEventListener("click", () => {
    openModal(project.id, carouselState[project.id].currentIndex);
  });

  // Image load error fallback handler
  cardImg.addEventListener("error", () => {
    handleImageFallback(cardImg, initialPhoto.src);
  });

  return card;
}

function advanceCardCarousel(projectId, delta) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;
  const current = carouselState[projectId].currentIndex;
  const count = project.photos.length;
  const next = (current + delta + count) % count;
  setCardCarouselIndex(projectId, next);
}

function setCardCarouselIndex(projectId, index) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;
  carouselState[projectId].currentIndex = index;

  const card = document.getElementById(`project-${projectId}`);
  if (!card) return;

  const img = card.querySelector(".carousel-img");
  const counter = card.querySelector(".carousel-counter");
  const dots = card.querySelectorAll(".carousel-dot");

  const photo = project.photos[index];
  img.src = photo.src;
  img.alt = `${project.title} screenshot ${index + 1}`;
  counter.textContent = `${index + 1} / ${project.photos.length}`;

  const captionBar = card.querySelector(".carousel-caption-bar");
  if (captionBar) {
    captionBar.textContent = photo.caption;
  }

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

/* ==========================================================================
   Full Photo Gallery Modal (R-26, R-32 Keyboard Accessibility, Zoom Support)
   ========================================================================== */
let modalActiveProject = null;
let modalActiveIndex = 0;
let modalLastFocusedElement = null;
let isModalZoomed = false;

function initModal() {
  const modal = document.getElementById("gallery-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const prevBtn = document.getElementById("modal-prev-btn");
  const nextBtn = document.getElementById("modal-next-btn");
  const zoomBtn = document.getElementById("modal-zoom-btn");
  const mainImg = document.getElementById("modal-main-img");
  const viewport = document.getElementById("modal-viewport");

  if (!modal) return;

  closeBtn.addEventListener("click", closeModal);
  prevBtn.addEventListener("click", () => navigateModal(-1));
  nextBtn.addEventListener("click", () => navigateModal(1));

  // Zoom Button toggle
  if (zoomBtn) {
    zoomBtn.addEventListener("click", () => toggleModalZoom());
  }

  // Click image to toggle zoom (with drag detection to allow scrolling)
  if (mainImg) {
    let isDragging = false;
    let startX = 0;
    let startY = 0;

    mainImg.addEventListener("mousedown", (e) => {
      isDragging = false;
      startX = e.clientX;
      startY = e.clientY;
    });

    mainImg.addEventListener("mousemove", (e) => {
      if (Math.abs(e.clientX - startX) > 6 || Math.abs(e.clientY - startY) > 6) {
        isDragging = true;
      }
    });

    mainImg.addEventListener("click", (e) => {
      if (isDragging) {
        isDragging = false;
        return;
      }
      toggleModalZoom();
    });
  }

  // Viewport keyboard Enter/Space to zoom when focused
  if (viewport) {
    viewport.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleModalZoom();
      }
    });
  }

  // Close on backdrop click outside modal-content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("open")) return;

    if (e.key === "Escape") {
      closeModal();
    } else if (e.key === "ArrowLeft") {
      navigateModal(-1);
    } else if (e.key === "ArrowRight") {
      navigateModal(1);
    } else if (e.key === "z" || e.key === "Z") {
      e.preventDefault();
      toggleModalZoom();
    }
  });
}

function toggleModalZoom(forceState) {
  const viewport = document.getElementById("modal-viewport");
  const zoomBtn = document.getElementById("modal-zoom-btn");
  if (!viewport) return;

  if (typeof forceState === "boolean") {
    isModalZoomed = forceState;
  } else {
    isModalZoomed = !isModalZoomed;
  }

  viewport.classList.toggle("is-zoomed", isModalZoomed);

  if (isModalZoomed) {
    viewport.focus();
  } else {
    viewport.scrollTop = 0;
    viewport.scrollLeft = 0;
  }

  if (zoomBtn) {
    const zoomInIcon = zoomBtn.querySelector(".zoom-in-icon");
    const zoomOutIcon = zoomBtn.querySelector(".zoom-out-icon");
    const zoomText = zoomBtn.querySelector(".zoom-text");

    if (zoomInIcon && zoomOutIcon) {
      zoomInIcon.style.display = isModalZoomed ? "none" : "block";
      zoomOutIcon.style.display = isModalZoomed ? "block" : "none";
    }
    if (zoomText) {
      zoomText.textContent = isModalZoomed ? "Fit to Screen" : "Zoom (100%)";
    }
    zoomBtn.setAttribute("aria-label", isModalZoomed ? "Reset to fit screen (Shortcut: Z)" : "Toggle full image width zoom (Shortcut: Z)");
    zoomBtn.setAttribute("title", isModalZoomed ? "Fit to window (or click image / press Z)" : "Zoom full width (or click image / press Z)");
  }
}

function openModal(projectId, startIndex = 0) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  modalActiveProject = project;
  modalActiveIndex = startIndex;
  modalLastFocusedElement = document.activeElement;

  const modal = document.getElementById("gallery-modal");
  modal.classList.add("open");
  document.body.style.overflow = "hidden"; // Prevent background scroll

  toggleModalZoom(false);
  renderModalContent();

  const closeBtn = document.getElementById("modal-close-btn");
  if (closeBtn) closeBtn.focus();
}

function closeModal() {
  const modal = document.getElementById("gallery-modal");
  if (!modal) return;

  modal.classList.remove("open");
  document.body.style.overflow = "";

  toggleModalZoom(false);

  if (modalActiveProject) {
    setCardCarouselIndex(modalActiveProject.id, modalActiveIndex);
  }

  if (modalLastFocusedElement && typeof modalLastFocusedElement.focus === "function") {
    modalLastFocusedElement.focus();
  }
}

function navigateModal(delta) {
  if (!modalActiveProject) return;
  const count = modalActiveProject.photos.length;
  modalActiveIndex = (modalActiveIndex + delta + count) % count;
  toggleModalZoom(false);
  renderModalContent();
}

function renderModalContent() {
  if (!modalActiveProject) return;
  const project = modalActiveProject;
  const photo = project.photos[modalActiveIndex];
  const count = project.photos.length;

  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-counter").textContent = `Photo ${modalActiveIndex + 1} of ${count}`;

  const mainImg = document.getElementById("modal-main-img");
  mainImg.src = photo.src;
  mainImg.alt = `${project.title} screenshot ${modalActiveIndex + 1}`;

  document.getElementById("modal-caption").textContent = photo.caption;

  // Filmstrip thumbnails
  const filmstrip = document.getElementById("modal-filmstrip");
  filmstrip.innerHTML = project.photos.map((p, i) => `
    <button 
      type="button" 
      class="modal-thumb-btn ${i === modalActiveIndex ? 'active' : ''}" 
      data-thumb-index="${i}"
      aria-label="View photo ${i + 1}"
    >
      <img src="${p.src}" alt="Thumbnail ${i + 1}" class="modal-thumb-img" />
    </button>
  `).join('');

  filmstrip.querySelectorAll(".modal-thumb-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-thumb-index"), 10);
      modalActiveIndex = idx;
      toggleModalZoom(false);
      renderModalContent();
    });
  });
}

function handleImageFallback(imgElement, failedSrc) {
  imgElement.onerror = null; // Prevent loop
  imgElement.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="380" viewBox="0 0 600 380"><rect width="600" height="380" fill="%231e293b"/><text x="50%25" y="45%25" fill="%23f8fafc" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">Screenshot Ready for Upload</text><text x="50%25" y="55%25" fill="%2394a3b8" font-family="monospace" font-size="12" text-anchor="middle">${failedSrc}</text></svg>`;
}
