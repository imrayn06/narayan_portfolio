"use client"

interface SectionAnimationProps {
  icon: string
  direction: "left" | "right"
}

export default function SectionAnimation({ icon, direction }: SectionAnimationProps) {
  return (
    <section className="relative overflow-hidden py-4">
      <div className="relative h-12">
        <div className={`transport-vehicle absolute top-1/2 -translate-y-1/2 ${direction === "left" ? "animate-transport-left" : "animate-transport-right"}`}>
          <span className="text-4xl">{icon}</span>
        </div>
      </div>
    </section>
  )
}

