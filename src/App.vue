<script setup>
import { ref, onMounted } from 'vue';

// 1. PALET WARNA BACKGROUND CANVAS
const canvasBgColors = [
    { name: 'Dark Slate', value: '#0f172a' },
    { name: 'Deep Black', value: '#09090b' },
    { name: 'Studio Gray', value: '#334155' },
    { name: 'Minimal White', value: '#f8fafc' },
    { name: 'Warm Sand', value: '#fef3c7' },
    { name: 'Cyber Mint', value: '#064e3b' },
    { name: 'Crimson Red', value: '#450a0a' }
];

const selectedBg = ref('#0f172a');

// 2. INVENTORI ITEM 2D (Lengkap dengan Nickname & Vector Detail)
const inventory = {
    baju: [
        { 
            id: 'b1', name: 'T-Shirt Putih', 
            paths: `<path fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" d="M25 18 L40 18 Q50 32 60 18 L75 18 L90 52 L78 62 L70 45 L70 96 L30 96 L30 45 L22 62 L10 52 Z" />` 
        },
        { 
            id: 'b2', name: 'Kaos Hitam Solid', 
            paths: `<path fill="#0f172a" stroke="#1e293b" stroke-width="1.5" d="M25 18 L40 18 Q50 32 60 18 L75 18 L90 52 L78 62 L70 45 L70 96 L30 96 L30 45 L22 62 L10 52 Z" />` 
        },
        { 
            id: 'b3', name: 'Kemeja Executive Biru Muda', 
            paths: `
                <path fill="#bfdbfe" stroke="#93c5fd" stroke-width="1.5" d="M25 18 L40 20 Q50 32 60 20 L75 18 L90 52 L78 62 L70 45 L70 96 L30 96 L30 45 L22 62 L10 52 Z" />
                <path fill="#93c5fd" stroke="#3b82f6" stroke-width="1.5" d="M30 18 L44 26 L50 20 L56 26 L70 18 L58 32 L42 32 Z" />
                <line x1="50" y1="32" x2="50" y2="96" stroke="#60a5fa" stroke-width="2"/>
                <circle cx="50" cy="42" r="1.2" fill="#1e40af"/>
                <circle cx="50" cy="56" r="1.2" fill="#1e40af"/>
                <circle cx="50" cy="70" r="1.2" fill="#1e40af"/>
                <circle cx="50" cy="84" r="1.2" fill="#1e40af"/>
                <path fill="none" stroke="#60a5fa" stroke-width="1" d="M35 44 L43 44 L43 55 L35 55 Z"/>
            ` 
        },
        {
            id: 'b4', name: 'OP Navy Polo Orange Stripe',
            paths: `
                <path fill="#1e3a8a" stroke="#172554" stroke-width="1.5" d="M25 18 L40 18 Q50 28 60 18 L75 18 L90 52 L78 62 L70 45 L70 96 L30 96 L30 45 L22 62 L10 52 Z" />
                <path fill="#172554" stroke="#1e3a8a" stroke-width="1" d="M30 18 L42 24 L50 20 L58 24 L70 18 L58 30 L42 30 Z" />
                <line x1="50" y1="20" x2="50" y2="40" stroke="#1d4ed8" stroke-width="2"/>
                <circle cx="50" cy="26" r="1" fill="#f8fafc"/>
                <circle cx="50" cy="34" r="1" fill="#f8fafc"/>
                <!-- Vertical Orange Stripe di Kiri -->
                <rect x="34" y="18" width="4" height="78" fill="#f97316"/>
            `
        },
        {
            id: 'b5', name: 'OP Black Polo H-Stripes',
            paths: `
                <path fill="#0f172a" stroke="#1e293b" stroke-width="1.5" d="M25 18 L40 18 Q50 28 60 18 L75 18 L90 52 L78 62 L70 45 L70 96 L30 96 L30 45 L22 62 L10 52 Z" />
                <path fill="#1e293b" stroke="#0f172a" stroke-width="1" d="M30 18 L42 24 L50 20 L58 24 L70 18 L58 30 L42 30 Z" />
                <line x1="50" y1="20" x2="50" y2="38" stroke="#334155" stroke-width="2"/>
                <!-- Horizontal Blue & White Stripes di Perut -->
                <rect x="30" y="58" width="40" height="4" fill="#38bdf8"/>
                <rect x="30" y="64" width="40" height="3" fill="#ffffff"/>
            `
        },
        {
            id: 'b6', name: 'Giordano Baby Blue Polo',
            paths: `
                <path fill="#bae6fd" stroke="#7dd3fc" stroke-width="1.5" d="M25 18 L40 18 Q50 28 60 18 L75 18 L90 52 L78 62 L70 45 L70 96 L30 96 L30 45 L22 62 L10 52 Z" />
                <path fill="#7dd3fc" stroke="#0284c7" stroke-width="1" d="M30 18 L42 24 L50 20 L58 24 L70 18 L58 30 L42 30 Z" />
                <line x1="50" y1="20" x2="50" y2="38" stroke="#0284c7" stroke-width="2"/>
                <circle cx="50" cy="26" r="1" fill="#1e3a8a"/>
                <circle cx="50" cy="32" r="1" fill="#1e3a8a"/>
                <!-- Logo Singa Giordano di Dada Kanan -->
                <path fill="#1e3a8a" d="M60 36 Q 64 32 66 36 L 68 38 L 65 40 Q 62 38 60 36 Z" />
                <circle cx="63" cy="35" r="1.5" fill="#f59e0b" />
            `
        },
        {
            id: 'b7', name: 'Kemeja Executive Abu Tua',
            paths: `
                <path fill="#334155" stroke="#1e293b" stroke-width="1.5" d="M25 18 L40 20 Q50 32 60 20 L75 18 L90 52 L78 62 L70 45 L70 96 L30 96 L30 45 L22 62 L10 52 Z" />
                <path fill="#1e293b" stroke="#0f172a" stroke-width="1.5" d="M30 18 L44 26 L50 20 L56 26 L70 18 L58 32 L42 32 Z" />
                <line x1="50" y1="32" x2="50" y2="96" stroke="#1e293b" stroke-width="2"/>
                <circle cx="50" cy="42" r="1.2" fill="#0f172a"/>
                <circle cx="50" cy="56" r="1.2" fill="#0f172a"/>
                <circle cx="50" cy="70" r="1.2" fill="#0f172a"/>
                <circle cx="50" cy="84" r="1.2" fill="#0f172a"/>
                <path fill="none" stroke="#1e293b" stroke-width="1" d="M35 44 L43 44 L43 55 L35 55 Z"/>
            `
        },
        {
            id: 'b8', name: 'Kemeja Executive Putih',
            paths: `
                <path fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" d="M25 18 L40 20 Q50 32 60 20 L75 18 L90 52 L78 62 L70 45 L70 96 L30 96 L30 45 L22 62 L10 52 Z" />
                <path fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5" d="M30 18 L44 26 L50 20 L56 26 L70 18 L58 32 L42 32 Z" />
                <line x1="50" y1="32" x2="50" y2="96" stroke="#e2e8f0" stroke-width="2"/>
                <circle cx="50" cy="42" r="1.2" fill="#64748b"/>
                <circle cx="50" cy="56" r="1.2" fill="#64748b"/>
                <circle cx="50" cy="70" r="1.2" fill="#64748b"/>
                <circle cx="50" cy="84" r="1.2" fill="#64748b"/>
                <path fill="none" stroke="#cbd5e1" stroke-width="1" d="M35 44 L43 44 L43 55 L35 55 Z"/>
            `
        },
        {
            id: 'b9', name: 'Navy Polo TWN',
            paths: `
                <path fill="#1e3a8a" stroke="#172554" stroke-width="1.5" d="M25 18 L40 18 Q50 28 60 18 L75 18 L90 52 L78 62 L70 45 L70 96 L30 96 L30 45 L22 62 L10 52 Z" />
                <path fill="#172554" stroke="#1e3a8a" stroke-width="1" d="M30 18 L42 24 L50 20 L58 24 L70 18 L58 30 L42 30 Z" />
                <line x1="50" y1="20" x2="50" y2="38" stroke="#1d4ed8" stroke-width="2"/>
                <!-- Teks TWN Putih di Dada Kanan -->
                <text x="63" y="38" fill="white" font-size="5" font-weight="900" font-family="Arial, sans-serif">TWN</text>
            `
        },
       {
    id: 'b10', name: 'Batik Lengan Panjang Biru',
    paths: `
        <path fill="#1e3a8a" stroke="#172554" stroke-width="1.5" d="M25 18 L40 20 Q50 32 60 20 L75 18 L95 56 L83 68 L70 45 L70 96 L30 96 L30 45 L17 68 L5 56 Z" />
        <path fill="#172554" stroke="#0f172a" stroke-width="1.2" d="M30 18 L44 26 L50 20 L56 26 L70 18 L58 32 L42 32 Z" />
        <line x1="50" y1="32" x2="50" y2="96" stroke="#0f172a" stroke-width="2"/>
        <!-- Pattern Batik Biru Gelap (Navy Tone-on-Tone) -->
        <g fill="#0f172a" opacity="0.9">
            <path d="M35 40 Q40 35 45 40 Q40 45 35 40 Z M55 40 Q60 35 65 40 Q60 45 55 40 Z" />
            <path d="M35 60 Q40 55 45 60 Q40 65 35 60 Z M55 60 Q60 55 65 60 Q60 65 55 60 Z" />
            <path d="M35 80 Q40 75 45 80 Q40 85 35 80 Z M55 80 Q60 75 65 80 Q60 85 55 80 Z" />
            <path d="M18 45 L22 55 L15 52 Z M82 45 L78 55 L85 52 Z" />
        </g>
    `
},
{
    id: 'b11', name: 'Batik Lengan Panjang Jade Green Grey',
    paths: `
        <path fill="#4a6b5d" stroke="#2d4239" stroke-width="1.5" d="M25 18 L40 20 Q50 32 60 20 L75 18 L95 56 L83 68 L70 45 L70 96 L30 96 L30 45 L17 68 L5 56 Z" />
        <path fill="#2d4239" stroke="#1d2b25" stroke-width="1.2" d="M30 18 L44 26 L50 20 L56 26 L70 18 L58 32 L42 32 Z" />
        <line x1="50" y1="32" x2="50" y2="96" stroke="#1d2b25" stroke-width="2"/>
        <g fill="#cbd5e1" opacity="0.75">
            <circle cx="38" cy="42" r="3" />
            <circle cx="62" cy="42" r="3" />
            <circle cx="38" cy="62" r="3" />
            <circle cx="62" cy="62" r="3" />
            <circle cx="38" cy="82" r="3" />
            <circle cx="62" cy="82" r="3" />
            <path d="M38 38 Q50 50 38 62 M62 38 Q50 50 62 62 M38 58 Q50 70 38 82 M62 58 Q50 70 62 82" stroke="#e2e8f0" stroke-width="1" fill="none"/>
        </g>
    `
}
    ],
    jacket: [
        { 
            id: 'j1', name: 'Kosongkan (Kaos Saja)', paths: '', silhouette: '' 
        },
        { 
            id: 'j2', name: 'Adidas Tracktop (Resleting 3/4)', 
            silhouette: `M38 15 L25 15 L8 52 L16 67 L26 45 L26 96 L74 96 L74 45 L84 67 L92 52 L75 15 L62 15 Q50 22 38 15 Z`,
            paths: `
                <path fill="#18181b" stroke="#27272a" stroke-width="1" d="M38 15 L25 15 L8 52 L16 67 L26 45 L26 96 L47 96 L47 70 Z" />
                <path fill="#18181b" stroke="#27272a" stroke-width="1" d="M62 15 L75 15 L92 52 L84 67 L74 45 L74 96 L53 96 L53 70 Z" />
                <path fill="#18181b" d="M47 70 L53 70 L53 96 L47 96 Z" />
                <line x1="50" y1="70" x2="50" y2="96" stroke="#52525b" stroke-width="2"/>
                <path d="M49 70 L51 70 L51 75 L49 75 Z" fill="#a1a1aa"/>
                <path d="M23 16 L7 50 M26 17 L10 51 M29 18 L13 52" stroke="white" stroke-width="1.5" />
                <path d="M77 16 L93 50 M74 17 L90 51 M71 18 L87 52" stroke="white" stroke-width="1.5" />
            ` 
        },
        { 
            id: 'j4', name: 'Hoodie Nike Hitam', 
            silhouette: `M40 18 Q50 30 60 18 L75 15 L95 55 L85 70 L74 45 L74 96 L26 96 L26 45 L15 70 L5 55 L25 15 Z`,
            paths: `
                <path fill="#09090b" stroke="#27272a" stroke-width="2" d="M40 18 Q50 30 60 18 L75 15 L95 55 L85 70 L74 45 L74 96 L26 96 L26 45 L15 70 L5 55 L25 15 Z" />
                <path d="M45 25 L45 45 M55 25 L55 45" stroke="#3f3f46" stroke-width="2" stroke-linecap="round"/>
                <text x="50" y="42" fill="white" font-size="7" font-weight="900" font-family="Arial, sans-serif" text-anchor="middle" letter-spacing="1">JUST DO IT.</text>
                <path fill="#ef4444" d="M42 52 Q 50 62 62 48 Q 52 56 44 53 Z" />
                <path fill="#18181b" d="M35 70 L65 70 L70 90 L30 90 Z" />
            ` 
        },
        { 
            id: 'j5', name: 'H&M Zip Hoodie Black', 
            silhouette: `M38 16 Q50 8 62 16 L75 15 L92 52 L84 67 L74 45 L74 96 L26 96 L26 45 L16 67 L8 52 L25 15 Z`,
            paths: `
                <path fill="#27272a" stroke="#18181b" stroke-width="1" d="M38 16 Q50 8 62 16 Q50 26 38 16 Z" />
                <path fill="#18181b" stroke="#27272a" stroke-width="1.5" d="M38 16 L25 15 L8 52 L16 67 L26 45 L26 96 L47 96 L47 68 Z" />
                <path fill="#18181b" stroke="#27272a" stroke-width="1.5" d="M62 16 L75 15 L92 52 L84 67 L74 45 L74 96 L53 96 L53 68 Z" />
                <path fill="#18181b" d="M47 68 L53 68 L53 96 L47 96 Z" />
                <line x1="50" y1="68" x2="50" y2="96" stroke="#3f3f46" stroke-width="2"/>
                <rect x="49" y="68" width="2" height="5" fill="#a1a1aa" rx="0.5"/>
                <path d="M25 15.5 L9 51.5" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M75 15.5 L91 51.5" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M43 22 L43 42 M57 22 L57 42" stroke="#09090b" stroke-width="2" stroke-linecap="round"/>
                <circle cx="43" cy="43" r="1.5" fill="#3f3f46"/>
                <circle cx="57" cy="43" r="1.5" fill="#3f3f46"/>
                <path fill="none" stroke="#27272a" stroke-width="1.5" d="M30 72 L42 72 L44 92 L30 92 Z M70 72 L58 72 L56 92 L70 92 Z"/>
            ` 
        },
        {
            id: 'j6', name: 'Executive Collar Black Zip',
            silhouette: `M32 18 L25 15 L8 52 L16 67 L26 45 L26 96 L74 96 L74 45 L84 67 L92 52 L75 15 L68 18 Q50 24 32 18 Z`,
            paths: `
                <!-- Kerah Kerja Formal Terbuka -->
                <path fill="#27272a" stroke="#09090b" stroke-width="1" d="M32 18 L42 24 L50 20 L58 24 L68 18 L58 28 L42 28 Z" />
                <path fill="#18181b" stroke="#09090b" stroke-width="1.5" d="M32 18 L25 15 L8 52 L16 67 L26 45 L26 96 L46 96 L46 65 Z" />
                <path fill="#18181b" stroke="#09090b" stroke-width="1.5" d="M68 18 L75 15 L92 52 L84 67 L74 45 L74 96 L54 96 L54 65 Z" />
                <!-- Zipper Line & Puller -->
                <path fill="#18181b" d="M46 65 L54 65 L54 96 L46 96 Z" />
                <line x1="50" y1="65" x2="50" y2="96" stroke="#3f3f46" stroke-width="2"/>
                <rect x="49" y="65" width="2" height="5" fill="#d4d4d8" rx="0.5"/>
            `
        },
        {
            id: 'j7', name: 'CK Grey Hoodie',
            silhouette: `M40 18 Q50 30 60 18 L75 15 L95 55 L85 70 L74 45 L74 96 L26 96 L26 45 L15 70 L5 55 L25 15 Z`,
            paths: `
                <path fill="#6b7280" stroke="#4b5563" stroke-width="2" d="M40 18 Q50 30 60 18 L75 15 L95 55 L85 70 L74 45 L74 96 L26 96 L26 45 L15 70 L5 55 L25 15 Z" />
                <path d="M45 25 L45 45 M55 25 L55 45" stroke="#9ca3af" stroke-width="2" stroke-linecap="round"/>
                <!-- Logo CK Hitam & Calvin Klein Putih -->
                <text x="50" y="55" fill="#111827" font-size="22" font-weight="900" font-family="Arial, sans-serif" text-anchor="middle">CK</text>
                <text x="50" y="52" fill="#ffffff" font-size="5" font-weight="700" font-family="Arial, sans-serif" text-anchor="middle" letter-spacing="1">CALVIN KLEIN</text>
                <path fill="#4b5563" d="M35 72 L65 72 L70 92 L30 92 Z" />
            `
        },
        {
            id: 'j8', name: 'Adidas Oasis Indigo Blue',
            silhouette: `M38 15 L25 15 L8 52 L16 67 L26 45 L26 96 L74 96 L74 45 L84 67 L92 52 L75 15 L62 15 Q50 22 38 15 Z`,
            paths: `
                <path fill="#312e81" stroke="#1e1b4b" stroke-width="1" d="M38 15 L25 15 L8 52 L16 67 L26 45 L26 96 L47 96 L47 68 Z" />
                <path fill="#312e81" stroke="#1e1b4b" stroke-width="1" d="M62 15 L75 15 L92 52 L84 67 L74 45 L74 96 L53 96 L53 68 Z" />
                <path fill="#312e81" d="M47 68 L53 68 L53 96 L47 96 Z" />
                <line x1="50" y1="68" x2="50" y2="96" stroke="#4338ca" stroke-width="2"/>
                <!-- White Stripes di Lengan -->
                <path d="M23 16 L7 50 M26 17 L10 51 M29 18 L13 52" stroke="white" stroke-width="1.5" />
                <path d="M77 16 L93 50 M74 17 L90 51 M71 18 L87 52" stroke="white" stroke-width="1.5" />
                <!-- Tulisan oasis & Logo Adidas Putih -->
                <text x="35" y="45" fill="white" font-size="6" font-weight="900" font-family="Arial, sans-serif">oasis</text>
                <path fill="white" d="M65 42 L68 37 L70 42 Z M68 42 L71 35 L73 42 Z M71 42 L74 33 L76 42 Z" />
            `
        },
        {
            id: 'j9', name: 'Wrangler Black Bomber',
            silhouette: `M35 18 Q50 26 65 18 L75 15 L95 55 L85 70 L72 45 L72 96 L28 96 L28 45 L15 70 L5 55 L25 15 Z`,
            paths: `
                <path fill="#18181b" stroke="#09090b" stroke-width="2" d="M35 18 Q50 26 65 18 L75 15 L95 55 L85 70 L72 45 L72 96 L28 96 L28 45 L15 70 L5 55 L25 15 Z" />
                <!-- Ribbed Collar & Hem -->
                <path fill="#27272a" d="M35 18 Q50 26 65 18 Q50 22 35 18 Z M28 92 L72 92 L72 96 L28 96 Z" />
                <line x1="50" y1="22" x2="50" y2="92" stroke="#27272a" stroke-width="2"/>
                <!-- Logo Wrangler Putih Kecil di Dada Kanan -->
                <text x="62" y="40" fill="white" font-size="4.5" font-weight="700" font-family="Georgia, serif">Wrangler</text>
            `
        },
        {
            id: 'j10', name: 'Boxy Black Zip Jacket',
            silhouette: `M32 16 Q50 22 68 16 L80 15 L98 56 L86 70 L76 45 L76 96 L24 96 L24 45 L14 70 L2 56 L20 15 Z`,
            paths: `
                <!-- Potongan Boxy Lebar -->
                <path fill="#09090b" stroke="#27272a" stroke-width="2" d="M32 16 Q50 22 68 16 L80 15 L98 56 L86 70 L76 45 L76 96 L24 96 L24 45 L14 70 L2 56 L20 15 Z" />
                <line x1="50" y1="19" x2="50" y2="96" stroke="#3f3f46" stroke-width="2.5"/>
                <!-- Large Flap Cargo Pockets Kiri Kanan -->
                <rect x="28" y="60" width="16" height="20" fill="#18181b" stroke="#27272a" rx="1"/>
                <rect x="56" y="60" width="16" height="20" fill="#18181b" stroke="#27272a" rx="1"/>
            `
        },
        {
            id: 'j11', name: 'H&M Godfather White Hoodie',
            silhouette: `M40 18 Q50 30 60 18 L75 15 L95 55 L85 70 L74 45 L74 96 L26 96 L26 45 L15 70 L5 55 L25 15 Z`,
            paths: `
                <path fill="#f8fafc" stroke="#e2e8f0" stroke-width="2" d="M40 18 Q50 30 60 18 L75 15 L95 55 L85 70 L74 45 L74 96 L26 96 L26 45 L15 70 L5 55 L25 15 Z" />
                <path d="M45 25 L45 45 M55 25 L55 45" stroke="#64748b" stroke-width="1.5" stroke-linecap="round"/>
                <!-- Logo The Godfather Hitam -->
                <text x="50" y="48" fill="#0f172a" font-size="6" font-weight="900" font-family="Times New Roman, serif" text-anchor="middle">The Godfather</text>
                <!-- Puppet Strings Icon -->
                <path stroke="#0f172a" stroke-width="1" d="M42 52 L42 58 M46 52 L46 58 M54 52 L54 58 M58 52 L58 58" />
                <path fill="#e2e8f0" d="M35 72 L65 72 L70 92 L30 92 Z" />
            `
        },
        {
            id: 'j12', name: 'Jack & Jones Cream Hoodie',
            silhouette: `M40 18 Q50 30 60 18 L75 15 L95 55 L85 70 L74 45 L74 96 L26 96 L26 45 L15 70 L5 55 L25 15 Z`,
            paths: `
                <path fill="#fef3c7" stroke="#fde68a" stroke-width="2" d="M40 18 Q50 30 60 18 L75 15 L95 55 L85 70 L74 45 L74 96 L26 96 L26 45 L15 70 L5 55 L25 15 Z" />
                <path d="M45 25 L45 45 M55 25 L55 45" stroke="#d97706" stroke-width="1.5" stroke-linecap="round"/>
                <!-- Tulisan JACK & JONES Hitam -->
                <text x="50" y="46" fill="#18181b" font-size="5.5" font-weight="900" font-family="Arial, sans-serif" text-anchor="middle" letter-spacing="0.5">JACK &amp; JONES</text>
                <path fill="#fde68a" d="M35 72 L65 72 L70 92 L30 92 Z" />
            `
        },
        {
            id: 'j13', name: 'PSG Black Embroidered Hoodie',
            silhouette: `M40 18 Q50 30 60 18 L75 15 L95 55 L85 70 L74 45 L74 96 L26 96 L26 45 L15 70 L5 55 L25 15 Z`,
            paths: `
                <path fill="#09090b" stroke="#27272a" stroke-width="2" d="M40 18 Q50 30 60 18 L75 15 L95 55 L85 70 L74 45 L74 96 L26 96 L26 45 L15 70 L5 55 L25 15 Z" />
                <path d="M45 25 L45 45 M55 25 L55 45" stroke="#3f3f46" stroke-width="2" stroke-linecap="round"/>
                <!-- Logo PSG Crest Embroidered -->
                <circle cx="50" cy="46" r="8" fill="#1e3a8a" stroke="#ffffff" stroke-width="1"/>
                <path fill="#ef4444" d="M48 48 L52 48 L50 40 Z" />
                <circle cx="50" cy="46" r="2" fill="#ffffff"/>
                <path fill="#18181b" d="M35 72 L65 72 L70 92 L30 92 Z" />
            `
        },
        {
    id: 'j14', name: 'Adidas Black Hoodie Green Camo',
    silhouette: `M40 18 Q50 30 60 18 L75 15 L95 55 L85 70 L74 45 L74 96 L26 96 L26 45 L15 70 L5 55 L25 15 Z`,
    paths: `
        <path fill="#0f172a" stroke="#1e293b" stroke-width="2" d="M40 18 Q50 30 60 18 L75 15 L95 55 L85 70 L74 45 L74 96 L26 96 L26 45 L15 70 L5 55 L25 15 Z" />
        <path fill="#3f6212" stroke="#1a2e05" stroke-width="1.5" d="M40 18 Q50 30 60 18 C 65 8, 35 8, 40 18 Z" />
        <path fill="#15803d" opacity="0.8" d="M42 12 Q 48 8 52 14 Q 46 16 42 12 Z" />
        <path fill="#78350f" opacity="0.7" d="M48 10 Q 55 12 50 16 Q 44 14 48 10 Z" />
        <path d="M45 25 L45 42 M55 25 L55 42" stroke="#1a2e05" stroke-width="2" stroke-linecap="round"/>
        <g fill="#15803d">
            <path d="M45 48 C 42 42, 38 46, 35 50 C 42 50, 46 47, 45 48 Z" />
            <path d="M55 48 C 58 42, 62 46, 65 50 C 58 50, 54 47, 55 48 Z" />
            <path d="M50 42 C 46 45, 48 52, 50 52 C 52 52, 54 45, 50 42 Z" />
            <rect x="36" y="51" width="28" height="2" fill="#3f6212" />
        </g>
        <path fill="#1e293b" d="M35 72 L65 72 L70 92 L30 92 Z" />
    `
}
    ],
    celana: [
        { 
            id: 'c1', name: 'Light Blue Denim Ripped', 
            paths: `
                <path fill="#93c5fd" stroke="#60a5fa" stroke-width="2" stroke-linejoin="round" d="M26 0 L74 0 L80 15 L80 40 L65 100 L45 100 L50 40 L50 40 L55 100 L35 100 L20 40 L20 15 Z" />
                <path d="M26 15 L74 15" stroke="#60a5fa" stroke-width="1" />
                <g stroke="#eff6ff" stroke-width="2.5" stroke-linecap="round">
                    <line x1="26" y1="50" x2="40" y2="50" stroke-dasharray="2,3" />
                    <line x1="60" y1="65" x2="72" y2="65" stroke-dasharray="2,3" />
                    <line x1="28" y1="75" x2="35" y2="75" stroke-dasharray="2,3" />
                </g>
            ` 
        },
        { 
            id: 'c2', name: 'Celana Abu Oversize', 
            paths: `
                <path fill="#9ca3af" stroke="#6b7280" stroke-width="2" stroke-linejoin="round" d="M26 0 L74 0 L85 15 L85 50 L75 100 L45 100 L50 40 L50 40 L55 100 L25 100 L15 50 L15 15 Z" />
                <path d="M30 20 L25 60 M70 20 L75 60 M45 70 L40 95 M55 70 L60 95" stroke="#6b7280" stroke-width="1.5" stroke-linecap="round" fill="none"/>
            ` 
        },
        { 
            id: 'c3', name: 'Celana Bahan Executive Hitam', 
            paths: `
                <path fill="#0f172a" stroke="#1e293b" stroke-width="1.5" stroke-linejoin="round" d="M27 0 L73 0 L77 15 L77 40 L64 100 L47 100 L50 38 L50 38 L53 100 L36 100 L23 40 L23 15 Z" />
                <line x1="27" y1="10" x2="73" y2="10" stroke="#334155" stroke-width="1" />
                <line x1="34" y1="0" x2="34" y2="10" stroke="#475569" stroke-width="1.5"/>
                <line x1="50" y1="0" x2="50" y2="10" stroke="#475569" stroke-width="1.5"/>
                <line x1="66" y1="0" x2="66" y2="10" stroke="#475569" stroke-width="1.5"/>
                <line x1="38" y1="15" x2="42" y2="98" stroke="#334155" stroke-width="1"/>
                <line x1="62" y1="15" x2="58" y2="98" stroke="#334155" stroke-width="1"/>
                <path d="M27 12 L35 25 M73 12 L65 25" stroke="#334155" stroke-width="1.2"/>
            ` 
        },
        {
            id: 'c4', name: 'Slim Fit Black Jeans',
            paths: `
                <path fill="#18181b" stroke="#27272a" stroke-width="1.5" stroke-linejoin="round" d="M27 0 L73 0 L77 15 L77 40 L63 100 L47 100 L50 38 L50 38 L53 100 L37 100 L23 40 L23 15 Z" />
                <line x1="27" y1="12" x2="73" y2="12" stroke="#3f3f46" stroke-width="1" />
                <path d="M27 14 L35 25 M73 14 L65 25" stroke="#3f3f46" stroke-width="1"/>
                <!-- Rivets Denim -->
                <circle cx="35" cy="25" r="0.8" fill="#d4d4d8"/>
                <circle cx="65" cy="25" r="0.8" fill="#d4d4d8"/>
            `
        },
        {
            id: 'c5', name: 'Slim Fit Chino Cream',
            paths: `
                <path fill="#fef3c7" stroke="#fde68a" stroke-width="1.5" stroke-linejoin="round" d="M27 0 L73 0 L77 15 L77 40 L63 100 L47 100 L50 38 L50 38 L53 100 L37 100 L23 40 L23 15 Z" />
                <line x1="27" y1="12" x2="73" y2="12" stroke="#d97706" stroke-width="1" />
                <path d="M27 14 L35 25 M73 14 L65 25" stroke="#d97706" stroke-width="1"/>
            `
        },
        {
            id: 'c6', name: 'H&M Light Grey Slim Jeans',
            paths: `
                <path fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5" stroke-linejoin="round" d="M27 0 L73 0 L77 15 L77 40 L63 100 L47 100 L50 38 L50 38 L53 100 L37 100 L23 40 L23 15 Z" />
                <line x1="27" y1="12" x2="73" y2="12" stroke="#64748b" stroke-width="1" />
                <path d="M27 14 L35 25 M73 14 L65 25" stroke="#64748b" stroke-width="1"/>
            `
        },
        {
    id: 'c7', name: 'Celana Bahan Executive Biru',
    paths: `
        <path fill="#1d4ed8" stroke="#1e40af" stroke-width="1.5" stroke-linejoin="round" d="M27 0 L73 0 L77 15 L77 40 L64 100 L47 100 L50 38 L50 38 L53 100 L36 100 L23 40 L23 15 Z" />
        <line x1="27" y1="10" x2="73" y2="10" stroke="#1e3a8a" stroke-width="1" />
        <line x1="34" y1="0" x2="34" y2="10" stroke="#3b82f6" stroke-width="1.5"/>
        <line x1="50" y1="0" x2="50" y2="10" stroke="#3b82f6" stroke-width="1.5"/>
        <line x1="66" y1="0" x2="66" y2="10" stroke="#3b82f6" stroke-width="1.5"/>
        <line x1="38" y1="15" x2="42" y2="98" stroke="#1e3a8a" stroke-width="1"/>
        <line x1="62" y1="15" x2="58" y2="98" stroke="#1e3a8a" stroke-width="1"/>
        <path d="M27 12 L35 25 M73 12 L65 25" stroke="#1e3a8a" stroke-width="1.2"/>
    `
}
    ],
    sepatu: [
        { 
            id: 's1', name: 'Adidas Purechill Black', 
            paths: `
                <path fill="#18181b" stroke="#27272a" stroke-width="1" stroke-linejoin="round" d="M10 35 C 10 15, 30 10, 50 15 C 65 20, 85 25, 95 35 C 95 45, 80 50, 50 50 C 20 50, 10 45, 10 35 Z" />
                <path fill="#09090b" d="M10 35 C 10 45, 30 50, 50 50 C 80 50, 95 45, 95 35 Z" />
                <g fill="white">
                    <polygon points="28,35 38,20 43,22 33,37" />
                    <polygon points="38,38 48,23 53,25 43,40" />
                    <polygon points="48,41 58,26 63,28 53,43" />
                </g>
            ` 
        },
        { 
            id: 's2', name: 'Nike Vapormax 2020 Putih', 
            paths: `
                <path fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-linejoin="round" d="M10 35 C 10 15, 30 10, 50 15 C 65 20, 85 25, 95 35 C 95 42, 80 44, 50 44 C 20 44, 10 42, 10 35 Z" />
                <path fill="#e2e8f0" d="M15 30 C 30 25, 50 25, 80 32 L 85 38 C 50 38, 30 35, 15 35 Z" />
                <path fill="#0f172a" d="M35 28 Q 45 35 65 20 Q 50 30 38 27 Z" />
                <g fill="#bae6fd" stroke="#7dd3fc" stroke-width="1" opacity="0.8">
                    <ellipse cx="20" cy="46" rx="8" ry="4" />
                    <ellipse cx="38" cy="47" rx="8" ry="4" />
                    <ellipse cx="56" cy="47" rx="8" ry="4" />
                    <ellipse cx="74" cy="46" rx="8" ry="4" />
                    <ellipse cx="88" cy="44" rx="6" ry="3" />
                </g>
            ` 
        },
        { 
            id: 's3', name: 'NMD Hu Animal Print Abu', 
            paths: `
                <path fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1" d="M12 38 C 12 45, 30 50, 50 50 C 75 50, 92 45, 92 38 C 92 36, 80 38, 50 38 C 25 38, 12 36, 12 38 Z" />
                <rect x="20" y="38" width="14" height="6" fill="#64748b" rx="1"/>
                <rect x="68" y="39" width="12" height="5" fill="#64748b" rx="1"/>
                <path fill="#64748b" stroke="#475569" stroke-width="1" d="M15 38 C 15 25, 22 10, 32 10 C 38 10, 42 18, 55 22 C 70 25, 88 28, 92 38 Z" />
                <path fill="none" stroke="#f8fafc" stroke-width="2" d="M28 10 C 32 8, 38 12, 42 18" />
                <g fill="#1e293b">
                    <ellipse cx="38" cy="24" rx="5" ry="3" transform="rotate(-15 38 24)" />
                    <ellipse cx="50" cy="28" rx="6" ry="3.5" transform="rotate(10 50 28)" />
                    <ellipse cx="65" cy="31" rx="5.5" ry="3" transform="rotate(-5 65 31)" />
                    <ellipse cx="78" cy="34" rx="4" ry="2.5" />
                    <ellipse cx="86" cy="36" rx="2.5" ry="1.8" />
                </g>
                <path fill="#94a3b8" opacity="0.5" d="M22 36 L30 22 L45 25 L35 38 Z" />
                <circle cx="28" cy="26" r="1" fill="#0f172a" />
                <circle cx="33" cy="28" r="1" fill="#0f172a" />
                <circle cx="38" cy="30" r="1" fill="#0f172a" />
                <path d="M28 22 Q 38 26 48 24" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="2,1" fill="none" />
            `
        },
        { 
            id: 's4', name: 'Yeezy Boost 350 V2 Zyon', 
            paths: `
                <path fill="#fef08a" opacity="0.8" stroke="#fde047" stroke-width="1" d="M8 36 C 8 46, 25 50, 50 50 C 78 50, 95 45, 95 36 C 95 32, 80 36, 50 36 C 25 36, 8 32, 8 36 Z" />
                <g stroke="#eab308" stroke-width="0.8" opacity="0.6">
                    <line x1="18" y1="36" x2="18" y2="47" />
                    <line x1="28" y1="36" x2="28" y2="49" />
                    <line x1="38" y1="36" x2="38" y2="50" />
                    <line x1="48" y1="36" x2="48" y2="50" />
                    <line x1="58" y1="36" x2="58" y2="50" />
                    <line x1="68" y1="36" x2="68" y2="49" />
                    <line x1="78" y1="36" x2="78" y2="48" />
                    <line x1="88" y1="36" x2="88" y2="44" />
                </g>
                <path fill="#a8a29e" stroke="#78716c" stroke-width="1" d="M12 36 C 12 18, 28 8, 40 12 C 52 16, 75 22, 94 36 Z" />
                <path fill="#292524" d="M20 30 C 35 25, 60 27, 90 34 C 88 36, 60 30, 20 33 Z" />
                <path d="M32 16 C 38 12, 45 15, 42 22" fill="none" stroke="#f5f5f4" stroke-width="2" stroke-linecap="round" />
                <path d="M30 20 L42 22 M33 24 L45 26" stroke="#f5f5f4" stroke-width="1.8" />
                <path fill="none" stroke="#52525b" stroke-width="1.5" d="M28 11 Q 38 10 44 18" />
            `
        },
        { 
            id: 's5', name: 'Adidas 4D Alphaedge Putih', 
            paths: `
                <path fill="#ffffff" stroke="#e2e8f0" stroke-width="1" d="M10 45 C 10 48, 30 50, 50 50 C 75 50, 95 48, 95 45 Z" />
                <path fill="#bbf7d0" stroke="#86efac" stroke-width="1" d="M10 36 C 10 45, 30 48, 50 48 C 75 48, 95 45, 95 36 C 95 36, 75 38, 50 38 C 25 38, 10 36, 10 36 Z" />
                <g stroke="#22c55e" stroke-width="0.8" opacity="0.5" stroke-dasharray="1,1.5">
                    <path d="M15 37 L90 46 M15 41 L90 38 M20 36 L25 47 M35 36 L40 48 M50 36 L52 48 M65 36 L65 47 M80 36 L78 46" />
                </g>
                <path fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" d="M12 36 C 12 16, 25 8, 35 8 C 42 8, 48 18, 65 24 C 80 28, 90 32, 94 36 Z" />
                <g fill="#94a3b8">
                    <polygon points="20,24 23,20 25,21 22,25" />
                    <polygon points="24,25 27,21 29,22 26,26" />
                    <polygon points="28,26 31,22 33,23 30,27" />
                </g>
                <path d="M38 15 L52 24 M41 18 L55 27 M44 21 L58 30" stroke="#cbd5e1" stroke-width="1.5" />
            `
        },
        { 
            id: 's6', name: 'Adidas 4D Consortium Black', 
            paths: `
                <path fill="#a7f3d0" stroke="#4ade80" stroke-width="1" d="M10 36 C 10 46, 30 50, 50 50 C 75 50, 95 46, 95 36 C 95 36, 75 38, 50 38 C 25 38, 10 36, 10 36 Z" />
                <g stroke="#059669" stroke-width="0.8" opacity="0.6" stroke-dasharray="1,1.5">
                    <path d="M15 37 L90 47 M15 43 L90 38 M20 36 L25 48 M35 36 L40 49 M50 36 L52 49 M65 36 L65 48 M80 36 L78 47" />
                </g>
                <path fill="#1e293b" stroke="#0f172a" stroke-width="1" d="M12 36 C 12 20, 24 10, 36 10 C 44 10, 50 20, 68 25 C 82 28, 92 32, 94 36 Z" />
                <path fill="#94a3b8" opacity="0.8" d="M25 36 C 25 25, 32 20, 42 22 L 50 36 Z M60 36 C 65 28, 80 30, 90 36 Z" />
                <g stroke="white" stroke-width="2.5" stroke-linecap="round">
                    <line x1="42" y1="25" x2="48" y2="35" />
                    <line x1="48" y1="26" x2="54" y2="36" />
                    <line x1="54" y1="27" x2="60" y2="36" />
                </g>
            `
        },
        { 
            id: 's7', name: 'Adidas 4D 4FWD2 Black', 
            paths: `
                <path fill="#09090b" d="M10 46 C 10 49, 30 50, 50 50 C 75 50, 95 49, 95 46 Z" />
                <path fill="#18181b" stroke="#27272a" stroke-width="1" d="M10 36 C 10 46, 30 48, 50 48 C 75 48, 95 46, 95 36 C 95 36, 75 38, 50 38 C 25 38, 10 36, 10 36 Z" />
                <g stroke="#3f3f46" stroke-width="1" opacity="0.7">
                    <path d="M18 37 L14 46 M28 37 L22 47 M38 37 L30 48 M48 37 L40 48 M58 37 L50 48 M68 37 L60 47 M78 37 L72 46 M88 37 L82 45" />
                </g>
                <path fill="#09090b" stroke="#27272a" stroke-width="1" d="M12 36 C 10 20, 18 5, 28 5 C 34 8, 42 18, 62 24 C 78 28, 90 32, 94 36 Z" />
                <g stroke="#3f3f46" stroke-width="2.5" stroke-linecap="round">
                    <line x1="42" y1="22" x2="48" y2="33" />
                    <line x1="48" y1="23" x2="54" y2="34" />
                    <line x1="54" y1="24" x2="60" y2="35" />
                </g>
            `
        },
        { 
            id: 's8', name: 'Air Jordan 1 Blue UNC Toe', 
            paths: `
                <path fill="#0284c7" d="M8 46 C 8 49, 30 50, 50 50 C 75 50, 95 49, 95 46 Z" />
                <path fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" d="M8 38 C 8 46, 30 47, 50 47 C 75 47, 95 46, 95 38 Z" />
                <path fill="#ffffff" stroke="#e2e8f0" stroke-width="1" d="M30 38 L30 22 L55 24 L75 38 Z" />
                <path fill="#0284c7" stroke="#0369a1" stroke-width="1" d="M68 38 L65 30 L85 33 L94 38 Z" />
                <path fill="#0f172a" d="M65 38 L62 28 L68 28 L88 34 L94 38 Z" opacity="0.9"/>
                <path fill="#0f172a" d="M42 22 L52 24 L48 38 L38 38 Z" />
                <path fill="#0f172a" d="M38 32 C 48 34, 68 30, 78 26 C 68 35, 50 38, 38 38 Z" />
                <path fill="#0284c7" stroke="#0369a1" stroke-width="1" d="M12 38 L12 16 L28 8 L38 12 L35 38 Z" />
                <path fill="#0f172a" d="M12 16 L22 10 L28 8 L25 18 Z" />
                <circle cx="22" cy="16" r="3.5" fill="#0f172a" />
                <path d="M19 16 L25 16 M20 14.5 L24 17.5" stroke="#0284c7" stroke-width="0.8" />
                <path d="M32 12 L44 24 M30 16 L42 27 M28 20 L40 30" stroke="#0f172a" stroke-width="1.2" />
            `
        },
        { 
            id: 's9', name: 'Nike Sacai Low Blazer Black White', 
            paths: `
                <path fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" d="M8 36 C 8 48, 28 50, 50 50 C 78 50, 96 48, 96 36 C 96 36, 75 40, 50 40 C 25 40, 8 36, 8 36 Z" />
                <path fill="none" stroke="#e2e8f0" stroke-width="1" d="M10 40 C 30 43, 60 43, 94 40 M12 44 C 30 46, 60 46, 92 44" />
                <path fill="#0f172a" stroke="#1e293b" stroke-width="1" d="M12 36 C 12 22, 28 16, 42 16 C 58 20, 82 28, 94 36 Z" />
                <path fill="#334155" d="M38 30 C 50 33, 70 26, 82 22 C 72 32, 52 36, 38 35 Z" />
                <path fill="#ffffff" stroke="#cbd5e1" stroke-width="0.8" d="M42 32 C 54 35, 74 27, 86 23 C 76 34, 56 37, 42 36 Z" />
                <path fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1" d="M32 14 L42 12 L46 22 L36 24 Z" />
                <path fill="#0f172a" d="M35 15 L43 13 L47 21 L39 23 Z" />
                <path d="M36 18 L48 28 M38 22 L50 31 M40 26 L52 34" stroke="#ffffff" stroke-width="1.5" />
                <path d="M37 19 L49 29 M39 23 L51 32" stroke="#0f172a" stroke-width="1" />
            `
        },
        {
    id: 's10', name: 'Nike React Rejuven8 White Mule',
    paths: `
        <path fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" stroke-linejoin="round" d="M10 35 C 10 20, 28 12, 50 15 C 70 18, 88 24, 96 35 C 96 46, 80 50, 50 50 C 20 50, 10 46, 10 35 Z" />
        <path fill="#f8fafc" stroke="#94a3b8" stroke-width="1" d="M25 35 C 25 22, 38 14, 52 17 C 72 20, 88 26, 94 35 C 92 42, 75 42, 50 42 C 32 42, 25 38, 25 35 Z" />
        <g fill="#64748b" opacity="0.6">
            <circle cx="45" cy="25" r="1.5" />
            <circle cx="55" cy="27" r="1.5" />
            <circle cx="65" cy="29" r="1.5" />
            <circle cx="75" cy="31" r="1.5" />
            <circle cx="50" cy="32" r="1.5" />
            <circle cx="60" cy="34" r="1.5" />
            <circle cx="70" cy="35" r="1.5" />
        </g>
        <path fill="#0f172a" d="M32 30 Q 38 34 46 28 Q 38 32 33 31 Z" />
    `
},
{
    id: 's11', name: 'NMD Hu Adidas All White',
    paths: `
        <path fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2" d="M12 38 C 12 45, 30 50, 50 50 C 75 50, 92 45, 92 38 C 92 36, 80 38, 50 38 C 25 38, 12 36, 12 38 Z" />
        <rect x="20" y="38" width="14" height="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="0.8" rx="1"/>
        <rect x="68" y="39" width="12" height="5" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="0.8" rx="1"/>
        <path fill="#ffffff" stroke="#cbd5e1" stroke-width="1" d="M15 38 C 15 25, 22 10, 32 10 C 38 10, 42 18, 55 22 C 70 25, 88 28, 92 38 Z" />
        <text x="40" y="26" fill="#e2e8f0" font-size="5" font-weight="900" font-family="Arial, sans-serif" transform="rotate(8 40 26)">HUMAN</text>
        <path fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" d="M25 36 C 25 25, 32 20, 42 22 L 50 36 Z M60 36 C 65 28, 80 30, 90 36 Z" opacity="0.9" />
        <path d="M28 22 Q 38 26 48 24" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="2,1" fill="none" />
    `
},
{
    id: 's12', name: 'NMD Hu Adidas Oreo White Black',
    paths: `
        <path fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" d="M12 38 C 12 45, 30 50, 50 50 C 75 50, 92 45, 92 38 C 92 36, 80 38, 50 38 C 25 38, 12 36, 12 38 Z" />
        <rect x="20" y="38" width="14" height="6" fill="#0f172a" rx="1"/>
        <rect x="68" y="39" width="12" height="5" fill="#0f172a" rx="1"/>
        <path fill="#334155" stroke="#0f172a" stroke-width="1" d="M15 38 C 15 25, 22 10, 32 10 C 38 10, 42 18, 55 22 C 70 25, 88 28, 92 38 Z" />
        <g stroke="#ffffff" stroke-width="0.8" opacity="0.6" stroke-dasharray="1,2">
            <path d="M20 20 C 30 15, 50 22, 80 32" />
            <path d="M22 28 C 35 24, 60 28, 85 35" />
        </g>
        <path fill="#0f172a" d="M25 36 C 25 25, 32 20, 42 22 L 50 36 Z M60 36 C 65 28, 80 30, 90 36 Z" />
        <text x="40" y="26" fill="#ffffff" font-size="5" font-weight="900" font-family="Arial, sans-serif" transform="rotate(8 40 26)">CLOUDS</text>
        <path d="M28 22 Q 38 26 48 24" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="2,1" fill="none" />
    `
}
    ]
};

