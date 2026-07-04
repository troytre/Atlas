const tickerData = [
  { symbol: "NIFTY", price: "25,248", change: "+0.84%" },
  { symbol: "BANKNIFTY", price: "57,210", change: "+0.52%" },
  { symbol: "GOLD", price: "99,120", change: "+0.18%" },
  { symbol: "BTC", price: "$108,250", change: "-0.74%" },
  { symbol: "ETH", price: "$2,580", change: "+1.20%" },
];

export function TickerStrip() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto flex max-w-7xl gap-8 overflow-x-auto px-4 py-3">
        {tickerData.map((item) => (
          <div
            key={item.symbol}
            className="flex min-w-fit items-center gap-2"
          >
            <span className="font-semibold">
              {item.symbol}
            </span>

            <span>{item.price}</span>

            <span
              className={
                item.change.startsWith("-")
                  ? "text-red-500"
                  : "text-green-500"
              }
            >
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}