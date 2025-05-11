// components/PortalTooltip.js
import { createPortal } from "react-dom";
import portaltooltipportrait from "../styles/portaltooltipportrait.module.css";

export default function PortalTooltipportrait({ desc, style }) {
  return createPortal(
    <div style={{ position: "absolute", zIndex: 9999, ...style }}>
      <div className={portaltooltipportrait.tooltip} >
        <div className={portaltooltipportrait.tooltipbox} >
        {desc}
        </div>
      </div>
    </div>,
    document.body
  );
}
