export const Overview = () => {
  return (
    <>
      <h3 className="font-bold text-sm self-start mb-4">What is all this?</h3>
      <p className="balance text-sm mb-6 mr-6 font-light leading-relaxed">
        <a
          href="https://en.wikipedia.org/wiki/Elo_rating_system"
          target="_blank"
          className="font-bold uppercase"
        >
          Elo
        </a>{" "}
        is a ranking system that adjusts a player&apos;s ranking relative to
        their opponents. When you win, you gain points. Beat someone ranked way
        higher? You&apos;ll gain more points. Lose to someone ranked lower?
        You&apos;ll lose more points. Simple, but it works.
      </p>
      <p className="balance text-sm mb-6 mr-6 font-light leading-relaxed">
        <a
          href="https://en.wikipedia.org/wiki/Cee-lo"
          target="_blank"
          className="font-bold uppercase"
        >
          Cee-lo
        </a>{" "}
        is a fast-paced dice game played with three dice. Players compete to
        roll the best combination, from the coveted 4-5-6 to matching pairs and
        triples. Simple to learn, but with just enoughs strategy to keep things
        interesting.
      </p>
      <p className="balance text-sm mb-6 mr-6 font-light leading-relaxed">
        Does Cee-lo need a complex ranking system that was originally designed
        for chess? Not really - it&apos;s based entirely on luck and you&apos;re
        usually playing for something more interesting than rating points. But
        hey, watching your Elo climb after a hot streak can be satisfying too,
        and everyone loves pressing buttons.
      </p>
    </>
  );
};
Overview.displayName = "Overview";
