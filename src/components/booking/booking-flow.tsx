import { useState } from "react";
import { Icon } from "@/components/icon";
import { Card } from "@/components/site/primitives";

const MONTH_LABEL = "May 2026";
const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const LEADING_BLANKS = 4;
const DAYS_IN_MONTH = 31;
const TIME_SLOTS = ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"];
const GOALS = [
  "Audit my onboarding flow",
  "Improve activation & retention",
  "Find conversion leaks",
  "General product strategy",
];

export function BookingFlow() {
  const [selectedDay, setSelectedDay] = useState<number | null>(15);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canConfirm = selectedDay !== null && selectedSlot !== null && name.trim() !== "" && email.trim() !== "";

  if (submitted) {
    return (
      <Card className="mx-auto max-w-xl p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success">
          <Icon name="check" className="h-7 w-7" />
        </div>
        <h2 className="font-heading text-2xl font-semibold text-foreground">You're booked</h2>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          A calendar invite for {MONTH_LABEL.split(" ")[0]} {selectedDay} at {selectedSlot} is on its way to {email}. Talk soon, {name.split(" ")[0]}.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setSelectedSlot(null);
            setName("");
            setEmail("");
            setGoal("");
          }}
          className="mt-6 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          Book another time
        </button>
      </Card>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <Card className="p-6">
        <div className="mb-5 flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 text-sm font-semibold text-primary">1</span>
          <h2 className="font-heading text-lg font-semibold text-foreground">Select Date &amp; Time</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-[1.3fr_1fr]">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <button className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted" aria-label="Previous month">
                <Icon name="chevron-left" className="h-4 w-4" />
              </button>
              <span className="text-sm font-medium text-foreground">{MONTH_LABEL}</span>
              <button className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted" aria-label="Next month">
                <Icon name="chevron-right" className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              {WEEKDAYS.map((d) => (
                <span key={d} className="py-1 text-xs font-medium text-muted-foreground">{d}</span>
              ))}
              {Array.from({ length: LEADING_BLANKS }).map((_, i) => (
                <span key={`blank-${i}`} />
              ))}
              {Array.from({ length: DAYS_IN_MONTH }).map((_, i) => {
                const day = i + 1;
                const isSelected = selectedDay === day;
                const isPast = day < 6;
                return (
                  <button
                    key={day}
                    disabled={isPast}
                    onClick={() => setSelectedDay(day)}
                    className={[
                      "aspect-square rounded-md text-sm transition-colors",
                      isPast
                        ? "cursor-not-allowed text-muted-foreground/40"
                        : isSelected
                          ? "bg-primary font-semibold text-primary-foreground"
                          : "text-foreground hover:bg-muted",
                    ].join(" ")}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
            <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Icon name="globe" className="h-3.5 w-3.5" />
              Time zone: Asia/Kolkata (GMT+5:30)
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium text-foreground">Select Time Slot</p>
            <div className="flex flex-col gap-2">
              {TIME_SLOTS.map((slot) => {
                const isSelected = selectedSlot === slot;
                return (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={[
                      "rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
                      isSelected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-foreground hover:border-primary/50 hover:bg-muted",
                    ].join(" ")}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Card>

      <Card className="flex flex-col gap-4 p-6">
        <div className="mb-1 flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 text-sm font-semibold text-primary">2</span>
          <h2 className="font-heading text-lg font-semibold text-foreground">Your Details</h2>
        </div>
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-foreground">Full Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="h-10 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-foreground">Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="h-10 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-foreground">What's the main goal?</span>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="h-10 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-primary"
          >
            <option value="">Briefly describe...</option>
            {GOALS.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </label>

        <button
          disabled={!canConfirm}
          onClick={() => setSubmitted(true)}
          className="mt-auto rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
        >
          Confirm Booking
        </button>
        <p className="text-center text-xs text-muted-foreground">You'll receive a calendar invite and confirmation.</p>
      </Card>
    </div>
  );
}
