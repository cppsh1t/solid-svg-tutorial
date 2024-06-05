import { For, JSX, createSignal } from 'solid-js'
import { Dynamic } from 'solid-js/web'

const svgStyle = 'boder-r-1 border-slate-500 border-solid'

type Item = { name: string; component: () => JSX.Element; code: string }

const config: Item[] = [
  {
    name: 'basic-shapes',
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
]

function SVGTest() {
  const [currentSVG, setSVG] = createSignal<Item>(config[config.length - 1])
  const handleChange = (item: Item) => {
    setSVG(item)
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
        <div class=' bg-[#1e293b]'>
          <code style={{ 'white-space': 'pre-wrap' }} class="text-white">
            {currentSVG().code}
          </code>
        </div>
      </div>
    </div>
  )
}

export default SVGTest
