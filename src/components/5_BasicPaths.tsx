import { Item, svgStyle } from '../utils/util'

function BasicPathsRender() {
  return (
    <div>
      <svg class={svgStyle} width="200" height="200" viewBox="-100 -100 200 200">
        <path d="M -70 0 L 70 0 L 30 -50 M 70 0 L 30 50" fill="none" stroke="#D1495B" stroke-width="25" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  )
}

export const BasicPaths: Item = {
  name: 'Basic Paths',
  component: BasicPathsRender,
  code: `
    <div>
      <svg class={svgStyle} width="200" height="200" viewBox="-100 -100 200 200">
        <path d="M -70 0 L 70 0 L 30 -50 M 70 0 L 30 50" fill="none" stroke="#D1495B" stroke-width="25" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  `,
}
