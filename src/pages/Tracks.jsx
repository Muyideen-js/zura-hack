import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta.js';
import useRevealOnScroll from '../hooks/useRevealOnScroll.js';
import Card from '../components/Card.jsx';
import Crumb from '../components/Crumb.jsx';

export default function Tracks() {
  usePageMeta(
    'Tracks, prizes and rules | Zura Hack',
    'Zura Hack tracks, prizes, judging criteria, rules and submission checklist.'
  );
  useRevealOnScroll();

  return (
    <main id="top">
      <div className="page-hero">
        <div className="grid-bg" aria-hidden="true"></div>
        <div className="wrap">
          <Crumb>Tracks and rules</Crumb>
          <h1>Tracks, prizes and <em>rules</em></h1>
          <p className="lede">Everything you need to know about what to build, how you'll be judged and how to play fair.</p>
          <div className="hero-actions">
            <a className="btn btn-ghost btn-sm" href="#tracks">Tracks</a>
            <a className="btn btn-ghost btn-sm" href="#prizes">Prizes</a>
            <a className="btn btn-ghost btn-sm" href="#judging">Judging</a>
            <a className="btn btn-ghost btn-sm" href="#rules">Rules</a>
            <a className="btn btn-ghost btn-sm" href="#submit">Submitting</a>
          </div>
        </div>
      </div>

      <section className="block flush" id="tracks">
        <div className="wrap">
          <div className="head-row reveal">
            <div>
              <p className="eyebrow">Tracks</p>
              <h2>Pick a problem worth solving.</h2>
            </div>
            <p className="lede">Every project enters one track. Sponsor tracks and their prizes will be added before the event.</p>
          </div>
          <div className="card-grid cols-3">
            <Card className="reveal" style={{ '--d': '.05s' }}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="7" width="14" height="12" rx="3" /><path d="M12 7V4" /><circle cx="12" cy="3" r="1" /><circle cx="9.5" cy="12.5" r="1" /><circle cx="14.5" cy="12.5" r="1" /><path d="M10 16h4" /></svg>
              <h3>AI and agents</h3>
              <p>Assistants, automations and tools that use AI to save people real time.</p>
              <ul className="perks">
                <li>A study buddy that quizzes you from your notes</li>
                <li>An agent that handles small business bookkeeping</li>
                <li>Voice assistants in local languages</li>
              </ul>
            </Card>
            <Card className="reveal" style={{ '--d': '.12s' }}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2.5" /><path d="M3 10h18" /><path d="M7 15h3" /></svg>
              <h3>Fintech and payments</h3>
              <p>Better ways to send, save, spend and manage money.</p>
              <ul className="perks">
                <li>Group savings (ajo, esusu) made transparent</li>
                <li>Simple invoicing for freelancers</li>
                <li>Spending insights for students</li>
              </ul>
            </Card>
            <Card className="reveal" style={{ '--d': '.19s' }}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="12" cy="18" r="2.5" /><path d="M8 7.5 10.8 16" /><path d="M16 7.5 13.2 16" /><path d="M8.5 6h7" /></svg>
              <h3>Web3 and open source</h3>
              <p>Onchain apps, public goods and open tools anyone can build on.</p>
              <ul className="perks">
                <li>Cross-border payments for creators</li>
                <li>Open tools that help contributors get paid</li>
                <li>Verifiable certificates and records</li>
              </ul>
            </Card>
            <Card className="reveal" style={{ '--d': '.05s' }}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="m7 9 3 3-3 3" /><path d="M12 15h5" /></svg>
              <h3>Developer tools</h3>
              <p>Things that make building software faster, easier or more fun.</p>
              <ul className="perks">
                <li>CLIs that remove boring setup</li>
                <li>Better docs or API playgrounds</li>
                <li>Editor extensions and bots</li>
              </ul>
            </Card>
            <Card className="reveal" style={{ '--d': '.12s' }}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="13.5" cy="6.5" r="1.5" /><circle cx="17.5" cy="10.5" r="1.5" /><circle cx="8.5" cy="7.5" r="1.5" /><circle cx="6.5" cy="12.5" r="1.5" /><path d="M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.4A5.6 5.6 0 0 0 22 9.8C22 5.5 17.5 2 12 2Z" /></svg>
              <h3>Design and UX</h3>
              <p>Products that look great and feel effortless to use.</p>
              <ul className="perks">
                <li>Redesign a service everyone struggles with</li>
                <li>Accessible apps for people with disabilities</li>
                <li>Design systems for local startups</li>
              </ul>
            </Card>
            <Card className="reveal" style={{ '--d': '.19s' }}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-4.4-7-10.2A4.3 4.3 0 0 1 12 8a4.3 4.3 0 0 1 7 2.8C19 16.6 12 21 12 21Z" /></svg>
              <h3>Social impact</h3>
              <p>Solutions for education, health, agriculture and local communities.</p>
              <ul className="perks">
                <li>Market prices for farmers over SMS</li>
                <li>Clinic queue and appointment tools</li>
                <li>Learning tools that work offline</li>
              </ul>
            </Card>
          </div>
          <p className="footnote reveal">These ideas are only examples. Bring your own.</p>
        </div>
      </section>

      <section className="block" id="prizes">
        <div className="wrap">
          <div className="head-row reveal">
            <div>
              <p className="eyebrow">Prizes</p>
              <h2>Real prizes for real builds.</h2>
            </div>
            <p className="lede">Prize amounts will be announced as sponsors confirm. Every team that ships a working demo is in the running.</p>
          </div>
          <div className="prizes">
            <div className="prize reveal" style={{ '--d': '.05s' }}><span className="place">1<em>st</em></span><strong>Overall winner</strong><span className="amount">Announcing soon</span></div>
            <div className="prize reveal" style={{ '--d': '.12s' }}><span className="place">2<em>nd</em></span><strong>Runner up</strong><span className="amount">Announcing soon</span></div>
            <div className="prize reveal" style={{ '--d': '.19s' }}><span className="place">3<em>rd</em></span><strong>Third place</strong><span className="amount">Announcing soon</span></div>
          </div>
          <p className="eyebrow reveal" style={{ marginTop: 48 }}>Special awards</p>
          <div className="awards">
            <span className="chip reveal" style={{ '--d': '.03s' }}>Best in each track</span>
            <span className="chip reveal" style={{ '--d': '.08s' }}>Best design</span>
            <span className="chip reveal" style={{ '--d': '.13s' }}>Best beginner team</span>
            <span className="chip reveal" style={{ '--d': '.18s' }}>Most creative idea</span>
            <span className="chip reveal" style={{ '--d': '.23s' }}>People's choice</span>
          </div>
        </div>
      </section>

      <section className="block" id="judging">
        <div className="wrap">
          <div className="head-row reveal">
            <div>
              <p className="eyebrow">Judging</p>
              <h2>What the judges look for.</h2>
            </div>
            <p className="lede">Judges score every project on the same four things. You don't need the most complex project to win.</p>
          </div>
          <div className="criteria">
            <Card className="reveal" style={{ '--d': '.05s' }}><span className="label">Impact</span><h3>Does it matter?</h3><p>It solves a real problem for real people, and you can explain who it helps.</p></Card>
            <Card className="reveal" style={{ '--d': '.12s' }}><span className="label">Execution</span><h3>Does it work?</h3><p>A working demo beats a perfect slide deck. Show it running live.</p></Card>
            <Card className="reveal" style={{ '--d': '.19s' }}><span className="label">Design</span><h3>Is it easy to use?</h3><p>Clear, thoughtful and pleasant to use, even in an early version.</p></Card>
            <Card className="reveal" style={{ '--d': '.26s' }}><span className="label">Pitch</span><h3>Can you tell the story?</h3><p>Explain the problem, your solution and what you'd build next.</p></Card>
          </div>
        </div>
      </section>

      <section className="block" id="rules">
        <div className="wrap split">
          <div className="sticky-col reveal">
            <p className="eyebrow">Rules</p>
            <h2>Play fair, build boldly.</h2>
            <p className="lede">These keep the competition fair for every team. Organisers may update them before the event.</p>
          </div>
          <ul className="rules">
            <li className="reveal"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><div><strong>Teams of 1 to 4 people</strong><span>Build solo or with up to three teammates. You can form teams at the event.</span></div></li>
            <li className="reveal"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><div><strong>Build during the hackathon</strong><span>Ideas, sketches and research are fine beforehand, but write your project's code during the event.</span></div></li>
            <li className="reveal"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><div><strong>Use any tools you like</strong><span>Open-source libraries, APIs, templates and AI tools are all allowed. Mention the big ones in your submission.</span></div></li>
            <li className="reveal"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><div><strong>One project per team</strong><span>Each team submits one project to one track.</span></div></li>
            <li className="reveal"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><div><strong>Submit before the deadline</strong><span>Late submissions can't be judged, so leave time to package your project.</span></div></li>
            <li className="reveal"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><div><strong>Demo it live</strong><span>Every team demos to the judges. Pre-recorded videos are only a backup.</span></div></li>
            <li className="reveal"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><div><strong>You own what you build</strong><span>Your project belongs to your team. Sponsors don't get any rights to it by default.</span></div></li>
            <li className="reveal"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><div><strong>Follow the code of conduct</strong><span>Be respectful to everyone. Read the <Link to="/code-of-conduct">code of conduct</Link>.</span></div></li>
            <li className="reveal"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg><div><strong>Judges' decisions are final</strong><span>Organisers can disqualify teams that break the rules.</span></div></li>
          </ul>
        </div>
      </section>

      <section className="block" id="submit">
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">Submitting</p>
            <h2>What to hand in.</h2>
            <p className="lede">Have these ready before the deadline. Full submission steps will be shared at kickoff.</p>
          </div>
          <div>
            <ul className="checklist">
              <li className="reveal">Project name and a one-line description</li>
              <li className="reveal">Link to your code repository</li>
              <li className="reveal">The track you're entering</li>
              <li className="reveal">Names of everyone on your team</li>
              <li className="reveal">A short demo video as a backup (2 minutes or less)</li>
              <li className="reveal">Screenshots or a live link, if you have one</li>
            </ul>
            <Link className="text-link reveal" to="/register">Join the waitlist <span className="arrow" aria-hidden="true">&rarr;</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
