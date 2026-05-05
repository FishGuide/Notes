import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { DescriptionList } from './components/DescriptionList';

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState('bread');

  const categories = [
    {
      id: 'daily-quests',
      name: 'Ежедневные квесты',
      topics: [
        {
          id: 'odnoglazyi',
          name: 'Одноглазый Джо',
          subtopics: [
            {
              id: 'bread',
              name: 'Мякиш хлеба',
              lines: [
                { text: 'Быстрянка', color: '#ff0000', value: 'Сена Узкое место 0.4' },
                { text: 'Горчак обыкновенный', color: '#ff0000', value: 'Сена Подтопленный берег 0.4' },
                { text: 'Синец', color: '#ff0000', value: 'Ладожское Старая ладога 13м' },
                { text: 'Чукучан пустынный', color: '#ff0000', value: 'Утес Кондора 0.4 Ночь' },
                { text: 'Зачеты', color: '#ff0000', value: 'Рыбная ферма Кладка уклейки 0.4' },
              ]
            },
            {
              id: 'perlovka',
              name: 'Перловка',
              lines: [
                { text: 'Густера', color: '#ff0000', value: 'Сена Ивовый мост дно. Ночь.' },
                { text: 'Подуст генуэзский', color: '#ff0000', value: 'Гарда Токсолано. 0.7 День.' },
                { text: 'Мачако', color: '#ff0000', value: 'Арсеналь. Каньо-Негро 1.5 все сутки' },
                { text: 'Краб пресноводный', color: '#ff0000', value: 'Гарда Токсолана Дно ночь. Днем с приловом.' },
                { text: 'Зачеты', color: '#ff0000', value: 'Гарда Токсолано подуст 1м.' },
                { text: 'Наживка всего квеста - перловка.'},
                { text: '1. 5 Густера - Евразия/Сена/Ивовый мост - 1,8м - все сутки.'},
                { text: '2. 5 Подуст генуэзский - Евразия/о.Гарда/Toscolano - 0,6м - кроме ночи.'},
                { text: '3. 5 Мачака - С.Америка/о.Ареналь/Вулкан Ареналь - 1,41м - все сутки.'},
                { text: '4. 5 Краб пресноводный - Евразия/о.Гарда/Toscolano - дно 10.01-12м - кроме дня.'},
                { text: '5. 3 зачета - ловлю лещей на Заброшеный рыбхоз/Лещевый залив на донку.'},
              ]
            },
            {
              id: 'zerno',
              name: 'Зерно',
              lines: [
                { text: 'Сомик никарагский', color: '#ff0000', value: 'Ареналь:Пуэбло Нуэво 1.41 Ночь.' },
                { text: 'Гольян гваделупский тупорылый', color: '#ff0000', value: 'Колорадо:Утес Кондора 0.5м. День.' },
                { text: 'Многопер нильский', color: '#ff0000', value: 'Нил:Нильский оазис  3.7-3.8 дно. Ночь. Нил. Старый корабль. Донка, зерно.' },
                { text: 'Усач обыкновенный', color: '#ff0000', value: 'Гарда Тосколано 11.5  Сена Ивовый мост дно. Ловится и днем.' },
                { text: 'Зачеты', color: '#ff0000', value: 'Нил Полноводный нил дно ямка 9.16 на поплавке 7.5 шилд и карп тут глубиной лучше играть' },
                { text: 'Наживка всего квеста - зерно.'},
                { text: '1. Сомик никарагский о.Ареналь Пуебло Нуево 1зерно 1,5 только ночью 5шт'},
                { text: '2. Гольян гваделупский тупорылый р.Колорадо утес Кондора 0,4 ночью не клюет 5шт'},
                { text: '3. Многопер Нильский р.Нил польноводный Нил 7.5 только ночью 5шт (глубина 8.51 ночью удачно)'},
                { text: '4. Усач обыкновенный о.Гарда Тосколано донка 11,81 без прилова, 5шт (лучше 11.95м)'},
                { text: '5. Карп африканский полноводный Нил. Донка глубина до 7.5. Любое время. 2-6 игровых часов'},
              ]
            },
            {
              id: 'kukuruza',
              name: 'Кукуруза',
              lines: [
                { text: 'Карп африканский', color: '#ff0000' },
                { text: 'Локация: р.Нил: Полноводный нил'},
                { text: 'Глубина: 6,05м ловить лучше,утром и ночью,без прилова'},
                { text: 'В остальне время суток с приловом.'},
                { text: 'Наживка: кукуруза.'},
                { text: 'Лабео полосатый', color: '#ff0000' },
                { text: 'конго Нзари'},
                { text: 'также ловил ночью не клюет'},
                { text: 'Окунь большеротый', color: '#ff0000' },
                { text: 'р. Колорадо Утес Кондора'},
                { text: 'р. Дон Сонная вода'},
                { text: 'Гарда Токсолано на Гарде быстрее'},
                { text: 'гл. 0.5 - 1м'},
                { text: 'Язь', color: '#ff0000' },
                { text: 'р. Сена,'},
                { text: 'Узкое место'},
                { text: 'Кукуруза'},
                { text: '2.1м'},
                { text: 'Лещевый залив гл. 2 м'},
                { text: 'Байкал:Облачная пелена - удочка(8.1м) кукуруза'},
                { text: 'Зачеты:', color: '#ff0000' },
                { text: 'Тостолоб белый 7.57 на попл. 7.07 на Сене Ивовый мост'},
                { text: 'там же подуст обыкновенный в той же ямке'},
                { text: 'там же подлещик в другой ямки 7.54'},
              ]
            },
            {
              id: 'green',
              name: 'Зелёные традиции',
              lines: [
                { text: 'Рак болотный американский', color: '#ff0000', value: 'о.Ареналь: Пуэбло Нуэво  - со дна; только ночь' },
                { text: 'Подлещик', color: '#ff0000', value: 'Озеро: Красивое место  - глубина от 1,5 м.' },
                { text: 'Язь', color: '#ff0000', value: 'Рыбная ферма: Лещёвый залив  - глубина 2 м.' },
                { text: 'Лещ обыкновенный', color: '#ff0000', value: 'Рыбная ферма дно 8м ямка Там же зачеты' },
              ]
            },
          ]
        },
        {
          id: 'brakonier',
          name: 'Браконьер',
          subtopics: [
            {
              id: 'ryba3',
              name: 'Рыбы много не бывает 3',
              lines: [
                { text: '1 и 2 пункты - Старая Ладога - мелкая рыбка, гл. 4,43 (клюёт много всего и крупного)' },
                { text: '3) 1.Окунь речной/Старая Ладога/Мясо мидии/0.6м' },
                { text: '2.Карась серебряный/Там же/Бойл/0.4м' },
                { text: '3.Минога европейская ручьевая/Там же/Мясо/0.4м' },
                { text: '4.Плотва обыкновенная/Там же/Кусок сала/4.7м' },
                { text: '5.Подлещик/Там же/Макароны/4.7м' },
                { text: '4 и 5 - Орешек, рапан, 10-15м (сигов обоих в садок) потом на волю.' },
              ]
            },
            {
              id: 'koktel',
              name: 'Браконьер Коктель Блю Карасяо',
              lines: [
                { text: 'Карась серебряный', color: '#ff0000', value: 'Озеро Тихая вода 0.7 боил' },
                { text: 'Карась золотой', color: '#ff0000', value: 'Рыбная ферма Заводь красноперки 4.91 боил' },
                { text: 'Карась якутский', color: '#ff0000', value: 'Омолон Редколесье 10м Пиявка мякиш хлеба' },
                { text: 'Подуст обыкновенный', color: '#ff0000', value: 'Сена Ивовый мост 1м. перловка' },
              ]
            },
            {
              id: 'brakonier4',
              name: 'Браконьер 4',
              lines: [
                { text: 'Омолон Живец дно правая ямка, много зачетов.' },
                { text: 'ВСЕГДА:' },
                { text: '54. Чукучан обыкновенный | Пейзаж | Капуста | 0.4м' },
                { text: '55. Язь | Пейзаж | Кукуруза | 2м' },
                { text: '56. Карась якутский | Редколесье | Мякиш хлеба | 10-11м' },
                { text: '57. Ленок | Рукав | Блесна «Флайс» | 1м+' },
                { text: 'УТРО/ДЕНЬ/ВЕЧЕР (6:00–0:00):' },
                { text: '58. Голец желторотый | Рукав | Блесна «Глубина» | 0.2м+' },
                { text: '59. Горбуша | Рукав | Жук | 1.6м' },
                { text: '60. Валек обыкновенный | Рукав | Оса | 1.6м' },
                { text: '61. Сиг-пыжьян | Рукав | Бабочка | 5.1м' },
                { text: '62. Кижуч | Шепот реки | Бабочка | 5.1м' },
                { text: '63. Кета | Шепот реки | Филе рака | 0.5м' },
                { text: '64. Муксун | Шепот реки | Мясо рапана | 0.4м' },
                { text: '65. Голец Черского | Шепот реки | Нереис | 0.4м' },
                { text: '66. Чавыча | Шепот реки | Кальмар | 0.8м' },
                { text: '67. Мальма | Шепот реки | Мясо улитки | 0.9м' },
                { text: '68. Гольян Чекановского | Пейзаж | Манка | 1м' },
                { text: '69. Рогатка ледовитоморская | Пейзаж | Морская блоха | 1.5м' },
                { text: '70. Хариус восточносибирский | Редколесье | Оса | 1.5м' },
                { text: '71. Голец Таранца | Редколесье | Водяной ослик | 1.5м' },
                { text: '72. Треска восточносибирская | Редколесье | Морской гребешок | 7.1м' },
                { text: '73. Сельдь сибирская | Редколесье | Нереис | 9.1м' },
                { text: 'НОЧЬ (0:00–6:00):' },
                { text: '74. Чукучан сибирский | Шепот реки | Нереис | 0.5м' },
                { text: '75. Минога японская | Шепот реки | Живец | 0.4м' },
                { text: '76. Тугун или Ряпушка сибирская | Рукав | Кузнечик | 0.4м' },
                { text: '77. Налим обыкновенный | Редколесье | Пескоройка | 3.1м' },
                { text: '78. Омуль арктический | Редколесье | Креветка | 4.8м' },
                { text: '79. Камбала полярная | Редколесье | Морской гребешок | 10м+ придонный слой!' },
                { text: 'Ряпушка сибирская', color: '#ff0000', value: '- Рукав паук гл.5.1 из 5 2 зачета.' },
                { text: 'Сельдь сибирская', color: '#ff0000', value: '- Редколесье 9.1м Нереис, тож 2 зачета.' },
              ]
            },
          ]
        },
        {
          id: 'treville',
          name: 'Де Тревиль',
          subtopics: [
            {
              id: 'treville5',
              name: 'Де Тревиль 5',
              lines: [
                { text: 'Бычок цуцик', color: '#ff0000', value: 'Рыбная ферма: Заброшенный рыбхоз.наживка Креветка,гл.0.9м День.' },
                { text: 'Единорог расписной', color: '#ff0000', value: 'Морской Заповедник: Вулканический барьер Помидор гл.4м. День.' },
                { text: 'Подкаменщик пятнистый', color: '#ff0000', value: 'Сена Причал№1 Детрит гл.2.1м. Утро и день. Вечером и ночью не клюет' },
                { text: 'Черепаха расписная', color: '#ff0000', value: 'Колорадо. Ущелье Итачу 1.2м. Мясо краба Вечер,Ночь.' },
                { text: 'Рыба-нож пятнистая', color: '#ff0000', value: 'Арсеналь Вупкан Арсеналь гл.3м поденка Ночь.' },
              ]
            },
          ]
        }
      ]
    }
  ];

  return (
    <div className="size-full flex bg-gray-50">
      {/* Левая панель с категориями */}
      <div className="w-80 bg-white border-r border-gray-200 overflow-auto">
        <div className="p-4">
          <h1 className="mb-6 text-gray-900">Каталог</h1>

          <Accordion.Root type="multiple" className="space-y-2">
            {categories.map((category) => (
              <Accordion.Item
                key={category.id}
                value={category.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <Accordion.Trigger className="flex items-center justify-between w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors group">
                  <span className="text-gray-900">{category.name}</span>
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>

                <Accordion.Content className="bg-white data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                  <div className="p-2">
                    {category.topics[0]?.subtopics ? (
                      <Accordion.Root type="multiple" className="space-y-1">
                        {category.topics.map((topic) => (
                          <Accordion.Item
                            key={topic.id}
                            value={topic.id}
                            className="border border-gray-100 rounded overflow-hidden"
                          >
                            <Accordion.Trigger className="flex items-center justify-between w-full px-3 py-2 hover:bg-gray-50 transition-colors group">
                              <span className="text-gray-700">{topic.name}</span>
                              <ChevronDown className="w-4 h-4 text-gray-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                            </Accordion.Trigger>

                            <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                              <div className="p-1 bg-gray-50">
                                {topic.subtopics.map((subtopic) => (
                                  <button
                                    key={subtopic.id}
                                    onClick={() => setSelectedTopic(subtopic.id)}
                                    className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                                      selectedTopic === subtopic.id
                                        ? 'bg-blue-50 text-blue-700'
                                        : 'hover:bg-white text-gray-600'
                                    }`}
                                  >
                                    {subtopic.name}
                                  </button>
                                ))}
                              </div>
                            </Accordion.Content>
                          </Accordion.Item>
                        ))}
                      </Accordion.Root>
                    ) : (
                      <div className="space-y-1">
                        {category.topics.map((topic) => (
                          <button
                            key={topic.id}
                            onClick={() => setSelectedTopic(topic.id)}
                            className={`w-full text-left px-3 py-2 rounded transition-colors ${
                              selectedTopic === topic.id
                                ? 'bg-blue-50 text-blue-700'
                                : 'hover:bg-gray-50 text-gray-700'
                            }`}
                          >
                            {topic.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>

      {/* Правая панель с контентом */}
      <div className="flex-1 overflow-auto p-8">
        <div className="max-w-4xl">
          {categories.map((category) =>
            category.topics.map((topic) =>
              topic.subtopics ? (
                topic.subtopics.map((subtopic) =>
                  selectedTopic === subtopic.id ? (
                    <div key={subtopic.id} className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
                      <h2 className="mb-4 text-gray-900">{subtopic.name}</h2>
                      {(subtopic as any).lines ? (
                        <DescriptionList lines={(subtopic as any).lines} />
                      ) : (
                        <p className="text-gray-600 leading-relaxed">
                          {(subtopic as any).description}
                        </p>
                      )}
                    </div>
                  ) : null
                )
              ) : (
                selectedTopic === topic.id ? (
                  <div key={topic.id} className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
                    <h2 className="mb-4 text-gray-900">{topic.name}</h2>
                    {(topic as any).lines ? (
                      <DescriptionList lines={(topic as any).lines} />
                    ) : (
                      <p className="text-gray-600 leading-relaxed">
                        {(topic as any).description}
                      </p>
                    )}
                  </div>
                ) : null
              )
            )
          )}
        </div>
      </div>
    </div>
  );
}