export function Market() {
  return (
    <section id="market" className="section bg-linen-2">
      <div className="sec-label reveal">
        <span className="t-label orange">Market Size</span>
      </div>
      <h2 className="t-section reveal reveal-d1 section-hed-narrow all-caps">
        A <span className="orange">$60B</span> problem with<br />no incumbent solution.
      </h2>

      <div className="market-layout">
        <div className="reveal reveal-d1">
          <div className="tam-row">
            <div className="tam-tier">TAM</div>
            <div className="tam-track">
              <div className="tam-fill f1" id="tam-bar-1" style={{ width: 0 }}></div>
            </div>
            <div className="tam-value orange">$60B</div>
          </div>
          <div className="tam-note">Preventable readmission costs + prior authorization administrative waste</div>

          <div className="tam-row">
            <div className="tam-tier">SAM</div>
            <div className="tam-track">
              <div className="tam-fill f2" id="tam-bar-2" style={{ width: 0 }}></div>
            </div>
            <div className="tam-value">$8.4B</div>
          </div>
          <div className="tam-note">US hospitals 300+ beds · Medicare-penalized health systems</div>

          <div className="tam-row">
            <div className="tam-tier">SOM</div>
            <div className="tam-track">
              <div className="tam-fill f3" id="tam-bar-3" style={{ width: 0 }}></div>
            </div>
            <div className="tam-value">$180M</div>
          </div>
          <div className="tam-note">Regional systems, heart failure + COPD focus, Year 1–3</div>
        </div>

        <div className="market-points">
          <div className="market-pt reveal reveal-d1">
            <div className="market-pt-label">Why this wedge</div>
            <p className="market-pt-text">Heart failure has the highest 30-day readmission rates and the most standardized PA criteria — measurable outcomes, short feedback loop, lowest barrier to proving ROI.</p>
          </div>
          <div className="market-pt reveal reveal-d2">
            <div className="market-pt-label">Regulatory tailwind</div>
            <p className="market-pt-text">CMS's 2026 FHIR mandate requires all payers to expose prior auth APIs in real time. The government mandated our core infrastructure into existence.</p>
          </div>
          <div className="market-pt reveal reveal-d3">
            <div className="market-pt-label">Market signal</div>
            <p className="market-pt-text">Prior auth automation grew 10× YoY in 2025. Ambient scribing hit $600M. Both serve the clinical encounter. The post-discharge period — where readmission cost accumulates — has no AI-native entrant.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
