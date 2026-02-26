export const PROJECT_TYPES = [
  "Центры помощи",
  "Приюты и проживание",
  "Службы и выезды",
  "Питание",
  "Медицина",
  "Работа с зависимыми",
  "Образование и клубы"
];

export const CATEGORIES = [
  "Семья и детство",
  "Здоровье и ОВЗ",
  "Трудная жизненная ситуация",
  "Зависимости",
  "Старшее поколение"
];

export const REGIONS = [
  "Москва",
  "Санкт-Петербург",
  "Свердловская область",
  "Нижегородская область",
  "Новосибирская область",
  "Ростовская область"
];

const FALLBACK_IMAGES = [
  "/images/volunteer_1.jpg",
  "/images/volunteer_2.jpg",
  "/images/volunteer_3.jpg",
  "/images/food_1.jpg",
  "/images/food_2.jpg",
  "/images/food_3.jpg",
  "/images/elderly_1.jpg",
  "/images/elderly_2.jpg",
  "/images/church_1.jpg",
  "/images/church_2.jpg"
];

// Generate 12 news items total (3 original + 9 new) for pagination testing
export const NEWS = Array.from({ length: 12 }).map((_, i) => ({
  id: `${i + 1}`,
  projectId: i % 2 === 0 ? "1" : "2",
  title: i === 0 ? "Открытие нового пункта выдачи вещей в центре «Милосердие»" : 
         i === 1 ? "Служба добровольцев провела акцию «Дари радость»" : 
         i === 2 ? "Требуются волонтеры-автомобилисты" : 
         `Новость социального служения #${i + 1}`,
  date: new Date(2024, 1, 15 - i).toISOString().split('T')[0],
  summary: "Краткое описание события. Волонтеры и организаторы делятся успехами и приглашают новых участников присоединиться к добровольческому движению.",
  content: "Полный текст новости. Мы рады сообщить, что благодаря поддержке благотворителей мы смогли расширить возможности нашей работы. Приглашаем волонтеров для помощи в наших текущих задачах. В рамках реализации проекта мы продолжаем развивать инфраструктуру помощи. Ежедневный труд волонтеров и сестер милосердия позволяет охватить заботой сотни нуждающихся.",
  image: FALLBACK_IMAGES[i % FALLBACK_IMAGES.length]
}));

