import { createEffect, createSignal, onCleanup } from 'solid-js'
import { Item, svgStyle } from '../utils/util'

function ClockRender() {
  const [currentTime, setCurrentTime] = createSignal(new Date())

  const updateTime = () => {
    setCurrentTime(new Date())
  }

  createEffect(() => {
    const intervalId = setInterval(updateTime, 1000) 
    onCleanup(() => clearInterval(intervalId)) 
  })
  return (
    <div>
      <svg class={svgStyle} width="200" height="200" viewBox="-100 -100 200 200">
        <rect x="-100" y="-100" width="200" height="200" fill="#CD803D" />

        <circle r="55" stroke="#FCCE7B" stroke-width="10" fill="white" />

        <circle r="45" stroke="#B6705F" stroke-width="6" stroke-dasharray="6 17.56194490192345" stroke-dashoffset="3" fill="none" />

        <g stroke="#5f4c6c" stroke-linecap="round">
          <line id="hours" y2="-20" stroke-width="7" transform={`rotate(${((360 / 12) * (currentTime().getHours() % 12)) + currentTime().getMinutes()})`} />
          <line id="minutes" y2="-30" stroke-width="5" transform={`rotate(${(360 / 60) * currentTime().getMinutes()})`} />
          <line id="minutes" y2="-38" stroke-width="3" transform={`rotate(${(360 / 60) * currentTime().getSeconds()})`} />
        </g>
      </svg>
    </div>
  )
}

export const Clock: Item = {
  name: 'Clock',
  component: ClockRender,
  code: `
    <div>
      <svg class={svgStyle} width="200" height="200" viewBox="-100 -100 200 200">
        <rect x="-100" y="-100" width="200" height="200" fill="#CD803D" />

        <circle r="55" stroke="#FCCE7B" stroke-width="10" fill="white" />

        <circle r="45" stroke="#B6705F" stroke-width="6" stroke-dasharray="6 17.56194490192345" stroke-dashoffset="3" fill="none" />

        <g stroke="#5f4c6c" stroke-linecap="round">
          <line id="hours" y2="-20" stroke-width="7" transform={\`rotate(\${(360 / 12) * (currentTime().getHours() % 12)})\`} />
          <line id="minutes" y2="-30" stroke-width="5" transform={\`rotate(\${(360 / 60) * currentTime().getMinutes()})\`} />
          <line id="minutes" y2="-38" stroke-width="3" transform={\`rotate(\${(360 / 60) * currentTime().getSeconds()})\`} />
        </g>
      </svg>
    </div>
      `,
}
