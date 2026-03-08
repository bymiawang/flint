export function Milestones() {
  return (
    <section id="milestones" className="section bg-cream">
      <div className="sec-label reveal">
        <span className="t-label orange">Milestones &amp; Roadmap</span>
      </div>
      <h2 className="t-section reveal reveal-d1 all-caps">
        Where we are.<br /><span className="orange">Where we're going.</span>
      </h2>

      <div className="milestones-layout">
        <div className="timeline reveal">
          <div className="tl-item">
            <div className="tl-date">Jan 2026</div>
            <div className="tl-dot done"></div>
            <div className="tl-body">
              <div className="tl-title">Concept validated + market research</div>
              <div className="tl-sub">Clinical literature review, stakeholder framing, CMS FHIR mandate analysis</div>
            </div>
            <div className="tl-chip done">Done</div>
          </div>
          <div className="tl-item">
            <div className="tl-date">Feb 2026</div>
            <div className="tl-dot done"></div>
            <div className="tl-body">
              <div className="tl-title">MVP architecture + LLM agent prototype</div>
              <div className="tl-sub">Discharge note parsing, PA form identification, FHIR integration scaffolded</div>
            </div>
            <div className="tl-chip done">Done</div>
          </div>
          <div className="tl-item">
            <div className="tl-date">Mar 2026</div>
            <div className="tl-dot now"></div>
            <div className="tl-body">
              <div className="tl-title">IYA Venture Showcase submission</div>
              <div className="tl-sub">Functional MVP, clinical advisor outreach, pitch complete</div>
            </div>
            <div className="tl-chip now">Now</div>
          </div>
          <div className="tl-item">
            <div className="tl-date">Apr 2026</div>
            <div className="tl-dot future"></div>
            <div className="tl-chip future">6 wks</div>
          </div>
          <div className="tl-item">
            <div className="tl-date">Q3 2026</div>
            <div className="tl-dot future"></div>
            <div className="tl-body">
              <div className="tl-title">Pilot partnership · regional health system</div>
              <div className="tl-sub">Target: LA-area 300–500 bed hospital, heart failure + COPD cohort</div>
            </div>
            <div className="tl-chip future">Target</div>
          </div>
        </div>

        <div className="milestone-cards reveal reveal-d2">
          <div className="m-card">
            <div className="m-card-label">Demo · April 17</div>
            <div className="m-card-big">90s</div>
            <p className="m-card-sub">Clinical note in → PA assembled, submitted, decision returned. Live. On stage. Heart failure. No simulation.</p>
          </div>
          <div className="m-card">
            <div className="m-card-label">Use of Proceeds — $25,000</div>
            <div className="use-list">
              <div className="use-row">
                <span className="use-label">FHIR integration + EHR sandbox</span>
                <span className="use-pct">40%</span>
              </div>
              <div className="use-row">
                <span className="use-label">LLM agent dev + fine-tuning</span>
                <span className="use-pct">30%</span>
              </div>
              <div className="use-row">
                <span className="use-label">Clinical advisor engagement</span>
                <span className="use-pct">20%</span>
              </div>
              <div className="use-row">
                <span className="use-label">Legal: HIPAA + IP structure</span>
                <span className="use-pct">10%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
