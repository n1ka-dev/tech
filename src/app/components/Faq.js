import Image from 'next/image';
import {useState, useMemo} from 'react';
import arrow from '/public/img/arrow.svg'

const tab = [
    {'id': 'general_issues', 'title': 'Общие вопросы',},
    {'id': 'formalization', 'title': 'Оформление',},
    {'id': 'discounts', 'title': 'Скидки',},
    {'id': 'insurance', 'title': 'Страхование',},
    {'id': 'additional_services', 'title': 'Дополнительные услуги',},
]
const faq = [
    {   'id':1,
        'theme': 'general_issues',
        'title':'Какие документы потребуются?',
        'text':'1. Заполненные и подписанные анкеты',
     },
    {
        'id':2,
        'theme': 'general_issues',
        'title':'Кто может оформить лизинг?',
        'text':'Юридическое лицо или Индивидуальный предприниматель, чей бизнес работает более 6 месяцев. Если компания существует менее 6 месяцев, то мы попросим предоставить поручителя для сделки.',
     },
    {
        'id':3,
        'theme': 'formalization',
        'title':'Могу ли я оформить лизинг, если у меня уже есть кредит?',
        'text':'Можете. Лизинговые платежи не учитываются в кредитной истории.',
     },
    {
        'id':4,
        'theme': 'discounts',
        'title':'Есть ли скидка на автомобили и технику?',
        'text':'Да, мы постоянно работаем над новыми акциями и спецпредложениями для наших клиентов. Посмотреть список актуальных акций вы в нашем телеграмм канале.',
     },
    {
        'id':5,
        'theme': 'insurance',
        'title':'Можно ли отказаться от КАСКО?',
        'text':'Лизингополучатель, имеющий опыт ведения бизнеса такси более 6 мес., может воспользоваться опцией отказа от страхования КАСКО. Оставьте заявку, менеджер свяжется с вами, и расскажет условия отказа.',
     },
    {
        'id':6,
        'theme': 'additional_services',
        'title':'Что такое "Финансовая гарантия"?',
        'text':'"Финансовая гарантия" – это полис страхования платежей, который защищает лизингополучателя в случае угона или тотального уничтожения транспорта и, как следствие, расторжения договора лизинга. По этому полису страховая компания закроет долг по лизинговому договору, а также вернет 70% первоначального взноса.',
     }
]

const Faq = ({}) => {
    const [tabIndex, setTabIndex] = useState('general_issues');
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => {
        if (expanded === panel) {
            setExpanded(false);
        } else {
            setExpanded(panel);
        }
    };


    const filters = useMemo(() => {
		let res = faq;
        res = res.filter((item) => {
            return ( item.theme === tabIndex)
        });
		return res;
    }, [tabIndex, faq]);

    return (
    <div className="faq-blocks mt-[4.5rem]">
        <div className="head-faq-block flex justify-between mb-10">
            <h3 className="uppercase font-dela text-5xl">FAQ</h3>
            <a href="#">О компании<span
                    className="detail inline-block relative align-middle ml-3 w-[50px] h-[50px] colorful-shadow  rounded-full"></span></a>
        </div>
         <div className="questions-block">
            <div className="head-tabs flex space-x-10 mb-5">
                {tab.map((item)=>
                    <button 
                        key={item.id} 
                        className={item.id === tabIndex
                            ?
                            'active-head-tab pb-1.5'
                            :
                            'pb-1.5'
                        }
                        onClick={()=>setTabIndex(item.id)}
                    >{item.title}</button>
                )}
            </div>
            <div className="tabs-content">
                {filters.map((item) => 
                    <div key={item.id}
                         className={`faq-block tab-block leading-normal`}
                         onClick={()=>handleChange(item.id)}
                    >
                        <div className={`question border-solid border-borderColor border rounded-2xl my-3 relative cursor-pointer bg-gradient${expanded === item.id ?' answer-opened' : ''}`}>
                            <div className="inner-faq-block inner-tab-block w-4/5 pb-4.5 px-3.5">
                                <div className="head-question text-h-faq pt-4.5">{item.title}</div>
                                <div className='answer-block' dangerouslySetInnerHTML={{__html:item.text}} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
    );
};

export default Faq;