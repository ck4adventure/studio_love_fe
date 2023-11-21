interface SectionProps {
  name: string,
}

export default function Section(props: SectionProps) {
  return (
    <div>{props.name}</div>
  )
}