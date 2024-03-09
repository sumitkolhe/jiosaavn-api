import type { FC } from 'hono/jsx'

interface CardProps {
  title: string
  tag: string
  description: JSX.Element
  link?: string
  color: string
}

export const Card: FC<CardProps> = (props: CardProps) => {
  const content = (
    <div class="flex flex-col">
      <span
        class={`text-xs uppercase bg-opacity-15 rounded text-center max-w-fit px-2 py-1 font-bold tracking-wide bg-${props.color} text-${props.color}`}
      >
        {props.tag}
      </span>
      <span class="text-neutral-200 font-bold text-lg sm:text-xl md:text-2xl mt-2">{props.title}</span>
      <div class="text-neutral-500 mt-2">{props.description}</div>
    </div>
  )

  return props.link ? (
    <a
      target="_blank"
      class={`p-6 sm:p-8 hover:bg-opacity-5 hover:bg-white rounded-lg duration-100 sm:col-span-4`}
      href={props.link}
    >
      {content}
    </a>
  ) : (
    <div class={`p-6 sm:p-8 hover:bg-opacity-5 hover:bg-white rounded-lg duration-100 sm:col-span-4`}>{content}</div>
  )
}
