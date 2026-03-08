export function Demo() {
  return (
    <section id="demo" className="section bg-linen-2">
      <div className="sec-label reveal">
        <span className="t-label demo-label">Product Demo</span>
      </div>
      <h2 className="t-section reveal reveal-d1 all-caps">
        Flint in action <span className="orange">— Heart failure, discharge day</span>
      </h2>

      <div className="demo-embed">
        <iframe src="/demo/demo.html" frameBorder={0} scrolling="no" id="flint-demo-iframe"></iframe>
      </div>
    </section>
  )
}
