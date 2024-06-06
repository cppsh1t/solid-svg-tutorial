import { svgStyle } from '../utils/util'

function ChristmasTreeRender() {
  return (
    <div>
      <svg class={svgStyle} width="200" height="400" viewBox="-100 -200 200 400">
        <polygon points="0,0 80,120 -80,120" fill="#234236" />
        <polygon points="0,-40 60,60 -60,60" fill="#0C5C4C" />
        <polygon points="0,-80 40,0 -40,0" fill="#38755B" />
        <rect x="-20" y="120" width="40" height="30" fill="brown" />
      </svg>
    </div>
  )
}

export const ChristmasTree = {
  name: 'Christmas Tree',
  component: ChristmasTreeRender,
  code: `
  <div>
    <svg class={svgStyle} width="200" height="400" viewBox="-100 -200 200 400">
      <polygon points="0,0 80,120 -80,120" fill="#234236" />
      <polygon points="0,-40 60,60 -60,60" fill="#0C5C4C" />
      <polygon points="0,-80 40,0 -40,0" fill="#38755B" />
      <rect x="-20" y="120" width="40" height="30" fill="brown" />
    </svg>
  </div>
    `,
}
