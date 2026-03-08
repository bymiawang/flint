export function HowItWorks() {
  return (
    <section id="how" className="section bg-linen">
      <div className="sec-label reveal">
        <span className="t-label orange">How It Works</span>
      </div>
      <h2 className="t-section reveal reveal-d1 all-caps">
        Discharge signed.<br /><span className="orange">Flint activates.</span>
      </h2>

      <div className="flow-row reveal">
        <div className="flow-step">
          <span className="t-label">01</span>
          <div className="t-card-title">Parse Discharge Note</div>
          <p className="t-body">LLM reads the clinical note. Extracts diagnoses, medications, follow-ups, PA-eligible procedures, red-flag symptoms.</p>
          <div className="flow-time">0:08</div>
        </div>
        <div className="flow-step">
          <span className="t-label">02</span>
          <div className="t-card-title">Map Every Action</div>
          <p className="t-body">Each action mapped to its execution path — payer, form, specialist network, urgency tier. All in parallel.</p>
          <div className="flow-time">0:22</div>
        </div>
        <div className="flow-step active">
          <span className="t-label">03</span>
          <div className="t-card-title">Execute Autonomously</div>
          <p className="t-body">PA submitted via FHIR API. Appointment booked. Structured handoff sent to PCP. No manual steps required.</p>
          <div className="flow-time">1:30</div>
        </div>
        <div className="flow-step">
          <span className="t-label">04</span>
          <div className="t-card-title">Monitor 30 Days</div>
          <p className="t-body">Persistent monitoring window. Flags deterioration signals. Escalates before the patient deteriorates into a readmission.</p>
          <div className="flow-time">30D</div>
        </div>
        <div className="flow-step">
          <span className="t-label">05</span>
          <div className="t-card-title">Human Oversight</div>
          <p className="t-body">Every exception surfaces to the clinician dashboard. Humans validate decisions — they don't coordinate logistics.</p>
          <div className="flow-time">→</div>
        </div>
      </div>

      <div className="how-footer reveal">
        <div className="demo-indicator">
          <div className="demo-dot"></div>
          <span className="demo-text">Live demo: clinical note in → PA approved</span>
        </div>
        <div className="badge-row">
          <span className="badge">Functional MVP</span>
          <span className="badge">LLM Agent</span>
        </div>
      </div>
    </section>
  )
}
