import { convertToBanglaNumber } from '../../utils/Utils';
import './faq.css'


const FAQ = () => {

  const allQusetion = [
    {
      "id": 1,
      "question": " 'নৈপুণ্য' কি?",
      "answer": "নতুন শিক্ষাক্রমের মূল্যায়ন পদ্ধতিতে শিখনকালীন ও সামষ্টিক মূল্যায়নের তথ্য সংরক্ষণ ও স্বয়ংক্রিয়ভাবে রিপোর্ট কার্ড প্রস্তুতের জন্য ‘নৈপুণ্য’ ওয়েব অ্যাপ্লিকেশন এবং মোবাইল অ্যাপ তৈরি করা হয়েছে।"
    },
    // {
    //   "id": 2,
    //   "question": "How many continents are there?",
    //   "answer": "There are seven continents on Earth."
    // },
    // {
    //   "id": 3,
    //   "question": "What is the largest mammal?",
    //   "answer": "The blue whale is the largest mammal on Earth."
    // },
    // {
    //   "id": 4,
    //   "question": "Who wrote 'Romeo and Juliet'?",
    //   "answer": "William Shakespeare wrote 'Romeo and Juliet.'"
    // },
    // {
    //   "id": 5,
    //   "question": "What is the capital of Japan?",
    //   "answer": "The capital of Japan is Tokyo."
    // },
    // {
    //   "id": 6,
    //   "question": "What is the boiling point of water in Celsius?",
    //   "answer": "The boiling point of water in Celsius is 100 degrees."
    // },
    // {
    //   "id": 7,
    //   "question": "Who is the first President of the United States?",
    //   "answer": "George Washington is the first President of the United States."
    // },
    // {
    //   "id": 8,
    //   "question": "What is the currency of Brazil?",
    //   "answer": "The currency of Brazil is the Brazilian Real (BRL)."
    // },
    // {
    //   "id": 9,
    //   "question": "In which year did the Titanic sink?",
    //   "answer": "The Titanic sank in 1912."
    // },



  ]


  return (
    <div className="container">
      <div className="container">
        <div className="d-flex align-items-center">
          <div className="card shadow-lg border-0 w-100 rounded">
            <ul className="nav d-flex mt-2 justify-content-around ">
              <li className={`my-2 nav-item`}>
                <h4>  প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী </h4>
              </li>
            </ul>
            <div className="accordion" id="accordionExample">
              {allQusetion.map((item, index) => (
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
                    <div className="accordion-body">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </div>

  );
};

export default FAQ;