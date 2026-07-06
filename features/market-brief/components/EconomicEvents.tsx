import { Container } from "@/components/layout/Container";

const events = [
  {
    time: "09:15",
    title: "Market Opens",
    impact: "High",
  },
  {
    time: "11:30",
    title: "RBI Governor Speech",
    impact: "Medium",
  },
  {
    time: "02:30",
    title: "US Jobless Claims",
    impact: "High",
  },
  {
    time: "03:30",
    title: "Market Close",
    impact: "Low",
  },
];

export function EconomicEvents() {
  return (
    <section className="py-14">
      <Container>

        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Economic Events
          </p>

          <h2 className="mt-2 text-4xl font-black">
            Today's Important Events
          </h2>

          <p className="mt-3 text-muted-foreground">
            Keep these timings in mind before entering trades.
          </p>
        </div>

        <div className="space-y-6">

          {events.map((event) => (

            <div
              key={event.time}
              className="flex items-center justify-between rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg"
            >

              <div>

                <p className="text-sm text-muted-foreground">
                  {event.time}
                </p>

                <h3 className="mt-1 text-xl font-bold">
                  {event.title}
                </h3>

              </div>

              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold
                ${
                  event.impact === "High"
                    ? "bg-red-100 text-red-700"
                    : event.impact === "Medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {event.impact}
              </span>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}





/*
import { Container } from "@/components/layout/Container";

const events = [
  {
    time: "09:15 AM",
    event: "Market Opening",
    impact: "High",
  },
  {
    time: "02:30 PM",
    event: "US Economic Data",
    impact: "High",
  },
  {
    time: "03:30 PM",
    event: "Market Closing",
    impact: "Medium",
  },
];

export function EconomicEvents() {
  return (
    <section className="py-12">
      <Container>
        <div className="rounded-3xl border bg-card p-8">
          <h2 className="text-3xl font-bold">
            Today's Economic Events
          </h2>

          <p className="mt-3 text-muted-foreground">
            Scheduled events that could influence today's market direction.
          </p>

          <div className="mt-8 space-y-4">
            {events.map((event) => (
              <div
                key={`${event.time}-${event.event}`}
                className="flex items-center justify-between rounded-xl border p-5"
              >
                <div>
                  <p className="font-semibold">
                    {event.event}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {event.time}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    event.impact === "High"
                      ? "bg-red-500/10 text-red-500"
                      : "bg-yellow-500/10 text-yellow-500"
                  }`}
                >
                  {event.impact} Impact
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
  
*/