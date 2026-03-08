export function Moat() {
  return (
    <section id="sauce" className="section bg-orange">
      <div className="sec-label reveal">
        <span className="t-label sauce-label">Secret Sauce</span>
      </div>

      <div className="sauce-layout">
        <div className="reveal">
          <h2 className="sauce-hed all-caps">The data<br />no one<br />else has.</h2>
          <p className="sauce-sub">
            Every PA submission, denial, and appeal outcome Flint processes is a
            labeled data point — across 900+ payers, compounding with every patient discharged.
          </p>
          <div className="sauce-callouts">
            The <strong>Bloomberg Terminal</strong> for what payers actually approve —
            not what their policy documents say.
          </div>
        </div>

        <div className="flywheel reveal reveal-d2">
          <div className="fw-item">
            <div className="fw-num">01</div>
            <div className="fw-text">
              <strong>More patients → more data</strong>
              PA submissions, denials, appeals logged across all payer types. Labeled, structured, proprietary.
            </div>
          </div>
          <div className="fw-item">
            <div className="fw-num">02</div>
            <div className="fw-text">
              <strong>Better models → higher approval rates</strong>
              Payer-specific submission logic improves with each cycle. Approval rates rise. Denials fall.
            </div>
          </div>
          <div className="fw-item">
            <div className="fw-num">03</div>
            <div className="fw-text">
              <strong>Higher rates → proven ROI</strong>
              Fewer readmissions. Measurable returns. More health systems contract with Flint.
            </div>
          </div>
          <div className="fw-item">
            <div className="fw-num">04</div>
            <div className="fw-text">
              <strong>Dataset → second revenue stream</strong>
              Payer intelligence subscriptions sold to health systems, payers, and pharma.
              The data becomes independently valuable.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
