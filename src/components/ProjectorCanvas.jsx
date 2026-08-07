import markup from '../content/ProjectorCanvas.js'

export default function ProjectorCanvas() {
  return <div className="legacy-section-shell" dangerouslySetInnerHTML={{ __html: markup }} />
}
