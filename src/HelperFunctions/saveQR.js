import { removeBodyScroll } from '@/HelperFunctions/bodyScroll'

export const SAVE_QR = (value) => {
  const svg = document.querySelector(".layout-content svg");
  if (!svg) {
    return;
  } else {
   removeBodyScroll()
   const serializer = new XMLSerializer();
   const svgStr = serializer.serializeToString(svg);
   const link = document.createElement("a");
   link.href =
     "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgStr);
   link.download = value.replace(/ /g, "_") + ".svg";
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
  }
};
