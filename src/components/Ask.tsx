export function Ask() {
  return (
    <section id="ask" className="section bg-coal">
      <div className="ask-glow"></div>
      <div className="ask-ghost">FLINT</div>

      <div className="ask-layout">
        <div className="ask-left reveal">
          <div className="ask-req-label">Requesting · GenAI First Prize</div>
          <div className="ask-amount">$25,000</div>
          <div className="ask-uses">
            <div className="ask-use-row">
              <span className="ask-use-label">FHIR integration + EHR sandbox</span>
              <span className="ask-use-pct">40%</span>
            </div>
            <div className="ask-use-row">
              <span className="ask-use-label">LLM agent dev + fine-tuning</span>
              <span className="ask-use-pct">30%</span>
            </div>
            <div className="ask-use-row">
              <span className="ask-use-label">Clinical advisor engagement</span>
              <span className="ask-use-pct">20%</span>
            </div>
            <div className="ask-use-row">
              <span className="ask-use-label">Legal: HIPAA + IP structure</span>
              <span className="ask-use-pct">10%</span>
            </div>
          </div>
        </div>

        <div className="ask-right reveal reveal-d2">
          <p className="ask-closing">
            Every 30 seconds, a patient is discharged into a system with
            no one responsible for what happens next.<br /><br />
            Flint makes someone responsible.
          </p>
          <div className="prize-list">
            <div className="prize-row primary">
              <span className="prize-name">GenAI Prize — Primary</span>
              <span className="prize-amt">$25,000</span>
            </div>
            <div className="prize-row">
              <span className="prize-name">IYA Social Impact Prize</span>
              <span className="prize-amt">$10,000</span>
            </div>
            <div className="prize-row">
              <span className="prize-name">IYA Innovation Prize</span>
              <span className="prize-amt">$10,000</span>
            </div>
            <div className="prize-row">
              <span className="prize-name">Most Backable · Genius Ventures</span>
              <span className="prize-amt">$25,000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
