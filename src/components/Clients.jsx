import Client from './Client'
import './Clients.css'

const items = [
  {
    mod: 'master',
    name: `Фрилансерам
  и&nbsp;мастерам`,
    desc: `Чтобы заниматься своим любимым делом и зарабатывать деньги, а не отвлекаться на маркетинг и сайт.`
  },
  {
    mod: 'owner',
    name: `Владельцам
  бизнеса
  и&nbsp;маркетологам`,
    desc: `Привлекай клиентов
    не только по сарафану,
    но и через рекламу
    без больших вложений
    и подготовки.`
  },
  {
    mod: 'shop',
    name: `Небольшим
  интернет–
  магазинам`,
    desc: `Получи больше
    потенциальных покупателей
    при минимальных тратах
    на рекламу.`
  }
]

export default function Clients() {
  return (
    <section class="clients">
      <div className="container">
        <div className="clients__head">
          <h2 className="clients__title title">Кому подойдет кликбар?</h2>
        </div>
      </div>
      <div className="clients__viewport">
        <div className="clients__wrapper">
          {items.map((item) => (
            <div className="clients__item">
              <Client {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
