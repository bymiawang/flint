export function Competitors() {
  return (
    <section id="competitors" className="section bg-linen">
      <div className="sec-label reveal">
        <span className="t-label orange">Competitive Landscape</span>
      </div>

      <div className="comp-header">
        <h2 className="t-section reveal reveal-d1 all-caps">
          Flint's wedge<br />is <span className="orange">unoccupied.</span>
        </h2>
        <p className="t-body reveal reveal-d2 section-body-narrow">
          Existing players own the clinical encounter. Nobody owns what happens
          after the patient walks out. That gap is Flint's entry point — and its compounding moat.
        </p>
      </div>

      <div className="comp-table reveal">
        <div className="comp-thead">
          <div className="comp-th">Company</div>
          <div className="comp-th">Ambient / RCM</div>
          <div className="comp-th">Post-Discharge</div>
          <div className="comp-th">PA Execution</div>
          <div className="comp-th ours">Payer Data Moat</div>
        </div>
        <div className="comp-trow">
          <div className="comp-td"><span className="comp-name">Commure / Athelas</span></div>
          <div className="comp-td"><span className="chk yes">✓</span></div>
          <div className="comp-td"><span className="chk no">—</span></div>
          <div className="comp-td"><span className="chk no">—</span></div>
          <div className="comp-td"><span className="chk no">—</span></div>
        </div>
        <div className="comp-trow">
          <div className="comp-td"><span className="comp-name">Abridge / Nuance DAX</span></div>
          <div className="comp-td"><span className="chk yes">✓</span></div>
          <div className="comp-td"><span className="chk no">—</span></div>
          <div className="comp-td"><span className="chk no">—</span></div>
          <div className="comp-td"><span className="chk no">—</span></div>
        </div>
        <div className="comp-trow">
          <div className="comp-td"><span className="comp-name">Cohere Health</span></div>
          <div className="comp-td"><span className="chk no">—</span></div>
          <div className="comp-td"><span className="chk no">—</span></div>
          <div className="comp-td"><span className="chk part">✓ PAYER-SIDE</span></div>
          <div className="comp-td"><span className="chk no">—</span></div>
        </div>
        <div className="comp-trow">
          <div className="comp-td"><span className="comp-name">Memora / Notable</span></div>
          <div className="comp-td"><span className="chk no">—</span></div>
          <div className="comp-td"><span className="chk part">✓ MESSAGING</span></div>
          <div className="comp-td"><span className="chk no">—</span></div>
          <div className="comp-td"><span className="chk no">—</span></div>
        </div>
        <div className="comp-trow flint-row">
          <div className="comp-td">
            <span className="comp-name us">Flint</span>
            <span className="wedge-chip">Our Wedge</span>
          </div>
          <div className="comp-td"><span className="chk yes">✓</span></div>
          <div className="comp-td"><span className="chk yes">✓ OS LAYER</span></div>
          <div className="comp-td"><span className="chk yes">✓ AUTONOMOUS</span></div>
          <div className="comp-td"><span className="chk yes flint">✓ COMPOUNDS</span></div>
        </div>
      </div>
    </section>
  )
}
