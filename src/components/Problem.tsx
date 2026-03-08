export function Problem() {
  return (
    <section id="problem" className="section bg-linen">
      <div className="sec-label reveal">
        <span className="t-label orange">The Problem</span>
      </div>
      <h2 className="t-section reveal reveal-d1 section-hed-narrow all-caps">
        Discharge is where care <span className="orange">stops.</span>
      </h2>

      <div className="inner">
        <div className="problem-left reveal reveal-d1">
          <div className="persona-card">
            <span className="t-label orange">Target User</span>
            <div className="persona-name">Dr. Sarah Chen</div>
            <div className="persona-sub">Hospitalist &nbsp;·&nbsp; 340-bed regional medical center</div>
          </div>

          <p className="problem-quote">
            She orders the specialist. Writes the prescription.<br />
            Discharges her patient.<br /><br />
            Then she has <strong>no idea what happens next.</strong>
          </p>

          <p className="t-body">
            The prior auth sits in a fax queue for 11 days. Her patient misses
            the cardiology appointment. Three weeks later — readmission.
            This is not a clinical failure. It's an infrastructure failure.
          </p>
        </div>

        <div className="problem-right">
          <div className="stat-block reveal reveal-d1">
            <div className="t-stat" data-count="60" data-prefix="$" data-suffix="B">$60B</div>
            <div className="stat-sub">Spent annually on preventable readmissions. 75% are preventable with proper post-discharge management.</div>
          </div>
          <div className="stat-block reveal reveal-d2">
            <div className="t-stat" data-count="14" data-suffix=" hrs">14 hrs</div>
            <div className="stat-sub">Per physician per week consumed by prior authorization paperwork — the single biggest administrative bottleneck in the discharge window.</div>
          </div>
          <div className="stat-block reveal reveal-d3">
            <div className="t-stat">1 in 4</div>
            <div className="stat-sub">Patients abandons prescribed treatment due to PA delays. Care is decided. It just never happens.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
