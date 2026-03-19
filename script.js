/* ------------------------------------------------------------------
   1. TAILWIND CONFIGURATION
------------------------------------------------------------------ */
if (typeof window !== "undefined" && window.tailwind) {
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    brand: {
                        blue: '#3B82F6',
                        purple: '#8B5CF6',
                        dark: '#020617'
                    }
                }
            }
        }
    };
}

/* ------------------------------------------------------------------
   2. GLOBAL PAGINATION LOGIC
   (Moved outside DOMContentLoaded so filterProjects can access it)
------------------------------------------------------------------ */
let currentCategoryPager = 'web';
// Track the starting index for each category independently
const currentStart = { web: 0, branding: 0, qr: 0, posters: 0 };
let pagerAuto = null;
function startPagerAuto() {
    if (pagerAuto) clearInterval(pagerAuto);
    pagerAuto = setInterval(() => nextPage(), 6000);
}

function getVisibleCount() {
    return window.innerWidth >= 1024 ? 6 : 1;
}

function getCategoryItems(cat) {
    return Array.from(document.querySelectorAll(`.project-item.${cat}`));
}

function renderPage(cat) {
    const items = getCategoryItems(cat);
    const visible = getVisibleCount();

    // Ensure we don't scroll past the end
    const maxStart = Math.max(0, items.length - visible);
    
    // Safety check boundaries
    if (currentStart[cat] > maxStart) currentStart[cat] = maxStart;
    if (currentStart[cat] < 0) currentStart[cat] = 0;

    const start = currentStart[cat];

    // Toggle visibility
    items.forEach((item, idx) => {
        if (idx >= start && idx < start + visible) {
            item.style.display = 'block';
            // Small delay for fade-in effect
            setTimeout(() => item.style.opacity = '1', 50);
        } else {
            item.style.display = 'none';
            item.style.opacity = '0';
        }
    });

}

function nextPage() {
    const items = getCategoryItems(currentCategoryPager);
    const visible = getVisibleCount();
    if (!items.length) return;
    const maxStart = Math.max(0, items.length - visible);
    if (currentStart[currentCategoryPager] < maxStart) {
        currentStart[currentCategoryPager]++;
    } else {
        currentStart[currentCategoryPager] = 0; // wrap to beginning
    }
    renderPage(currentCategoryPager);
}

function prevPage() {
    const items = getCategoryItems(currentCategoryPager);
    const visible = getVisibleCount();
    if (!items.length) return;
    const maxStart = Math.max(0, items.length - visible);
    if (currentStart[currentCategoryPager] > 0) {
        currentStart[currentCategoryPager]--;
    } else {
        currentStart[currentCategoryPager] = maxStart; // wrap to last window
    }
    renderPage(currentCategoryPager);
}

// This function is called directly by the HTML onclick events
function filterProjects(category, btn) {
    // 1. Reset Tab Styles
    document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('bg-brand-blue/10', 'text-brand-blue', 'border-brand-blue');
        b.classList.add('text-gray-400', 'border-gray-700');
        b.classList.remove('tab-active');
    });
    
    // 2. Activate Current Tab
    if (btn) {
        btn.classList.remove('text-gray-400', 'border-gray-700');
        btn.classList.add('bg-brand-blue/10', 'text-brand-blue', 'border-brand-blue', 'tab-active');
    }

    // 3. Hide all items initially to clear the view
    const allItems = document.querySelectorAll('.project-item');
    allItems.forEach(item => item.style.display = 'none');

    // 4. Set State & Render
    currentCategoryPager = category;
    currentStart[category] = 0; // always start from the first visible window
    renderPage(category);
    startPagerAuto();
}

