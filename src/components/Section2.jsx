const proofPoints = [
  {
    icon: 'code',
    label: 'Custom coded',
    value: 'No cookie-cutter templates',
  },
  {
    icon: 'credit-card',
    label: 'Clear billing',
    value: 'No automatic subscriptions',
  },
  {
    icon: 'clock',
    label: 'Fast turnaround',
    value: 'Starter sites live in 5–7 days',
  },
  {
    icon: 'user',
    label: 'Direct support',
    value: 'Work directly with Ruan',
  },
]

export default function Section2() {
  return (
    <section className="rc-proof-strip" aria-label="Why businesses choose RC Digital Creations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rc-proof-grid">
          {proofPoints.map((item) => (
            <article className="rc-proof-item" key={item.label}>
              <span className="rc-proof-icon" aria-hidden="true">
                <i data-feather={item.icon}></i>
              </span>
              <div>
                <p>{item.label}</p>
                <strong>{item.value}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
