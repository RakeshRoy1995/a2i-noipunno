import { useEffect, useState } from 'react';
import { convertToBanglaNumber } from '../../utils/Utils';
import './faq.css';

const FAQ = () => {
  const [question_bank, setQuestion_bank] = useState([]);
  
  const fetchData = async () => {
    try {
      const response = await fetch('faq_question_list.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setQuestion_bank(data); 

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  },[])
  

  return (
    <section className='faq_page_bg_color'>
      <div className="container py-5">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="card shadow-lg border-0 w-100 rounded">
              <ul className="nav d-flex mt-2 justify-content-around ">
                <li className={`my-2 nav-item`}>
                  <h4>  প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী </h4>
                </li>
              </ul>
              <div className="accordion" id="accordionExample">
                {question_bank.map((item, index) => (
                  <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header" id={`heading${item.id}`} >
                      <button
                        className="accordion-button test_accordion bg-white"

                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${item.id}`}
                        aria-expanded="true"
                        aria-controls={`collapse${item.id}`}
                      >
                        {convertToBanglaNumber((index + 1))}। {item.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${item.id}`}
                      className="accordion-collapse collapse  "
                      aria-labelledby={`heading${item.id}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />

                      {/* <div className="accordion-body">
                        {item.answer}
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default FAQ;