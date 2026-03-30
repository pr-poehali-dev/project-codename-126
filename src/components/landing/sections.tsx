import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-amber-400 border-amber-400">Щенки в наличии</Badge>,
    title: "Питомник немецких овчарок «ВонГауз»",
    content: 'Элитные щенки с родословной РКФ/FCI. Здоровье, красота и рабочие качества — в каждом помёте.',
    showButton: true,
    buttonText: 'Смотреть щенков'
  },
  {
    id: 'puppies',
    tag: 'Наши щенки',
    title: 'Щенки ждут своих хозяев',
    content: 'Помёт от чемпионов. Все щенки проходят ветеринарный осмотр, вакцинацию и дегельминтизацию. Документы РКФ. Возраст от 45 дней.',
    image: 'https://cdn.poehali.dev/projects/a85dcf66-d673-4517-a3ec-0307b201baeb/files/5a7bc747-20da-45a0-9f3b-99302817bd63.jpg',
    imageAlt: 'Щенки немецкой овчарки',
    imagePosition: 'right',
    showButton: true,
    buttonText: 'Купить щенка'
  },
  {
    id: 'puppy-close',
    tag: 'Характер',
    title: 'Умные. Верные. Красивые.',
    content: 'Немецкая овчарка — это не просто собака. Это друг, защитник и партнёр на всю жизнь. Мы подберём щенка под ваш характер и образ жизни.',
    image: 'https://cdn.poehali.dev/projects/a85dcf66-d673-4517-a3ec-0307b201baeb/files/043e24f5-6959-482e-9a6c-07a8ddbd1a52.jpg',
    imageAlt: 'Щенок немецкой овчарки',
    imagePosition: 'left',
    showButton: false,
  },
  {
    id: 'champions',
    tag: 'Производители',
    title: 'Псы-чемпионы — основа помётов',
    content: 'Наши производители — победители выставок международного класса IPO/SchH. Чемпионы России, Европы. Все проверены на дисплазию и генетические заболевания.',
    image: 'https://cdn.poehali.dev/projects/a85dcf66-d673-4517-a3ec-0307b201baeb/files/273060b1-9fa6-42e1-9741-f255330b39bd.jpg',
    imageAlt: 'Чемпион немецкой овчарки',
    imagePosition: 'right',
  },
  {
    id: 'contact',
    title: 'Забронируйте щенка сейчас',
    content: 'Позвоните нам или напишите в WhatsApp — расскажем о доступных щенках, помжём выбрать и организуем доставку по всей России.',
    showButton: true,
    buttonText: 'Написать в WhatsApp'
  },
]
