import { cx } from "@/ui/cva";
import { Stack } from "@/ui/layout";

export const Rules = () => {
  return (
    <Stack gap="md">
      <Paragraph className="font-semibold mb-0">
        There are five types of rolls in the game.
      </Paragraph>
      <Stack as="ul" gap="sm" className="mb-4">
        <li>
          <h3 className="font-bold text-positive">4-5-6</h3>
          <Paragraph>
            The highest possible roll. If you roll 4-5-6, you automatically win.
          </Paragraph>
        </li>
        <li>
          <h3 className="font-bold text-positive">Triples</h3>
          <Paragraph>
            Rolling three same numbers is known as rolling a triple. Higher
            triples beat lower triples, so 4-4-4 is better than 3-3-3. Any
            triple beats any single point.
          </Paragraph>
        </li>
        <li>
          <h3 className="font-bold text-positive">Single Point</h3>
          <Paragraph>
            Rolling a pair and another number establishes the singleton as a
            "point". A higher point beats a lower point, so 2-2-6 (establishing
            a point of 6) is better than 5-5-2 (establishing a point of 2).
          </Paragraph>
        </li>
        <li>
          <h3 className="font-bold text-negative">1-2-3</h3>
          <Paragraph>
            The lowest possible roll. If you roll 1-2-3, you automatically lose.
          </Paragraph>
        </li>
        <li>
          <h3 className="font-bold text-neutral">Indeterminate</h3>
          <Paragraph>
            Any combination that does not result in a triple, sequential (4-5-6
            win or 1-2-3 loss), or points (pair + value) is considered an
            indeterminate outcome and requires a re-roll.
          </Paragraph>
        </li>
      </Stack>

      <Stack gap="sm">
        <Paragraph className="font-semibold mb-0">How do I win?</Paragraph>
        <Paragraph>
          In our version, the CPU will always go first and will always start
          with a qualifying roll.
        </Paragraph>
        <Paragraph>
          We've decided to simplify this portion of the game since{" "}
          <strong>(a)</strong> the CPU has an equal chance to instantly win or
          instantly lose, and <strong>(b)</strong> it's boring to watch the CPU
          re-roll.
        </Paragraph>
        <Paragraph>
          Roll higher than the CPU's roll and you win! Roll lower and you lose.
          A draw is a draw. Sometimes you'll win without rolling (when the CPU
          rolls a 1-2-3), sometimes you'll lose without rolling (when the CPU
          rolls a 4-5-6).
        </Paragraph>
      </Stack>

      <Stack gap="sm">
        <Paragraph className="font-semibold mb-0">
          Anything else I should know?
        </Paragraph>
        <Paragraph>
          You can shuffle the CPU's Elo up to three times per session. When you
          shuffle the CPU's Elo, your session's record (win, loss, draw) will
          reset.
        </Paragraph>
        <Paragraph>
          A multiplier will be activated after every two indeterminate rolls. So
          if you roll twice and the game isn't over, the Elo stakes are doubled.
          After four rolls that don't score, it's quadrupled and so on. The
          multiplier resets when the game is over.
        </Paragraph>
      </Stack>
    </Stack>
  );
};

const Paragraph = ({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) => {
  return (
    <p
      className={cx(
        "balance text-sm mb-2 mr-6 font-light leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
};
