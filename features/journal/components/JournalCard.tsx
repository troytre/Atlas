type JournalCardProps = {
  date: string;
  bias: string;
  confidence: number;
  result: string;
  rr: string;
};

export function JournalCard({
  date,
  bias,
  confidence,
  result,
  rr,
}: JournalCardProps) {
  return (
    <div className="group rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
        {date}
      </p>

      <h2
        className={`mt-6 text-4xl font-black ${
          bias === "Bullish"
            ? "text-green-600"
            : "text-red-500"
        }`}
      >
        {bias === "Bullish" ? "🟢" : "🔴"} {bias}
      </h2>

      <div className="mt-8 space-y-4">

        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">
            Confidence
          </span>

          <span className="font-bold">
            {confidence}%
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">
            Result
          </span>

          <span
            className={`font-bold ${
              result === "Correct"
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {result === "Correct" ? "✅" : "❌"} {result}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">
            RR
          </span>

          <span className="font-bold text-blue-600">
            {rr}
          </span>
        </div>

      </div>

      <button className="mt-10 w-full rounded-xl border py-3 font-semibold transition-all duration-300 group-hover:bg-black group-hover:text-white">
        Read Analysis →
      </button>

    </div>
  );
}