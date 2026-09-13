import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#1e2925]">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-[#1e2925]/15 pb-6">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            field notes
          </Link>
          <Link
            href="/blog"
            className="text-sm text-[#1e2925]/70 transition-colors hover:text-[#1e2925]"
          >
            Read the journal
          </Link>
        </header>

        <section className="grid gap-14 py-16 md:grid-cols-[0.9fr_1.1fr] md:gap-20 md:py-24">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-[#bb5a3c]">
              Say hello
            </p>
            <h1 className="max-w-xl text-5xl font-semibold leading-[0.98] tracking-tighter sm:text-7xl">
              Let&apos;s make something meaningful.
            </h1>
            <p className="mt-7 max-w-md text-lg leading-8 text-[#1e2925]/65">
              Have a question, an idea, or just want to compare notes? Send a message and we&apos;ll get back to you soon.
            </p>
            <div className="mt-10 border-t border-[#1e2925]/15 pt-5 text-sm leading-7 text-[#1e2925]/65">
              <p className="font-medium text-[#1e2925]">Prefer email?</p>
              <a className="transition-colors hover:text-[#bb5a3c]" href="mailto:hello@fieldnotes.studio">
                hello@fieldnotes.studio
              </a>
            </div>
          </div>

          <form className="border-t border-[#1e2925]/20 pt-6" action="#" method="post">
            <div className="grid gap-7 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium">
                Name
                <input
                  className="border-b border-[#1e2925]/30 bg-transparent px-0 py-3 text-base font-normal outline-none transition-colors placeholder:text-[#1e2925]/35 focus:border-[#bb5a3c]"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium">
                Email
                <input
                  className="border-b border-[#1e2925]/30 bg-transparent px-0 py-3 text-base font-normal outline-none transition-colors placeholder:text-[#1e2925]/35 focus:border-[#bb5a3c]"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </label>
            </div>
            <label className="mt-8 flex flex-col gap-2 text-sm font-medium">
              Message
              <textarea
                className="min-h-36 resize-y border-b border-[#1e2925]/30 bg-transparent px-0 py-3 text-base font-normal outline-none transition-colors placeholder:text-[#1e2925]/35 focus:border-[#bb5a3c]"
                name="message"
                placeholder="Tell us a little about what is on your mind..."
                required
              />
            </label>
            <button
              className="mt-8 rounded-full bg-[#1e2925] px-6 py-3 text-sm font-medium text-[#f7f5f0] transition-colors hover:bg-[#38534a]"
              type="submit"
            >
              Send message <span aria-hidden="true">-&gt;</span>
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}