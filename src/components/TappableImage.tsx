import { useState } from "react";
import Lightbox from "./Lightbox";

interface TappableImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  style?: React.CSSProperties;
  imgClassName?: string;
}

export default function TappableImage({
  src,
  alt,
  caption,
  className = "",
  style,
  imgClassName = "w-full h-full object-cover",
}: TappableImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open image: ${alt}`}
        className={`block w-full h-full text-left cursor-zoom-in ${className}`}
        style={style}
      >
        <img src={src} alt={alt} loading="lazy" className={imgClassName} />
      </button>
      {open && (
        <Lightbox src={src} alt={alt} caption={caption} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
