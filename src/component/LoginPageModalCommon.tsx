
export default function LoginPageModalCommon() {
  return (
    <div>
        <div className="modal fade" id="exampleModal1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
            <div className="modal-content bn" style={{ border: 'none' }}>
              <div className="modal-header bg-success text-light">
                <h1 className="modal-title fs-5" id="exampleModalLabel">যোগাযোগ</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div className="modal-body">
                {/* <div className="">
                  <h5 className="bn">নাম্বার: +৮৮০ ১৮৪১১১৭০০১</h5>
                  <h5 className="mt-2"><span className="bn">ইমেইল: </span> <span style={{ fontFamily: 'arial' }}>support@report.gov.bd</span></h5>
              </div>         */}

                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">সিরিয়াল</th>
                      <th scope="col">জেলার নাম</th>
                      <th scope="col">মোবাইল নাম্বার (স্কুল)</th>
                      <th scope="col">মোবাইল নাম্বার (মাদ্রাসা)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">১</th>
                      <td>বাগেরহাট</td>
                      <td>০১৭১২৬৮৮১৬১৬</td>
                      <td>০১৯১২৮১৯৪৩৫</td>
                    </tr>
                    <tr>
                      <th scope="row">২</th>
                      <td>বান্দরবান</td>
                      <td>০১৭৩৯৩৪৫৮৭৮</td>
                      <td>০১৮১৫৫৭২১৮২</td>
                    </tr>
                    <tr>
                      <th scope="row">৩</th>
                      <td>বরগুনা</td>
                      <td>০১৭১৮১৬৫৯২০</td>
                      <td>০১৭১৮১৬৫৯২০</td>
                    </tr>
                    <tr>
                      <th scope="row">৪</th>
                      <td>বরিশাল</td>
                      <td>০১৭৫৭৫৮৫৯৯২</td>
                      <td>০১৭২৫৫৪৭৯২১</td>
                    </tr>
                    <tr>
                      <th scope="row">৫</th>
                      <td>ভোলা</td>
                      <td>০১৭৩৪০৫৬৮৪৭</td>
                      <td>০১৭২৭৫২৩৪১৬</td>
                    </tr>
                    <tr>
                      <th scope="row">৬</th>
                      <td>বগুড়া</td>
                      <td>০১৮৩৩৭৯৪১২৪</td>
                      <td>০১৭২৩২৮১৫৩২</td>
                    </tr>
                    <tr>
                      <th scope="row">৭</th>
                      <td>ব্রাহ্মণবাড়িয়া</td>
                      <td>০১৬০১৯৩৬৫৬১</td>
                      <td>০১৭৪৭৯৪২৯৪৪</td>
                    </tr>
                    <tr>
                      <th scope="row">৮</th>
                      <td>চাঁদপুর</td>
                      <td>০১৯১৩৬৩৪৫৫০</td>
                      <td>০১৮১৪৯৭৮৩৭০</td>
                    </tr>
                    <tr>
                      <th scope="row">৯</th>
                      <td>চট্টগ্রাম</td>
                      <td>০১৮১৮১২৭১৩৩</td>
                      <td>০১৮১৮৪৩৩৪৮৬</td>
                    </tr>
                    <tr>
                      <th scope="row">১০</th>
                      <td>চুয়াডাঙ্গা</td>
                      <td>০১৭১৬১০৪২০২</td>
                      <td>০১৭১৯৯৬৯৯৬৮</td>
                    </tr>
                    <tr>
                      <th scope="row">১১</th>
                      <td>কক্সবাজার</td>
                      <td>০১৯৭৩২৭৬৮৮৭</td>
                      <td>০১৮২০১০২৪৩৯</td>
                    </tr>
                    <tr>
                      <th scope="row">১২</th>
                      <td>কুমিল্লা</td>
                      <td>০১৬৪৭৩৭৩৭৫৭</td>
                      <td>০১৮৫৪৬০১১২৪</td>
                    </tr>
                    <tr>
                      <th scope="row">১৩</th>
                      <td>ঢাকা</td>
                      <td>০১৭১৬১৫৮২৪৭</td>
                      <td>০১৭১৫২৫৭৬২৯</td>
                    </tr>
                    <tr>
                      <th scope="row">১৪</th>
                      <td>দিনাজপুর</td>
                      <td>০১৭২৮৮৬৬৪৮৪</td>
                      <td>০১৭১৭৭২২২৭৯</td>
                    </tr>
                    <tr>
                      <th scope="row">১৫</th>
                      <td>ফরিদপুর</td>
                      <td>০১৭২১০০১২৫৫</td>
                      <td>০১৭১৬৬৬৮১৮০</td>
                    </tr>
                    <tr>
                      <th scope="row">১৬</th>
                      <td>ফেনী</td>
                      <td>০১৭১৭৮৮১০৮৪</td>
                      <td>০১৮৩০১২৩১৮৫</td>
                    </tr>
                    <tr>
                      <th scope="row">১৭</th>
                      <td>গাইবান্ধা</td>
                      <td>০১৭১৭০১৬১৪০</td>
                      <td>০১৭১৪৫৪৬৪৮১</td>
                    </tr>
                    <tr>
                      <th scope="row">১৮</th>
                      <td>গাজীপুর</td>
                      <td>০১৭২১৯৯৬৬৩৭</td>
                      <td>০১৭১৬০০৩১৫২</td>
                    </tr>
                    <tr>
                      <th scope="row">১৯</th>
                      <td>গোপালগঞ্জ</td>
                      <td>০১৭১১২২২৯৩৪</td>
                      <td>০১৮৮৯৩৬১৭৫০</td>
                    </tr>
                    <tr>
                      <th scope="row">২০</th>
                      <td>হবিগঞ্জ</td>
                      <td>০১৭১১৯১০০১৬</td>
                      <td>০১৭১০৪৫৯৫৮৫</td>
                    </tr>
                    <tr>
                      <th scope="row">২১</th>
                      <td>জামালপুর</td>
                      <td>০১৭১২৭২৫৪৬১</td>
                      <td>০১৯১৪১২০৬৯১</td>
                    </tr>
                    <tr>
                      <th scope="row">২২</th>
                      <td>যশোর</td>
                      <td>০১৯৩৬০১১১০২</td>
                      <td>০১৯৩৬০১১১০২</td>
                    </tr>
                    <tr>
                      <th scope="row">২৩</th>
                      <td>ঝালকাঠি</td>
                      <td>০১৭০৯৯০২৩৬৬</td>
                      <td>০১৭১৮৭০০২৬২</td>
                    </tr>
                    <tr>
                      <th scope="row">২৪</th>
                      <td>ঝিনাইদহ</td>
                      <td>০১৭১৬১০৭৫৭৭</td>
                      <td>০১৫১৬৭১৭৮৩২</td>
                    </tr>
                    <tr>
                      <th scope="row">২৫</th>
                      <td>জয়পুরহাট</td>
                      <td>০১৯১৬৩১৬১৬০</td>
                      <td>০১৯১৭৬৭৭৮৪৪</td>
                    </tr>
                    <tr>
                      <th scope="row">২৬</th>
                      <td>খাগড়াছড়ি</td>
                      <td>০১৫৫৬৭৭১৫৫৫</td>
                      <td>০১৬৯০গা৪৬৫৬</td>
                    </tr>
                    <tr>
                      <th scope="row">২৭</th>
                      <td>খুলনা</td>
                      <td>০১৭১৭০০৬৯১০</td>
                      <td>০১৯১৫৪৫৫২৬২</td>
                    </tr>
                    <tr>
                      <th scope="row">২৮</th>
                      <td>কিশোরগঞ্জ</td>
                      <td>০১৭৫১৬২৬৬৭৯</td>
                      <td>০১৭১২০৭২৭৬২</td>
                    </tr>
                    <tr>
                      <th scope="row">২৯</th>
                      <td>কুড়িগ্রাম</td>
                      <td>০১৭১৭১৭১৭৪১</td>
                      <td>০১৭২১৫১৭৫১৫</td>
                    </tr>
                    <tr>
                      <th scope="row">৩০</th>
                      <td>কুষ্টিয়া</td>
                      <td>০১৭১৯৪৭৮৪২৬</td>
                      <td>০১৭১৪৭৩০৭৯৭</td>
                    </tr>

                    <tr>
                      <th scope="row">৩১</th>
                      <td>লক্ষ্মীপুর</td>
                      <td>০১৭১৭২৯৬১২৮</td>
                      <td>০১৭৮৮৫৭৭৬০৩</td>
                    </tr>
                    <tr>
                      <th scope="row">৩২</th>
                      <td>লালমনিরহাট</td>
                      <td>০১৭১৯০৬৮৯৬০</td>
                      <td>০১৭২৫৪৪৯৯৯৮</td>
                    </tr>
                    <tr>
                      <th scope="row">৩৩</th>
                      <td>মাদারীপুর</td>
                      <td>০১৭১২৭৮৩৯১০</td>
                      <td>০১৯২৩৮৭৩৭৬৬</td>
                    </tr>
                    <tr>
                      <th scope="row">৩৪</th>
                      <td>মাগুরা</td>
                      <td>০১৭২৮২৯৫৮৮৯</td>
                      <td>০১৭১৬৮৮৭৭০৪</td>
                    </tr>
                    <tr>
                      <th scope="row">৩৫</th>
                      <td>মানিকগঞ্জ</td>
                      <td>০১৭১৩৫২৪৩৭০</td>
                      <td>০১৭২৮৩৭০৪১৭</td>
                    </tr>
                    <tr>
                      <th scope="row">৩৬</th>
                      <td>মেহেরপুর</td>
                      <td>০১৯১৯১৩১৭০০</td>
                      <td>০১৭৯২৪৪০৮৮১</td>
                    </tr>
                    <tr>
                      <th scope="row">৩৭</th>
                      <td>মৌলভীবাজার</td>
                      <td>০১৭১১৪৭৬৮৯৫</td>
                      <td>০১৭১২৩২১৩৪৬</td>
                    </tr>
                    <tr>
                      <th scope="row">৩৮</th>
                      <td>মুন্সিগঞ্জ</td>
                      <td>০১৬৭৫৪৯০০০৫</td>
                      <td>০১৯১১৯৩৯৯১</td>
                    </tr>
                    <tr>
                      <th scope="row">৩৯</th>
                      <td>ময়মনসিংহ</td>
                      <td>০১৭২০৬৮২৫০০</td>
                      <td>০১৭৭৪৯৭৬৯৭৬</td>
                    </tr>
                    <tr>
                      <th scope="row">৪০</th>
                      <td>নওগাঁ</td>
                      <td>০১৭২৮৪৬০০০১</td>
                      <td>০১৭১৬১১৬০৬৬</td>
                    </tr>
                    <tr>
                      <th scope="row">৪১</th>
                      <td>নড়াইল</td>
                      <td>০১৭৩০১৯২৭৪২</td>
                      <td>০১৭২৪৪৩২১৪৬</td>
                    </tr>
                    <tr>
                      <th scope="row">৪২</th>
                      <td>নারায়ণগঞ্জ</td>
                      <td>০১৬৭৮৭১৩৮০৮</td>
                      <td>০১৭২৫৮৩৬৪৯৫</td>
                    </tr>
                    <tr>
                      <th scope="row">৪৩</th>
                      <td>নরসিংদী</td>
                      <td>০১৭১০২৫৬১৮৪</td>
                      <td>০১৭১০৮৩৭১১৭</td>
                    </tr>
                    <tr>
                      <th scope="row">৪৪</th>
                      <td>নাটোর</td>
                      <td>০১৭৮৩০৭০৩০৮</td>
                      <td>০১৮৫৩৫৭৫৭৩৫</td>
                    </tr>
                    <tr>
                      <th scope="row">৪৫</th>
                      <td>চাঁপাই নবাবগঞ্জ</td>
                      <td>০১৭৩৭২৭২৩০৮</td>
                      <td>০১৭১৫৮৪৪৩৮৪</td>
                    </tr>
                    <tr>
                      <th scope="row">৪৬</th>
                      <td>নেত্রকোনা</td>
                      <td>০১৭১১১২৯৭০৯</td>
                      <td>০১৭১৯৫২৩২৭৭</td>
                    </tr>
                    <tr>
                      <th scope="row">৪৭</th>
                      <td>নীলফামারী</td>
                      <td>০১৭২২৬৭৮৫৫৩</td>
                      <td>০১৭১৯৫৪৫৩২২</td>
                    </tr>
                    <tr>
                      <th scope="row">৪৮</th>
                      <td>নোয়াখালী</td>
                      <td>০১৮১৫৩২৫৩২৩</td>
                      <td>০১৮৩৭৫২৭৯৯</td>
                    </tr>
                    <tr>
                      <th scope="row">৪৯</th>
                      <td>পাবনা</td>
                      <td>০১৭১০৭৯৭৮৬৮</td>
                      <td>০১৭১৭২৮৯৫৫০</td>
                    </tr>
                    <tr>
                      <th scope="row">৫০</th>
                      <td>পঞ্চগড়</td>
                      <td>০১৭২৩২০৯৭২১</td>
                      <td>০১৭১৯৩৪৭৩৯৪</td>
                    </tr>
                    <tr>
                      <th scope="row">৫১</th>
                      <td>পটুয়াখালী</td>
                      <td>০১৭১২৪১৪০৭৯</td>
                      <td>০১৭৫৪৭৫৫১৬৯</td>
                    </tr>
                    <tr>
                      <th scope="row">৫২</th>
                      <td>পিরোজপুর</td>
                      <td>০১৭৪০৫৮৩২৯২</td>
                      <td>০১৭৩০৯১৮১০৮</td>
                    </tr>
                    <tr>
                      <th scope="row">৫৩</th>
                      <td>রাজবাড়ী</td>
                      <td>০১৭১১২৮৯৯০৮</td>
                      <td>০১৭১৬৪২৬৮৫৩</td>
                    </tr>
                    <tr>
                      <th scope="row">৫৪</th>
                      <td>রাজশাহী</td>
                      <td>০১৭১৮০৬২০২০</td>
                      <td>০১৯১১৮৯৩৪৪৪</td>
                    </tr>
                    <tr>
                      <th scope="row">৫৫</th>
                      <td>রাঙ্গামাটি</td>
                      <td>০১৮২৭১৮৫৩৯৫</td>
                      <td>০১৭৩৪৩৪৬৫০৩</td>
                    </tr>
                    <tr>
                      <th scope="row">৫৬</th>
                      <td>রংপুর</td>
                      <td>০১৭১৭৫৯০৯৬৭</td>
                      <td>০১৭১৯২৪৫৮১৪</td>
                    </tr>
                    <tr>
                      <th scope="row">৫৭</th>
                      <td>সাতক্ষীরা</td>
                      <td>০১৭৩৩১৬৩৮৯৫</td>
                      <td>০১৭১৬৮২১৪৬৩</td>
                    </tr>
                    <tr>
                      <th scope="row">৫৮</th>
                      <td>শরীয়তপুর</td>
                      <td>০১৯৮৯৯৫৭৩৬৪</td>
                      <td>০১৭৫১৬২৬৬৭৯</td>
                    </tr>
                    <tr>
                      <th scope="row">৫৯</th>
                      <td>শেরপুর</td>
                      <td>০১৭১২৮৯৬৯০৫</td>
                      <td>০১৭৪০৫৭০৬৬০</td>
                    </tr>
                    <tr>
                      <th scope="row">৬০</th>
                      <td>সিরাজগঞ্জ</td>
                      <td>০১৭৩৭২৩০৯০৪</td>
                      <td>০১৭৩৭২৩০৯০৪</td>
                    </tr>
                    <tr>
                      <th scope="row">৬১</th>
                      <td>সুনামগঞ্জ</td>
                      <td>০১৭৪০৯১৯২০২</td>
                      <td>০১৭১৮৩৪৯০০৮</td>
                    </tr>
                    <tr>
                      <th scope="row">৬২</th>
                      <td>সিলেট</td>
                      <td>০১৭১২৯৬১৮৯২</td>
                      <td>০১৭১১৩০০৪৫৮</td>
                    </tr>
                    <tr>
                      <th scope="row">৬৩</th>
                      <td>টাঙ্গাইল</td>
                      <td>০১৭৪৬২৩৯২৩৭</td>
                      <td>০১৬৮৮৩১৪৭১২</td>
                    </tr>
                    <tr>
                      <th scope="row">৬৪</th>
                      <td>ঠাকুরগাঁও</td>
                      <td>০১৭১৪৫৬৯৬৫০</td>
                      <td>০১৭১৪৫৬৯৬০০</td>
                    </tr>
                  </tbody>
                </table>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success" data-bs-dismiss="modal">বন্ধ করুন</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModal2" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content bn" style={{ border: 'none' }}>
              <div className="modal-header bg-success text-light">
                <h1 className="modal-title fs-5" id="exampleModalLabel">ব্যবহার সহায়িকা</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  {/*
                <div className="col-sm-3">
                  <div className="card custom-card-frontend shadow">
                    <img src="https://www.w3schools.com/css/img_lights.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title text-center">ব্যবহার সহায়িকা (এডমিন)</h5>
                      <div className="btn-center">
                        <a href="https://training.report.gov.bd/User%20manual/RMS%20User%20Manual(Admin).pdf" target="_blank"><button type="button" className="btn btn-outline-success media-btn-custom"><img src={pdfIcon} alt="" style={{ height: '22px', width: '15px' }} /> ডাউনলোড </button></a>
                      </div>
                    </div>
                  </div>
                </div> */}

                  <h6>ব্যবহার সহায়িকা খুব শীঘ্রই আসিতেছে......</h6>

                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success" data-bs-dismiss="modal">বন্ধ করুন</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModal3" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content bn" style={{ border: 'none' }}>
              <div className="modal-header bg-success text-light">
                <h1 className="modal-title fs-5" id="exampleModalLabel">আপনার জিজ্ঞাসা</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="accordion accordion-flush d-grid gap-2 py-3" id="accordionFlushExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button className="accordion-button according-custom" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                        ১। কিভাবে শিক্ষকের একাউন্ট আপডেট করবো ?
                      </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">সফলভাবে লগ ইন করে 'প্রথম পাতা'য় যেতে হবে। তারপর 'আমার প্রোফাইল'-এ ক্লিক করে বর্তমান তথ্যগুলো দেখে নিতে হবে। তারপর 'প্রোফাইল হাল-নাগাদ' বাটনে ক্লিক করে প্রোফাইল হাল-নাগাদ পেজে যেতে হবে। প্রোফাইল হাল-নাগাদ পেজে গেলে আপনি আপনার যাবতীয় তথ্যদি দিয়ে আপনার আপনার প্রোফাইল সহজেই আপডেট করে নিতে পারবেন। বাংলায় নাম আপডেটের ক্ষেত্রে অবশ্যই বাংলা অক্ষরে আপনার পুর্ণ নাম লিখতে হবে। একইভাবে ইংরেজিতে নাম আপডেটের ক্ষেত্রে অবশ্যই ইংরেজি অক্ষরে আপনার পুর্ণ নাম লিখতে হবে।</div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button className="accordion-button collapsed according-custom" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        ২। পারদর্শিতার নির্দেশক (PI) কি ?
                      </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">প্রতিটি শ্রেণির প্রতিটি বিষয়ের জন্য যে কয়টি একক যোগ্যতা আছে, সেগুলোকে প্রত্যেকটি আলাদা আলাদাভাবে বিশ্লেষণ করে এক বা একাধিক স্পষ্ট পর্যবেক্ষনযোগ্য যে নির্দেশক তৈরী করা হয়েছে সেগুলোই পারদর্শিতার নির্দেশক। কোন একটি পারদর্শিতার নির্দেশক এ শিক্ষার্থী বিভিন্ন মাত্রায় থাকতে পারে, তা পরিমাপের জন্য প্রতিটি পারদর্শিতার নির্দেশক এ শিক্ষার্থীর অবস্থানের তিনটি মাত্রা নির্ধারণ করা হয়েছে।<br />সমগ্র প্রক্রিয়াতে নিচের তিনটি ধাপ রয়েছেঃ<br />ধাপ ১ঃ মূল্যযাচাই পর্ব (শিখনকালীন ও সামষ্টিক) পরিচালনা ও উপাত্ত সংরক্ষণ,<br />ধাপ ২ঃ উপাত্ত বিশ্লেষণ ও ফলাফল গঠন,<br />ধাপ ৩ঃ ফলাফল প্রকাশ বা প্রেরণ। <br />শিক্ষকের কাজ হলো কোন একটি বিষয়ের শ্রেণিভিত্তিক যোগ্যতা অর্জনে শিক্ষার্থী কোন পর্যায়ে আছে তা নির্ধারণ করতে শিখনকালীন মূল্যায়ন এবং সামষ্টিক মূল্যায়ন থেকে তথ্য উপাত্ত নিয়ে পারদর্শিতার নির্দেশকসমূহে তার ইনপুট দেয়া।</div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button className="accordion-button collapsed according-custom" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        ৩। আচরণিক নির্দেশক (BI) কি ?
                      </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">আচরণিক নির্দেশক মূল্যায়নে আচরণ থেকে প্রত্যেক শিক্ষার্থীকে ০৯ টি বিষয়ের উপরে মূল্যায়ন করা হবে। এক্ষেত্রেও শিক্ষার্থীর অবস্থানের তিনটি মাত্রা নির্ধারণ করা হয়েছে। সমগ্র প্রক্রিয়াতে নিচের তিনটি ধাপ রয়েছেঃ<br />ধাপ ১ঃ মূল্যযাচাই পর্ব (শিখনকালীন ও সামষ্টিক) পরিচালনা ও উপাত্ত সংরক্ষণ;<br />  ধাপ ২ঃ উপাত্ত বিশ্লেষণ ও ফলাফল গঠন;<br />ধাপ ৩ঃ ফলাফল প্রকাশ বা প্রেরণ।<br />শিক্ষকের কাজ হলো কোন একটি বিষয়ের শ্রেণিভিত্তিক যোগ্যতা অর্জনে শিক্ষার্থী কোন পর্যায়ে আছে তা নির্ধারণ করতে শিখনকালীন মূল্যায়ন এবং সামষ্টিক মূল্যায়ন থেকে তথ্য উপাত্ত নিয়ে পারদর্শিতার নির্দেশকসমূহে তার ইনপুট দেয়া।</div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button className="accordion-button collapsed according-custom" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapseThree">
                        ৪। কিভাবে মূল্যায়ন করবো ?
                      </button>
                    </h2>
                    <div id="flush-collapse4" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        সফলভাবে লগ-ইন করে 'প্রথম পাতা'য় যেতে হবে। তারপর বিষয় ভিত্তিক তথ্য ও মূল্যায়ন থেকে আপনার পছন্দকৃত বিষয় ক্লিক করুন এরপর পারদর্শিতা মূল্যায়ন অথবা আচরণগত মূল্যায়ন থেকে আপনার প্রয়োজনীয় যে কোনো একটি  নির্বাচন করুন। তারপর শিখনকালীন মূল্যায়ন নির্বাচন করে যে কোনো একটি অধ্যায় থেকে একটি এট্রিবিউট নির্বাচন করুন। এরপর আপনার ইচ্ছাকৃত যে কোনো একটি শিক্ষার্থীর ওয়েট নির্বাচন করে মূল্যায়ন সংরক্ষণ বাটন এ চেপে মূল্যায়ন সম্পূর্ণ করুন।
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button className="accordion-button collapsed according-custom" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapseThree">
                        ৫। কিভাবে খসড়া করবো ?
                      </button>
                    </h2>
                    <div id="flush-collapse5" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        সফলভাবে লগ-ইন করে 'প্রথম পাতা'য় যেতে হবে। তারপর বিষয় ভিত্তিক তথ্য ও মূল্যায়ন থেকে আপনার পছন্দকৃত  বিষয় ক্লিক করুন এরপর পারদর্শিতা মূল্যায়ন অথবা আচরণগত মূল্যায়ন থেকে আপনার প্রয়োজনীয় যে কোনো একটি  নির্বাচন করুন। তারপর শিখনকালীন মূল্যায়ন নির্বাচন করে যে কোনো একটি অধ্যায় থেকে একটি এট্রিবিউট নির্বাচন করুন। এরপর আপনার ইচ্ছাকৃত যে কোনো একটি শিক্ষার্থীর মূল্যায়ন করুন এবং নিম্নে খসড়া বাটন চাপুন।
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button className="accordion-button collapsed according-custom" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapseThree">
                        ৬। কিভাবে PI মুল্যায়ন সংরক্ষণ করবো ?
                      </button>
                    </h2>
                    <div id="flush-collapse6" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        সফলভাবে লগ-ইন করে 'প্রথম পাতা'য় যেতে হবে। তারপর বিষয় ভিত্তিক তথ্য ও মূল্যায়ন থেকে আপনার পছন্দকৃত  বিষয় ক্লিক করুন,এরপর পারদর্শিতা মূল্যায়ন  নির্বাচন করুন। তারপর শিখনকালীন মূল্যায়ন নির্বাচন করে যে কোনো একটি অধ্যায় থেকে একটি এট্রিবিউট নির্বাচন করুন। এরপর আপনার ইচ্ছাকৃত যে কোনো একটি শিক্ষার্থীর ওয়েট নির্বাচন করে মূল্যায়ন সংরক্ষণ বাটন এ চেপে মূল্যায়ন সম্পূর্ণ করুন।
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success" data-bs-dismiss="modal">বন্ধ করুন</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModal4" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content bn" style={{ border: 'none' }}>
              <div className="modal-header bg-success text-light">
                <h1 className="modal-title fs-5" id="exampleModalLabel">আমাদের সম্পর্কে</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="row">
               

                  <h6>আমাদের সম্পর্কে খুব শীঘ্রই আসিতেছে......</h6>

                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success" data-bs-dismiss="modal">বন্ধ করুন</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
