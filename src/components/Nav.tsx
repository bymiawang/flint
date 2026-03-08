export function Nav() {
  return (
    <nav id="nav" className="over-hero">
      <div className="nav-logo">
        <a href="#top">
          <img src="/favicon.svg" alt="" className="nav-logo-icon" />
          <p className="kerning-tight">FLINT</p>
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="#problem">Problem</a></li>
        <li><a href="#product">Product</a></li>
        <li><a href="#how">How it Works</a></li>
        <li><a href="#demo">Demo</a></li>
        <li><a href="#sauce">Secret Sauce</a></li>
        <li><a href="#market">Market</a></li>
        <li><a href="#model">Business Model</a></li>
        <li><a href="#milestones">Roadmap</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#ask">Ask</a></li>
      </ul>
    </nav>
  )
}
