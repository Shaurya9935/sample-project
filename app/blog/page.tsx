import Link from "next/link"

const posts = [
  {
    category: "Product thinking",
    title: "Build fewer features, make better decisions",
    excerpt:
      "A practical guide to finding the small product choices that create the biggest shift for your customers.",
    date: "May 18, 2024",
    readTime: "6 min read",
  },
  {
    category: "Behind the scenes",
    title: "What we learned from a month of listening",
    excerpt:
      "The patterns, surprises, and useful questions that came from talking to the people who use our work.",
    date: "May 11, 2024",
    readTime: "4 min read",
  },
  {
    category: "Work culture",
    title: "Making space for focused work",
    excerpt:
      "Small rituals that help a distributed team protect attention and do work they are proud of.",
    date: "May 04, 2024",
    readTime: "5 min read",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#1e2925]">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-[#1e2925]/15 pb-6">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            field notes
          </Link>
          <nav className="flex items-center gap-5 text-sm text-[#1e2925]/70">
            <Link className="hidden transition-colors hover:text-[#1e2925] sm:block" href="/about">
              About
            </Link>
            <Link className="rounded-full bg-[#1e2925] px-4 py-2 text-[#f7f5f0] transition-colors hover:bg-[#38534a]" href="/contact">
              Say hello
            </Link>
          </nav>
        </header>

        <section className="grid gap-10 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-end md:py-24">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-[#bb5a3c]">
              The journal
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-7xl">
              Ideas for making meaningful work.
            </h1>
          </div>
          <p className="max-w-sm text-lg leading-8 text-[#1e2925]/65 md:justify-self-end">
            Notes on building thoughtful products, healthy teams, and a little more room to think.
          </p>
        </section>

        <section className="border-y border-[#1e2925]/15 py-8" aria-labelledby="featured-title">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div className="flex aspect-[4/3] items-end rounded-sm bg-[#d7e0d6] p-6">
              <span className="text-7xl leading-none text-[#38534a]">01</span>
            </div>
            <div className="max-w-xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-[#bb5a3c]">Featured story</p>
              <h2 id="featured-title" className="text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                The quiet power of a clear point of view
              </h2>
              <p className="mt-4 text-base leading-7 text-[#1e2925]/65">
                Good work gets easier when you know what you will say yes to, what you will leave behind, and why it matters.
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-[#1e2925]/55">
                <span>May 25, 2024</span>
                <span aria-hidden="true">/</span>
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16" aria-labelledby="latest-title">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 id="latest-title" className="text-2xl font-semibold tracking-tight">Latest notes</h2>
            <span className="text-sm text-[#1e2925]/50">03 stories</span>
          </div>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
            {posts.map((post, index) => (
              <article key={post.title} className="group border-t border-[#1e2925]/20 pt-5">
                <div className="mb-10 flex items-start justify-between text-sm text-[#1e2925]/50">
                  <span>0{index + 2}</span>
                  <span>{post.category}</span>
                </div>
                <h3 className="text-2xl font-semibold leading-tight tracking-[-0.025em] transition-colors group-hover:text-[#bb5a3c]">
                  {post.title}
                </h3>
                <p className="mt-4 leading-7 text-[#1e2925]/65">{post.excerpt}</p>
                <div className="mt-6 flex gap-3 text-sm text-[#1e2925]/50">
                  <span>{post.date}</span>
                  <span aria-hidden="true">/</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-5 border-t border-[#1e2925]/15 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">A note, now and then.</h2>
            <p className="mt-1 text-sm text-[#1e2925]/60">Thoughtful ideas, sent when they are worth sending.</p>
          </div>
          <Link href="/contact" className="w-fit rounded-full border border-[#1e2925]/25 px-5 py-3 text-sm font-medium transition-colors hover:border-[#1e2925] hover:bg-white">
            Join the list <span aria-hidden="true">-&gt;</span>
          </Link>
        </section>
      </div>
    </main>
  )
}