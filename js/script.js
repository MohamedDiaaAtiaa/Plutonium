/**
 * PLUTONIUM Portfolio Script
 * Modern Vanilla JS implementation matching Tailwind UI.
 */

const DATA = {
    works: [
        {
            id: "shred",
            name: "Shred a Car",
            desc: "High-fidelity demolition physics. Specialized in engine-level vehicle destruction and procedural damage algorithms.",
            status: "Primary",
            media: [
                { type: 'image', src: 'assets/PastWorkContent/Shred a car (released)/ImageContent1.png' },
                { type: 'image', src: 'assets/PastWorkContent/Shred a car (released)/ImageContent2.png' }
            ]
        },
        {
            id: "fishing",
            name: "Fish a Brainrot",
            desc: "Advanced aquatic simulation. Engineered procedural reel physics and dynamic entity AI behaviors.",
            status: "Active",
            media: [
                { type: 'video', src: 'assets/PastWorkContent/Fish A Brainrot (unreleased)/MainVideo.mp4' },
                { type: 'image', src: 'assets/PastWorkContent/Fish A Brainrot (unreleased)/ImageContent1.png' }
            ]
        },
        {
            id: "hype",
            name: "HypeTechs",
            desc: "Next-generation movement architecture. Implementing procedural IK systems and fluid parkour logic.",
            status: "Experimental",
            media: [
                { type: 'video', src: 'assets/PastWorkContent/HypeTechs (unreleased)/MainVideo.mp4' }
            ]
        },
        {
            id: "lying",
            name: "Lying Challenge",
            desc: "State-driven interface architecture. Optimized for high-performance game loop management and real-time state sync.",
            status: "Optimization",
            media: [
                { type: 'video', src: 'assets/PastWorkContent/Lying Challange (unreleased)/MainVideo.mp4' },
                { type: 'image', src: 'assets/PastWorkContent/Lying Challange (unreleased)/ImageContent1.png' },
                { type: 'image', src: 'assets/PastWorkContent/Lying Challange (unreleased)/ImageContent2.png' },
                { type: 'image', src: 'assets/PastWorkContent/Lying Challange (unreleased)/ImageContent6.png' }
            ]
        },
        {
            id: "eatandrun",
            name: "Eat and Run",
            desc: "Developed for SxD Games. Specialized gameplay mechanics and high-speed character controller logic for a fast-paced multiplayer experience.",
            status: "Released",
            media: []
        },
        {
            id: "vulkano",
            name: "Vulkano Studios",
            desc: "UI/UX Engineering. Designed and implemented high-performance interface frameworks and responsive HUD systems for studio-level projects.",
            status: "UI Design",
            media: []
        }
    ],
    certs: [
        "4f24d2b9-9050-489a-b889-2b1e07fc075b.png",
        "9cd40265-c5ae-48a5-9b5d-cc2071effe4d.png",
        "advanced-rag-vector-databases.png",
        "agentic-ai-crewai-autogen.png",
        "agentic-ai-langchain-langgraph.png",
        "assets-threats-vulnerabilities.png",
        "build-multimodal-gen-ai.png",
        "build-rag-applications.png",
        "connect-protect-networks.png",
        "crash-course-python.png",
        "designing-ui-ux.png",
        "develop-gen-ai-get-started.png",
        "developing-bootstrap.png",
        "developing-react-apps.png",
        "ed6b7559-eef3-4cd9-9a74-acc19b89f3b4.png",
        "f3779506-5cbe-4f65-a06e-46cc2d9d851b.png",
        "f704c737-e0eb-445a-a21d-e5cc444f4c54.png",
        "foundations-cybersecurity.png",
        "fundamentals-building-ai-agents.png",
        "getting-started-excel.png",
        "ibm-rag-agentic-ai-spec.png",
        "intro-html-css-js.png",
        "intro-software-engineering.png",
        "play-it-safe-security.png",
        "python-os-interaction.png",
        "tools-trade-linux-sql.png",
        "vector-databases-rag-intro.png"
    ]
};

class PortfolioApp {
    constructor() {
        this.modal = document.getElementById('modal');
        this.modalContent = document.getElementById('modal-container');
        this.isModalOpen = false;

        this.init();
        this.initThree();
        this.initReveal();
    }

    init() {
        this.renderWorks();
        this.renderCerts();
        this.bindEvents();
    }

    initReveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                    entry.target.classList.remove('reveal');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    initThree() {
        const canvas = document.getElementById('three-canvas');
        if (!canvas) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        // Starfield
        const starCount = 5000;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(starCount * 3);
        const colors = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 3000;
            colors[i] = 0.5 + Math.random() * 0.5;
        }
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        const material = new THREE.PointsMaterial({ size: 1.2, vertexColors: true, transparent: true, opacity: 0.8 });
        const stars = new THREE.Points(geometry, material);
        scene.add(stars);

        // Planet
        const planetGeo = new THREE.SphereGeometry(25, 64, 64);
        const planetMat = new THREE.MeshPhongMaterial({
            color: 0x050505,
            shininess: 30,
            specular: 0x444444
        });
        const planet = new THREE.Mesh(planetGeo, planetMat);
        planet.position.set(120, -40, -150);
        scene.add(planet);

        // Planet Rings
        const ringGeo = new THREE.RingGeometry(35, 60, 128);
        const ringMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.1,
            wireframe: false
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2.2;
        planet.add(ring);

        // Rim Lighting
        const light = new THREE.DirectionalLight(0xffffff, 0.8);
        light.position.set(-1, 0.5, 1);
        scene.add(light);

        const blueLight = new THREE.PointLight(0x0044ff, 0.5);
        blueLight.position.set(-100, 100, 50);
        scene.add(blueLight);

        camera.position.z = 100;

