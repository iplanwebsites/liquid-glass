import T, { useRef as l, useEffect as E } from "react";
import { h as L, L as $ } from "./utils-BuTN5SEH.mjs";
const z = ({
  children: g,
  shadowColor: f = "rgba(255, 255, 255, 0.7)",
  shadowBlur: s = 7,
  shadowSpread: t = 0,
  shadowOffset: n = 0,
  tintColor: e = "#ffffff",
  tintOpacity: r = 0.04,
  frostBlur: u = 2,
  noiseFrequency: m = 8e-3,
  distortionStrength: p = 77,
  borderRadius: x = 28,
  width: G = "300px",
  height: W = "200px",
  className: b = "",
  style: i = {},
  ...j
}) => {
  const R = l(null), c = l(null);
  return E(() => {
    if (R.current) {
      const a = {
        shadowColor: f,
        shadowBlur: s,
        shadowSpread: t,
        shadowOffset: n,
        tintColor: e.startsWith("#") ? L(e) : e,
        tintOpacity: r,
        frostBlur: u,
        noiseFrequency: m,
        distortionStrength: p,
        borderRadius: x
      };
      c.current = new $(R.current, a);
    }
    return () => {
      c.current && c.current.destroy();
    };
  }, []), E(() => {
    if (c.current) {
      const a = {
        shadowColor: f,
        shadowBlur: s,
        shadowSpread: t,
        shadowOffset: n,
        tintColor: e.startsWith("#") ? L(e) : e,
        tintOpacity: r,
        frostBlur: u,
        noiseFrequency: m,
        distortionStrength: p,
        borderRadius: x
      };
      Object.entries(a).forEach(([v, N]) => {
        c.current.updateOption(v, N);
      });
    }
  }, [f, s, t, n, e, r, u, m, p, x]), /* @__PURE__ */ T.createElement(
    "div",
    {
      ref: R,
      className: `solid-glass-wrapper ${b}`,
      style: { width: G, height: W, ...i },
      ...j
    },
    g
  );
};
export {
  z as LiquidGlassReact
};
