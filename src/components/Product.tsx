export function Product() {
  return (
    <section id="product" className="section bg-linen-2">
      <div className="sec-label reveal">
        <span className="t-label orange">What Flint Is · Who It's For</span>
      </div>

      <div className="product-header">
        <h2 className="t-section reveal reveal-d1 all-caps">
          The post-discharge<br /><span className="orange">operating system.</span>
        </h2>
        <p className="t-serif reveal reveal-d2">
          Built for hospitalists and hospital discharge teams. Flint activates
          at the moment of discharge and autonomously manages every action
          the patient needs in the next 30 days.
        </p>
      </div>

      <div className="feature-grid reveal">
        <div className="feature-card lead">
          <span className="t-label">Core</span>
          <div className="t-card-title">Autonomous PA Execution</div>
          <p className="t-body">Reads the discharge note. Identifies PA-required procedures. Assembles documentation. Submits via FHIR API. No human in the loop. 90 seconds.</p>
          <span className="badge">Demo</span>
        </div>
        <div className="feature-card">
          <span className="t-label">02</span>
          <div className="t-card-title">Specialist Booking & Handoff</div>
          <p className="t-body">Identifies in-network specialists, checks availability, books the appointment, sends a structured clinical handoff — automatically.</p>
          <span className="badge">FHIR R4</span>
        </div>
        <div className="feature-card">
          <span className="t-label">03</span>
          <div className="t-card-title">30-Day Monitoring Loop</div>
          <p className="t-body">Persistent agent monitors each patient post-discharge. Flags deterioration signals. Escalates before the patient ends up back in the ER.</p>
          <span className="badge">Agentic</span>
        </div>
        <div className="feature-card">
          <span className="t-label">04</span>
          <div className="t-card-title">Clinician Dashboard</div>
          <p className="t-body">Every exception, denial, and escalation surfaces to a single view. Humans validate — they don't coordinate. Time freed for patients, not paperwork.</p>
          <span className="badge">Human-in-loop</span>
        </div>
      </div>

      <div className="product-footer reveal">
        <p className="t-body">
          For <strong className="t-body-strong">hospital discharge teams, hospitalists, and care coordinators</strong>
          at regional health systems.
        </p>
      </div>
    </section>
  )
}
