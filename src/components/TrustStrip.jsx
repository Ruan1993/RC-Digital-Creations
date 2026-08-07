import markup from '../content/TrustStrip.js'

export default function TrustStrip() {
  return <div className="legacy-section-shell" dangerouslySetInnerHTML={{ __html: markup }} />
}
