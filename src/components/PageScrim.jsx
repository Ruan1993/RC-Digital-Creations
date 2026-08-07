import markup from '../content/PageScrim.js'

export default function PageScrim() {
  return <div className="legacy-section-shell" dangerouslySetInnerHTML={{ __html: markup }} />
}
