import N, { useRef as l, useEffect as E } from "react";
import { h as L, L as T } from "./utils-C7urrMG7.mjs";
const z = ({
  children: g,
  shadowColor: f = "rgba(255, 255, 255, 0.7)",
  shadowBlur: t = 7,
  shadowSpread: s = 0,
  shadowOffset: n = 0,
  tintColor: e = "#ffffff",
  tintOpacity: r = 0.04,
  frostBlur: u = 2,
  noiseFrequency: m = 8e-3,
  distortionStrength: p = 77,
  borderRadius: x = 28,
  width: i = "300px",
  height: G = "200px",
  className: W = "",
  style: b = {},
  ...j
}) => {
  const R = l(null), c = l(null);
  return E(() => {
    if (R.current) {
      const a = {
        shadowColor: f,
        shadowBlur: t,
        shadowSpread: s,
        shadowOffset: n,
        tintColor: e.startsWith("#") ? L(e) : e,
        tintOpacity: r,
        frostBlur: u,
        noiseFrequency: m,
        distortionStrength: p,
        borderRadius: x
      };
      c.current = new T(R.current, a);
    }
    return () => {
      c.current && c.current.destroy();
    };
  }, []), E(() => {
    if (c.current) {
      const a = {
        shadowColor: f,
        shadowBlur: t,
        shadowSpread: s,
        shadowOffset: n,
        tintColor: e.startsWith("#") ? L(e) : e,
        tintOpacity: r,
        frostBlur: u,
        noiseFrequency: m,
        distortionStrength: p,
        borderRadius: x
      };
      Object.entries(a).forEach(([q, v]) => {
        c.current.updateOption(q, v);
      });
    }
  }, [f, t, s, n, e, r, u, m, p, x]), /* @__PURE__ */ N.createElement(
    "div",
    {
      ref: R,
      className: `liquid-glass-wrapper ${W}`,
      style: { width: i, height: G, ...b },
      ...j
    },
    g
  );
};
export {
  z as LiquidGlassReact
};
