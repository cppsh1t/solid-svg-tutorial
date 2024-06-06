import { svgStyle } from '../utils/util'

function BaseShapeRender() {
  return (
    <div>
      <svg class={svgStyle} width="200" height="200" viewBox="-100 -100 200 200">
        <circle cx="0" cy="20" r="70" fill="#D1495B" />
        <rect x="-17.5" y="-65" width="35" height="20" fill="#F79257" />
        <circle cx="0" cy="-75" r="15" fill="none" stroke="#F79257" stroke-width="2" />
      </svg>
    </div>
  )
}

export const BaseShape = {
  name: 'Basic Shape',
  component: BaseShapeRender,
  code: `
  <div>
    <svg class={svgStyle} width="200" height="200" viewBox="-100 -100 200 200">
      <circle cx="0" cy="20" r="70" fill="#D1495B" />
      <rect x="-17.5" y="-65" width="35" height="20" fill="#F79257" />
      <circle cx="0" cy="-75" r="15" fill="none" stroke="#F79257" stroke-width="2" />
    </svg>
  </div>
  `,
}
