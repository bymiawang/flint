export function BusinessModel() {
  return (
    <section id="model" className="section bg-linen-2">
      <div className="sec-label reveal">
        <span className="t-label orange">Business Model</span>
      </div>
      <h2 className="t-section reveal reveal-d1 all-caps">
        Performance-priced.<br /><span className="orange">Aligned by design.</span>
      </h2>

      <div className="model-wrapper reveal">
        <div className="model-cols">
          <div className="model-phase">
            <div className="model-phase-tag">Phase 1 · Year 1–2</div>
            <div className="model-phase-title all-caps">Per-Discharge<br />Execution Fee</div>
            <p className="model-phase-desc">Pay-per-patient. Zero upfront cost. We absorb integration.</p>
            <div className="model-metrics">
              <div className="model-metric">
                <div className="model-metric-v">$45 – $85</div>
                <div className="model-metric-k">Per discharge</div>
              </div>
              <div className="model-metric">
                <div className="model-metric-v">&gt;10X</div>
                <div className="model-metric-k">ROI vs. CMS penalty</div>
              </div>
            </div>
          </div>
          <div className="model-phase">
            <div className="model-phase-tag">Phase 2 · Year 3+</div>
            <div className="model-phase-title all-caps">Payer Intelligence<br />Subscriptions</div>
            <p className="model-phase-desc">Every PA submission is a labeled data point. The dataset compounds — no competitor can replicate it.</p>
            <div className="model-metrics">
              <div className="model-metric">
                <div className="model-metric-v">Annual SaaS</div>
                <div className="model-metric-k">Model</div>
              </div>
              <div className="model-metric">
                <div className="model-metric-v">Systems · Payers · Pharma</div>
                <div className="model-metric-k">Buyers</div>
              </div>
            </div>
          </div>
        </div>

        <div className="model-arr">
          <div>
            <div className="model-arr-label">5-hospital pilot · Year 1 ARR target</div>
            <div className="model-arr-n">$3.4M – $6.5M</div>
          </div>
          <p className="model-arr-note">
            CMS penalizes readmissions up to 3% of all Medicare payments.<br />
            Flint's ROI case requires no explanation.
          </p>
        </div>
      </div>
    </section>
  )
}
