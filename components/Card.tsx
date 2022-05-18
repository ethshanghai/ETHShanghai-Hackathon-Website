import Image from 'next/image'

interface PartnerCardProps {
  name: string
  image: string
  backgroundClass: string
}

export const Card = ({
  name,
  image,
  backgroundClass,
}: PartnerCardProps) => {
  return (
    <div className={`${backgroundClass} rounded-2.5xl bg-speaker-master text-white`}>
      <div className="p-3 xl:p-6">
        <div className="flex justify-center">
          <img src={image} alt={'TODO'} />
        </div>
        <div className="mt-2.5 flex flex-col justify-center gap-y-3">
          <p className="text-shadow text-center font-bold">{name}</p>
        </div>
      </div>
    </div>
  )
}
