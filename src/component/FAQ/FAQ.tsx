import { convertToBanglaNumber } from '../../utils/Utils';
import './faq.css';

const FAQ = () => {

  const allQusetion = [
    {
      "id": 1,
      "question": " 'নৈপুণ্য' কি?",
      "answer": "নতুন শিক্ষাক্রমের মূল্যায়ন পদ্ধতিতে শিখনকালীন ও সামষ্টিক মূল্যায়নের তথ্য সংরক্ষণ ও স্বয়ংক্রিয়ভাবে রিপোর্ট কার্ড প্রস্তুতের জন্য ‘নৈপুণ্য’ ওয়েব অ্যাপ্লিকেশন এবং মোবাইল অ্যাপ তৈরি করা হয়েছে।"
    },
    {
      "id": 2,
      "question": "কিভাবে ইআইআইএন (পিন) ধারী স্কুলের লগইন করতে হয়?",
      "answer": "তথ্যপ্রযুক্তিভিত্তিক মূল্যায়ন বিষয়ক অ্যাপ ‘নৈপুণ্য’ ব্যবহার করতে হলে ইন্টারনেট ব্রাউজারে গিয়ে master.noipunno.gov.bd ব্রাউজ করুন। প্রতিষ্ঠান প্রধানের মোবাইল নম্বরে প্রাপ্ত ইউজার আইডি ও পিন নম্বার ব্যবহার করে প্রথমে ‘লগইন’ করুন। প্রথমবার ‘লগইন’ করার সময় পূর্বের ‘পিন’ নম্বরটি পরিবর্তন করে আপনার পছন্দের ‘পিন’ নম্বর সেট করে নিন।"
    },
    {
      "id": 3,
      "question": "কিভাবে ইআইআইএন (পিন) বিহীন স্কুলের স্কুলের লগইন করতে হয়?",
      "answer": "তথ্যপ্রযুক্তিভিত্তিক মূল্যায়ন বিষয়ক অ্যাপ ‘নৈপুণ্য’ ব্যবহার করতে হলে ইন্টারনেট ব্রাউজারে গিয়ে master.noipunno.gov.bd ব্রাউজ করুন। যে সকল প্রতিষ্ঠানের ইআইআইএন নম্বর নেই, সেসব প্রতিষ্ঠানের ক্ষেত্রে লগইন পেজের রেজিস্ট্রেশন অপশনে ক্লিক করুন। ক্লিকের পর রেজিস্ট্রেশন ফর্মটি দেখতে পাবেন। যথাযথ তথ্য দিয়ে রেজিস্ট্রেশন ফর্মটি সাবমিট করলে তা প্রতিষ্ঠানের সংশ্লিষ্ট উপজেলা মাধ্যমিক শিক্ষা অফিসের ই মেইলে পৌঁছে যাবে। উপজেলা মাধ্যমিক শিক্ষা অফিস তখন আবেদনটি অনুমোদন করবেন। উপজেলা মাধ্যমিক শিক্ষা অফিসের অনুমোদনের পর প্রতিষ্ঠান প্রধানের মোবাইলে একটি সিস্টেম জেনারেটেড নাম্বার (sgn...), একটি ইউজার আইডি ও পিন নম্বর যাবে। প্রতিষ্ঠান প্রধানের মোবাইল নম্বরে প্রাপ্ত সিস্টেম জেনারেটেড নাম্বার (sgn...), ইউজার আইডি ও পিন ব্যবহার করে প্রথমে লগইন করুন। প্রথমবার লগইন করার সময় পূর্বের পিন নম্বরটি পরিবর্তন করে আপনার পছন্দের পিন নম্বর সেট করে নিন। (বিশেষ দ্রষ্টব্য: লগইন করতে কোনো সমস্যা হলে 09638600700 হেল্পলাইনে ফোন করুন)।"
    },
    {
      "id": 4,
      "question": "লগইন পরবর্তী করণীয় কি?",
      "answer": "লগইন শেষে হোম পেজে আপনি বিদ্যালয় সংশ্লিষ্ট সাতটি ব্যবস্থাপনা দেখতে পাবেন। উক্ত ব্যবস্থাপনাগুলো ব্যবস্থাপনা ট্যাবের ড্রপ-ডাউনেও দেখতে পাবেন। এই ব্যবস্থাপনাগুলো প্রতিষ্ঠান প্রধানের আইডি থেকে সম্পন্ন করতে হবে।"
    },



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
    // {
    //   "id": 10,
    //   "question": "What is the largest planet in our solar system?",
    //   "answer": "Jupiter is the largest planet in our solar system."
    // }


  ]


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
    </section>
  );
};

export default FAQ;