const activeTab = ref('baju');
const selectedOutfit = ref({
    baju: inventory.baju[2],
    jacket: inventory.jacket[3],
    celana: inventory.celana[2],
    sepatu: inventory.sepatu[7]
});

const presets = ref([]);
const presetName = ref('');

onMounted(() => {
    const saved = localStorage.getItem('outfit_builder_presets');
    if (saved) {
        try {
            presets.value = JSON.parse(saved);
        } catch (e) {
            presets.value = [];
        }
    }
});

const savePreset = () => {
    if (!presetName.value.trim()) return;

    const newPreset = {
        id: Date.now(),
        name: presetName.value.trim(),
        items: {
            bajuId: selectedOutfit.value.baju.id,
            jacketId: selectedOutfit.value.jacket.id,
            celanaId: selectedOutfit.value.celana.id,
            sepatuId: selectedOutfit.value.sepatu.id
        }
    };

    presets.value.push(newPreset);
    localStorage.setItem('outfit_builder_presets', JSON.stringify(presets.value));
    presetName.value = '';
};

const loadPreset = (preset) => {
    selectedOutfit.value = {
        baju: inventory.baju.find(i => i.id === preset.items.bajuId) || inventory.baju[0],
        jacket: inventory.jacket.find(i => i.id === preset.items.jacketId) || inventory.jacket[0],
        celana: inventory.celana.find(i => i.id === preset.items.celanaId) || inventory.celana[0],
        sepatu: inventory.sepatu.find(i => i.id === preset.items.sepatuId) || inventory.sepatu[0]
    };
};

