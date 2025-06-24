import styles from './page.module.css';
import Image from 'next/image';

const houses = [
  {
    id: 1,
    image: '/houses/house-1.jpg',
    title: '«Уютный домик в лесу»',
    description: 'Идеальное место для уединения с природой. Современные удобства в сочетании с натуральными материалами создают неповторимую атмосферу загородной жизни.'
  },
  {
    id: 2,
    image: '/houses/house-2.jpg',
    title: '«Шале у горного озера»',
    description: 'Традиционный альпийский стиль с панорамными окнами. Прекрасный вид на озеро и горы создает ощущение полного единения с природой.'
  },
  {
    id: 3,
    image: '/houses/house-3.jpg',
    title: '«Коттедж с террасой»',
    description: 'Просторный дом с большой террасой для отдыха на свежем воздухе. Идеально подходит для семейного отдыха и приема гостей.'
  },
  {
    id: 4,
    image: '/houses/house-4.jpg',
    title: '«Домик у реки»',
    description: 'Компактное жилье на берегу горной реки. Уединенное место для тех, кто ценит покой и близость к воде.'
  },
  {
    id: 5,
    image: '/houses/house-5.jpg',
    title: '«Альпийское шале»',
    description: 'Классический альпийский стиль в современном исполнении. Просторные комнаты и высокие потолки создают ощущение свободы.'
  },
  {
    id: 6,
    image: '/houses/house-6.jpg',
    title: '«Лесной retreat»',
    description: 'Современный дом, гармонично вписанный в лесной ландшафт. Большие окна наполняют пространство естественным светом.'
  },
  {
    id: 7,
    image: '/houses/house-7.jpg',
    title: '«Горное убежище»',
    description: 'Уютный домик в горах с видом на долину. Идеальное место для любителей активного отдыха и горных прогулок.'
  },
  {
    id: 8,
    image: '/houses/house-8.jpg',
    title: '«Эко-дом в лесу»',
    description: 'Экологичное жилье из натуральных материалов. Минимальное воздействие на окружающую среду при максимальном комфорте.'
  },
  {
    id: 9,
    image: '/houses/house-9.jpg',
    title: '«Лесной лофт»',
    description: 'Современный лофт в окружении леса. Индустриальный стиль гармонично сочетается с природным ландшафтом.'
  },
  {
    id: 10,
    image: '/houses/house-10.jpg',
    title: '«Домик на озере»',
    description: 'Уютное жилье с собственным выходом к воде. Идеально для любителей рыбалки и водных видов спорта.'
  },
  {
    id: 11,
    image: '/houses/house-11.jpg',
    title: '«Лесная резиденция»',
    description: 'Роскошный дом в окружении векового леса. Просторные комнаты и современные удобства для комфортной жизни.'
  },
  {
    id: 12,
    image: '/houses/house-12.jpg',
    title: '«Горный приют»',
    description: 'Уютный домик в горном стиле. Теплая атмосфера и все необходимое для отдыха в горах.'
  }
];

export default function Houses() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {houses.map((house) => (
          <div key={house.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={house.image}
                alt={house.title}
                fill
                style={{ objectFit: 'cover'}}
              />
            </div>
            <div className={styles.content}>
              <h3>{house.title}</h3>
              <p className={styles.description}>{house.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 