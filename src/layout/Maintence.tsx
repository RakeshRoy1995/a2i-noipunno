// const Maintence = () => {
//   return (
//     <>
//       <div className="contaienr-fluid h-100 d-flex align-items-center hero_bg_img">
//         <div className="container">
//           <div className="row">
//             <div className="d-flex justify-content-center">
//               <div className="">
//                 <div className="d-flex justify-content-center">
//                   <img
//                     src="https://la360host.com/imagenoip/brand-logo.png"
//                     style={{ width: "35%" }}
//                   />
//                 </div>
//                 <h2
//                   className="ps-2 pt-5 pb-3 text-center"
//                   style={{
//                     color: "#222222",
//                     fontWeight: 700,
//                     fontSize: 18,
//                     fontFamily: "roboto",
//                     lineHeight: 30,
//                     textDecoration: "none",
//                   }}
//                 >
//                   আপনি মোবাইল ব্রাউজারের মাধ্যমে নৈপুণ্য অ্যাপ্লিকেশনটি ব্যবহার করতে পারবেন না। <br /> দয়া করে ডেস্কটপ অথবা ল্যাপটপ এর ওয়েব ব্রাউজারের মাধ্যমে নৈপুণ্য অ্যাপ্লিকেশনটি ব্যবহার করুন। ধন্যবাদ।
//                   <br />
//                   <br /> - ধন্যবাদ
//                 </h2>
//                 <p />
//               </div>
//             </div>
//           </div>
//           <div className="row fixed-bottom pb-2">
//             <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-around">
//               <div className="d-flex gap-2 px-3 py-2 justify-content-center ">
//                 <ul className="d-flex gap-2 align-items-end">
//                   <div className="d-flex gap-2 flex-column flex-md-row">
//                     <div className="d-flex gap-2">
//                       <a href="#" className="text-dark">
//                         সর্বস্বত্ব সংরক্ষিত © ২০২৪ শিক্ষা মন্ত্রণালয়,
//                         গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
//                       </a>
//                       {/* <li><a href="#" class="text-dark">গোপনীয়তা নীতি</a> </li> */}
//                     </div>
//                     {/* <div class="d-flex gap-2">
//           <li><a href="#" class="text-dark">সাহায্য</a> </li>
//           <li><a href="#" class="text-dark">কোন প্রশ্ন?</a> </li>
//         </div> */}
//                   </div>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Maintence;



const Maintence = () => {
  return (
    <>
      <div className="container-fluid vh-100  d-flex align-items-center hero_bg_img">
        <div className="container">
          <div className="d-flex justify-content-center align-content-center mb-3">
            <img
              src="https://la360host.com/imagenoip/brand-logo.png"

            />
          </div>
          <div className="d-flex justify-content-center align-content-center"  >
            <h2 className="ps-2 pt-5 pb-3 text-center" style={{ color: "#222", fontWeight: "bold", fontSize: "1.5rem", lineHeight: "40px" }}>
            আপনি মোবাইল ব্রাউজারের মাধ্যমে নৈপুণ্য অ্যাপ্লিকেশনটি ব্যবহার করতে পারবেন না। <br/> দয়া করে ডেস্কটপ অথবা ল্যাপটপ এর ওয়েব ব্রাউজারের মাধ্যমে মুল্যায়ন করুন অথবা মোবাইল অ্যাপ ব্যাবহার করুন। <br/> <br/> ধন্যবাদ।
              </h2>
          </div>



          <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-around">
            <div className="d-flex gap-2 px-3 py-2 justify-content-center ">
              <ul className="d-flex gap-2 align-items-end">
                <div className="d-flex gap-2 flex-column flex-md-row">
                  <div className="row fixed-bottom pb-2 text-center">
                  <a  style={{color:"#212529", textDecoration:"underline" ,fontSize:"1.1rem",fontWeight:"normal"}} href="#">সর্বস্বত্ব সংরক্ষিত © ২০২৪ শিক্ষা মন্ত্রণালয়, গণপ্রজাতন্ত্রী  বাংলাদেশ
                    সরকার
                    </a>
                  </div>
                </div>
              </ul>
            </div>
          </div>

        </div>

      </div>

    </>
  );
};

export default Maintence;