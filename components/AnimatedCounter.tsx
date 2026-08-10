type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

export default function AnimatedCounter({
  value,
  suffix = "",
  duration: _duration = 1800,
}: AnimatedCounterProps) {
  void _duration;
  return (
    <span className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}
