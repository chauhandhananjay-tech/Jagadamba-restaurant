import { useState } from "react";
import {
  Calendar,
  Users,
  Clock,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import type { NewReservation } from "@/lib/type";
import { useReveal } from "@/hooks/useReveal";

type Status = "idle" | "submitting" | "success" | "error";

const timeSlots = [
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
];

const occasions = [
  "Casual Dining",
  "Birthday",
  "Anniversary",
  "Business",
  "Family Gathering",
  "Other",
];

export default function Reservation() {
  const { ref, revealed } = useReveal();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState<NewReservation>({
    name: "",
    email: "",
    phone: "",
    party_size: 2,
    reservation_date: "",
    reservation_time: "19:00",
    occasion: "Casual Dining",
    special_requests: "",
  });

  const update = (field: keyof NewReservation, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.reservation_date)
      return;
    setStatus("submitting");
    setErrorMsg("");

    const { error } = await supabase.from("reservations").insert({
      name: form.name,
      email: form.email,
      phone: form.phone,
      party_size: form.party_size,
      reservation_date: form.reservation_date,
      reservation_time: form.reservation_time,
      occasion: form.occasion,
      special_requests: form.special_requests || null,
    });

    if (error) {
      setStatus("error");
      setErrorMsg(
        "Something went wrong. Please try again or call us directly.",
      );
    } else {
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        party_size: 2,
        reservation_date: "",
        reservation_time: "19:00",
        occasion: "Casual Dining",
        special_requests: "",
      });
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      id="reserve"
      className="relative overflow-hidden bg-[#1a1410] py-24 md:py-32"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/24433378/pexels-photo-24433378.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
      </div>

      <div
        ref={ref}
        className={`reveal ${revealed ? "revealed" : ""} relative z-10 mx-auto max-w-3xl px-6`}
      >
        <div className="text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#c9952b]">
            Reservations
          </p>
          <h2 className="font-serif-display text-4xl font-bold leading-tight text-white text-balance md:text-5xl">
            Reserve Your Table
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Secure your spot for an unforgettable dining experience. We look
            forward to welcoming you.
          </p>
        </div>

        {status === "success" ? (
          <div className="mt-12 animate-scale-in rounded-2xl border border-green-500/30 bg-green-500/10 p-10 text-center">
            <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-green-400" />
            <h3 className="font-serif-display text-2xl font-semibold text-white">
              Reservation Requested!
            </h3>
            <p className="mt-3 text-white/70">
              Thank you for choosing Jagadamba. We will confirm your reservation
              by email shortly. For urgent requests, please call us at (555)
              123-4567.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 rounded-full border border-[#c9952b] px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-[#c9952b] transition-all hover:bg-[#c9952b] hover:text-[#1a1410]"
            >
              Make Another Reservation
            </button>
          </div>
        ) : (
          <form
              onSubmit={handleSubmit}
              noValidate
            className="mt-12 rounded-2xl border border-white/10 bg-[#211814]/90 p-8 backdrop-blur-sm md:p-10"
          >
            {status === "error" && (
              <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
                <AlertCircle className="h-5 w-5 shrink-0 text-red-400" />
                <p className="text-sm text-red-300">{errorMsg}</p>
              </div>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-white/80">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#1a1410] px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-[#c9952b]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/80">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#1a1410] px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-[#c9952b]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/80">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#1a1410] px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-[#c9952b]"
                  placeholder="(+91) 9154484157"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-white/80">
                  <Users className="h-4 w-4 text-[#c9952b]" /> Party Size
                </label>
                <select
                  value={form.party_size}
                  onChange={(e) =>
                    update("party_size", parseInt(e.target.value))
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#1a1410] px-4 py-3 text-white outline-none transition-colors focus:border-[#c9952b]"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                  <option value={12}>12+ (Large Party)</option>
                </select>
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-white/80">
                  <Calendar className="h-4 w-4 text-[#c9952b]" /> Date
                </label>
                <input
                  type="date"
                  required
                  min={today}
                  value={form.reservation_date}
                  onChange={(e) => update("reservation_date", e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#1a1410] px-4 py-3 text-white outline-none transition-colors focus:border-[#c9952b] `color-scheme:dark` "
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-white/80">
                  <Clock className="h-4 w-4 text-[#c9952b]" /> Time
                </label>
                <select
                  value={form.reservation_time}
                  onChange={(e) => update("reservation_time", e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#1a1410] px-4 py-3 text-white outline-none transition-colors focus:border-[#c9952b]"
                >
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium text-white/80">
                Occasion
              </label>
              <div className="flex flex-wrap gap-2">
                {occasions.map((occ) => (
                  <button
                    key={occ}
                    type="button"
                    onClick={() => update("occasion", occ)}
                    className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all ${
                      form.occasion === occ
                        ? "bg-[#c9952b] text-[#1a1410]"
                        : "border border-white/15 text-white/60 hover:border-[#c9952b]/50 hover:text-[#c9952b]"
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium text-white/80">
                Special Requests{" "}
                <span className="text-white/40">(optional)</span>
              </label>
              <textarea
                value={form.special_requests}
                onChange={(e) => update("special_requests", e.target.value)}
                rows={3}
                className="w-full resize-none rounded-xl border border-white/10 bg-[#1a1410] px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-[#c9952b]"
                placeholder="Allergies, seating preferences, accessibility needs..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#c9952b] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#1a1410] transition-all hover:bg-[#d4a536] disabled:opacity-60"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Submitting...
                </>
              ) : (
                "Request Reservation"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
