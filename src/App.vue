<script setup>
import { ref, onMounted } from 'vue';

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
        }
    ]
};

const activeTab = ref('baju');
const selectedOutfit = ref({
    baju: inventory.baju[2],
    jacket: inventory.jacket[3],
    celana: inventory.celana[2],
    sepatu: inventory.sepatu[0]
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
                <span class="text-indigo-500">2D</span> Outfit Builder
            </h1>
            <p class="text-slate-400 text-sm font-medium">Dynamic SVG Clipping Engine</p>
        </header>

        <main class="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">
            
            <!-- PANEL KIRI: VISUALIZER OUTFIT 2D & SAVER -->
            <section class="lg:col-span-5 flex flex-col gap-6">
                <div class="bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 flex flex-col items-center justify-center p-8 relative min-h-[460px]">
                    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 to-transparent pointer-events-none rounded-3xl"></div>
                    
                    <div class="relative w-full max-w-[220px] flex flex-col items-center z-10 transition-all duration-300">
                        <div class="relative w-48 h-48 -mb-6 flex justify-center items-end drop-shadow-xl z-20">
                            <svg viewBox="0 0 100 100" class="w-full h-full">
                                <defs>
                                    <!-- Dynamic ClipPath berdasarkan Siluet Outer yang aktif -->
                                    <clipPath id="outerSilhouetteClip" v-if="selectedOutfit.jacket.id !== 'j1'">
                                        <path :d="selectedOutfit.jacket.silhouette" />
                                    </clipPath>
                                </defs>

                                <!-- Layer 1 (Kaos/Kemeja): Diclip oleh silhouette outer saat outer aktif -->
                                <g 
                                    :clip-path="selectedOutfit.jacket.id !== 'j1' ? 'url(#outerSilhouetteClip)' : undefined" 
                                    v-html="selectedOutfit.baju.paths"
                                ></g>

                                <!-- Layer 2 (Outer): Ditumpuk di atas kaos -->
                                <g v-if="selectedOutfit.jacket.id !== 'j1'" v-html="selectedOutfit.jacket.paths"></g>
                            </svg>
                        </div>

                        <div class="relative w-40 h-48 -mb-4 z-10 drop-shadow-xl">
                            <svg viewBox="0 0 100 100" class="w-full h-full" v-html="selectedOutfit.celana.paths"></svg>
                        </div>

                        <div class="relative w-36 h-16 z-0 drop-shadow-xl">
                            <svg viewBox="0 0 100 50" class="w-full h-full" v-html="selectedOutfit.sepatu.paths"></svg>
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