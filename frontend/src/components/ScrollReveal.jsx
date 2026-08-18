import { useOnScreen } from '../utils/useOnScreen'

function ScrollReveal({ children, delay = 0 }) {
  const [ref, isVisible] = useOnScreen(0.15)

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}

export default ScrollReveal