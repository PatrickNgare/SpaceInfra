import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'

export default function BeforeAfterSlider({ before, after, alt }) {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={before} alt={`Before — ${alt}`} />}
      itemTwo={<ReactCompareSliderImage src={after}  alt={`After — ${alt}`} />}
      style={{ borderRadius: '8px', overflow: 'hidden' }}
    />
  )
}