const deletePreset = (id) => {
    presets.value = presets.value.filter(p => p.id !== id);
    localStorage.setItem('outfit_builder_presets', JSON.stringify(presets.value));
};

const selectItem = (category, item) => {
    selectedOutfit.value[category] = item;
};
</script>

<template>
    <div class="min-h-screen bg-slate-950 text-slate-100 font-sans p-4 md:p-8 flex flex-col selection:bg-indigo-500 selection:text-white">
        
        <header class="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <h1 class="text-3xl font-black tracking-tight text-white uppercase flex items-center gap-3">
                <span class="text-indigo-500">OUTFIT</span> Builder
            </h1>
            <p class="text-slate-400 text-sm font-medium">CHOOSE YOUR OWN</p>
        </header>

        <main class="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">
            
            <!-- PANEL KIRI: VISUALIZER OUTFIT 2D & SAVER -->
            <section class="lg:col-span-5 flex flex-col gap-6">
                <!-- CANVAS VISUALIZER WITH DYNAMIC BACKGROUND -->
                <div 
                    class="rounded-3xl shadow-2xl border border-slate-800 flex flex-col items-center justify-center p-8 relative min-h-[460px] transition-colors duration-500"
                    :style="{ backgroundColor: selectedBg }"
                >
                    <!-- CANVAS BACKGROUND COLOR SELECTOR TOOLBAR -->
                    <div class="absolute top-4 left-4 right-4 flex items-center justify-between bg-slate-950/70 backdrop-blur-md p-2 rounded-2xl border border-slate-800/80 z-30">
                        <span class="text-[10px] font-black uppercase tracking-widest text-slate-400 px-2">Bg Color:</span>
                        <div class="flex items-center gap-1.5 overflow-x-auto pr-1">
                            <button 
                                v-for="bg in canvasBgColors" 
                                :key="bg.value"
                                @click="selectedBg = bg.value"
                                class="w-5 h-5 rounded-full border border-slate-700/80 transition-transform hover:scale-125 cursor-pointer flex-shrink-0"
                                :style="{ backgroundColor: bg.value }"
                                :title="bg.name"
                                :class="selectedBg === bg.value ? 'ring-2 ring-indigo-500 scale-110' : ''"
                            ></button>
                            <!-- Custom Color Picker Input -->
                            <label class="w-5 h-5 rounded-full border border-slate-700/80 cursor-pointer flex-shrink-0 relative overflow-hidden bg-gradient-to-tr from-amber-500 via-indigo-500 to-emerald-500 flex items-center justify-center" title="Custom Color">
                                <input type="color" v-model="selectedBg" class="opacity-0 absolute inset-0 cursor-pointer w-full h-full" />
                            </label>
                        </div>
                    </div>

                    <div class="relative w-full max-w-[220px] flex flex-col items-center z-10 transition-all duration-300 mt-6">
                        <div class="relative w-48 h-48 -mb-6 flex justify-center items-end drop-shadow-2xl z-20">
                            <svg viewBox="0 0 100 100" class="w-full h-full">
                                <defs>
                                    <clipPath id="outerSilhouetteClip" v-if="selectedOutfit.jacket.id !== 'j1'">
                                        <path :d="selectedOutfit.jacket.silhouette" />
                                    </clipPath>
                                </defs>

                                <g 
                                    :clip-path="selectedOutfit.jacket.id !== 'j1' ? 'url(#outerSilhouetteClip)' : undefined" 
                                    v-html="selectedOutfit.baju.paths"
                                ></g>

                                <g v-if="selectedOutfit.jacket.id !== 'j1'" v-html="selectedOutfit.jacket.paths"></g>
                            </svg>
                        </div>

                        <div class="relative w-40 h-48 -mb-4 z-10 drop-shadow-2xl">
                            <svg viewBox="0 0 100 100" class="w-full h-full" v-html="selectedOutfit.celana.paths"></svg>
                        </div>

                        <!-- Display Sepatu Sepasang (Kiri Mirrored & Kanan Normal) -->
                    <div class="relative w-40 h-10 z-0 drop-shadow-2xl flex justify-center items-center gap-1 -mt-2">
                        <!-- Sepatu Kiri (Mirrored/Flips Horizontally) -->
                        <div class="w-[68px] h-[34px] flex items-center justify-center transform -scale-x-100">
                            <svg viewBox="0 0 100 50" class="w-full h-full" v-html="selectedOutfit.sepatu.paths"></svg>
                        </div>
                        <!-- Sepatu Kanan (Normal) -->
                        <div class="w-[68px] h-[34px] flex items-center justify-center">
                            <svg viewBox="0 0 100 50" class="w-full h-full" v-html="selectedOutfit.sepatu.paths"></svg>
                        </div>
                    </div>
                    </div>
                </div>

                <!-- FORM SIMPAN PRESET -->
                <div class="bg-slate-900 rounded-3xl p-6 border border-slate-800 flex flex-col gap-3">
                    <h2 class="text-xs font-black uppercase tracking-widest text-slate-400">Simpan Kombinasi Ini</h2>
                    <form @submit.prevent="savePreset" class="flex gap-2">
                        <input 
                            v-model="presetName" 
                            type="text" 
                            placeholder="Nama Preset (misal: Formal Office)..." 
                            class="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500"
                        />
                        <button 
                            type="submit" 
                            class="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                        >
                            Simpan
                        </button>
                    </form>
                </div>
            </section>

            <!-- PANEL KANAN: KONTROL INVENTORI & LIST PRESET -->
            <section class="lg:col-span-7 bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 flex flex-col overflow-hidden">
                <nav class="flex border-b border-slate-800 bg-slate-950/50">
                    <button v-for="(items, key) in inventory" :key="key" 
                        @click="activeTab = key"
                        class="flex-1 py-4 px-2 text-sm font-bold uppercase tracking-widest transition-colors border-b-2"
                        :class="activeTab === key ? 'border-indigo-500 text-indigo-400 bg-slate-800/50' : 'border-transparent text-slate-500 hover:text-slate-300'">
                        {{ key }}
                    </button>
                    <button 
                        @click="activeTab = 'presets'"
                        class="flex-1 py-4 px-2 text-sm font-bold uppercase tracking-widest transition-colors border-b-2"
                        :class="activeTab === 'presets' ? 'border-indigo-500 text-indigo-400 bg-slate-800/50' : 'border-transparent text-slate-500 hover:text-slate-300'">
                        Saved ({{ presets.length }})
                    </button>
                </nav>

                <!-- TAB INVENTORI -->
                <div v-if="activeTab !== 'presets'" class="p-6 overflow-y-auto custom-scrollbar h-full min-h-[400px]">
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-5">
                        <button v-for="item in inventory[activeTab]" :key="item.id"
                            @click="selectItem(activeTab, item)"
                            class="relative flex flex-col items-center p-4 rounded-2xl border-2 transition-all cursor-pointer group bg-slate-950"
                            :class="selectedOutfit[activeTab].id === item.id ? 'border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.2)]' : 'border-slate-800 hover:border-slate-600'">
                            
                            <div class="w-full aspect-square mb-3 flex items-center justify-center p-2">
                                <svg v-if="item.paths" viewBox="0 0 100 100" class="w-full h-full" v-html="item.paths"></svg>
                                <span v-else class="text-slate-600 text-3xl font-black">∅</span>
                            </div>
                            
                            <span class="text-xs font-bold text-slate-300 text-center line-clamp-2 uppercase tracking-wide">
                                {{ item.name }}
                            </span>
                            
                            <div v-if="selectedOutfit[activeTab].id === item.id" class="absolute top-3 right-3 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                        </button>
                    </div>
                </div>

                <!-- TAB SAVED PRESETS -->
                <div v-else class="p-6 overflow-y-auto custom-scrollbar h-full min-h-[400px]">
                    <div v-if="presets.length === 0" class="flex flex-col items-center justify-center h-64 text-slate-600 gap-2">
                        <span class="text-4xl">📁</span>
                        <p class="text-sm font-medium">Belum ada preset tersimpan</p>
                    </div>

                    <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div v-for="preset in presets" :key="preset.id" class="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex justify-between items-center gap-3">
                            <div class="flex flex-col gap-1 overflow-hidden">
                                <span class="font-bold text-sm text-slate-200 truncate">{{ preset.name }}</span>
                                <span class="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
                                    {{ new Date(preset.id).toLocaleDateString() }}
                                </span>
                            </div>

                            <div class="flex items-center gap-2">
                                <button 
                                    @click="loadPreset(preset)" 
                                    class="bg-indigo-600/20 hover:bg-indigo-600 text-indigo-400 hover:text-white border border-indigo-500/30 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                                >
                                    Pakai
                                </button>
                                <button 
                                    @click="deletePreset(preset.id)" 
                                    class="bg-red-900/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<style>
.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
.custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #475569; }
</style>