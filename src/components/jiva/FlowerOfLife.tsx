const FlowerOfLife = ({ className = "", opacity = 0.07 }: { className?: string; opacity?: number }) => (
  <svg
    className={className}
    style={{ opacity }}
    viewBox="0 0 400 400"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
  >
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
