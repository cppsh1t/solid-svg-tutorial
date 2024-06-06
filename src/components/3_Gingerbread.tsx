import { svgStyle } from '../utils/util'

function GingerbreadRender() {
  return (
    <div>
      <svg class={svgStyle} width="200" height="200" viewBox="-100 -100 200 200">
        <line class="limb" x1="-40" y1="-10" x2="40" y2="-10" />
        <line class="limb" x1="-25" y1="50" x2="0" y2="-15" />
        <line class="limb" x1="25" y1="50" x2="0" y2="-15" />
        <circle class="head" cx="0" cy="-50" r="30" />
        <circle class="eye" cx="-12" cy="-55" r="3" />
        <circle class="eye" cx="12" cy="-55" r="3" />
        <rect class="mouth" x="-10" y="-40" width="20" height="5" rx="2" />
        <circle cx="0" cy="-10" r="5" />
        <circle cx="0" cy="10" r="5" />
      </svg>
      <style jsx dynamic>
        {`
          .limb {
            stroke: #cd803d;
            stroke-width: 35px;
            stroke-linecap: round;
          }
          .head {
            fill: #cd803d;
          }
          .eye {
            fill: white;
          }
          .mouth {
            fill: none;
            stroke: white;
            stroke-width: 2px;
          }
        `}
      </style>
    </div>
  )
}

export const Gingerbread = {
  name: 'Gingerbread',
  component: GingerbreadRender,
  code: `
  <div>
    <svg class={svgStyle} width="200" height="200" viewBox="-100 -100 200 200">
      <line class="limb" x1="-40" y1="-10" x2="40" y2="-10" />
      <line class="limb" x1="-25" y1="50" x2="0" y2="-15" />
      <line class="limb" x1="25" y1="50" x2="0" y2="-15" />
      <circle class="head" cx="0" cy="-50" r="30" />
      <circle class="eye" cx="-12" cy="-55" r="3" />
      <circle class="eye" cx="12" cy="-55" r="3" />
      <rect class="mouth" x="-10" y="-40" width="20" height="5" rx="2" />
      <circle cx="0" cy="-10" r="5" />
      <circle cx="0" cy="10" r="5" />
    </svg>
    <style jsx dynamic>
      {\`
        .limb {
          stroke: #cd803d;
          stroke-width: 35px;
          stroke-linecap: round;
        }
        .head {
          fill: #cd803d;
        }
        .eye {
          fill: white;
        }
        .mouth {
          fill: none;
          stroke: white;
          stroke-width: 2px;
        }
      \`}
    </style>
  </div>
    `,
}
