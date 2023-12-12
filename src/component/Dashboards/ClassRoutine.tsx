import '../../assets/dashboard_materials/css/dashboard.css';
import stdIcon from '../../assets/dashboard_materials/images/dashboard/profile-2user.png';


const ClassRoutine = () => {
  return (
    <section className="container">
      <div className="class-routine-container">
        <div className="class-routine-header">
          <h6 className="class_routine">ক্লাস রুটিন</h6>
          <div className="class-routine-selector">
            <div className="timeline">
              <h4>টাইমলাইন</h4>
              <select className="form-select" aria-label="Default select example">
                <option value={""}>প্রভাতি সেশন </option>
                <option value={0}>সাপ্তাহিক </option>
                <option value={1}>মাসিক</option>
                <option value={2}>বছর</option>
              </select>
            </div>
            <div className="all">
              <h4>ক্লাস অনুসারে ফিল্টার</h4>
              <select className="form-select" aria-label="Default select example">
                <option value={""}>সব</option>
                <option value={1}>সাপ্তাহিক</option>
                <option value={2}>দিন</option>
                <option value={3}>মাসিক</option>
              </select>
            </div>
          </div>
        </div>
        <div className="class-routine-table">
          <div className="row justify-content-center">
            <div>
              <ul className="nav text-white d-flex justify-content-around class-routine-table-tab-nav">
                <li className="nav-item d-flex align-items-center">
                  <a
                    className="nav-link link-secondary active"
                    id="class-six-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#class-six"
                    href="#"
                  >
                    <div className="d-flex gap-distance">
                      {" "}
                      <img src={stdIcon} alt="user-icon" />
                      {" "}
                      ষষ্ঠ শ্রেণী
                    </div>
                  </a>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <a
                    className="nav-link link-secondary"
                    id="class-seven-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#class-seven"
                    href="#"
                  >
                    <div className="d-flex gap-distance">
                      {" "}
                      <img src={stdIcon} alt="user-icon" />{" "}
                      সপ্তম শ্রেণী
                    </div>
                  </a>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <a
                    className="nav-link link-secondary"
                    id="class-eight-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#class-eight"
                    href="#"
                  >
                    <div className="d-flex gap-distance">
                      {" "}
                      <img src={stdIcon} alt="user-icon" />{" "}
                      অষ্টম শ্রেণী
                    </div>
                  </a>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <a
                    className="nav-link link-secondary"
                    id="class-nine-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#class-nine"
                    href="#"
                  >
                    <div className="d-flex gap-distance">
                      {" "}
                      <img src={stdIcon} alt="user-icon" />{" "}
                      নবম শ্রেণী
                    </div>
                  </a>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <a
                    className="nav-link link-secondary"
                    id="class-ten-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#class-ten"
                    href="#"
                  >
                    <div className="d-flex gap-distance">
                      {" "}
                      <img src={stdIcon} alt="user-icon" />{" "}
                      দশম শ্রেণী
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="routine-section">
              <ul className="d-flex align-items-center justify-content-center nav pt-1">
                <li className="class-section nav-item active">
                  <a className="p-0 m-0 nav-link">পদ্মা</a>
                </li>
                <li className="class-section nav-item">
                  <p className="p-0 m-0 nav-link">মেঘনা</p>
                </li>
                <li className="class-section nav-item">
                  <p className="p-0 m-0 nav-link">যমুনা</p>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="tabContent">
              <div
                className="tab-pane fade show active"
                id="class-six"
                role="tabpanel"
                aria-labelledby="class-six-tab"
              >
                <table id="classSix" className="table border table-hover">
                  <thead>
                    <tr>
                      <th
                        className="sorting_asc"
                        style={{ visibility: "hidden" }}
                      />
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="tab-pane fade"
                id="class-seven"
                role="tabpanel"
                aria-labelledby="class-seven-tab"
              >
                <table id="classSeven" className="table border table-hover">
                  <thead>
                    <tr>
                      <th className="" />
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="tab-pane fade"
                id="class-eight"
                role="tabpanel"
                aria-labelledby="class-eight-tab"
              >
                <table id="classEight" className="table border table-hover">
                  <thead>
                    <tr>
                      <th className="" />
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="tab-pane fade"
                id="class-nine"
                role="tabpanel"
                aria-labelledby="class-nine-tab"
              >
                <table id="classNine" className="table border table-hover">
                  <thead>
                    <tr>
                      <th className="" />
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="tab-pane fade"
                id="class-ten"
                role="tabpanel"
                aria-labelledby="class-ten-tab"
              >
                <table id="classTen" className="table border table-hover">
                  <thead>
                    <tr>
                      <th className="" />
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                      <th className="tab-th-style">8:00AM - 9:00AM</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                    <tr>
                      <td className="tab-first-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                      <td className="tab-td-style">Cell label</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassRoutine;