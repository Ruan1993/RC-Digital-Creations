import markup from '../content/MeshBackground.js'

export default function MeshBackground() {
  return <div className="legacy-section-shell" dangerouslySetInnerHTML={{ __html: markup }} />
}
