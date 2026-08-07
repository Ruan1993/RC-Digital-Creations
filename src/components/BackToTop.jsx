import markup from '../content/BackToTop.js'

export default function BackToTop() {
  return <div className="legacy-section-shell" dangerouslySetInnerHTML={{ __html: markup }} />
}