// Generate 16 projects total (6 original + 10 new) for pagination and map testing
export const PROJECTS = [
  {
    id: "1",
    name: "Гуманитарный центр «Милосердие»",
    type: "Центры помощи",
    categories: ["Семья и детство", "Трудная жизненная ситуация", "Старшее поколение"],
    region: "Москва",
    address: "г. Москва, ул. Николоямская, д. 57, стр. 7",
    phone: "+7 (495) 542-00-00",
    email: "info@miloserdie.ru",
    site: "miloserdie.ru",
    leader: "Иванов Иван Иванович",
    organization: "Православная служба помощи «Милосердие»",
    churchAffiliation: "Учрежден Синодальным отделом по благотворительности",
    description: "Центр оказывает комплексную гуманитарную помощь: вещевую, продуктовую. Здесь также можно получить консультацию социального работника, психолога и юриста. Проект существует более 10 лет и поддерживает тысячи людей ежегодно.",
    images: [
      FALLBACK_IMAGES[0],
      FALLBACK_IMAGES[1]
    ],
    coordinates: [55.746, 37.669] as [number, number]
  },
  {
    id: "2",
    name: "Служба помощи бездомным",
    type: "Службы и выезды",
    categories: ["Трудная жизненная ситуация"],
    region: "Москва",
    address: "г. Москва, ул. Краснопрудная, д. 12",
    phone: "+7 (495) 123-45-67",
    email: "homeless@example.com",
    site: "ангарспасения.рф",
    leader: "Петров Петр Петрович",
    organization: "РРОО «Милосердие»",
    churchAffiliation: "При храме св. Сергия Радонежского",
    description: "Организация регулярного горячего питания, доврачебной медицинской помощи и социального сопровождения для людей, оказавшихся на улице. Работает мобильная бригада («Автобус милосердия»).",
    images: [
      FALLBACK_IMAGES[2]
    ],
    coordinates: [55.777, 37.665] as [number, number]
  },
  {
    id: "3",
    name: "Реабилитационный центр «Обитель исцеления»",
    type: "Работа с зависимыми",
    categories: ["Зависимости", "Здоровье и ОВЗ"],
    region: "Санкт-Петербург",
    address: "Ленинградская обл., пос. Саперное",
    phone: "+7 (812) 987-65-43",
    email: "rehab@obitel.ru",
    site: "obitel.ru",
    leader: "Прот. Сергий (Бельков)",
    organization: "Приход храма Коневской иконы Божией Матери",
    churchAffiliation: "Учрежден епархией",
    description: "Православный реабилитационный центр для алко- и наркозависимых. Программа основана на приобщении к церковной жизни, труде и психологической поддержке. Срок реабилитации от 6 месяцев до года.",
    images: [
      FALLBACK_IMAGES[3]
    ],
    coordinates: [60.716, 29.980] as [number, number]
  },
  {
    id: "4",
    name: "Кризисный центр для мам «Дом для мамы»",
    type: "Приюты и проживание",
    categories: ["Семья и детство"],
    region: "Свердловская область",
    address: "г. Екатеринбург, ул. Ленина, д. 15",
    phone: "+7 (343) 222-33-44",
    email: "mama@ekb-miloserdie.ru",
    site: "ekbmama.ru",
    leader: "Смирнова Анна Ивановна",
    organization: "Православная служба милосердия Екатеринбургской епархии",
    churchAffiliation: "Учрежден епархией",
    description: "Предоставление временного проживания беременным женщинам и женщинам с младенцами, оказавшимся в трудной жизненной ситуации без поддержки близких. Обучение уходу за ребенком, помощь в оформлении документов и поиске работы.",
    images: [
      FALLBACK_IMAGES[4]
    ],
    coordinates: [56.838, 60.597] as [number, number]
  },
  {
    id: "5",
    name: "Школа приемных родителей «Умиление»",
    type: "Образование и клубы",
    categories: ["Семья и детство"],
    region: "Нижегородская область",
    address: "г. Нижний Новгород, ул. Рождественская, д. 22",
    phone: "+7 (831) 444-55-66",
    email: "shkola@nne.ru",
    site: "nne.ru/shkola",
    leader: "Дмитриева Елена Сергеевна",
    organization: "Отдел по делам семьи Нижегородской епархии",
    churchAffiliation: "Отдел епархии",
    description: "Подготовка потенциальных усыновителей, опекунов, попечителей. Обучение ведут квалифицированные психологи, юристы и священнослужители. Сопровождение приемных семей.",
    images: [
      FALLBACK_IMAGES[5]
    ],
    coordinates: [56.326, 43.998] as [number, number]
  },
  {
    id: "6",
    name: "Богадельня во имя св. Елизаветы",
    type: "Приюты и проживание",
    categories: ["Старшее поколение", "Здоровье и ОВЗ"],
    region: "Ростовская область",
    address: "г. Ростов-на-Дону, ул. Портовая, д. 80",
    phone: "+7 (863) 111-22-33",
    email: "bogadelnya@rostov-eparhia.ru",
    site: "rostov-miloserdie.ru/bogadelnya",
    leader: "Иерей Михаил",
    organization: "Сестричество милосердия",
    churchAffiliation: "При храме",
    description: "Дом сестринского ухода за одинокими пожилыми людьми и инвалидами. Круглосуточный уход, духовное окормление, комфортные условия проживания, медицинское наблюдение.",
    images: [
      FALLBACK_IMAGES[6]
    ],
    coordinates: [47.222, 39.719] as [number, number]
  },
  ...Array.from({ length: 10 }).map((_, i) => ({
    id: `${i + 7}`,
    name: `Социальный проект помощи #${i + 7}`,
    type: PROJECT_TYPES[i % PROJECT_TYPES.length],
    categories: [CATEGORIES[i % CATEGORIES.length]],
    region: REGIONS[i % REGIONS.length],
    address: `Тестовый адрес, ул. Примера, д. ${i + 1}`,
    phone: `+7 (999) 000-${i}${i}-${i}${i}`,
    email: `contact${i}@example.com`,
    site: `project${i}.ru`,
    leader: "Тестовый Руководитель",
    organization: "Тестовая организация",
    churchAffiliation: "При храме",
    description: "Это автоматически сгенерированный тестовый проект для демонстрации работы пагинации и отображения на карте. Здесь может быть описание реального проекта.",
    images: [
      FALLBACK_IMAGES[(i + 7) % FALLBACK_IMAGES.length]
    ],
    // Randomize coordinates slightly around Moscow for map demonstration
    coordinates: [55.75 + (Math.random() - 0.5) * 0.1, 37.61 + (Math.random() - 0.5) * 0.1] as [number, number]
  }))
];
