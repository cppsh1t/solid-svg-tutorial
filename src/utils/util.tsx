import Prism from 'prismjs'
import { For, JSX, createMemo, createSignal } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import { BaseShape } from '../components/1_BaseShape'
import { ChristmasTree } from '../components/2_ChristmasTree'
import { Gingerbread } from '../components/3_Gingerbread'
import { House } from '../components/4_House'

export const svgStyle = 'boder-r-1 border-slate-500 border-solid'

export type Item = { name: string; component: () => JSX.Element; code: string }

export function register(item: Item) {
  config.push(item)
}

export function render() {
  if (config.length === 0) return <div>nothing</div>

  let codeEle: HTMLPreElement | undefined
  const [currentSVG, setSVG] = createSignal<Item>(config[config.length - 1])
  const handleChange = (item: Item) => {
    setSVG(item)
  }
  const btnStyle = 'p-3 rounded-lg shadow-lg border-none bg-slate-200 hover:bg-slate-300 active:bg-slate-400'

  const currentCodeEle = createMemo(() => {
    const codeString = currentSVG().code
    const ele = (
      <pre class=" rounded-xl">
        <code ref={codeEle} class="language-html">
          {codeString}
        </code>
      </pre>
    )
    Prism.highlightElement(codeEle!)
    return ele
  })

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
        {currentCodeEle()}
      </div>
    </div>
  )
}

const config: Item[] = [
  BaseShape,
  ChristmasTree,
  Gingerbread,
  House 
]