import Image from 'next/image'

interface InfoCardProps {
  name: string
  description: string
  backgroundClass: string
}

export const InfoCard = ({ name, description, backgroundClass }: InfoCardProps) => {
  return (
    <div
      className={`${backgroundClass} rounded-2.5xl bg-speaker-master text-white`}>
      <div className="p-6">
        <div className="flex flex-col justify-center gap-y-3">
          <p className="text-shadow text-center text-2xl font-bold">{name}</p>
          <p className="text-shadow text-center">{description}</p>
        </div>
      </div>
    </div>
  )
}
