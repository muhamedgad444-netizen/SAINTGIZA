import { useLayoutEffect, useState } from 'react'
import RunwaySectionComponent from '../components/RunwaySection'

// Collections = the "Try the Look." runway, reached through the header's COLLECTIONS link.
export default function Collections() {
  const [headerH, setHeaderH] = useState(72)

  // The navbar is fixed: reserve its height (the runway fits itself to viewport - header).
  useLayoutEffect(() => {
    const header = document.querySelector('.shopify-section-group-header-group')
    const update = () =>
      header && setHeaderH(Math.round(header.getBoundingClientRect().height))
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <main
      className="runway-page bg-background text-foreground transition-colors duration-300"
      style={{ paddingTop: headerH }}
    >
      <RunwaySectionComponent />
    </main>
  )
}
