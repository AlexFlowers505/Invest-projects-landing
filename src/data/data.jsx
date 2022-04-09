export const svgSpritePath = './assets/sprite.svg'
export const picsPath = './assets/data-pics'
export const vidsPath = '/assets/data-vids'

export const featuresInNumbersData = [
    {
        id: '001',
        heading: 'Место, где рождаются и вырастают проекты',
        additionalClass: 'main',
        pic: '#illustration-invPro-logo',
        points: [
            {
                pointID: '001-1', 
                numbers: '> 240',
                desc: 'проектов из закрытых источников'
            },
            {
                pointID: '001-2', 
                numbers: '> 385 млрд',
                desc: 'инвестиций в проекты из закрытых источников'
            }
        ]
    },
    {
        id: '002',
        heading: false,
        additionalClass: 'data-browsing',
        pic: '#illustration-data-browsing',
        points: [
            {
                pointID: '002-1', 
                numbers: '> 65 000',
                desc: 'проектов'
            },
            {
                pointID: '002-2', 
                numbers: '> 70 000',
                desc: 'контактов'
            },             {
                pointID: '002-3', 
                numbers: '> 100 000',
                desc: 'компаний-участников проектов'
            }
        ]
    },
    {
        id: '003',
        heading: false,
        additionalClass: 'updating',
        pic: '#illustration-arrows-way',
        points: [
            {
                pointID: '003-1', 
                numbers: '> 500',
                desc: 'новых проектов в месяц'
            },
            {
                pointID: '003-2', 
                numbers: '> 1 400',
                desc: 'актуализаций в месяц'
            },             {
                pointID: '003-3', 
                numbers: '> 40 000',
                desc: 'проектов в активной стадии'
            }
        ]
    },
    {
        id: '004',
        heading: false,
        additionalClass: 'factories',
        pic: '#illustration-factory',
        points: [
            {
                pointID: '004-1', 
                numbers: '> 1000',
                desc: 'индустриальных парков'
            },
            {
                pointID: '004-2', 
                numbers: '> 200',
                desc: 'преференционных площадок (ОЭС. ТОР, ТОСЭР)'
            },
        ]
    },
    {
        id: '005',
        heading: false,
        additionalClass: 'analytics',
        pic: '#illustration-analytics',
        points: [
            {
                pointID: '005-1', 
                numbers: '20',
                desc: 'отраслей'
            },
            {
                pointID: '005-2', 
                numbers: '158',
                desc: 'подотраслей'
            },
            {
                pointID: '005-3', 
                numbers: '85',
                desc: 'регионов РФ'
            },
            {
                pointID: '005-4', 
                numbers: '5',
                desc: 'стран ЕАЭС'
            },
            {
                pointID: '005-5', 
                numbers: '> 16 500',
                desc: 'проектов с частн.инвестированием'
            },
            {
                pointID: '005-6', 
                numbers: '> 240',
                desc: 'проектов из закрытых истчников'
            },
            {
                pointID: '005-7', 
                numbers: '9',
                desc: 'стадий реализации'
            },
            {
                pointID: '005-8', 
                numbers: '4',
                desc: 'типа работ'
            },
        ]
    },
]
export const instrumentsFeaturesData = [
    {
        id: '001',
        additionalClass: 'maps',
        heading: 'Карты!',
        points: [
            'Отображение проектов, компаний, преференциальных площадок на интерактивной карте!',
            'Гибкий фильтр и моментальный пересчет результатов при его изменении'
        ],
        pic: '#icon-location',
        link: '#maps-section',
    },
    {
        id: '002',
        additionalClass: 'info',
        heading: 'Детальная информация по более чем 65К проектам',
        points: [
            'С ежедневным пополнением не менее 25 проектов!',
        ],
        pic: '#icon-info',
        link: '#project-base-section',
    },
    {
        id: '003',
        additionalClass: 'ui-s',
        heading: 'Интерфейсы для работы в командах',
        points: [
            'Определяйте индивидуальные задачи и зоны просмотра, создавайте персональные папки проектов и фильтры для поиска',
        ],
        pic: '#icon-modules',
        link: '#teams-UI-section'
    },
    {
        id: '004',
        additionalClass: 'factories',
        heading: 'Детализация по холдингам, индустриалным площадкам',
        points: [
            '2 754 холдинга по России',
            '19 000 проектов (55%) реализуются в рамках холдинговых структур',
        ],
        pic: '#icon-factories',
        link: '#holdings-n-industrial-sites-section'
    },
    {
        id: '005',
        additionalClass: 'analytics',
        heading: 'Всесторонняя аналитика отраслей, регионов, материалов',
        points: [
            'База проектов',
            'Страница проекта',
            'Проекты на карте',
        ],
        pic: '#icon-growth',
        link: '#analytics-section'
    },

]
export const mapsSliderData = {
    tabs: [
        {
            tabID: '001',
            heading: 'Слои',
            innerSlides: [
                {
                    heading: 'Проекты на карте',
                    pic: '/maps/layers--projects.jpg',
                    vid: '/maps/layers--projects.mp4',
                    desc: [
                        'Работает по 5 странам: Россия, Беларусь, Казахстан, Армения, Киргизия',
                        'Точное местоположение объекта строительства',
                        'Возможность выбора эффективного радиуса доставки / отгрузки до объекта',
                        'Формирование карточек рынков',
                        'Расширенный фильтр для поиска проектов (по стадиям, отраслям, регионам и т.д.)',
                        'Интерактивная и ежедневно обновляемая платформа расчета использования строительных материалов',
                        'Моментальный пересчет проектов на карте',
                    ],
                },
                {
                    heading: 'Компании на карте',
                    pic: '/maps/layers--companies.jpg',
                    vid: '/maps/layers--companies.mp4',
                    desc: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
                },
                {
                    heading: 'Преференциальные территории на карте',
                    pic: '/maps/layers--zones.jpg',
                    vid: false,
                    desc: ['Eu feugiat pretium nibh ipsum consequat nisl vel. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Rhoncus urna neque viverra justo nec. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Massa tincidunt dui ut ornare.'],
                },
                {
                    heading: 'Гибридное отображение всех объектов',
                    pic: '/maps/layers--hybrid-view.jpg',
                    vid: false,
                    desc: ['Vestibulum morbi blandit cursus risus at. At urna condimentum mattis pellentesque id nibh tortor id aliquet. Varius quam quisque id diam vel quam elementum. Justo donec enim diam vulputate.'],
                },
            ]
        },
        {
            tabID: '002',
            heading: 'Фильтр',
            innerSlides: [
                {
                    heading: 'Гибкий фильтр отображения объектов на карте',
                    pic: '/maps/filter--filter.jpg',
                    vid: false,
                    desc: ['Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'],
                },
            ]
        },
        {
            tabID: '003',
            heading: 'Папки',
            innerSlides: [
                {
                    heading: 'Фильтр по вашим папкам',
                    pic: '/maps/folders--folders.jpg',
                    vid: false,
                    desc: ['Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'],
                },
            ]
        },
        {
            tabID: '004',
            heading: 'Проекты',
            innerSlides: [
                {
                    heading: 'Просмотр подробностей любого проекта',
                    pic: '/maps/project-info--project-info.jpg',
                    vid: false,
                    desc: ['Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'],
                },
            ]
        },
    ],
    linksInfo: {
        resourseLink: {
            linkName: 'Перейти к карте',
            address: 'https://investprojects.info/ymap/projects'
        },
        registerLink: true,
    },
}
export const projectBaseSliderData = {
    tabs: [
        {
            tabID: '001',
            heading: 'База проектов',
            innerSlides: [
                {
                    heading: 'Общая информация',
                    pic: '/project-page/project-base--basics.jpg',
                    vid: false,
                    desc: [
                        'База проектов — это основной раздел портала, где можно выбрать и посмотреть интересные вам проекты. Для удобства вам доступны фильтры по отраслям, регионам, стадиям реализации и др. Мы каждый день добавляем в Базу не менее 25 новых проектов и обновляем не менее 60 ранее найденных.',
                    ],
                },
                {
                    heading: 'Фильтр',
                    pic: '/project-page/project-base--filter.jpg',
                    vid: false,
                    desc: ['Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'],
                },
                {
                    heading: '"Мои папки" и "Мои фильтры"',
                    pic: '/project-page/project-base--folders-n-personal-filters.jpg',
                    vid: false,
                    desc: ['Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'],
                },
            ]
        },
        {
            tabID: '002',
            heading: 'Страница проекта',
            innerSlides: [
                {
                    heading: 'Общая информация',
                    pic: '/project-page/project-page--basic-info.jpg',
                    vid: false,
                    desc: ['At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'],
                },
                {
                    heading: 'Инвесторы',
                    pic: '/project-page/project-page--investor.jpg',
                    vid: false,
                    desc: ['Et harum quidem rerum facilis est et expedita distinctio.'],
                },
                {
                    heading: 'Ген.проектировщик',
                    pic: '/project-page/project-page--investor.jpg',
                    vid: false,
                    desc: ['Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'],
                },
                {
                    heading: 'Ген.подрядчик',
                    pic: '/project-page/project-page--investor.jpg',
                    vid: false,
                    desc: ['Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'],
                },
            ]
        },
    ],
    linksInfo: {
        resourseLink: {
            linkName: 'Перейти к базе проектов',
            address: 'https://investprojects.info/project-base'
        },
        registerLink: true,
    },
}
export const teamsUISliderData = {
    tabs: [
        {
            tabID: '001',
            heading: 'Папки',
            innerSlides: [
                {
                    heading: 'Папки для сотрудников и категорий проектов',
                    pic: '/team/team--folders.jpg',
                    vid: '',
                    desc: [
                        'Возможность группировать проекты по папкам внутри аккаунта, передавать проекты между аккаунтами, назначать аккаунту проект в работу, обмениваться проектами',
                        'Настройка уведомлений по изменениям проектов на email или Telegram',
                    ],
                },
            ]
        },
        {
            tabID: '002',
            heading: 'Карта',
            innerSlides: [ 
                {
                    heading: 'Работа с папками прямо на картах',
                    pic: '/team/team--map-folders.jpg',
                    vid: false,
                    desc: ['Одновременная работа команды в базе проектов и на картах',
                           'Настройка видимости проектов в базе и на карте для каждого аккаунта по географии, отраслям, виду собственности',
                    ],
                },
            ]
        },
        {
            tabID: '003',
            heading: 'Статистика',
            innerSlides: [
                {
                    heading: 'Аналитика работы команды',
                    pic: '/team/team--stats.jpg',
                    vid: false,
                    desc: ['Индивидуальные отчеты по каждому аккаунту',
                           'Сводный интерактивный отчет по работе всей команды для руководителя',
                    ],
                },
            ]
        },
    ],
    linksInfo: {
        resourseLink: false,
        registerLink: true,
    },
}
export const holdingsNindustrialSitesSliderData = {
    tabs: [
        {
            tabID: '001',
            heading: 'Холдинги',
            innerSlides: [
                {
                    heading: 'Общая информация по холдингу',
                    pic: '/zones/holdings--basics-tab.jpg',
                    vid: '',
                    desc: ['Dessert cake danish cake sugar plum jelly. Jelly brownie shortbread pudding macaroon. '],
                },
                {
                    heading: 'Продукция',
                    pic: '/zones/holdings--products-tab.jpg',
                    vid: '',
                    desc: ['Sweet roll biscuit macaroon jujubes jujubes oat cake cupcake pudding.'],
                },
                {
                    heading: 'Прошлые, текущие, планируемые проекты',
                    pic: '/zones/holdings--projects-tab.jpg',
                    vid: '',
                    desc: ['Gummi bears chocolate soufflé jujubes sesame snaps. '],
                },
                {
                    heading: 'Финансовые показатели',
                    pic: '/zones/holdings--financial-indicators-tab.jpg',
                    vid: '',
                    desc: ['Donut donut chocolate cake marshmallow candy canes cake tart apple pie. '],
                },
            ]
        },
        {
            tabID: '002',
            heading: 'Индустриальные площадки',
            innerSlides: [
                {
                    heading: 'Основная информация',
                    pic: '/zones/zones--basics-tab.jpg',
                    vid: false,
                    desc: ['> 1 000 индустриальных парков и ОЭЗ по России',
                           '1 286 проектов реализуются в рамках индустриальных парков и ОЭЗ',
                           '2,9 трлн руб. прямых инвестиций сосредоточено в индустриальных парках и ОЭЗ',
                    ],
                },
                {
                    heading: 'Продукция',
                    pic: '/zones/zones--products.jpg',
                    vid: false,
                    desc: ['Ullamcorper sit amet risus nullam eget felis.',
                    ],
                },
                {
                    heading: 'Контакты',
                    pic: '/zones/zones--contacts.jpg',
                    vid: false,
                    desc: ['Auctor augue mauris augue neque gravida. Donec ultrices tincidunt arcu non. Aliquet eget sit amet tellus. Fusce id velit ut tortor.',
                    ],
                },
            ]
        },
    ],
    linksInfo: {
        resourseLink: {
            linkName: 'Перейти в базу компаний',
            address: 'http://investprojects.loc/company/list'
        },
        registerLink: true,
    },
}
export const analyticsSliderData = {
    tabs: [
        {
            tabID: '001',
            heading: 'Материалы',
            innerSlides: [
                {
                    heading: 'Online-мониторинг потребления строительных материалов',
                    pic: '/analytics/analytics--materials.jpg',
                    vid: '',
                    desc: ['Расчет по выбранным стройматериалам (138 материалов)',
                           'Аналитический период с 2020 по 2036 год',
                           'Группировка по 85 регионам и 8 федеральным округам РФ',
                           'Фильтрация по отраслям',
                           'Интерактивная и ежедневно обновляемая платформа расчета использования строительных материалов',
                           'Выгрузка инвестпроектов в Excel',
                    ],
                },
            ]
        },
        {
            tabID: '002',
            heading: 'Отрасли',
            innerSlides: [
                {
                    heading: 'Выборка',
                    pic: '/analytics/analytics--industries-choice.jpg',
                    vid: false,
                    desc: ['Bibendum neque egestas congue quisque egestas diam. Nec tincidunt praesent semper feugiat nibh.'],
                },
                {
                    heading: 'Прогнозируемый объем инвестиций по годам',
                    pic: '/analytics/analytics--industries.jpg',
                    vid: false,
                    desc: ['Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Sit amet cursus sit amet dictum sit.'],
                },
            ]
        },
        {
            tabID: '003',
            heading: 'Регионы',
            innerSlides: [ 
                {
                    heading: 'Работа с папками прямо на картах',
                    pic: '/analytics/analytics--regions.jpg',
                    vid: false,
                    desc: ['Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. In iaculis nunc sed augue lacus viverra vitae congue.'],
                },
            ]
        },
    ],
    linksInfo: {
        resourseLink: {
            linkName: 'Перейти в аналитику по отраслям',
            address: 'http://investprojects.loc/sectors'
        },
        registerLink: true,
    },
}
export const sectionsNavData = [
    {
        name: "к картам",
        icon: '#icon-location',
        link: '#maps-section'
    },
    {
        name: "к проектам",
        icon: '#icon-info',
        link: '#project-base-section'
    },
    {
        name: "к командной работе",
        icon: '#icon-modules',
        link: '#teams-UI-section'
    },
    {
        name: "к производственным площадкам",
        icon: '#icon-factories',
        link: '#holdings-n-industrial-sites-section'
    },
    {
        name: "к аналитике",
        icon: '#icon-growth',
        link: '#analytics-section'
    },
]
export const quotesInfo = [
    {
        id: 'directorQuote',
        picSrc: '/other/Novitsky-photo.jpg',
        theQuote: 'На платформе реализовано множество сервисов для инвесторов, позволяющих сделать быстрым и лёгким процесс инвестиционного анализа, выбора контрагента на каждом этапе реализации инвестиционного проекта, от разработки до строительства, и организовать быстрый и квалифицированный отбор производственных площадок, проектировщиков, поставщиков оборудования, финансирующей организации, получение мер господдержки.',
        author: 'Д.С.Новицкий',
        jobPosition: 'Ген.директор платформы'
    }
]
export const partnersData = [
    {
        svgID: 'evraz',
        name: 'ЕВРАЗ',
        desc: 'Горно-металлургическая компания, лидер на рынках стального проката для инфраструктурных проектов с минимальной себестоимостью на всех этапах производства.',
    },
    {
        svgID: 'eurosib',
        name: 'Евросиб',
        desc: 'С 1992 года предоставляет комплексное транспортно-логистическое обслуживание ключевых отраслей экономики.',
    },
    {
        svgID: 'fesco',
        name: 'FESCO',
        desc: 'Одна из крупнейших частных транспортно-логистических компаний в РФ с активами в сфере портового, железнодорожного и интегрированного логистического бизнеса.',
    },
    {
        svgID: 'globalPorts',
        name: 'Global Ports',
        desc: 'Один из ведущих операторов специализированных портовых терминалов в России, лидер российского рынка перевалки контейнеров.',
    },
    {
        svgID: 'hilti',
        name: 'Hilti',
        desc: 'Мировой лидер в области разработки и производства оборудования, расходных материалов и ПО для профессионального строительства.',
    },
    {
        svgID: 'knauf',
        name: 'Knauf',
        desc: 'Немецкая инновационная компания-производитель строительных материалов и систем.',
    },
    {
        svgID: 'mtc',
        name: 'МТС',
        desc: 'Российская телекоммуникационная компания, оказывающая услуги сотовой и проводной телефонной связи, доступа в интернет и телевидения.',
    },
    {
        svgID: 'mc',
        name: 'MC-Bauchemie',
        desc: ' Один из ведущих мировых производителей строительных материалов и разработчик технологий их эффективного применения.',
    },
    {
        svgID: 'moscowDevCorp',
        name: 'КРМО',
        desc: 'На безвозмездной основе оказывает услуги для максимально быстрой и эффективной реализации проектов на территории Подмосковья.',
    },
    {
        svgID: 'omk',
        name: 'ОМК',
        desc: 'Один из крупнейших российских производителей металлопродукции для ведущих энергетических, транспортных и промышленных компаний.',
    },
    {
        svgID: 'penoplex',
        name: 'ПЕНОПЛЭКС',
        desc: 'Крупный российский производитель строительных и декоративно-отделочных материалов на основе полимеров.',
    },
    {
        svgID: 'peri',
        name: 'PERI',
        desc: 'Один из крупнейших в мире производителей опалубки и строительных лесов.',
    },
    {
        svgID: 'poliplast',
        name: 'Полипласт',
        desc: 'Крупнейший в России холдинг по производству строительной химии.',
    },
    {
        svgID: 'psb',
        name: 'ПСБ',
        desc: 'Универсальный банк, входящий в десятку крупнейших банков России и в список системно значимых кредитных организаций, утвержденный Центробанком.',
    },
    {
        svgID: 'rockwool',
        name: 'ROCKWOOL',
        desc: 'Мировой лидер в области производства негорючей теплоизоляции из каменной ваты.',
    },
    {
        svgID: 's7airlines',
        name: 'S7 Airlines',
        desc: 'Крупнейшая частная авиакомпания России с самым современным парком воздушных судов на российском рынке авиаперевозок.',
    },
    {
        svgID: 'saintGobain',
        name: 'Saint-Gobain',
        desc: 'Мировой лидер в создании комфортного пространства для проживания, работы и отдыха человека. Входит в ТОП-100 крупнейших индустриальных корпораций мира.',
    },
    {
        svgID: 'sberbank',
        name: 'СберБанк',
        desc: 'Крупнейший банк в России, Центральной и Восточной Европе, один из ведущих международных финансовых институтов.',
    },
    {
        svgID: 'schneider',
        name: 'Schneider Electric',
        desc: 'Один из мировых лидеров в области производства электротехнического оборудования низкого напряжения и средств автоматизации.',
    },
    {
        svgID: 'severstal',
        name: 'Северсталь',
        desc: 'Вертикально интегрированная горнодобывающая и металлургическая компания с основными активами в России и небольшим количеством предприятий за рубежом.',
    },
    {
        svgID: 'strabag',
        name: 'STRABAG',
        desc: 'Европейский концерн по оказанию высокотехнологичных строительных услуг, занимающий ведущее место по внедрению инноваций и размерам капитала.',
    },
    {
        svgID: 'tantneft',
        name: 'Татнефть',
        desc: 'Одна из крупнейших российских вертикально-интегрированных нефтяных компаний.',
    },
    {
        svgID: 'tehnonikol',
        name: 'ТЕХНОНИКОЛЬ',
        desc: 'Ведущий международный производитель надежных и эффективных строительных материалов и систем.',
    },
    {
        svgID: 'alabuga',
        name: 'Алабуга',
        desc: 'ОЭЗ промышленно-производственного типа в Елабужском районе Республики Татарстан.',
    },
    {
        svgID: 'bosch',
        name: 'Bosch',
        desc: 'Ведущий мировой поставщик технологий и услуг в области автомобильных и промышленных технологий, потребительских товаров, строительных и упаковочных технологий.',
    },
    {
        svgID: 'cisco',
        name: 'Cisco',
        desc: 'Компания, разрабатывающая и продающая сетевое оборудование, предназначенное для крупных организаций и телекоммуникационных предприятий.',
    },
    {
        svgID: 'eek',
        name: 'ЕЭК',
        desc: 'Регулирующий орган Евразийского экономического союза, обеспечивающий условия функционирования и развития ЕАЭС.',
    },
    {
        svgID: 'etm',
        name: 'ЭТМ',
        desc: 'Комплексный поставщик электротехники, светотехнической продукции, систем безопасности, крепежа и инженерной сантехники.',
    },
    {
        svgID: 'east-agency',
        name: 'АНО АПИ',
        desc: 'Cопровождает инвесторов на всех этапах реализации проектов в ДФО.',
    },
    {
        svgID: 'alutech',
        name: 'АЛЮТЕХ',
        desc: 'Крупный производственно-сбытовой холдинг, ведущий производитель алюминиевых профильных систем на территории СНГ.',
    },
    {
        svgID: 'auma',
        name: 'AUMA',
        desc: 'Один из лидеров рынка по производству электроприводов и редукторов для автоматизации трубопроводной арматуры.',
    },
    {
        svgID: 'alfa-laval',
        name: 'Альфа Лаваль',
        desc: 'Мировой лидер в трех ключевых технологических областях: теплообменное, сепарационное и потокопроводящее оборудование.',
    },
    {
        svgID: 'basf',
        name: 'BASF',
        desc: 'Крупнейший в мире химический концерн. Основные сегменты: химикаты, материалы, промышленные решения, технологии для обработки поверхностей, питание и уход и др.',
    },
    {
        svgID: 'eaton',
        name: 'Eaton',
        desc: 'Машиностроительная корпорация, производитель электротехнического и гидравлического оборудования, автокомплектующих и др. компонентов.',
    },
    {
        svgID: 'euro-cement',
        name: 'ЕВРОЦЕМЕНТ груп',
        desc: 'Промышленный холдинг, лидер производства строительных материалов в России.',
    },
    {
        svgID: 'first-logistik',
        name: 'First Logistik',
        desc: 'Профессиональные разработки, производство и установка стеллажных конструкций для любых складов и магазинов.',
    },
    {
        svgID: 'grundfos',
        name: 'Grundfos',
        desc: 'Один из мировых лидеров в изготовлении насосной продукции, на производственных мощностях которого собирается около 20 миллионов насосных агрегатов в год.',
    },
    {
        svgID: 'hikvision',
        name: 'Hikvision',
        desc: 'Крупнейший в мире поставщик продуктов видеонаблюдения и готовых решений по видеонаблюдению.',
    },
    {
        svgID: 'ingosstrah',

        name: 'Ингосстрах',
        desc: 'Универсальный страховщик федерального уровня и один из лидеров отечественного страхового рынка.',
    },
    {
        svgID: 'mirriko',
        name: 'Миррико',
        desc: 'группа производственно-сервисных компаний, занимающаяся производством и поставкой химических реагентов различного назначения.',
    },
    {
        svgID: 'polyplastic',
        name: 'ПОЛИПЛАСТИК',
        desc: 'Современное производство и продажа полиэтиленовых труб по всей России, а также в Белоруссии и Казахстане.',
    },
    {
        svgID: 'renaissance',
        name: 'Renaissance Construction',
        desc: 'Проектирование торговых и бизнес-центров, многофункциональных комплексов, гостиниц, предприятий и др.',
    },
    {
        svgID: 'siemens',
        name: 'Siemens',
        desc: 'Конгломерат, работающий в области электротехники, электроники, энергетического оборудования, транспорта, медицинского оборудования и светотехники.',
    },
    {
        svgID: 'tagil-steel',
        name: 'Тагильская сталь',
        desc: 'Торгово-производственное предприятие, специализирующиеся на комплексных поставках широкого ассортимента металлопродукции.',
    },
    {
        svgID: 'tebodin',
        name: 'Tebodin',
        desc: 'Поддержка клиентов на всех этапах инвестиционного проекта, начиная от бизнес-идеи до ввода объекта в эксплуатацию.',
    },
    {
        svgID: 'voljskoe-shiping',
        name: 'Волжское пароходство',
        desc: 'одна из крупнейших российских судоходных компаний в сфере речных и "река-море" грузовых перевозок.',
    }
]
export const navContent= [
    {
        outerItemName: 'База данных',
        link: false,
        innerLinks: [
            {
                name: 'Проекты',
                url: 'https://investprojects.info/project-base'
            },
            {
                name: 'Компании',
                url: 'https://investprojects.info/comphttp://investprojects.loc/company/list'
            },
            {
                name: 'Площадки',
                url: 'https://investprojects.info/industrials/list'
            },
            {
                name: 'Тендеры',
                url: 'https://investprojects.info/tenders/list'
            },
        ]
    },
    {
        outerItemName: 'Карта',
        link: false,
        innerLinks: [
            {
                name: 'Проекты',
                url: 'https://investprojects.info/ymap/projects'
            },
            {
                name: 'Компании',
                url: 'https://investprojects.info/ymap/projects'
            },
            {
                name: 'Площадки',
                url: 'https://investprojects.info/ymap/projects'
            },
            {
                name: 'Все объекты',
                url: 'https://investprojects.info/ymap/projects'
            },
        ]
    },
    {
        outerItemName: 'Аналитика',
        link: false,
        innerLinks: [
            {
                name: 'Отрасли',
                url: 'https://investprojects.info/sectors'
            },
            {
                name: 'Регионы',
                url: 'https://investprojects.info/districts'
            },
            {
                name: 'Материалы',
                url: 'https://investprojects.info/materials'
            },
        ]
    },
    {
        outerItemName: 'Помощь',
        link: false,
        innerLinks: [
            {
                name: 'Контакты',
                url: 'https://investprojects.info/contacts'
            },
            {
                name: 'Инвесторам',
                url: 'https://investprojects.info/investors'
            },
        ]
    },
    {
        outerItemName: 'Вход',
        link: false,
        innerLinks: [
            {
                name: 'Войти',
                url: 'https://investprojects.info/contacts'
            },
            {
                name: 'Регистрация',
                url: 'https://investprojects.info/register'
            },
        ]
    },
]