        // Mouse Parallax
        let mouseX = 0, mouseY = 0;
        window.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX - window.innerWidth / 2) / 200;
            mouseY = (e.clientY - window.innerHeight / 2) / 200;
        });

        const animate = () => {
            requestAnimationFrame(animate);
            stars.rotation.y += 0.0001;
            planet.rotation.y += 0.002;
            ring.rotation.z += 0.001;

            camera.position.x += (mouseX - camera.position.x) * 0.03;
            camera.position.y += (-mouseY - camera.position.y) * 0.03;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        animate();
    }

    renderWorks() {
        const grid = document.getElementById('works-grid');
        if (!grid) return;

        DATA.works.forEach(work => {
            const card = document.createElement('div');
            card.className = "group relative bg-zinc-950/40 border border-white/[0.03] p-12 hover:border-white/20 transition-all duration-700 cursor-pointer overflow-hidden transform hover:-translate-y-4";
            card.innerHTML = `
                <div class="relative z-10">
                    <div class="flex items-center justify-between mb-10">
                        <span class="text-[8px] font-orbitron font-black tracking-widest text-zinc-700 uppercase border border-zinc-900 px-3 py-1 bg-black/50">${work.name.split(' ')[0]} LOG</span>
                        <div class="h-[1px] w-12 bg-zinc-800 group-hover:w-24 transition-all duration-700"></div>
                    </div>
                    <h3 class="font-orbitron text-3xl font-bold uppercase tracking-tighter mb-6 group-hover:text-white transition-colors">${work.name}</h3>
                    <p class="text-zinc-500 font-light text-lg leading-relaxed mb-12 group-hover:text-zinc-400 transition-colors">${work.desc}</p>
                    <div class="flex items-center gap-4 text-[10px] font-black font-orbitron text-zinc-700 group-hover:text-white transition-all">
                        EXPLORE ARCHIVE
                        <span class="text-lg group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                </div>
                <div class="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            `;
            card.addEventListener('click', () => this.openModal(work));
            grid.appendChild(card);
        });
    }

    renderCerts() {
        const grid = document.getElementById('certs-grid');
        if (!grid) return;

        DATA.certs.forEach(cert => {
            const item = document.createElement('div');
            item.className = "bg-white/[0.02] border border-white/[0.05] p-2 hover:border-white/20 transition-all opacity-40 hover:opacity-100 grayscale hover:grayscale-0 cursor-pointer";
            item.innerHTML = `<img src="assets/Certifications/${cert}" alt="${cert}" loading="lazy" class="w-full h-auto">`;
            item.addEventListener('click', () => {
                this.openImageModal(cert);
            });
            grid.appendChild(item);
        });
    }

    bindEvents() {
        // Toggle Certs
        const toggleBtn = document.getElementById('toggle-certs');
        const certGrid = document.getElementById('certs-grid');
        if (toggleBtn && certGrid) {
            toggleBtn.addEventListener('click', () => {
                const isExpanded = certGrid.classList.contains('max-h-none');
                if (isExpanded) {
                    certGrid.classList.remove('max-h-none');
                    certGrid.style.maxHeight = '400px';
                    toggleBtn.innerText = 'Expand Archives';
                    certGrid.scrollIntoView({ behavior: 'smooth' });
                } else {
                    certGrid.classList.add('max-h-none');
                    certGrid.style.maxHeight = '2000px';
                    toggleBtn.innerText = 'Collapse Archives';
                }
            });
        }

        // About Cards Modals
        const aboutCards = document.querySelectorAll('#about .group');
        aboutCards.forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                const title = card.querySelector('h3').innerText;
                const content = card.querySelector('p, ul').innerHTML;
                this.openTextModal(title, content);
            });
        });

        // Contact Form Submission (Using FormSubmit.co for reliable AJAX)
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const btn = contactForm.querySelector('button[type="submit"]');
                const btnSpan = btn.querySelector('span');
                const originalText = btnSpan.innerText;

                btn.disabled = true;
                btnSpan.innerText = 'SENDING...';

                const formData = new FormData(contactForm);
                const data = Object.fromEntries(formData);

                try {
                    const response = await fetch('https://formsubmit.co/ajax/mohameddiaaatiaa@gmail.com', {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    });

                    if (response.ok) {
                        btnSpan.innerText = 'SUCCESS';
                        btn.style.backgroundColor = '#10b981'; // Green
                        contactForm.reset();
                    } else {
                        throw new Error();
                    }
                } catch (err) {
                    btnSpan.innerText = 'ERROR';
                    btn.style.backgroundColor = '#ef4444'; // Red
                } finally {
                    setTimeout(() => {
                        btnSpan.innerText = originalText;
                        btn.style.backgroundColor = '';
                        btn.disabled = false;
                    }, 5000);
                }
            });
        }

        // Modal Close
        const closeBtn = document.getElementById('modal-close');
        if (closeBtn) closeBtn.addEventListener('click', () => this.closeModal());

        if (this.modal) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) this.closeModal();
            });
        }

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isModalOpen) this.closeModal();
        });
    }

    openModal(work) {
        this.resetModal();
        const title = document.getElementById('modal-title');
        const body = document.getElementById('modal-body');

        this.isModalOpen = true;
        title.innerText = `${work.name.toUpperCase()} // SYSTEM LOG`;

        work.media.forEach(item => {
            const container = document.createElement('div');
            container.className = "border border-zinc-900 bg-zinc-950 p-2 mb-4";

            if (item.type === 'video') {
                const vid = document.createElement('video');
                vid.src = item.src;
                vid.controls = true;
                vid.className = "w-full max-h-[70vh]";
                container.appendChild(vid);
            } else {
                const img = document.createElement('img');
                img.src = item.src;
                img.className = "w-full h-auto";
                container.appendChild(img);
            }
            body.appendChild(container);
        });

        this.showModal();
    }

    openImageModal(cert) {
        this.resetModal();
        const title = document.getElementById('modal-title');
        const body = document.getElementById('modal-body');

        this.isModalOpen = true;
        title.innerText = "CERTIFICATION ARCHIVE";

        const img = document.createElement('img');
        img.src = `assets/Certifications/${cert}`;
        img.className = "w-full h-auto border border-zinc-900";
        body.appendChild(img);

        this.showModal();
    }

    openTextModal(titleText, contentHtml) {
        this.resetModal();
        const title = document.getElementById('modal-title');
        const body = document.getElementById('modal-body');

        this.isModalOpen = true;
        title.innerText = `LOG: ${titleText.toUpperCase()}`;

        const container = document.createElement('div');
        container.className = "text-zinc-400 font-light text-xl leading-relaxed py-10";
        container.innerHTML = contentHtml;
        body.appendChild(container);

        this.showModal();
    }

    resetModal() {
        if (!this.modal) return;
        const body = document.getElementById('modal-body');
        body.innerHTML = '';
        const vids = this.modal.querySelectorAll('video');
        vids.forEach(v => v.pause());
    }

    showModal() {
        this.modal.classList.remove('pointer-events-none', 'opacity-0');
        this.modal.classList.add('pointer-events-auto', 'opacity-100');
        this.modalContent.classList.remove('modal-enter');
        this.modalContent.classList.add('modal-active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        if (!this.modal || !this.modalContent) return;
        this.isModalOpen = false;
        this.modal.classList.remove('pointer-events-auto', 'opacity-100');
        this.modal.classList.add('pointer-events-none', 'opacity-0');
        this.modalContent.classList.remove('modal-active');
        this.modalContent.classList.add('modal-enter');
        document.body.style.overflow = '';
        this.resetModal();
    }
}

// Start App
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});
