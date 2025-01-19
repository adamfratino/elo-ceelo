import { ANIMATION_DELAY } from "@/lib/constants";

export const RollingText = () => {
  return (
    <span className="text-4xl h-14 translate-y-2">
      rolling
      <Dot />
      <Dot delay={ANIMATION_DELAY / 2} />
      <Dot delay={ANIMATION_DELAY} />
    </span>
  );
};
RollingText.displayName = "RollingText";

const Dot = ({ delay = 0 }: { delay?: number }) => (
  <span
    data-show={false}
    className="animate-[loading_1s_infinite]"
    style={{
      animationDelay: `${delay}ms`,
      animationTimingFunction: "step-end",
    }}
  >
    .
  </span>
);
Dot.displayName = "Dot";
