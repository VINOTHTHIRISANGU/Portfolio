export default function GlassCard({ children, className = "", ...props }) {
  return (
    <div className={`glass glass-hover rounded-2xl ${className}`} {...props}>
      {children}
    </div>
  );
}
