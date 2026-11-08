import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta.js';
import useRevealOnScroll from '../hooks/useRevealOnScroll.js';
import useTimelineProgress from '../hooks/useTimelineProgress.js';
import Card from '../components/Card.jsx';
import EmailCopy from '../components/EmailCopy.jsx';

export default function Home() {
  usePageMeta(
    'Zura Hack | A hackathon for builders',
    'Zura Hack is a hackathon for devs, designers and founders. Build real products, meet real builders and win real prizes.'
  );
  useRevealOnScroll();

  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  useTimelineProgress(timelineRef);

  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hero = heroRef.current;
    if (!hero || reduce) return;
    function onPointerMove(e) {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      hero.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }
    hero.addEventListener('pointermove', onPointerMove);
    return () => hero.removeEventListener('pointermove', onPointerMove);
  }, []);

  return (
    <main id="top">
      <div className="hero" id="hero" ref={heroRef}>
        <div className="grid-bg" aria-hidden="true"></div>
        <div className="spotlight" aria-hidden="true"></div>
        <div className="wrap hero-inner">
          <h1><span className="zura">Zura</span><span className="hack">Hack</span></h1>
          <p className="sub">Build real products. Meet real builders. Win real prizes.</p>
          <div className="hero-actions">
            <Link className="btn btn-solid" to="/register">Join the waitlist <span className="arrow" aria-hidden="true">&rarr;</span></Link>
            <Link className="btn btn-ghost" to="/sponsors">Partner with us</Link>
          </div>
          <div className="scroll-cue" aria-hidden="true"></div>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Build</span><span>Ship</span><span>Demo</span><span>Win</span><span>AI and agents</span><span>Fintech</span><span>Open source</span><span>Design</span><span>Developer tools</span><span>Social impact</span>
          <span>Build</span><span>Ship</span><span>Demo</span><span>Win</span><span>AI and agents</span><span>Fintech</span><span>Open source</span><span>Design</span><span>Developer tools</span><span>Social impact</span>
        </div>
      </div>

      <section className="block flush" id="about" aria-labelledby="about-h">
        <div className="wrap split">
          <div className="sticky-col reveal">
            <p className="eyebrow">About</p>
            <h2 id="about-h">Most good ideas never leave the group chat.</h2>
          </div>
          <div>
            <p className="lede reveal">Zura Hack is where they finally get built. Teams form, ideas turn into working products, and by the end of the event everyone has something real to show.</p>
            <p className="lede reveal">You'll build alongside people who ship, get guidance from mentors who have done it before, and leave with new teammates, new skills and a project you're proud of.</p>
            <div className="pillars">
              <div className="pillar reveal" style={{ '--d': '.05s' }}><b>Build</b><span>Turn an idea into a working product.</span></div>
              <div className="pillar reveal" style={{ '--d': '.15s' }}><b>Learn</b><span>Pick up skills from mentors and teammates.</span></div>
              <div className="pillar reveal" style={{ '--d': '.25s' }}><b>Connect</b><span>Meet the people you'll build with next.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="who" aria-labelledby="who-h">
        <div className="wrap">
          <div className="head-row reveal">
            <div>
              <p className="eyebrow">Who it's for</p>
              <h2 id="who-h">Builders of every kind.</h2>
            </div>
            <p className="lede">Great products need more than code. Every team is stronger with a mix of skills.</p>
          </div>
          <div className="card-grid cols-3">
            <Card className="reveal" style={{ '--d': '.05s' }}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="8,8 4,12 8,16" /><polyline points="16,8 20,12 16,16" /><line x1="14" y1="5" x2="10" y2="19" /></svg>
              <h3>Developers</h3>
              <p>Frontend, backend, mobile, AI or web3. Bring your stack and ship something people can use.</p>
            </Card>
            <Card className="reveal" style={{ '--d': '.15s' }}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
              <h3>Designers</h3>
              <p>UI, UX and brand. See your work come alive in a product built in front of you.</p>
            </Card>
            <Card className="reveal" style={{ '--d': '.25s' }}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V10" /><path d="M10 20V4" /><path d="M16 20v-7" /><path d="M22 20H2" /></svg>
              <h3>Founders</h3>
              <p>Test an idea fast, find your next teammate and pitch to people who can help you grow.</p>
            </Card>
          </div>
          <p className="footnote reveal">Beginners are welcome. No team yet? You can find one at the event.</p>
        </div>
      </section>

      <section className="block" id="tracks" aria-labelledby="tracks-h">
        <div className="wrap">
          <div className="head-row reveal">
            <div>
              <p className="eyebrow">Tracks</p>
              <h2 id="tracks-h">Pick a problem worth solving.</h2>
            </div>
            <p className="lede">Choose the track that excites you. Final tracks and sponsor prizes will be shared before the event.</p>
          </div>
          <div className="card-grid cols-3">
            <Card className="reveal" style={{ '--d': '.05s' }}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="7" width="14" height="12" rx="3" /><path d="M12 7V4" /><circle cx="12" cy="3" r="1" /><circle cx="9.5" cy="12.5" r="1" /><circle cx="14.5" cy="12.5" r="1" /><path d="M10 16h4" /></svg>
              <h3>AI and agents</h3>
              <p>Assistants, automations and tools that use AI to save people real time.</p>
              <span className="track-tag">Chatbots, copilots, workflows</span>
            </Card>
            <Card className="reveal" style={{ '--d': '.12s' }}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2.5" /><path d="M3 10h18" /><path d="M7 15h3" /></svg>
              <h3>Fintech and payments</h3>
              <p>Better ways to send, save, spend and manage money.</p>
              <span className="track-tag">Wallets, payments, savings</span>
            </Card>
            <Card className="reveal" style={{ '--d': '.19s' }}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="12" cy="18" r="2.5" /><path d="M8 7.5 10.8 16" /><path d="M16 7.5 13.2 16" /><path d="M8.5 6h7" /></svg>
              <h3>Web3 and open source</h3>
              <p>Onchain apps, public goods and open tools anyone can build on.</p>
              <span className="track-tag">dApps, protocols, OSS</span>
            </Card>
            <Card className="reveal" style={{ '--d': '.05s' }}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="m7 9 3 3-3 3" /><path d="M12 15h5" /></svg>
              <h3>Developer tools</h3>
              <p>Things that make building software faster, easier or more fun.</p>
              <span className="track-tag">CLIs, APIs, extensions</span>
            </Card>
            <Card className="reveal" style={{ '--d': '.12s' }}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="13.5" cy="6.5" r="1.5" /><circle cx="17.5" cy="10.5" r="1.5" /><circle cx="8.5" cy="7.5" r="1.5" /><circle cx="6.5" cy="12.5" r="1.5" /><path d="M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.4A5.6 5.6 0 0 0 22 9.8C22 5.5 17.5 2 12 2Z" /></svg>
              <h3>Design and UX</h3>
              <p>Products that look great and feel effortless to use.</p>
              <span className="track-tag">Interfaces, flows, brand</span>
            </Card>
            <Card className="reveal" style={{ '--d': '.19s' }}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-4.4-7-10.2A4.3 4.3 0 0 1 12 8a4.3 4.3 0 0 1 7 2.8C19 16.6 12 21 12 21Z" /></svg>
              <h3>Social impact</h3>
              <p>Solutions for education, health, agriculture and local communities.</p>
              <span className="track-tag">Edtech, healthtech, agritech</span>
            </Card>
          </div>
          <Link className="text-link reveal" to="/tracks">See tracks, prizes and rules <span className="arrow" aria-hidden="true">&rarr;</span></Link>
        </div>
      </section>

      <section className="block" id="how" aria-labelledby="how-h">
        <div className="wrap split">
          <div className="sticky-col reveal">
            <p className="eyebrow">How it works</p>
            <h2 id="how-h">From idea to demo.</h2>
            <p className="lede">Here's what your Zura Hack journey looks like, from signing up to taking home a prize.</p>
          </div>
          <ol className="timeline" id="timeline" ref={timelineRef}>
            <li className="reveal"><span className="dot">1</span><h3>Join the waitlist</h3><p>Get on the list so you're first to know when registration opens.</p></li>
            <li className="reveal"><span className="dot">2</span><h3>Register and form a team</h3><p>Sign up solo or with friends. Teams can be formed at the event too.</p></li>
            <li className="reveal"><span className="dot">3</span><h3>Kickoff</h3><p>Meet the mentors, hear from sponsors and get the tracks and rules.</p></li>
            <li className="reveal"><span className="dot">4</span><h3>Build</h3><p>Heads down. Mentors check in with every team to help you get unstuck.</p></li>
            <li className="reveal"><span className="dot">5</span><h3>Demo and judging</h3><p>Show what you built to the judges and the room.</p></li>
            <li className="reveal"><span className="dot">6</span><h3>Awards</h3><p>Winners are announced, prizes are handed out and the celebration starts.</p></li>
          </ol>
        </div>
      </section>

      <section className="block" aria-labelledby="expect-h">
        <div className="wrap split">
          <div className="sticky-col reveal">
            <p className="eyebrow">What to expect</p>
            <h2 id="expect-h">Build, learn, win, connect.</h2>
          </div>
          <ul className="expect">
            <li className="reveal"><strong>Build something real</strong><span>Go from idea to a working product with your team, then demo it to the room.</span></li>
            <li className="reveal"><strong>Mentors on hand</strong><span>Experienced engineers, designers and founders help you get unstuck and sharpen your pitch.</span></li>
            <li className="reveal"><strong>Workshops and talks</strong><span>Short sessions from sponsors and builders on tools you can use right away.</span></li>
            <li className="reveal"><strong>Real prizes</strong><span>Top teams win prizes from our sponsors, plus special prizes for the best builds in each track.</span></li>
            <li className="reveal"><strong>A community that stays</strong><span>Meet the people you'll keep building with long after the event ends.</span></li>
          </ul>
        </div>
      </section>

      <section className="block" aria-labelledby="judge-h">
        <div className="wrap">
          <div className="head-row reveal">
            <div>
              <p className="eyebrow">Judging</p>
              <h2 id="judge-h">What the judges look for.</h2>
            </div>
            <p className="lede">You don't need the most complex project to win. You need one that works and matters.</p>
          </div>
          <div className="criteria">
            <Card className="reveal" style={{ '--d': '.05s' }}><span className="label">Impact</span><h3>Does it matter?</h3><p>It solves a real problem for real people.</p></Card>
            <Card className="reveal" style={{ '--d': '.12s' }}><span className="label">Execution</span><h3>Does it work?</h3><p>A working demo beats a perfect slide deck.</p></Card>
            <Card className="reveal" style={{ '--d': '.19s' }}><span className="label">Design</span><h3>Is it easy to use?</h3><p>Clear, thoughtful and pleasant to use.</p></Card>
            <Card className="reveal" style={{ '--d': '.26s' }}><span className="label">Pitch</span><h3>Can you tell the story?</h3><p>Explain the problem, the solution and what's next.</p></Card>
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="details-h">
        <div className="wrap">
          <p className="eyebrow reveal">Event details</p>
          <h2 className="reveal" id="details-h">The essentials.</h2>
          <dl className="details">
            <div className="detail reveal" style={{ '--d': '.05s' }}><dt>Format</dt><dd>In-person hackathon</dd></div>
            <div className="detail reveal" style={{ '--d': '.12s' }}><dt>Open to</dt><dd>Devs, designers, founders</dd></div>
            <div className="detail reveal" style={{ '--d': '.19s' }}><dt>Date</dt><dd>Announcing soon</dd></div>
            <div className="detail reveal" style={{ '--d': '.26s' }}><dt>Venue</dt><dd>Announcing soon</dd></div>
          </dl>
          <p className="eyebrow reveal" style={{ marginTop: 56 }}>What to bring</p>
          <div className="bring">
            <span className="chip reveal" style={{ '--d': '.03s' }}><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="11" rx="1.5" /><path d="M2 19h20" /></svg>Your laptop</span>
            <span className="chip reveal" style={{ '--d': '.08s' }}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7Z" /></svg>Charger and extension</span>
            <span className="chip reveal" style={{ '--d': '.13s' }}><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="11" r="2" /><path d="M14 10h4" /><path d="M14 14h4" /><path d="M6 16c.5-1.5 1.6-2 3-2s2.5.5 3 2" /></svg>A valid ID</span>
            <span className="chip reveal" style={{ '--d': '.18s' }}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6" /><path d="M10 22h4" /><path d="M12 2a7 7 0 0 0-4 12.7V16h8v-1.3A7 7 0 0 0 12 2Z" /></svg>Your ideas</span>
            <span className="chip reveal" style={{ '--d': '.23s' }}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3s6 6.6 6 11a6 6 0 0 1-12 0c0-4.4 6-11 6-11Z" /></svg>A water bottle</span>
            <span className="chip reveal" style={{ '--d': '.28s' }}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-4.4-7-10.2A4.3 4.3 0 0 1 12 8a4.3 4.3 0 0 1 7 2.8C19 16.6 12 21 12 21Z" /></svg>Good energy</span>
          </div>
        </div>
      </section>

      <section className="block" id="sponsors" aria-labelledby="sponsors-h">
        <div className="wrap">
          <div className="head-row reveal">
            <div>
              <p className="eyebrow">Sponsors and partners</p>
              <h2 id="sponsors-h">Back the builders.</h2>
            </div>
            <p className="lede">Put your brand in front of the developers, designers and founders building what comes next.</p>
          </div>
          <div className="tiers">
            <div className="tier featured reveal" style={{ '--d': '.05s' }}>
              <span className="label">Headline sponsor</span>
              <h3>Own the stage</h3>
              <ul className="perks">
                <li>Top logo placement everywhere</li>
                <li>Opening keynote slot</li>
                <li>Named main prize</li>
                <li>Access to every hacker and project</li>
              </ul>
            </div>
            <div className="tier reveal" style={{ '--d': '.12s' }}>
              <span className="label">Track sponsor</span>
              <h3>Own a track</h3>
              <ul className="perks">
                <li>Your own track and named prize</li>
                <li>Workshop or demo slot</li>
                <li>Logo on site, flyers and posts</li>
                <li>Judge your track's winners</li>
              </ul>
            </div>
            <div className="tier reveal" style={{ '--d': '.19s' }}>
              <span className="label">Community partner</span>
              <h3>Grow with us</h3>
              <ul className="perks">
                <li>Logo as a community partner</li>
                <li>Mentors and judges from your team</li>
                <li>Shoutouts to your community</li>
                <li>Space, credits, swag or food welcome</li>
              </ul>
            </div>
          </div>
          <div className="logo-row">
            <div className="logo-slot reveal" style={{ '--d': '.03s' }}>Your logo here</div>
            <div className="logo-slot reveal" style={{ '--d': '.08s' }}>Your logo here</div>
            <div className="logo-slot reveal" style={{ '--d': '.13s' }}>Your logo here</div>
            <div className="logo-slot reveal" style={{ '--d': '.18s' }}>Your logo here</div>
          </div>
          <Link className="text-link reveal" to="/sponsors">See full sponsor details <span className="arrow" aria-hidden="true">&rarr;</span></Link>
        </div>
      </section>

      <section className="block" aria-label="Join or partner">
        <div className="wrap cta-grid">
          <div className="cta reveal" id="join">
            <p className="eyebrow" style={{ margin: 0 }}>Hackers</p>
            <h2>Join the waitlist</h2>
            <p>Registration opens soon. Add your name to the list and you'll be first to know when spots open.</p>
            <div className="email-row">
              <Link className="btn btn-solid" to="/register">Join the waitlist <span className="arrow" aria-hidden="true">&rarr;</span></Link>
            </div>
          </div>
          <div className="cta reveal" id="partner" style={{ '--d': '.1s' }}>
            <p className="eyebrow" style={{ margin: 0 }}>Sponsors and partners</p>
            <h2>Partner with Zura Hack</h2>
            <p>Tell us a little about your company and what you'd like to support. We'll send you our sponsorship deck and set up a quick call.</p>
            <Link className="text-link" to="/sponsors" style={{ marginTop: 0 }}>See sponsor packages <span className="arrow" aria-hidden="true">&rarr;</span></Link>
            <EmailCopy email="hack@zura.com.ng" subject="Partnering with Zura Hack" />
          </div>
        </div>
      </section>

      <section className="block" id="faq" aria-labelledby="faq-h">
        <div className="wrap split">
          <div className="sticky-col reveal">
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-h">Questions, answered.</h2>
            <p className="lede">Still curious? Email hack@zura.com.ng or send us a DM on X.</p>
          </div>
          <div className="faq">
            <details className="reveal">
              <summary>Who can join?</summary>
              <p>Anyone who builds or wants to: developers, designers, founders and students. Beginners are welcome.</p>
            </details>
            <details className="reveal">
              <summary>Do I need a team?</summary>
              <p>No. You can come with a team or join one at the event. We'll help solo hackers find teammates.</p>
            </details>
            <details className="reveal">
              <summary>I'm a beginner. Should I still come?</summary>
              <p>Yes. Mentors will be around to help, and joining a team with mixed experience is one of the fastest ways to learn.</p>
            </details>
            <details className="reveal">
              <summary>What should I build?</summary>
              <p>Anything useful. Pick one of the tracks, or bring your own idea. Sponsor tracks will be shared before the event.</p>
            </details>
            <details className="reveal">
              <summary>Can I start building before the event?</summary>
              <p>Come with ideas, sketches and research, but write your project during the hackathon so every team starts on equal ground.</p>
            </details>
            <details className="reveal">
              <summary>When and where is it?</summary>
              <p>We're announcing the date and venue soon. Join the waitlist and follow @zura_hack on X so you don't miss it.</p>
            </details>
            <details className="reveal">
              <summary>How can my company get involved?</summary>
              <p>Email hack@zura.com.ng. We offer headline, track and community partnerships, plus mentoring and speaking slots.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="final" aria-labelledby="final-h">
        <div className="wrap">
          <h2 className="reveal" id="final-h">Ready to <em>build?</em></h2>
          <p className="reveal" style={{ '--d': '.1s' }}>Spots will be limited. Get on the waitlist and be the first to know when registration opens.</p>
          <div className="hero-actions reveal" style={{ '--d': '.2s', animationName: 'rise' }}>
            <Link className="btn btn-solid" to="/register">Join the waitlist <span className="arrow" aria-hidden="true">&rarr;</span></Link>
            <a className="btn btn-ghost" href="https://x.com/zura_hack" target="_blank" rel="noopener">Follow @zura_hack</a>
          </div>
        </div>
      </section>
    </main>
  );
}
