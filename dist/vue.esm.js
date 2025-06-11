import { createElementBlock as i, openBlock as u, normalizeStyle as f, renderSlot as c, ref as h, computed as d, onMounted as y, onUnmounted as m, watch as w } from "vue";
import { h as p, L as g } from "./utils-C7urrMG7.mjs";
const b = (t, r) => {
  const e = t.__vccOpts || t;
  for (const [a, o] of r)
    e[a] = o;
  return e;
}, S = {
  name: "LiquidGlass",
  props: {
    shadowColor: {
      type: String,
      default: "rgba(255, 255, 255, 0.7)"
    },
    shadowBlur: {
      type: Number,
      default: 7
    },
    shadowSpread: {
      type: Number,
      default: 0
    },
    shadowOffset: {
      type: Number,
      default: 0
    },
    tintColor: {
      type: String,
      default: "#ffffff"
    },
    tintOpacity: {
      type: Number,
      default: 0.04
    },
    frostBlur: {
      type: Number,
      default: 2
    },
    noiseFrequency: {
      type: Number,
      default: 8e-3
    },
    distortionStrength: {
      type: Number,
      default: 77
    },
    borderRadius: {
      type: Number,
      default: 28
    },
    width: {
      type: String,
      default: "300px"
    },
    height: {
      type: String,
      default: "200px"
    }
  },
  setup(t) {
    const r = h(null);
    let e = null;
    const a = d(() => ({
      width: t.width,
      height: t.height
    })), o = d(() => ({
      shadowColor: t.shadowColor,
      shadowBlur: t.shadowBlur,
      shadowSpread: t.shadowSpread,
      shadowOffset: t.shadowOffset,
      tintColor: t.tintColor.startsWith("#") ? p(t.tintColor) : t.tintColor,
      tintOpacity: t.tintOpacity,
      frostBlur: t.frostBlur,
      noiseFrequency: t.noiseFrequency,
      distortionStrength: t.distortionStrength,
      borderRadius: t.borderRadius
    }));
    return y(() => {
      r.value && (e = new g(r.value, o.value));
    }), m(() => {
      e && e.destroy();
    }), w(o, (n) => {
      e && Object.entries(n).forEach(([s, l]) => {
        e.updateOption(s, l);
      });
    }, { deep: !0 }), {
      glassElement: r,
      wrapperStyles: a
    };
  }
};
function _(t, r, e, a, o, n) {
  return u(), i("div", {
    ref: "glassElement",
    class: "liquid-glass-wrapper",
    style: f(a.wrapperStyles)
  }, [
    c(t.$slots, "default", {}, void 0, !0)
  ], 4);
}
const C = /* @__PURE__ */ b(S, [["render", _], ["__scopeId", "data-v-1be1f538"]]);
export {
  C as default
};
