import usePageMeta from '../hooks/usePageMeta.js';
import useRevealOnScroll from '../hooks/useRevealOnScroll.js';
import Card from '../components/Card.jsx';
import Crumb from '../components/Crumb.jsx';
import EmailCopy from '../components/EmailCopy.jsx';

export default function Sponsors() {
  usePageMeta(
    'Sponsors and partners | Zura Hack',
    'Sponsor Zura Hack and meet the developers, designers and founders building what comes next.'
  );
  useRevealOnScroll();

  return (
    <main id="top">
      <div className="page-hero">
        <div className="grid-bg" aria-hidden="true"></div>
        <div className="wrap">
          <Crumb>Sponsors</Crumb>
          <h1>Back the <em>builders</em></h1>
          <p className="lede">Zura Hack brings developers, designers and founders into one room to build real products. Sponsor the event and meet them while they build.</p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#contact">Become a sponsor <span className="arrow" aria-hidden="true">&rarr;</span></a>
            <a className="btn btn-ghost" href="#packages">See packages</a>
          </div>
        </div>
      </div>

      <section className="block flush">
        <div className="wrap">
          <div className="head-row reveal">
            <div>
              <p className="eyebrow">Why sponsor</p>
              <h2>What your team gets out of it.</h2>
            </div>
            <p className="lede">Sponsoring a hackathon is one of the most direct ways to reach people who build with tools like yours.</p>
          </div>
          <div className="card-grid cols-4">
            <Card className="reveal" style={{ '--d': '.05s' }}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg>
              <h3>Reach builders</h3>
              <p>Put your product in the hands of developers and designers while they decide what to build with.</p>
            </Card>
            <Card className="reveal" style={{ '--d': '.12s' }}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" /><path d="M17 11v6" /><path d="M14 14h6" /></svg>
              <h3>Hire talent</h3>
              <p>Watch people work under real pressure and meet the ones you'd want on your team.</p>
            </Card>
            <Card className="reveal" style={{ '--d': '.19s' }}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.8 7L4 20l1-4.6A8 8 0 1 1 21 12Z" /></svg>
              <h3>Get feedback</h3>
              <p>See how builders use your API or product, and hear what they'd change.</p>
            </Card>
            <Card className="reveal" style={{ '--d': '.26s' }}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 17 9 11l4 4 8-8" /><path d="M15 7h6v6" /></svg>
              <h3>Grow your brand</h3>
              <p>Show up as a company that invests in the local tech community, online and in the room.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap split">
          <div className="sticky-col reveal">
            <p className="eyebrow">Who you'll reach</p>
            <h2>The people building what comes next.</h2>
          </div>
          <ul className="expect">
            <li className="reveal"><strong>Developers</strong><span>Frontend, backend, mobile, AI and web3 engineers, from students to working professionals.</span></li>
            <li className="reveal"><strong>Designers</strong><span>UI, UX and brand designers who shape how products look and feel.</span></li>
            <li className="reveal"><strong>Founders</strong><span>Early-stage founders testing ideas and looking for tools, teammates and support.</span></li>
            <li className="reveal"><strong>Students</strong><span>Computer science and design students from local universities and polytechnics.</span></li>
            <li className="reveal"><strong>Online audience</strong><span>Everyone following Zura Hack on X and our partner communities before, during and after the event.</span></li>
          </ul>
        </div>
      </section>

      <section className="block" id="packages">
        <div className="wrap">
          <div className="head-row reveal">
            <div>
              <p className="eyebrow">Packages</p>
              <h2>Ways to get involved.</h2>
            </div>
            <p className="lede">Every package can be adjusted. Tell us your goals and budget and we'll put something together.</p>
          </div>
          <div className="tiers">
            <div className="tier featured reveal" style={{ '--d': '.05s' }}>
              <span className="label">Headline sponsor</span>
              <h3>Own the stage</h3>
              <p className="tier-note">One spot only</p>
              <ul className="perks">
                <li>"Zura Hack, powered by" naming</li>
                <li>Top logo placement on site, flyers, stage and posts</li>
                <li>Opening keynote slot</li>
                <li>Named main prize</li>
                <li>Booth or table at the venue</li>
                <li>Access to every project and hacker who opts in</li>
                <li>Dedicated posts on @zura_hack</li>
              </ul>
            </div>
            <div className="tier reveal" style={{ '--d': '.12s' }}>
              <span className="label">Track sponsor</span>
              <h3>Own a track</h3>
              <p className="tier-note">One per track</p>
              <ul className="perks">
                <li>Your own track and named prize</li>
                <li>Workshop or product demo slot</li>
                <li>Logo on site, flyers and posts</li>
                <li>Your team judges the track winners</li>
                <li>Mentors from your team on the floor</li>
                <li>Shoutout in event recap</li>
              </ul>
            </div>
            <div className="tier reveal" style={{ '--d': '.19s' }}>
              <span className="label">Community partner</span>
              <h3>Grow with us</h3>
              <p className="tier-note">Open to many</p>
              <ul className="perks">
                <li>Logo as a community partner</li>
                <li>Mentors and judges from your team</li>
                <li>Shoutouts to your community</li>
                <li>Mention in our posts and recap</li>
                <li>Great for hubs, communities and media</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <p className="eyebrow reveal">In-kind support</p>
          <h2 className="reveal">Not cash? That works too.</h2>
          <p className="lede reveal">Many of the things that make a great hackathon don't need a cash budget. In-kind sponsors get the same recognition for what they bring.</p>
          <div className="bring">
            <span className="chip reveal" style={{ '--d': '.03s' }}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21h18" /><path d="M5 21V8l7-5 7 5v13" /><path d="M10 21v-6h4v6" /></svg>Venue</span>
            <span className="chip reveal" style={{ '--d': '.08s' }}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11h16" /><path d="M5 11a7 7 0 0 1 14 0" /><path d="M6 15h12l-1 5H7Z" /></svg>Food and drinks</span>
            <span className="chip reveal" style={{ '--d': '.13s' }}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5a10 10 0 0 1 14 0" /><path d="M8.5 16a5 5 0 0 1 7 0" /><circle cx="12" cy="19.5" r="1" /></svg>Internet and data</span>
            <span className="chip reveal" style={{ '--d': '.18s' }}><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M7 12h.01" /><path d="M11 12h6" /></svg>Product credits</span>
            <span className="chip reveal" style={{ '--d': '.23s' }}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12v9H4v-9" /><path d="M2 7h20v5H2Z" /><path d="M12 22V7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7Z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7Z" /></svg>Swag and prizes</span>
            <span className="chip reveal" style={{ '--d': '.28s' }}><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="11" rx="1.5" /><path d="M2 19h20" /></svg>Hardware</span>
            <span className="chip reveal" style={{ '--d': '.33s' }}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Z" /><path d="M16 9a3 3 0 0 1 0 6" /></svg>Media coverage</span>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <p className="eyebrow reveal">How it works</p>
          <h2 className="reveal">From first email to event day.</h2>
          <ol className="steps">
            <li className="reveal" style={{ '--d': '.05s' }}><h3>Email us</h3><p>Tell us about your company and what you'd like to support.</p></li>
            <li className="reveal" style={{ '--d': '.12s' }}><h3>Get the deck</h3><p>We send our sponsorship deck with full details.</p></li>
            <li className="reveal" style={{ '--d': '.19s' }}><h3>Quick call</h3><p>We agree on the package that fits your goals.</p></li>
            <li className="reveal" style={{ '--d': '.26s' }}><h3>Show up and build</h3><p>Your brand goes live and your team joins us on the day.</p></li>
          </ol>
        </div>
      </section>

      <section className="block">
        <div className="wrap split">
          <div className="sticky-col reveal">
            <p className="eyebrow">Sponsor FAQ</p>
            <h2>Common questions.</h2>
          </div>
          <div className="faq">
            <details className="reveal"><summary>Can we sponsor with credits or products instead of cash?</summary><p>Yes. Credits, data, food, swag and hardware are all welcome, and in-kind sponsors get logo placement and shoutouts too.</p></details>
            <details className="reveal"><summary>Can our team mentor or judge?</summary><p>Yes. Track sponsors judge their own track, and any sponsor or partner can send mentors.</p></details>
            <details className="reveal"><summary>Can we recruit at the event?</summary><p>Yes. Headline and track sponsors can connect with hackers who opt in to share their details.</p></details>
            <details className="reveal"><summary>Can we run a workshop?</summary><p>Track and headline sponsors get a workshop or demo slot. It's a great way to get builders using your product on the day.</p></details>
            <details className="reveal"><summary>Is there a custom package?</summary><p>Yes. Email us with your goals and budget and we'll build one around them.</p></details>
          </div>
        </div>
      </section>

      <section className="final" id="contact">
        <div className="wrap">
          <h2 className="reveal">Let's <em>talk.</em></h2>
          <p className="reveal" style={{ '--d': '.1s' }}>Email us and we'll send our sponsorship deck and set up a quick call.</p>
          <EmailCopy email="hack@zura.com.ng" subject="Sponsoring Zura Hack" className="reveal" style={{ justifyContent: 'center', '--d': '.2s' }} />
        </div>
      </section>
    </main>
  );
}
