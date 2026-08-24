import { useEffect, useRef, useState } from "react";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260715_090628_7052d8a6-a094-4341-a4a2-ad58493a67a9.mp4";

const CAPTURE_MAX_WIDTH = 960;
const FPS_INTERVAL = 1000 / 30;

export default function BoomerangVideoBg() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const displayCanvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLCanvasElement[]>([]);
  const lastCaptureTimeRef = useRef<number>(-1);
  const rafIdRef = useRef<number | null>(null);
  const [framesReady, setFramesReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let captureWidth = 0;
    let captureHeight = 0;
    let capturing = true;

    const captureFrame = () => {
      if (!capturing || video.paused || video.ended) return;
      if (video.currentTime === lastCaptureTimeRef.current) return;
      lastCaptureTimeRef.current = video.currentTime;

      if (!captureWidth) {
        const ratio = video.videoHeight / video.videoWidth || 1;
        captureWidth = Math.min(CAPTURE_MAX_WIDTH, video.videoWidth || CAPTURE_MAX_WIDTH);
        captureHeight = Math.round(captureWidth * ratio);
      }

      const canvas = document.createElement("canvas");
      canvas.width = captureWidth;
      canvas.height = captureHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(video, 0, 0, captureWidth, captureHeight);
        framesRef.current.push(canvas);
      }
    };

    const scheduleCapture = () => {
      if (typeof video.requestVideoFrameCallback === "function") {
        video.requestVideoFrameCallback(() => {
          captureFrame();
          if (capturing) scheduleCapture();
        });
      } else {
        rafIdRef.current = requestAnimationFrame(() => {
          captureFrame();
          if (capturing) scheduleCapture();
        });
      }
    };

    const onLoaded = () => {
      video.play().catch(() => {});
      scheduleCapture();
    };

    const onEnded = () => {
      capturing = false;
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      setFramesReady(framesRef.current.length > 0);
    };

    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("ended", onEnded);

    return () => {
      capturing = false;
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  // Ping-pong playback on the display canvas once frames are ready
  useEffect(() => {
    if (!framesReady) return;
    const canvas = displayCanvasRef.current;
    const frames = framesRef.current;
    if (!canvas || frames.length === 0) return;

    canvas.width = frames[0].width;
    canvas.height = frames[0].height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let index = 0;
    let direction: 1 | -1 = 1;
    let lastTime = 0;
    let raf: number;

    const draw = (time: number) => {
      if (time - lastTime >= FPS_INTERVAL) {
        lastTime = time;
        ctx.drawImage(frames[index], 0, 0);
        if (index === frames.length - 1) direction = -1;
        else if (index === 0) direction = 1;
        index += direction;
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(raf);
  }, [framesReady]);

  return (
    <div className="absolute inset-0 z-0 scale-[1.15] origin-top overflow-hidden">
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        className="w-full h-full object-cover object-top"
        style={{ display: framesReady ? "none" : "block" }}
      />
      <canvas
        ref={displayCanvasRef}
        className="w-full h-full object-cover object-top"
        style={{ display: framesReady ? "block" : "none" }}
      />
    </div>
  );
}
