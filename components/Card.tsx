import Image from 'next/image'

interface CardProps {
  name: string
  image: string
  backgroundClass: string
  link: string
}

export const Card = ({
  name,
  image,
  backgroundClass,
  link
}: CardProps) => {
  return (
    <div className={`${backgroundClass} rounded-2.5xl bg-speaker-master text-white hover-card`}>
      <a href={link} target="_blank" className="p-3 xl:p-6 block">
        <div className="flex justify-center">
          <img src={image} alt={'TODO'} />
        </div>
        <div className="mt-2.5 flex flex-col justify-center gap-y-3">
          <p className="text-shadow text-center font-bold">{name}</p>
        </div>
      </a>
    </div>
  )
}
