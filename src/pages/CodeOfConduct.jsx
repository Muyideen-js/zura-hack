import usePageMeta from '../hooks/usePageMeta.js';
import useRevealOnScroll from '../hooks/useRevealOnScroll.js';
import Crumb from '../components/Crumb.jsx';

export default function CodeOfConduct() {
  usePageMeta(
    'Code of conduct | Zura Hack',
    'How we expect everyone to behave at Zura Hack.'
  );
  useRevealOnScroll();

  return (
    <main id="top">
      <div className="page-hero">
        <div className="grid-bg" aria-hidden="true"></div>
        <div className="wrap">
          <Crumb>Code of conduct</Crumb>
          <h1>Code of <em>conduct</em></h1>
          <p className="lede">Zura Hack is for everyone. This is how we expect people to treat each other at the event, online and everywhere in between.</p>
        </div>
      </div>

      <section className="block flush">
        <div className="wrap split">
          <nav className="sticky-col reveal" aria-label="On this page">
            <p className="eyebrow">On this page</p>
            <ul className="toc">
              <li><a href="#pledge">Our pledge</a></li>
              <li><a href="#expected">Expected behaviour</a></li>
              <li><a href="#unacceptable">Unacceptable behaviour</a></li>
              <li><a href="#scope">Where this applies</a></li>
              <li><a href="#reporting">Reporting</a></li>
              <li><a href="#consequences">Consequences</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <article className="prose">
            <h2 id="pledge" className="reveal">Our pledge</h2>
            <p className="reveal">We want Zura Hack to be a safe, welcoming and harassment-free experience for everyone, whatever their gender, age, religion, ethnicity, disability, appearance, background, experience level or choice of tools.</p>
            <p className="reveal">Everyone taking part agrees to this code: hackers, mentors, judges, sponsors, volunteers, speakers and organisers.</p>

            <h2 id="expected" className="reveal">Expected behaviour</h2>
            <ul className="reveal">
              <li>Be kind and patient, especially with beginners.</li>
              <li>Respect people's time, space, ideas and work.</li>
              <li>Give credit where it's due and don't pass off others' work as your own.</li>
              <li>Disagree respectfully. Critique ideas, not people.</li>
              <li>Look out for each other. If someone seems uncomfortable, check in or tell an organiser.</li>
              <li>Follow the venue's rules and the instructions of organisers and volunteers.</li>
            </ul>

            <h2 id="unacceptable" className="reveal">Unacceptable behaviour</h2>
            <ul className="reveal">
              <li>Harassment, intimidation or bullying of any kind, in person or online.</li>
              <li>Offensive comments or jokes about anyone's identity, body or background.</li>
              <li>Unwelcome physical contact or sexual attention.</li>
              <li>Photographing or recording people who have asked not to be recorded.</li>
              <li>Disrupting talks, demos, judging or other people's work.</li>
              <li>Stealing, damaging or tampering with other people's belongings or projects.</li>
              <li>Building or showing projects that are hateful, sexual, harmful or illegal.</li>
              <li>Drinking or using substances in a way that puts yourself or others at risk.</li>
            </ul>

            <h2 id="scope" className="reveal">Where this applies</h2>
            <p className="reveal">This code applies at the venue, at any Zura Hack side events, in our group chats and online spaces, and in any communication between participants connected to the event.</p>

            <h2 id="reporting" className="reveal">Reporting</h2>
            <p className="reveal">If you experience or see something that breaks this code, tell us as soon as you can. You can speak to any organiser or volunteer at the event, or email <strong>hack@zura.com.ng</strong>.</p>
            <p className="reveal">We'll listen, keep your report as private as we can and act quickly. You don't need to have proof to make a report.</p>

            <h2 id="consequences" className="reveal">Consequences</h2>
            <p className="reveal">Organisers will take whatever action they think is fair. That can include a warning, removal from the event, disqualification from prizes, a ban from future Zura events or, where needed, contacting the venue's security or local authorities.</p>

            <h2 id="contact" className="reveal">Contact</h2>
            <p className="reveal">Questions about this code? Email <strong>hack@zura.com.ng</strong> or send a DM to @zura_hack on X.</p>
            <p className="reveal" style={{ fontSize: 'var(--step--1)', color: 'var(--faint)' }}>Last updated November 2026.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
