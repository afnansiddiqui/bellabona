export const InfoIcon = ({ className = "" }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
    <circle cx="10" cy="10" r="9" stroke="#aaa" strokeWidth="1.3" />
    <path d="M10 9v5" stroke="#aaa" strokeWidth="1.3" strokeLinecap="round" />
    <circle cx="10" cy="6.5" r="0.8" fill="#aaa" />
  </svg>
);
