import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta.js';
import useRevealOnScroll from '../hooks/useRevealOnScroll.js';
import useTimelineProgress from '../hooks/useTimelineProgress.js';
import Crumb from '../components/Crumb.jsx';

// Paste a Formspree, Tally or similar endpoint here once you have one (only works on your live site).
const FORM_ENDPOINT = '';

export default function Register() {
  usePageMeta(
    'Join the waitlist | Zura Hack',
    'Join the Zura Hack waitlist and be first to know when registration opens.'
  );
  useRevealOnScroll();

  const timelineRef = useRef(null);
  useTimelineProgress(timelineRef);

  const formRef = useRef(null);
  const doneRef = useRef(null);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);
  const [sent, setSent] = useState(false);
  const [summary, setSummary] = useState('');
  const [mailHref, setMailHref] = useState('mailto:hack@zura.com.ng');

  function val(form, name) {
    const el = form.elements[name];
    if (!el) return '';
    if (el.length && el[0] && el[0].type === 'radio') {
      for (let i = 0; i < el.length; i++) if (el[i].checked) return el[i].value;
      return '';
    }
    return (el.value || '').trim();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    setError('');

    const name = val(form, 'name');
    const email = val(form, 'email');

    if (!name) { setError('Add your full name so we know who you are.'); form.elements.name.focus(); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Enter a valid email address, like you@example.com.'); form.elements.email.focus(); return; }
    if (!form.elements.agree.checked) { setError('Please agree to the code of conduct to join.'); return; }

    const lines = [
      'Name: ' + name,
      'Email: ' + email,
      'Phone / WhatsApp: ' + (val(form, 'phone') || 'not given'),
      'Role: ' + (val(form, 'role') || 'not given'),
      'Experience: ' + (val(form, 'level') || 'not given'),
      'Skills: ' + (val(form, 'skills') || 'not given'),
      'Team: ' + (val(form, 'team') || 'not given'),
      'Idea: ' + (val(form, 'idea') || 'not given'),
    ];
    const text = lines.join('\n');

    function showDone(wasSent) {
      setSummary(text);
      setSent(wasSent);
      setDone(true);
      requestAnimationFrame(() => {
        doneRef.current && doneRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    if (FORM_ENDPOINT) {
      const data = new FormData(form);
      fetch(FORM_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
        .then((r) => { if (!r.ok) throw new Error(); showDone(true); })
        .catch(() => setError('We could not send your details. Check your connection and try again, or email hack@zura.com.ng.'));
    } else {
      showDone(false);
      const href = 'mailto:hack@zura.com.ng?subject=' + encodeURIComponent('Zura Hack waitlist: ' + name) + '&body=' + encodeURIComponent(text);
      setMailHref(href);
    }
  }

  return (
    <main id="top">
      <div className="page-hero">
        <div className="grid-bg" aria-hidden="true"></div>
        <div className="wrap">
          <Crumb>Register</Crumb>
          <h1>Join the <em>waitlist</em></h1>
          <p className="lede">Registration opens soon. Add your details and you'll be first to know when spots open.</p>
        </div>
      </div>

      <section className="block flush">
        <div className="wrap split">
          <div className="sticky-col">
            <p className="eyebrow reveal">What happens next</p>
            <h2 className="reveal">Three quick steps.</h2>
            <ol className="timeline" id="timeline" ref={timelineRef}>
              <li className="reveal"><span className="dot">1</span><h3>You're on the list</h3><p>Send your details and we'll keep a spot in line for you.</p></li>
              <li className="reveal"><span className="dot">2</span><h3>Registration opens</h3><p>We'll email you first with the date, venue and full registration link.</p></li>
              <li className="reveal"><span className="dot">3</span><h3>Confirm your spot</h3><p>Complete registration and get ready to build.</p></li>
            </ol>
            <p className="footnote reveal">Questions? Email hack@zura.com.ng or DM @zura_hack on X.</p>
          </div>

          <div className="form-shell reveal">
            {!done && (
              <div id="form-fields">
                <form className="form" id="register-form" noValidate ref={formRef} onSubmit={handleSubmit}>
                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="f-name">Full name</label>
                      <input className="input" id="f-name" name="name" type="text" autoComplete="name" placeholder="Amina Bello" required />
                    </div>
                    <div className="field">
                      <label htmlFor="f-email">Email</label>
                      <input className="input" id="f-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                    </div>
                  </div>

                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="f-phone">Phone or WhatsApp <span className="opt">(optional)</span></label>
                      <input className="input" id="f-phone" name="phone" type="tel" autoComplete="tel" placeholder="080 0000 0000" />
                    </div>
                    <div className="field">
                      <label htmlFor="f-role">I am a</label>
                      <select className="select" id="f-role" name="role" defaultValue="">
                        <option value="">Choose one</option>
                        <option>Developer</option>
                        <option>Designer</option>
                        <option>Founder</option>
                        <option>Student</option>
                        <option>Product manager</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <fieldset className="field">
                    <legend>Experience level</legend>
                    <div className="choices">
                      <label className="choice"><input type="radio" id="lvl-beg" name="level" value="Beginner" /><span>Beginner</span></label>
                      <label className="choice"><input type="radio" id="lvl-int" name="level" value="Intermediate" defaultChecked /><span>Intermediate</span></label>
                      <label className="choice"><input type="radio" id="lvl-exp" name="level" value="Experienced" /><span>Experienced</span></label>
                    </div>
                  </fieldset>

                  <div className="field">
                    <label htmlFor="f-skills">Skills and tools <span className="opt">(optional)</span></label>
                    <input className="input" id="f-skills" name="skills" type="text" placeholder="React, Python, Figma, Solidity" />
                  </div>

                  <fieldset className="field">
                    <legend>Do you have a team?</legend>
                    <div className="choices">
                      <label className="choice"><input type="radio" id="team-yes" name="team" value="Yes, I have a team" /><span>Yes, I have a team</span></label>
                      <label className="choice"><input type="radio" id="team-no" name="team" value="Looking for a team" defaultChecked /><span>Looking for a team</span></label>
                      <label className="choice"><input type="radio" id="team-solo" name="team" value="Prefer to build solo" /><span>Prefer solo</span></label>
                    </div>
                  </fieldset>

                  <div className="field">
                    <label htmlFor="f-idea">An idea you'd love to build <span className="opt">(optional)</span></label>
                    <textarea className="textarea" id="f-idea" name="idea" placeholder="A WhatsApp bot that helps farmers check market prices"></textarea>
                  </div>

                  <label className="check" htmlFor="f-agree">
                    <input type="checkbox" id="f-agree" name="agree" />
                    <span>I agree to follow the <Link to="/code-of-conduct">Zura Hack code of conduct</Link>.</span>
                  </label>

                  <p className="error" id="form-error" role="alert">{error}</p>
                  <div><button className="btn btn-solid" type="submit">Join the waitlist <span className="arrow" aria-hidden="true">&rarr;</span></button></div>
                </form>
              </div>
            )}

            {done && (
              <div className="form-done" id="form-done" ref={doneRef}>
                <p className="eyebrow" style={{ margin: 0 }}>Almost done</p>
                <h2>Thanks for joining.</h2>
                {sent && <p id="done-sent">You're on the waitlist. We'll email you as soon as registration opens.</p>}
                {!sent && (
                  <div id="done-mail" style={{ display: 'grid', gap: 14 }}>
                    <p>Send these details to <strong>hack@zura.com.ng</strong> to finish joining the waitlist. The button below opens your email app with everything filled in. If it doesn't open, copy the details and email them yourself.</p>
                    <div><a className="btn btn-solid" id="mail-btn" href={mailHref}>Open email app <span className="arrow" aria-hidden="true">&rarr;</span></a></div>
                  </div>
                )}
                <div className="summary" id="form-summary">{summary}</div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
