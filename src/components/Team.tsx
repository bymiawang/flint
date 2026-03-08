export function Team() {
  return (
    <section id="team" className="section bg-linen-2">
      <div className="sec-label reveal">
        <span className="t-label orange">Team</span>
      </div>

      <div className="team-header">
        <h2 className="t-section reveal reveal-d1 all-caps">
          Mission-driven.<br /><span className="orange">Technically sharp.</span>
        </h2>
      </div>

      <div className="team-grid reveal">
        <div className="team-card">
          <div className="team-av solid">MW</div>
          <div className="team-name">Mia Wang</div>
          <div className="team-role">Co-Founder &amp; CEO · IYA Senior · MS CS</div>
          <p className="team-bio">
            USC Iovine and Young Academy senior, pursuing M.S. Computer Science.
            Data Engineer at SpaceX — shaped product design and engineering for Starlink.
            Robotics at NASA. Researcher at USC's Institute for Creative Technologies and
            Stanford's Neurosurgery Department. End-to-end across technical build, product,
            and execution in regulated, high-stakes environments.
          </p>
          <div className="team-creds">
            <span className="cred">SpaceX</span>
            <span className="cred">NASA</span>
            <span className="cred">USC ICT</span>
            <span className="cred">Stanford Neuro</span>
          </div>
        </div>
        <div className="team-card">
          <div className="team-av ghost">+</div>
          <div className="team-name">Clinical Co-Founder</div>
          <div className="team-role">MD · Care Transitions · Recruiting</div>
          <p className="team-bio">
            Recruiting a physician with direct hospitalist or care coordination
            experience. Active conversations with USC Keck School of Medicine
            faculty and LA health system operators.
          </p>
          <div className="team-creds">
            <span className="cred">Target: Hospitalist MD</span>
            <span className="cred">USC Keck</span>
          </div>
        </div>
        <div className="team-card">
          <div className="team-av ghost">+</div>
          <div className="team-name">Technical Co-Founder</div>
          <div className="team-role">Engineering · FHIR / LLM Infra · Recruiting</div>
          <p className="team-bio">
            Recruiting a second technical co-founder with FHIR interoperability,
            LLM agent orchestration, or HIPAA-compliant infrastructure experience.
            Ideal: EHR vendor background or prior health AI startup.
            Must have shipped production medical software.
          </p>
          <div className="team-creds">
            <span className="cred">FHIR R4</span>
            <span className="cred">LLM Agents</span>
            <span className="cred">Healthcare infra</span>
          </div>
        </div>
      </div>
    </section>
  )
}
