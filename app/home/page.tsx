const links = [
  {
    href: "/about",
    label: "About",
    description: "Learn more about this space and what it is built for.",
  },
  {
    href: "/blog",
    label: "Blog",
    description: "Read the latest notes, ideas, and updates.",
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Have a question? Get in touch with the team.",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f7f2] px-6 py-8 text-[#17352d] sm:px-10 lg:px-16">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col">
        <header className="flex items-center justify-between border-b border-[#17352d]/15 pb-6">
          <a className="text-lg font-semibold tracking-tight" href="/home">
            Common Ground
          </a>
          <a
            className="rounded-full border border-[#17352d]/25 px-4 py-2 text-sm font-medium transition-colors hover:bg-[#17352d] hover:text-[#f5f7f2]"
            href="/contact"
          >
            Say hello
          </a>
        </header>

        <section className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#d06b45]">
              A calm place to begin
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-7xl">
              Make room for good ideas.
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-[#17352d]/70">
              Welcome to your home base for thoughtful work, useful notes, and
              staying connected to what matters.
            </p>
            <a
              className="mt-9 inline-flex rounded-full bg-[#d06b45] px-6 py-3 font-medium text-white transition-transform hover:-translate-y-0.5"
              href="/about"
            >
              Explore the space <span className="ml-3" aria-hidden="true">-&gt;</span>
            </a>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-[#17352d] p-8 text-[#f5f7f2] sm:p-10">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[20px] border-[#d06b45]/80" />
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.2em] text-[#b8c9b5]">Today&apos;s note</p>
              <p className="mt-16 max-w-sm text-3xl leading-tight tracking-[-0.03em]">
                Small steps become meaningful when you return to them.
              </p>
              <div className="mt-16 flex items-center gap-3 text-sm text-[#b8c9b5]">
                <span className="h-px w-10 bg-[#d06b45]" />
                Keep going
              </div>
            </div>
          </div>
        </section>

        <nav className="grid gap-3 border-t border-[#17352d]/15 pt-6 sm:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.href}
              className="group rounded-2xl p-4 transition-colors hover:bg-white"
              href={link.href}
            >
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">{link.label}</h2>
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">-&gt;</span>
              </div>
              <p className="mt-2 max-w-xs text-sm leading-6 text-[#17352d]/60">
                {link.description}
              </p>
            </a>
          ))}
        </nav>
      </div>
    </main>
  )
}