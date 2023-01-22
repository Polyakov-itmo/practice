import { ICard } from '../Interfaces/ICard'

let data: ICard[] = [
  {
    id: 1,
    word: 'ETL',
    description:
      '(Extraction, Transformation, Loading), подход к получению, обработке и хранению данных',
  },
  {
    id: 2,
    word: 'АИС',
    description: 'Автономная информационная система',
  },
  {
    id: 3,
    word: 'Сериализация',
    description:
      'процесс перевода структуры данных в битовую последовательность',
  },
  {
    id: 4,
    word: 'Десериализация',
    description: 'Создание структуры данных из битовой последовательности',
  },
  {
    id: 5,
    word: 'Data Lake',
    description:
      'централизованное хранилище для огромных объемов необработанной информации',
  },
  {
    id: 6,
    word: 'Плоская архитектура',
    description: 'Подход, когда сама система хранения данных является объектом',
  },
  {
    id: 7,
    word: 'Тиражирование данных',
    description:
      'технология распространений изменений, первоначально выполненных на одной копии блока данных, на другие копии',
  },
  {
    id: 8,
    word: 'Виртуализация данных',
    description: 'технология позволяющая создавать виртуальную копию данных',
  },
  {
    id: 9,
    word: 'Монолитная система',
    description:
      'Система, являющаяся цельным программным средством, не имеющая возможности разделения на подмодули',
  },
  {
    id: 10,
    word: 'Cтек технологий',
    description:
      'Совокупность отдельных модулей, работающих вместе по принципу конвеера',
  },
  {
    id: 11,
    word: 'HDFS (Hadoop Distributed File System)',
    description: 'технология представляет собой расширенную файловую систему',
  },
  {
    id: 12,
    word: 'API',
    description:
      'Application Programm Interface, описание способов взаимодействия одной компьютерной программы с другими',
  },
  {
    id: 13,
    word: 'Алгоритм',
    description: 'Упорядоченный и последовательный набор операций',
  },
  {
    id: 14,
    word: 'Бета-тестирования',
    description:
      'Этап тестироваания, на котором идет массовое распространение продукта с целью выявления наибольшего числа ошибок в работе с помощью пользователей',
  },
  {
    id: 15,
    word: 'Геораспределенные данные',
    description:
      'Данные распределены в нескольких хранилищах в разных частях одной территории(здание, город, страна, мир и т.д.)',
  },
  {
    id: 16,
    word: 'R-дерево',
    description: 'древовидная структура данных (дерево)',
  },
  {
    id: 17,
    word: 'Кубоидное разделение',
    description:
      'Метод разделения данных на уровни путемм представления данных в трехмерном виде',
  },
  { id: 18, word: 'СУБД', description: 'Система управления базой данных' },
  {
    id: 19,
    word: 'OLTP-система',
    description:
      '(Online Transaction Processing), транзакционная система — обработка транзакций в реальном времени',
  },
  {
    id: 20,
    word: 'Data ingestion',
    description:
      'процесс получения, внесения и обработки данных для последующего их использования или хранения в базе данных',
  },
  {
    id: 21,
    word: 'Data Staging',
    description:
      'процесс помещения данных в специальную среду или область для првоедения Data ingestion',
  },
  {
    id: 22,
    word: 'CASE-средства',
    description:
      'методы и технологии, которые позволяют проектировать различные информационные системы (в частности, базы данных) и автоматизировать их создание',
  },
  {
    id: 23,
    word: 'Архивация данных',
    description:
      'уменьшение физических размеров файлов, в которых хранятся данные, без значительных информационных потерь',
  },
  {
    id: 24,
    word: 'ODBC',
    description:
      'программный интерфейс (API) доступа к базам данных, разработанный компанией Microsoft',
  },
]

export { data }