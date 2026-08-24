type IconProps = { className?: string };

export function LinkedinIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95V21h-4V9Z" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.35C16.3 4.24 15.4 4.15 14.37 4.15c-2.34 0-3.94 1.43-3.94 4.05V10.5H8v3h2.43V21h3.07Z" />
    </svg>
  );
}

export function YoutubeIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.6 7.2s-.21-1.5-.87-2.16c-.83-.87-1.76-.87-2.18-.92C15.55 4 12 4 12 4h-.01s-3.55 0-6.55.12c-.42.05-1.35.05-2.18.92C2.6 5.7 2.4 7.2 2.4 7.2S2.18 8.96 2.18 10.72v1.55c0 1.76.21 3.52.21 3.52s.21 1.5.87 2.16c.83.87 1.92.84 2.4.94 1.74.17 7.34.22 7.34.22s3.55-.01 6.55-.13c.42-.06 1.35-.06 2.18-.93.66-.66.87-2.16.87-2.16s.21-1.76.21-3.52v-1.55c0-1.76-.21-3.52-.21-3.52ZM9.99 14.5V8.98l5.31 2.77-5.31 2.75Z" />
    </svg>
  );
}
