const FlowerOfLife = ({
  className = "",
  opacity = 0.7,
  strokeWidth = 1.5,
  gradient = false,
}: {
  className?: string;
  opacity?: number;
  strokeWidth?: number;
  gradient?: boolean;
}) => (
  <svg
    className={className}
    style={{ opacity }}
    viewBox="0 0 400 400"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={gradient ? "url(#goldGrad)" : "currentColor"}
    strokeWidth={strokeWidth}
  >
    {gradient && (
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A843" />
          <stop offset="40%" stopColor="#C6922A" />
          <stop offset="70%" stopColor="#B87333" />
          <stop offset="100%" stopColor="#D4A843" />
        </linearGradient>
      </defs>
    )}
    {/* Central circle */}
    <circle cx="200" cy="200" r="50" />
    {/* 6 surrounding circles */}
    {[0, 60, 120, 180, 240, 300].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const cx = 200 + 50 * Math.cos(rad);
      const cy = 200 + 50 * Math.sin(rad);
      return <circle key={angle} cx={cx} cy={cy} r="50" />;
    })}
    {/* Outer ring of 12 */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const cx = 200 + 100 * Math.cos(rad);
      const cy = 200 + 100 * Math.sin(rad);
      return <circle key={`o-${angle}`} cx={cx} cy={cy} r="50" />;
    })}
    {/* Bounding circle */}
    <circle cx="200" cy="200" r="150" />
  </svg>
);

export default FlowerOfLife;
