"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, Clock, Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import toast from "react-hot-toast";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!BACKEND_URL) {
      toast.error("Configuration error: API URL not found.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent. I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed: " + data.error);
      }
    } catch {
      toast.error("Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "h-12 w-full rounded-lg border border-line bg-chalk px-3.5 text-sm text-ink outline-none transition-colors placeholder:text-faint focus:border-pine";

  return (
    <div>
      <section className="relative overflow-hidden border-b border-line pb-14 pt-32 text-center md:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute left-1/2 top-16 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-line/70 sm:h-[38rem] sm:w-[38rem]" />
          <div className="absolute left-1/2 top-28 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full border border-line/50 sm:top-32 sm:h-[28rem] sm:w-[28rem]" />
          <div className="absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full bg-butter/35 blur-[100px]" />
        </div>

        <div className="shell relative flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
            <span className="h-px w-8 bg-line-strong" />
            <span>Contact / Open for work</span>
            <span className="h-px w-8 bg-line-strong" />
          </div>

          <h1 className="mt-7 max-w-4xl text-balance font-display text-[clamp(3.5rem,9.5vw,7.5rem)] font-medium leading-[0.86] tracking-[-0.06em]">
            Let&apos;s make
            <br />
            something <span className="text-pine">good.</span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
            Whether it&apos;s a freelance build, a full-time role or a technical
            question, start with what you&apos;re trying to make.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-pine">
              Direct / 01
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
              Talk to a human.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-balance text-sm leading-relaxed text-muted">
              I usually reply within a day. If the form isn&apos;t your thing,
              any of these work just as well.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
            <a
              href="mailto:manishkumar110113@gmail.com"
              className="group flex flex-col items-center rounded-2xl border border-line bg-paper p-5 text-center transition-colors hover:border-line-strong"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-line bg-chalk text-pine transition-colors group-hover:border-apricot group-hover:text-apricot">
                <Mail className="h-4 w-4" />
              </span>
              <p className="mt-4 font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
                Email
              </p>
              <p className="mt-1.5 break-all text-sm font-semibold transition-colors group-hover:text-pine">
                manishkumar110113@gmail.com
              </p>
              <ArrowUpRight className="mt-3 h-3.5 w-3.5 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-apricot" />
            </a>

            <a
              href="https://github.com/manish01101"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-line bg-paper p-5 text-center transition-colors hover:border-line-strong"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-line bg-chalk text-pine transition-colors group-hover:border-apricot group-hover:text-apricot">
                <FaGithub className="h-4 w-4" />
              </span>
              <p className="mt-4 font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
                GitHub
              </p>
              <p className="mt-1.5 text-sm font-semibold transition-colors group-hover:text-pine">
                @manish01101
              </p>
              <ArrowUpRight className="mt-3 h-3.5 w-3.5 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-apricot" />
            </a>

            <a
              href="https://www.linkedin.com/in/manish01101/"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-line bg-paper p-5 text-center transition-colors hover:border-line-strong"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-line bg-chalk text-pine transition-colors group-hover:border-apricot group-hover:text-apricot">
                <FaLinkedin className="h-4 w-4" />
              </span>
              <p className="mt-4 font-mono text-[8px] uppercase tracking-[0.16em] text-faint">
                LinkedIn
              </p>
              <p className="mt-1.5 text-sm font-semibold transition-colors group-hover:text-pine">
                /in/manish01101
              </p>
              <ArrowUpRight className="mt-3 h-3.5 w-3.5 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-apricot" />
            </a>
          </div>

          <div className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-x-4 gap-y-2 border-y border-line py-4 font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-apricot" />
              Open for freelance &amp; full-time
            </span>
            <span className="hidden h-1 w-1 rotate-45 bg-line-strong sm:block" />
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3 w-3 text-pine" />
              IST (UTC+5:30)
            </span>
            <span className="hidden h-1 w-1 rotate-45 bg-line-strong sm:block" />
            <span>Replies within a day</span>
          </div>

          <div className="mx-auto mt-8 max-w-2xl overflow-hidden rounded-2xl border border-line bg-paper">
            <div className="flex items-center justify-center gap-3 border-b border-line px-5 py-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-muted sm:px-6">
              <span>Project brief</span>
              <span className="h-1 w-1 rotate-45 bg-apricot" />
              <span>01 / 01</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 p-5 sm:p-7">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="font-mono text-[8px] uppercase tracking-[0.14em] text-faint"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className={inputClasses}
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="font-mono text-[8px] uppercase tracking-[0.14em] text-faint"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className={inputClasses}
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="font-mono text-[8px] uppercase tracking-[0.14em] text-faint"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="What is this about?"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="font-mono text-[8px] uppercase tracking-[0.14em] text-faint"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-none rounded-lg border border-line bg-chalk px-3.5 py-3 text-sm leading-relaxed text-ink outline-none transition-colors placeholder:text-faint focus:border-pine"
                  placeholder="What are you building? What's in the way? What does a good outcome look like?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-pine px-5 py-4 text-sm font-semibold text-chalk transition-colors hover:bg-apricot hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="text-center font-mono text-[8px] uppercase tracking-[0.12em] text-faint">
                Or email directly at{" "}
                <Link
                  href="mailto:manishkumar110113@gmail.com"
                  className="text-muted underline decoration-line underline-offset-4 transition-colors hover:text-pine"
                >
                  manishkumar110113@gmail.com
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
