import { Item, svgStyle } from '../utils/util'

function StarRender() {
  return (
    <div>
      <svg class={svgStyle} width="200" height="200" viewBox="-100 -100 200 200">
        <g transform="translate(0 5)">
          <g>
            <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
            <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
          </g>
          <g transform="rotate(72)">
            <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
            <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
          </g>
          <g transform="rotate(-72)">
            <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
            <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
          </g>
          <g transform="rotate(144)">
            <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
            <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
          </g>
          <g transform="rotate(-144)">
            <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
            <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
          </g>
        </g>
      </svg>
    </div>
  )
}

export const Star: Item = {
  name: 'Star',
  component: StarRender,
  code: `
    <div>
      <svg class={svgStyle} width="200" height="200" viewBox="-100 -100 200 200">
        <g transform="translate(0 5)">
          <g>
            <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
            <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
          </g>
          <g transform="rotate(72)">
            <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
            <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
          </g>
          <g transform="rotate(-72)">
            <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
            <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
          </g>
          <g transform="rotate(144)">
            <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
            <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
          </g>
          <g transform="rotate(-144)">
            <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
            <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
          </g>
        </g>
      </svg>
    </div>
    `,
}
