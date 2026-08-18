import { useCountUp } from '../utils/useCountUp'

function StatCard({ number, label, shouldStart }) {
  const animatedValue = useCountUp(number, shouldStart)

  return (
    <div className="stat-card">
      <p className="stat-number">{animatedValue}</p>
      <p className="stat-label">{label}</p>
    </div>
  )
}

export default StatCard