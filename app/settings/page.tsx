const settings = [
  {
    title: "Email updates",
    description: "Receive a short digest when something needs your attention.",
    checked: true,
  },
  {
    title: "Weekly reflection",
    description: "A gentle reminder to review your notes every Friday.",
    checked: false,
  },
]

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-[#f5f7f2] px-6 py-8 text-[#17352d] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between border-b border-[#17352d]/15 pb-6">
          <a className="text-lg font-semibold tracking-tight" href="/home">
            Common Ground
          </a>
          <a className="text-sm font-medium text-[#17352d]/65 transition-colors hover:text-[#d06b45]" href="/home">
            Back home <span aria-hidden="true">-&gt;</span>
          </a>
        </header>

        <section className="py-14 sm:py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#d06b45]">
            Your preferences
          </p>
          <div className="flex flex-col justify-between gap-5 border-b border-[#17352d]/15 pb-10 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">Settings</h1>
              <p className="mt-4 max-w-xl text-lg leading-8 text-[#17352d]/65">
                Shape this space around the way you work best.
              </p>
            </div>
            <button className="rounded-full bg-[#d06b45] px-6 py-3 font-medium text-white transition-transform hover:-translate-y-0.5">
              Save changes
            </button>
          </div>
        </section>

        <div className="grid gap-12 pb-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <section>
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#17352d] text-2xl font-semibold text-[#f5f7f2]">
              SG
            </div>
            <h2 className="mt-6 text-2xl font-semibold">Shaurya Gupta</h2>
            <p className="mt-2 text-[#17352d]/60">shaura@example.com</p>
            <button className="mt-6 text-sm font-semibold text-[#d06b45] underline decoration-[#d06b45]/30 underline-offset-4 hover:decoration-[#d06b45]">
              Change profile photo
            </button>
          </section>

          <div className="space-y-12">
            <section>
              <h2 className="text-xl font-semibold">Account details</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-medium">
                  Full name
                  <input className="mt-2 w-full rounded-xl border border-[#17352d]/15 bg-white px-4 py-3 font-normal outline-none transition-colors focus:border-[#d06b45]" defaultValue="Shaurya Gupta" />
                </label>
                <label className="text-sm font-medium">
                  Email address
                  <input className="mt-2 w-full rounded-xl border border-[#17352d]/15 bg-white px-4 py-3 font-normal outline-none transition-colors focus:border-[#d06b45]" defaultValue="shaura@example.com" type="email" />
                </label>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Notifications</h2>
              <div className="mt-4 divide-y divide-[#17352d]/10 border-y border-[#17352d]/10">
                {settings.map((setting) => (
                  <label className="flex cursor-pointer items-center justify-between gap-6 py-5" key={setting.title}>
                    <span>
                      <span className="block font-medium">{setting.title}</span>
                      <span className="mt-1 block text-sm leading-6 text-[#17352d]/60">{setting.description}</span>
                    </span>
                    <input className="h-5 w-5 accent-[#d06b45]" type="checkbox" defaultChecked={setting.checked} />
                  </label>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}