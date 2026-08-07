import markup from '../content/Advertisements.js'

export default function Advertisements() {
  return <div className="legacy-section-shell" dangerouslySetInnerHTML={{ __html: markup }} />
}
