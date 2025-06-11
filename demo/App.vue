<script>
import { ref, computed, onMounted } from "vue";
import LiquidGlass from "../src/vue/LiquidGlass.vue";
import "../src/styles/solid-glass.css";

export default {
  name: "App",
  components: {
    LiquidGlass,
  },
  setup() {
    // Reactive state
    const shadowColorHex = ref("#ffffff");
    const shadowBlur = ref(7);
    const shadowSpread = ref(0);
    const tintColor = ref("#ffffff");
    const tintOpacity = ref(0.04);
    const frostBlur = ref(2);
    const noiseFrequency = ref(0.008);
    const distortionStrength = ref(77);
    const borderRadius = ref(28);
    const backgroundUrl = ref("");
    const glassWidth = ref("300px");
    const glassHeight = ref("200px");

    // Computed shadow color with opacity
    const shadowColor = computed(() => {
      const r = parseInt(shadowColorHex.value.slice(1, 3), 16);
      const g = parseInt(shadowColorHex.value.slice(3, 5), 16);
      const b = parseInt(shadowColorHex.value.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, 0.7)`;
    });

    // Preset configurations
    const presets = ref([
      {
        name: "Frosted",
        tintColor: "#ffffff",
        tintOpacity: 0.1,
        frostBlur: 10,
        noiseFrequency: 0.005,
        distortionStrength: 50,
        width: "200px",
        height: "150px",
      },
      {
        name: "Crystal",
        tintColor: "#00ffff",
        tintOpacity: 0.05,
        frostBlur: 5,
        noiseFrequency: 0.015,
        distortionStrength: 100,
        width: "200px",
        height: "150px",
      },
      {
        name: "Amber",
        tintColor: "#ff8800",
        tintOpacity: 0.08,
        frostBlur: 3,
        noiseFrequency: 0.01,
        distortionStrength: 60,
        width: "200px",
        height: "150px",
      },
    ]);

    // Background presets
    const backgroundPresets = {
      nature:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2000&auto=format&fit=crop",
      abstract:
        "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2000&auto=format&fit=crop",
      city: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2000&auto=format&fit=crop",
    };

    // Image gallery categories
    const imageCategories = {
      nature: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop"
      ],
      abstract: [
        "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1506792006437-256b665541e2?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&auto=format&fit=crop"
      ],
      city: [
        "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1520637836862-4d197d17c36a?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1534401135-d3481842c0bd?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541963463532-d68292c34d19?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&auto=format&fit=crop"
      ]
    };

    const activeCategory = ref('nature');
    const galleryImages = computed(() => imageCategories[activeCategory.value]);

    const setActiveCategory = (category) => {
      activeCategory.value = category;
    };

    // Methods
    const updateBackground = () => {
      if (backgroundUrl.value) {
        document.body.style.backgroundImage = `url('${backgroundUrl.value}')`;
      }
    };

    const setPresetBackground = (preset) => {
      backgroundUrl.value = backgroundPresets[preset];
      updateBackground();
    };

    // Set initial background
    onMounted(() => {
      backgroundUrl.value = backgroundPresets.nature;
      updateBackground();
    });

    return {
      shadowColorHex,
      shadowColor,
      shadowBlur,
      shadowSpread,
      tintColor,
      tintOpacity,
      frostBlur,
      noiseFrequency,
      distortionStrength,
      borderRadius,
      backgroundUrl,
      glassWidth,
      glassHeight,
      presets,
      galleryImages,
      activeCategory,
      setActiveCategory,
      updateBackground,
      setPresetBackground,
    };
  },
};
</script>

<template>
  <div id="app">
    <!-- Controls Panel -->
    <div class="controls">
      <h2>Solid Glass Controls</h2>

      <section>
        <h3>Inner Shadow</h3>
        <label>
          <span>Color:</span>
          <input type="color" v-model="shadowColorHex" />
        </label>
        <label>
          <span>Blur: {{ shadowBlur }}px</span>
          <input type="range" v-model.number="shadowBlur" min="0" max="20" />
        </label>
        <label>
          <span>Spread: {{ shadowSpread }}px</span>
          <input
            type="range"
            v-model.number="shadowSpread"
            min="-10"
            max="10"
          />
        </label>
      </section>

      <section>
        <h3>Glass Tint</h3>
        <label>
          <span>Tint Color:</span>
          <input type="color" v-model="tintColor" />
        </label>
        <label>
          <span>Opacity: {{ Math.round(tintOpacity * 100) }}%</span>
          <input
            type="range"
            v-model.number="tintOpacity"
            min="0"
            max="1"
            step="0.01"
          />
        </label>
      </section>

      <section>
        <h3>Frost Blur</h3>
        <label>
          <span>Blur Radius: {{ frostBlur }}px</span>
          <input type="range" v-model.number="frostBlur" min="0" max="30" />
        </label>
      </section>

      <section>
        <h3>Noise Distortion</h3>
        <label>
          <span>Frequency: {{ noiseFrequency.toFixed(3) }}</span>
          <input
            type="range"
            v-model.number="noiseFrequency"
            min="0"
            max="0.02"
            step="0.001"
          />
        </label>
        <label>
          <span>Strength: {{ distortionStrength }}</span>
          <input
            type="range"
            v-model.number="distortionStrength"
            min="0"
            max="200"
          />
        </label>
      </section>

      <section>
        <h3>Shape</h3>
        <label>
          <span>Border Radius: {{ borderRadius }}px</span>
          <input type="range" v-model.number="borderRadius" min="0" max="50" />
        </label>
      </section>

      <section>
        <h3>Background</h3>
        <label>
          <span>Image URL:</span>
          <input
            type="text"
            v-model="backgroundUrl"
            placeholder="https://..."
            @input="updateBackground"
          />
        </label>
        <div class="preset-buttons">
          <button @click="setPresetBackground('nature')">Nature</button>
          <button @click="setPresetBackground('abstract')">Abstract</button>
          <button @click="setPresetBackground('city')">City</button>
        </div>
      </section>
    </div>

    <!-- Liquid Glass Component -->
    <LiquidGlass
      :shadow-color="shadowColor"
      :shadow-blur="shadowBlur"
      :shadow-spread="shadowSpread"
      :tint-color="tintColor"
      :tint-opacity="tintOpacity"
      :frost-blur="frostBlur"
      :noise-frequency="noiseFrequency"
      :distortion-strength="distortionStrength"
      :border-radius="borderRadius"
      :width="glassWidth"
      :height="glassHeight"
      class="demo-glass"
    >
      <div class="glass-content">
        <h1>Solid Glass</h1>
        <p>Component Demo</p>
      </div>
    </LiquidGlass>

    <!-- Multiple instances showcase -->
    <div class="showcase">
      <LiquidGlass
        v-for="(preset, index) in presets"
        :key="index"
        v-bind="preset"
        class="showcase-item"
      >
        <div class="showcase-content">
          <h3>{{ preset.name }}</h3>
        </div>
      </LiquidGlass>
    </div>

    <!-- Scrollable Image Gallery -->
    <div class="image-gallery-section">
      <h2 class="gallery-title">Image Gallery</h2>
      
      <!-- Category Selector -->
      <div class="category-selector">
        <button 
          @click="setActiveCategory('nature')"
          :class="{ active: activeCategory === 'nature' }"
          class="category-btn"
        >
          Nature
        </button>
        <button 
          @click="setActiveCategory('abstract')"
          :class="{ active: activeCategory === 'abstract' }"
          class="category-btn"
        >
          Abstract
        </button>
        <button 
          @click="setActiveCategory('city')"
          :class="{ active: activeCategory === 'city' }"
          class="category-btn"
        >
          City
        </button>
      </div>

      <div class="image-gallery">
        <img
          v-for="(image, index) in galleryImages"
          :key="`${activeCategory}-${index}`"
          :src="image"
          :alt="`${activeCategory} image ${index + 1}`"
          class="gallery-image"
        />
      </div>
    </div>
  </div>
</template>

<style>
/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  transition: background-image 0.3s ease;
}

#app {
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Controls Panel */
.controls {
  position: fixed;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 20px;
  border-radius: 12px;
  width: 320px;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  backdrop-filter: blur(10px);
  z-index: 1000;
}

.controls h2 {
  margin: 0 0 20px;
  font-size: 20px;
  font-weight: 600;
}

.controls section {
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.controls section:last-child {
  border-bottom: none;
}

.controls h3 {
  margin: 0 0 12px;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.controls label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 14px;
}

.controls label span {
  flex-shrink: 0;
  margin-right: 12px;
}

.controls input[type="range"] {
  flex: 1;
  max-width: 140px;
}

.controls input[type="color"] {
  width: 60px;
  height: 30px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.controls input[type="text"] {
  flex: 1;
  padding: 6px 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border-radius: 6px;
  font-size: 12px;
}

.preset-buttons {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.preset-buttons button {
  flex: 1;
  padding: 6px 12px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s;
}

.preset-buttons button:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Liquid Glass Demo */
.demo-glass {
  margin-bottom: 80px;
}

.glass-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.glass-content h1 {
  font-size: 32px;
  font-weight: 300;
  margin-bottom: 8px;
}

.glass-content p {
  font-size: 16px;
  opacity: 0.9;
}

/* Showcase */
.showcase {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
}

.showcase-item {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.showcase-item:hover {
  transform: translateY(-5px);
}

.showcase-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.showcase-content h3 {
  font-size: 18px;
  font-weight: 400;
}

/* Responsive */
@media (max-width: 768px) {
  .controls {
    position: static;
    width: 100%;
    max-width: 400px;
    margin-bottom: 40px;
  }

  .showcase {
    flex-direction: column;
    align-items: center;
  }
}

/* Custom scrollbar for controls */
.controls::-webkit-scrollbar {
  width: 8px;
}

.controls::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.controls::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

.controls::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

/* Image Gallery */
.image-gallery-section {
  width: 100%;
  max-width: none;
  margin-top: 80px;
  padding: 0 20px;
}

.gallery-title {
  text-align: center;
  color: #fff;
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Category Selector */
.category-selector {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 30px;
}

.category-btn {
  padding: 12px 24px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.category-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.category-btn.active {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.1);
}

.image-gallery {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  gap: 0;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  padding: 10px;
}

.gallery-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.gallery-image:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.gallery-image:last-child {
  margin-bottom: 0;
}

/* Custom scrollbar for image gallery */
.image-gallery::-webkit-scrollbar {
  width: 12px;
}

.image-gallery::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
}

.image-gallery::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  border: 2px solid transparent;
  background-clip: content-box;
}

.image-gallery::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
  background-clip: content-box;
}
</style>
