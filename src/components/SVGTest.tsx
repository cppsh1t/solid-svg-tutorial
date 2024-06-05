import { For, JSX, createSignal } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import * as Prism from 'prismjs';
const svgStyle = 'boder-r-1 border-slate-500 border-solid'

type Item = { name: string; component: () => JSX.Element; code: string }

const config: Item[] = [
  {
    name: 'Basic Shape',
    component: () => {
      return (
        <div>
          <svg class={svgStyle} width="200" height="200" viewBox="-100 -100 200 200">
            <circle cx="0" cy="20" r="70" fill="#D1495B" />
            <rect x="-17.5" y="-65" width="35" height="20" fill="#F79257" />
            <circle cx="0" cy="-75" r="15" fill="none" stroke="#F79257" stroke-width="2" />
          </svg>
        </div>
      )
    },
    code: `
  <div>
    <svg class={svgStyle} width="200" height="200" viewBox="-100 -100 200 200">
      <circle cx="0" cy="20" r="70" fill="#D1495B" />
      <rect x="-17.5" y="-65" width="35" height="20" fill="#F79257" />
      <circle cx="0" cy="-75" r="15" fill="none" stroke="#F79257" stroke-width="2" />
    </svg>
  </div>
  `,
  },
  {
    name: 'Christmas Tree',
    component: () => {
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
    },
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
  },
  {
    name: 'Gingerbread',
    component: () => {
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
            <circle class="button" cx="0" cy="-10" r="5" />
            <circle class="button" cx="0" cy="10" r="5" />
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
    },
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
      <circle class="button" cx="0" cy="-10" r="5" />
      <circle class="button" cx="0" cy="10" r="5" />
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
  },
]

function SVGTest() {
  const [currentSVG, setSVG] = createSignal<Item>(config[config.length - 1])
  const handleChange = (item: Item) => {
    setSVG(item)
      Prism.highlightAll()
  }
  const btnStyle = 'p-3 rounded-lg shadow-lg border-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400'
  return (
    <div class="p-3">
      <div class="flex flex-wrap gap-3">
        <For each={config}>
          {(item) => (
            <button class={btnStyle} onClick={() => handleChange(item)}>
              {item.name}
            </button>
          )}
        </For>
      </div>

      <div class="mt-8">
        <Dynamic component={currentSVG().component} />
        <pre class=' rounded-xl'>
          <code class="language-html">
            {currentSVG().code}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default SVGTest