/* ------------------------------------------------------------------
   3. APP INITIALIZATION (Wait for DOM)
------------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
    
    // -- Initialize Feather Icons & AOS --
    feather.replace();
    AOS.init({ once: true, offset: 100, duration: 800 });

    

    // -- Refresh Animations on Load/Resize --
    const refreshAOS = () => { if (typeof AOS !== 'undefined') AOS.refreshHard(); };
    window.addEventListener('load', refreshAOS);
    window.addEventListener('resize', () => {
        renderPage(currentCategoryPager); // Re-calculate visible items on resize
        // Re-render ads pager on resize
        if (typeof adsRenderPage === 'function') adsRenderPage();
        setTimeout(() => { if (typeof AOS !== 'undefined') AOS.refresh(); }, 100);
    });

    // -- Dynamic Year --
    const yearSpan = document.getElementById('year');
    if(yearSpan) yearSpan.textContent = `2025-${new Date().getFullYear()}`;

    // -- Mobile Menu --
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    let ignoreNextDocClick = false;
    if (mobileBtn && mobileMenu) {
        const openMenu = () => {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('block');
            mobileBtn.setAttribute('aria-expanded', 'true');
        };
        const closeMenu = () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('block');
            mobileBtn.setAttribute('aria-expanded', 'false');
        };

        mobileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                openMenu();
                ignoreNextDocClick = true; // ignore the click that opened the menu
                setTimeout(() => { ignoreNextDocClick = false; }, 50);
            } else {
                closeMenu();
            }
        });
        // Also prevent touchstart bubbling on mobile
        mobileBtn.addEventListener('touchstart', (e) => { e.stopPropagation(); }, { passive: true });

        document.addEventListener('click', (e) => {
            if (ignoreNextDocClick) return;
            if (!mobileMenu.classList.contains('hidden') && !mobileMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
                closeMenu();
            }
        });

        // -- Close Menu When Clicking a Link Inside It --
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });
    }

    // -- Navbar Scroll & Back-to-top visibility --
    const updateNavAndBtt = () => {
        const nav = document.getElementById('navbar');
        const btt = document.getElementById('back-to-top');

        if (nav) {
            if (window.scrollY > 50) {
                nav.classList.add('bg-slate-900/90', 'shadow-lg');
                nav.classList.remove('glass');
            } else {
                nav.classList.add('glass');
                nav.classList.remove('bg-slate-900/90', 'shadow-lg');
            }
        }

        if (btt) {
            const threshold = 120;
            if (window.scrollY > threshold) {
                btt.classList.remove('opacity-0','pointer-events-none');
                btt.classList.add('opacity-100');
            } else {
                btt.classList.add('opacity-0','pointer-events-none');
                btt.classList.remove('opacity-100');
            }
        }
    };

    window.addEventListener('scroll', updateNavAndBtt);
    // Initialize state on load
    updateNavAndBtt();

    // -- Mobile Swipe for Selected Works --
    const pagerEl = document.getElementById('projects-pager');
    if (pagerEl) {
        let startX = 0;
        let startY = 0;
        let movedX = 0;
        let movedY = 0;
        let tracking = false;
        const threshold = 40;

        pagerEl.addEventListener('touchstart', (e) => {
            const t = e.changedTouches[0];
            startX = t.clientX;
            startY = t.clientY;
            movedX = 0;
            movedY = 0;
            tracking = true;
        }, { passive: true });

        pagerEl.addEventListener('touchmove', (e) => {
            if (!tracking) return;
            const t = e.changedTouches[0];
            movedX = t.clientX - startX;
            movedY = t.clientY - startY;
        }, { passive: true });

        pagerEl.addEventListener('touchend', () => {
            if (!tracking) return;
            tracking = false;
            const absX = Math.abs(movedX);
            const absY = Math.abs(movedY);
            if (absX > absY && absX > threshold) {
                if (movedX < 0) {
                    nextPage();
                } else {
                    prevPage();
                }
                startPagerAuto();
            }
        });
    }

    // -- Mobile Swipe for Our Prices --
    const adsPager = document.getElementById('ads-pager');
    if (adsPager) {
        let startX = 0;
        let startY = 0;
        let movedX = 0;
        let movedY = 0;
        let tracking = false;
        const threshold = 40;

        adsPager.addEventListener('touchstart', (e) => {
            const t = e.changedTouches[0];
            startX = t.clientX;
            startY = t.clientY;
            movedX = 0;
            movedY = 0;
            tracking = true;
        }, { passive: true });

        adsPager.addEventListener('touchmove', (e) => {
            if (!tracking) return;
            const t = e.changedTouches[0];
            movedX = t.clientX - startX;
            movedY = t.clientY - startY;
        }, { passive: true });

        adsPager.addEventListener('touchend', () => {
            if (!tracking) return;
            tracking = false;
            const absX = Math.abs(movedX);
            const absY = Math.abs(movedY);
            if (absX > absY && absX > threshold) {
                if (movedX < 0) {
                    adsNextPage();
                } else {
                    adsPrevPage();
                }
                adsStartAuto();
            }
        });
    }

    const backToTop = document.getElementById('back-to-top');
    if (backToTop) backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // -- Connect Carousel Arrows --
    const projectsPrev = document.getElementById('projects-prev');
    const projectsNext = document.getElementById('projects-next');

    if (projectsPrev) projectsPrev.addEventListener('click', () => { prevPage(); startPagerAuto(); });
    if (projectsNext) projectsNext.addEventListener('click', () => { nextPage(); startPagerAuto(); });

    // -- Initialize Default Tab --
    const defaultWebTab = document.getElementById('tab-web');
    if (defaultWebTab) {
        // Manually trigger click or call function to set initial state
        filterProjects('web', defaultWebTab);
        startPagerAuto();
    }

    // Remove any previously added fullscreen buttons (simplify interaction to click image)
    document.querySelectorAll('.project-item button').forEach(b => {
        if (b.innerHTML.includes('maximize')) b.remove();
    });

    // -- Web3Forms Logic --
    const form = document.getElementById('agency-form');
    const result = document.getElementById('form-result');
    if (form && result) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(form);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);
            
            result.classList.remove('hidden');
            result.innerHTML = "Sending...";
            const submitBtn = form.querySelector('button');
            submitBtn.disabled = true;

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.innerHTML = "✅ Message sent successfully!";
                    result.classList.add('text-green-500');
                    form.reset();
                } else {
                    result.innerHTML = json.message;
                    result.classList.add('text-red-500');
                }
            })
            .catch(error => {
                result.innerHTML = "Something went wrong!";
                result.classList.add('text-red-500');
            })
            .then(() => {
                submitBtn.disabled = false;
                setTimeout(() => result.classList.add('hidden'), 5000);
            });
        });
    }

    // -- Remove broken poster images, if any --
    document.querySelectorAll('.project-item.posters img').forEach(img => {
        const removeItem = () => img.closest('.project-item')?.remove();
        if (img.complete && img.naturalWidth === 0) removeItem();
        img.addEventListener('error', removeItem, { once: true });
    });

    // -- Paystack Logic --
    const PAYSTACK_PUBLIC_KEY = 'pk_live_4e6d0a9feab451dd29683e4b87b1303e47619931';

    window.payWithPaystack = function(planCode, planName) {
        if (typeof PaystackPop === 'undefined') {
            alert('Payment system failed to load. Please refresh and try again.');
            return;
        }

        const emailInput = prompt(`Enter your email address to subscribe to ${planName}:`);
        const email = (emailInput || '').trim();
        if (!email) return;
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        const handler = PaystackPop.setup({
            key: PAYSTACK_PUBLIC_KEY,
            email: email,
            plan: planCode,
            onClose: function() {
                alert('Transaction was not completed, window closed.');
            },
            callback: function(response) {
                const ref = response && response.reference ? `?reference=${encodeURIComponent(response.reference)}` : '';
                window.location.href = `success.html${ref}`;
            }
        });
        handler.openIframe();
    };

    let galleryMap = { web: [], branding: [], qr: [], posters: [], ads: [] };
    
    
const adsData = [
    {
        name: "Emergency Website Fixes",
        tagline: "Priority support",
        price: "R699/hr",
        note: "For urgent issues that need immediate attention.",
        img: "Advertisements/Digital Portfolio.jpg",
        cta: "Request Support",
        viewLabel: "View design",
        waText: "Hi Ruan, I need emergency website support and would like a quote for urgent fixes.",
        features: ["Priority support", "Critical fixes", "Fast turnaround"]
    },
    {
        name: "Ongoing Improvements",
        tagline: "Major changes",
        price: "R499/hr",
        note: "Best for larger design, layout, and feature updates on an existing website.",
        img: "Advertisements/Digital Portfolio.jpg",
        cta: "Request Changes",
        viewLabel: "View design",
        waText: "Hi Ruan, I would like help with larger website improvements and a quote for major changes.",
        features: ["Larger updates", "Design changes", "Feature improvements"]
    },
    {
        name: "Affordable Upkeep",
        tagline: "Minor updates",
        price: "R249/hr",
        note: "Ideal for small content edits, quick fixes, and regular website upkeep.",
        img: "Advertisements/Digital Portfolio.jpg",
        cta: "Request Update",
        viewLabel: "View design",
        waText: "Hi Ruan, I need help with minor website updates and regular upkeep.",
        features: ["Small edits", "Content updates", "Affordable upkeep"]
    },
    {
        name: "AI Chatbot",
        tagline: "Smart automation",
        price: "R3,500 once-off",
        subprice: "or R329/month for 12 months",
        note: "A guided chatbot that helps answer questions, qualify leads, and drive enquiries.",
        img: "Advertisements/Chatbot Integration.jpg",
        cta: "Request Quote",
        viewLabel: "View design",
        waText: "Hi Ruan, I would like a quote for AI chatbot integration for my website.",
        features: ["Lead capture", "24/7 responses", "Website integration"]
    },
    {
        name: "Domain & Hosting",
        tagline: "Essential setup",
        price: "R600/year",
        subprice: "or R59/month for 12 months",
        note: "Secure hosting and domain management to keep your business online and reliable.",
        img: "Advertisements/Domain Registration & Hosting.jpg",
        cta: "Request Invoice",
        viewLabel: "View design",
        waText: "Hi Ruan, I would like an invoice for domain registration and hosting.",
        features: ["SSL included", "Domain registration", "Annual renewals managed"]
    },
    {
        name: "Standard Business Website",
        tagline: "For growing businesses",
        price: "From R6,500 once-off",
        subprice: "or R699/month for 12 months",
        note: "Ideal for businesses that need a stronger online presence with more pages and stronger calls to action.",
        img: "Advertisements/Standard Business Website.jpg",
        cta: "Request Invoice",
        viewLabel: "View design",
        waText: "Hi Ruan, I would like an invoice for the Standard Business Website package.",
        features: ["4 to 8 custom pages", "SEO-friendly structure", "Conversion-focused layout"],
        featured: true
    },
    {
        name: "New Business Starter Pack",
        tagline: "Best for new businesses",
        price: "R5,200 once-off",
        subprice: "or R499/month for 12 months",
        note: "A strong launch package for startups that need a professional online presence from day one.",
        img: "Advertisements/business Starter Pack 1.jpg",
        cta: "Request Invoice",
        viewLabel: "View design",
        waText: "Hi Ruan, I would like an invoice for the New Business Starter Pack.",
        features: ["1 to 3 custom pages", "Logo design included", "QR code included"]
    }
];
    const adsGrid = document.getElementById('ads-grid');

    function fmtName(p) {
        const n = p.split('/').pop().replace(/\.[^.]+$/, '');
        return n.replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim();
    }

    function buildGalleries() {
        // Clear map to avoid duplicates
        galleryMap = { web: [], branding: [], qr: [], posters: [], ads: [] };

        document.querySelectorAll('.project-item').forEach(item => {
            const img = item.querySelector('img');
            if (!img) return;

            // Determine category
            let cat = null;
            if (item.classList.contains('web')) cat = 'web';
            else if (item.classList.contains('branding')) cat = 'branding';
            else if (item.classList.contains('qr')) cat = 'qr';
            else if (item.classList.contains('posters')) cat = 'posters';
            else if (item.classList.contains('ads')) cat = 'ads';

            if (!cat) return;

            const entry = { src: img.src, title: (item.querySelector('h3')?.textContent || '') };
            galleryMap[cat].push(entry);
            const idx = galleryMap[cat].length - 1;

            // Click behavior
            if (cat === 'web') {
                const linkEl = item.querySelector('a[href^="http"]');
                if (linkEl) {
                    img.style.cursor = 'pointer';
                    item.style.cursor = 'pointer';
                    const openLink = (e) => { e.preventDefault(); window.open(linkEl.href, '_blank', 'noopener'); };
                    img.onclick = openLink;
                    item.onclick = openLink;
                }
            } else {
                img.style.cursor = 'zoom-in';
                item.style.cursor = 'zoom-in';
                const openImage = (e) => { 
                    e.preventDefault(); 
                    e.stopPropagation();
                    openFullscreenGallery(cat, idx); 
                };
                img.onclick = openImage;
                item.onclick = openImage;
            }

            // Allow anchor clicks without triggering card click
            item.querySelectorAll('a').forEach(a => a.addEventListener('click', (e) => e.stopPropagation()));
        });
    }

    function openFullscreenGallery(category, startIndex) {
        let sources = [];
        let titles = [];
        
        if (category === 'ads' && (!galleryMap.ads || galleryMap.ads.length === 0)) {
             sources = adsData.map(d => d.img);
             titles = adsData.map(d => d.name);
        } else if (galleryMap[category]) {
            sources = galleryMap[category].map(e => e.src);
            titles = galleryMap[category].map(e => e.title);
        }

        if (!sources.length) return;
        
        let idx = Math.max(0, startIndex || 0) % sources.length;

        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'fixed inset-0 bg-black z-[100] flex items-center justify-center';
        
        // Image
        const img = document.createElement('img');
        img.className = 'max-w-[95%] max-h-[95%] object-contain shadow-2xl rounded';
        img.src = sources[idx];
        img.alt = titles[idx] || '';
        
        // Caption
        const caption = document.createElement('div');
        caption.className = 'absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-200 text-sm bg-black/50 px-4 py-2 rounded pointer-events-none';
        caption.textContent = titles[idx] || '';

        // Close Button
        const closeBtn = document.createElement('button');
        closeBtn.className = "absolute top-6 right-6 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition-all z-[120]";
        closeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

        // Prev Arrow
        const prevBtn = document.createElement('button');
        prevBtn.className = "absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-4 transition-transform hover:scale-110 z-[120]";
        prevBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>`;

        // Next Arrow
        const nextBtn = document.createElement('button');
        nextBtn.className = "absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-4 transition-transform hover:scale-110 z-[120]";
        nextBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`;

        // Append
        overlay.appendChild(img);
        overlay.appendChild(caption);
        overlay.appendChild(closeBtn);
        overlay.appendChild(prevBtn);
        overlay.appendChild(nextBtn);
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';

        // Hide Chatbot
        const chatToggle = document.getElementById('chat-toggle-button');
        const chatBubble = document.getElementById('chat-welcome-bubble');
        if (chatToggle) chatToggle.style.setProperty('display', 'none', 'important');
        if (chatBubble) chatBubble.style.setProperty('display', 'none', 'important');

        function update() {
            img.src = sources[idx];
            caption.textContent = titles[idx] || '';
        }

        function close() {
            overlay.remove();
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleKey);
            // Restore Chatbot
            if (chatToggle) chatToggle.style.removeProperty('display');
            if (chatBubble) chatBubble.style.removeProperty('display');
        }

        function prev() {
            idx = (idx - 1 + sources.length) % sources.length;
            update();
        }

        function next() {
            idx = (idx + 1) % sources.length;
            update();
        }

        function handleKey(e) {
            if (e.key === 'ArrowLeft') prev();
            else if (e.key === 'ArrowRight') next();
            else if (e.key === 'Escape') close();
        }

        closeBtn.addEventListener('click', close);
        prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prev(); });
        nextBtn.addEventListener('click', (e) => { e.stopPropagation(); next(); });
        overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
        document.addEventListener('keydown', handleKey);

        // Mobile Swipe
        let startX = 0;
        let startY = 0;
        let tracking = false;

        overlay.addEventListener('touchstart', (e) => {
            const t = e.changedTouches[0];
            startX = t.clientX;
            startY = t.clientY;
            tracking = true;
        }, { passive: true });

        overlay.addEventListener('touchend', (e) => {
            if (!tracking) return;
            tracking = false;
            const t = e.changedTouches[0];
            const movedX = t.clientX - startX;
            const movedY = t.clientY - startY;
            const absX = Math.abs(movedX);
            const absY = Math.abs(movedY);

            if (absX > absY && absX > 40) {
                if (movedX < 0) next();
                else prev();
            }
        });
    }

    // Initialize Galleries
    buildGalleries();

    // Inject mobile descriptions for non-web items
    (function injectMobileDescriptions(){
        const items = document.querySelectorAll('.project-item');
        items.forEach(item => {
            if (item.classList.contains('web')) return;
            if (item.querySelector('.mob-desc')) return;
            const overlay = item.querySelector('.absolute');
            const descText = overlay && overlay.querySelector('p') ? overlay.querySelector('p').textContent : '';
            let fallback = '';
            if (item.classList.contains('branding')) fallback = 'Logo and brand identity design.';
            else if (item.classList.contains('posters')) fallback = 'Product sticker / poster design.';
            else if (item.classList.contains('qr')) fallback = 'Custom QR solution linking to maps or websites.';
            const finalDesc = descText || fallback;
            if (!finalDesc) return;
            const wrapper = document.createElement('div');
            wrapper.className = 'md:hidden p-4 text-center space-y-2 mob-desc';
            const p = document.createElement('p');
            p.className = 'text-gray-300 text-sm';
            p.textContent = finalDesc;
            wrapper.appendChild(p);
            item.appendChild(wrapper);
        });
    })();
    // -- Ads Pager Logic (mirrors Selected Works) --
    let adsStart = 0;
    let adsAuto = null;
    const adsPrevBtn = document.getElementById('ads-prev');
    const adsNextBtn = document.getElementById('ads-next');
    function adsGetItems(){ return Array.from(document.querySelectorAll('#ads-grid .project-item.ads')); }
    function adsVisible(){ return window.innerWidth >= 1024 ? 3 : 1; }
    function adsRenderPage(){
        const items = adsGetItems();
        const visible = adsVisible();
        const maxStart = Math.max(0, items.length - visible);
        if (adsStart > maxStart) adsStart = maxStart;
        if (adsStart < 0) adsStart = 0;
        items.forEach((item, idx) => {
            if (idx >= adsStart && idx < adsStart + visible) {
                item.style.display = 'block';
                setTimeout(() => item.style.opacity = '1', 50);
            } else {
                item.style.display = 'none';
                item.style.opacity = '0';
            }
        });
    }
    function adsNextPage(){
        const items = adsGetItems();
        const visible = adsVisible();
        if (!items.length) return;
        const maxStart = Math.max(0, items.length - visible);
        adsStart = (adsStart < maxStart) ? adsStart + 1 : 0;
        adsRenderPage();
    }
    function adsPrevPage(){
        const items = adsGetItems();
        const visible = adsVisible();
        if (!items.length) return;
        const maxStart = Math.max(0, items.length - visible);
        adsStart = (adsStart > 0) ? adsStart - 1 : maxStart;
        adsRenderPage();
    }
    function adsStartAuto(){ if (adsAuto) clearInterval(adsAuto); adsAuto = setInterval(adsNextPage, 8000); }

    
if (adsGrid) {
    const WHATSAPP_BASE = 'https://wa.me/27634733098?text=';

    // Clear any existing pricing markup so the redesigned cards replace,
    // rather than sit behind, the older text-only blocks.
    adsGrid.innerHTML = '';

    adsData.forEach((data) => {
        const card = document.createElement('div');
        card.className = `project-item ads pricing-info-card ${data.featured ? 'pricing-featured' : ''}`;

        const body = document.createElement('div');
        body.className = 'pricing-info-body';

        const topRow = document.createElement('div');
        topRow.className = 'pricing-card-toprow';

        const badge = document.createElement('span');
        badge.className = 'pricing-badge';
        badge.textContent = data.featured ? 'Most Popular' : (data.tagline || 'Service');

        const title = document.createElement('h3');
        title.className = 'pricing-title';
        title.textContent = data.name;

        const priceWrap = document.createElement('div');
        priceWrap.className = 'pricing-price-wrap';

        const price = document.createElement('div');
        price.className = 'pricing-main-price';
        price.textContent = data.price;
        priceWrap.appendChild(price);

        if (data.subprice) {
            const subprice = document.createElement('div');
            subprice.className = 'pricing-subprice';
            subprice.textContent = data.subprice;
            priceWrap.appendChild(subprice);
        }

        const note = document.createElement('p');
        note.className = 'pricing-note';
        note.textContent = data.note;

        const featureList = document.createElement('ul');
        featureList.className = 'pricing-feature-list';
        (data.features || []).forEach((feature) => {
            const li = document.createElement('li');
            li.textContent = feature;
            featureList.appendChild(li);
        });

        const actions = document.createElement('div');
        actions.className = 'pricing-actions';

        const primary = document.createElement('a');
        primary.className = 'pricing-primary-btn';
        primary.href = WHATSAPP_BASE + encodeURIComponent(data.waText || `Hi Ruan, I would like to enquire about ${data.name}.`);
        primary.target = '_blank';
        primary.rel = 'noopener';
        primary.textContent = data.cta || 'Request Quote';

        topRow.appendChild(badge);
        body.appendChild(topRow);
        body.appendChild(title);
        body.appendChild(priceWrap);
        body.appendChild(note);
        body.appendChild(featureList);
        actions.appendChild(primary);
        body.appendChild(actions);
        card.appendChild(body);
        adsGrid.appendChild(card);
    });

    // Rebuild galleries now that the pricing cards exist in the DOM.
    buildGalleries();

    // Initialize ads pager
    adsRenderPage();
    adsStartAuto();
    if (adsPrevBtn) adsPrevBtn.addEventListener('click', () => { adsPrevPage(); adsStartAuto(); });
    if (adsNextBtn) adsNextBtn.addEventListener('click', () => { adsNextPage(); adsStartAuto(); });

    // Premium pricing card spotlight interaction
    requestAnimationFrame(() => {
        document.querySelectorAll('.pricing-info-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty('--x', `${e.clientX - rect.left}px`);
                card.style.setProperty('--y', `${e.clientY - rect.top}px`);
            });
            card.addEventListener('mouseleave', () => {
                card.style.setProperty('--x', '50%');
                card.style.setProperty('--y', '50%');
            });
        });
    });

}

});
