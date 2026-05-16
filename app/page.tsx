export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Release Notes
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop guessing what matters in your changelog
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Changelog Auto-Prioritizer connects to your GitHub or GitLab repo, analyzes every commit with OpenAI, and ranks changelog entries by real user impact — so your release notes write themselves.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started for $19/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. No credit card required to try.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24">
        {[
          { title: "Repo Integration", desc: "Connect GitHub or GitLab in seconds. We read commits and diffs automatically." },
          { title: "AI Impact Scoring", desc: "OpenAI ranks each change by user-facing impact so the most important items surface first." },
          { title: "Export & Share", desc: "Download Markdown or copy HTML release notes ready for your blog or app." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-24" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left text-sm text-[#c9d1d9] space-y-2 mb-8">
            {[
              "Unlimited repos",
              "AI-powered impact scoring",
              "Markdown & HTML export",
              "GitHub & GitLab support",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which repos are supported?",
              a: "We support public and private repositories on GitHub and GitLab. Just paste your repo URL and provide a read-only access token."
            },
            {
              q: "How does the AI prioritization work?",
              a: "We send commit messages and diffs to OpenAI, which scores each change on user-facing impact, bug severity, and feature novelty. High-impact items appear at the top of your changelog."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Your subscription is managed through Lemon Squeezy and you can cancel at any time from your billing portal with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Changelog Auto-Prioritizer. All rights reserved.
      </footer>
    </main>
  );
}
