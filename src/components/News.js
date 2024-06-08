import Image from 'next/image';
import {useState, useMemo} from 'react';
import arrow from '/public/img/arrow.svg'

const tab = [
    {'id': 'all_news', 'title': 'Все новости',},
    {'id': 'cars', 'title': 'Машины',},
    {'id': 'ur_questions', 'title': 'Юридические тонкости',}
]
const news = [
    {   'id':1,
        'theme': 'all_news',
        'img_path': './img/img-news.png',
        'title':'Ввоз автомобилей через таможню Владивостока пришел досанкционным значениям',
        'text':'В марте 2024 года физлица импортировали через таможню Владивостока 21 тысячу автомобилей, что сопоставимо с показателями досанкционного периода.',
     },
    {   'id':1.1,
        'theme': 'all_news',
        'img_path': './img/img-news.png',
        'title':'Ввоз автомобилей через таможню Владивостока пришел досанкционным значениям',
        'text':'В марте 2024 года физлица импортировали через таможню Владивостока 21 тысячу автомобилей, что сопоставимо с показателями досанкционного периода.',
     },
    {   'id':1.2,
        'theme': 'all_news',
        'img_path': './img/img-news.png',
        'title':'Ввоз автомобилей через таможню Владивостока пришел досанкционным значениям',
        'text':'В марте 2024 года физлица импортировали через таможню Владивостока 21 тысячу автомобилей, что сопоставимо с показателями досанкционного периода.',
     },
    {
        'id':2,
        'theme': 'cars',
        'img_path': './img/img-news-1.png',
        'title':'Машины',
        'text':'В марте 2024 года физлица импортировали через таможню Владивостока 21 тысячу автомобилей, что сопоставимо с показателями досанкционного периода.',
     },
    {
        'id':3,
        'theme': 'ur_questions',
        'img_path': './img/img-news.png',
        'title':'Юридический вопрос',
        'text':'В марте 2024 года физлица импортировали через таможню Владивостока 21 тысячу автомобилей, что сопоставимо с показателями досанкционного периода.',
     },

]

const News = ({}) => {
    const [tabIndex, setTabIndex] = useState('all_news');
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => {
        if (expanded === panel) {
            setExpanded(false);
        } else {
            setExpanded(panel);
        }
    };


    const filters = useMemo(() => {
		let res = news;
        res = res.filter((item) => {
            return ( item.theme === tabIndex)
        });
		return res;
    }, [tabIndex, news]);

    return (
    <div className="news-block mt-[5rem]">
       <div className="head-block flex justify-between mb-10 flex-wrap sm:flex-nowrap">
            <h3 className="uppercase font-dela text-xl sm:text-2xl md:text-5xl flex mb-5">Новости компании</h3>
            <a className="flex items-center shrink-0 mt-54 sm:mt-0" href="#">Все новости<span
                    className="detail flex relative align-middle ml-3 w-[50px] h-[50px] colorful-shadow  rounded-full"></span></a>

       </div>
       <div className="section-news-blocks">
            <div className="head-tabs hidden sm:flex space-x-10 mb-7 leading-8">
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
                <div className="tab-block flex space-x-0 sm:space-x-7 xl:space-x-12 leading-normal active-tab mb-10 flex-wrap sm:flex-nowrap">
                    {filters.map((item) =>
                        <div key={item.id}
                             className={`border-solid border-borderColor border rounded-2xl answer-opened relative bg-gradient  w-full sm:w-1/3 mb-10`}
                             onClick={()=>handleChange(item.id)}
                        >
                            <div className="inner-tab-block pb-4.5 px-3.5">
                                 <div className="img-news pt-4.5">
                                     <img alt={item.title} className="mx-auto" src={item.img_path} />
                                 </div>
                                <div className="text-xl pt-5 leading-[1.4rem] mb-3">{item.title}</div>
                                <div className="text-xs">{item.text}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
    );
};

export default News;