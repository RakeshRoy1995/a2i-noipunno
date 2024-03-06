import React, { useState } from "react";
import styles from "./Home.style.module.css";
import { HiOutlineUsers } from "react-icons/hi2";

export default function ClassRoutine() {
  const [tab, settab] = useState<any>({ six: true });

  // console.log(`tab`, tab);

  const tabActive = (type: any) => {
    let obj = tab;

    for (let x in tab) {
      obj[x] = false;
    }
    settab({ ...obj, [type]: true });
  };

  return (
    <div>
      <div className="container pt-5">
        <div className="row">
          <div className="card shadow-sm border-0 p-3">
            <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
              <div className="">
                <h6 className={`p-0 m-0 ${styles.class_routine}`}>
                  ক্লাস রুটিন
                </h6>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <div className="d-flex gap-2 align-items-center">
                  <h6 className={`p-0 m-0 ${styles.time_line}`}>টাইমলাইন</h6>
                  <div className={`${styles.session_and_all_dropdown}`}>
                    <div className="dropdown">
                      <button
                        className={`dropdown-toggle border-0 bg-white ${styles.session_and_all_dropdown}`}
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        প্রভাতি সেশন
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <h6 className={`p-0 m-0 ${styles.time_line}`}>
                    ক্লাস অনুসারে ফিল্টার
                  </h6>
                  <div className={`${styles.session_and_all_dropdown}`}>
                    <div className="dropdown">
                      <button
                        className="dropdown-toggle border-0 bg-white"
                        type="button"
                        id="dropdownMenuButton2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ color: "#428F92" }}
                      >
                        সব
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-2">
              <ul className="nav d-flex justify-content-between align-items-center px-2">
                <li
                  className="nav-item d-flex align-items-center"
                  onClick={(e) => tabActive("six")}
                >
                  <h6 className="p-0 m-0">
                    <HiOutlineUsers className="fs-5 text-dark" />
                  </h6>
                  <a
                    className="nav-link tab_nav text-dark"
                    id="class_six-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#class_six"
                    href="#"
                  >
                    ষষ্ঠ শ্রেণী
                  </a>
                </li>
                <li
                  className="nav-item d-flex align-items-center"
                  onClick={(e) => tabActive("seven")}
                >
                  <h6 className="p-0 m-0">
                    <HiOutlineUsers className="fs-5 text-dark" />
                  </h6>
                  <a
                    className="nav-link tab_nav text-dark"
                    id="class_seven-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#class_seven"
                    href="#"
                  >
                    সপ্তম শ্রেণী
                  </a>
                </li>
                <li
                  className="nav-item d-flex align-items-center"
                  onClick={(e) => tabActive("eight")}
                >
                  <h6 className="p-0 m-0">
                    <HiOutlineUsers className="fs-5 text-dark" />
                  </h6>
                  <a
                    className="nav-link tab_nav text-dark"
                    id="class_eight-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#class_eight"
                    href="#"
                  >
                    অষ্টম শ্রেণী
                  </a>
                </li>
                <li
                  className="nav-item d-flex align-items-center"
                  onClick={(e) => tabActive("nine")}
                >
                  <h6 className="p-0 m-0">
                    <HiOutlineUsers className="fs-5 text-dark" />
                  </h6>
                  <a
                    className="nav-link tab_nav text-dark"
                    id="class_nine-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#class_nine"
                    href="#"
                  >
                    নবম শ্রেণী
                  </a>
                </li>
                <li
                  className="nav-item d-flex align-items-center"
                  onClick={(e) => tabActive("ten")}
                >
                  <h6 className="p-0 m-0">
                    <HiOutlineUsers className="fs-5 text-dark" />
                  </h6>
                  <a
                    className="nav-link tab_nav text-dark"
                    id="class_ten-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#class_ten"
                    href="#"
                  >
                    দশম শ্রেণী
                  </a>
                </li>
              </ul>
              <div className="d-flex gap-2">
                <h6 className={`my-2 py-1 px-3 p-0 m-0 ${styles.classes_name}`}>
                  পদ্মা
                </h6>
                <h6 className={`my-2 py-1 px-3 p-0 m-0 ${styles.classes_name}`}>
                  মেঘনা
                </h6>
                <h6 className={`my-2 py-1 px-3 p-0 m-0 ${styles.classes_name}`}>
                  যমুনা
                </h6>
              </div>
              <div className="tab-content" id="tabContent">
                <div
                  className={
                    tab?.six ? "tab-pane fade show active" : "tab-pane fade"
                  }
                  id="class_six"
                  role="tabpanel"
                  aria-labelledby="class_six-tab"
                >
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr className={`${styles.table_row_style}`}>
                          <th scope="col"></th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className={
                    tab?.seven ? "tab-pane fade show active" : "tab-pane fade"
                  }
                  id="class_seven"
                  role="tabpanel"
                  aria-labelledby="class_seven-tab"
                >
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr className={`${styles.table_row_style}`}>
                          <th scope="col"></th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className={
                    tab?.eight ? "tab-pane fade show active" : "tab-pane fade"
                  }
                  id="class_eight"
                  role="tabpanel"
                  aria-labelledby="class_eight-tab"
                >
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr className={`${styles.table_row_style}`}>
                          <th scope="col"></th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className={
                    tab?.nine ? "tab-pane fade show active" : "tab-pane fade"
                  }
                  id="class_nine"
                  role="tabpanel"
                  aria-labelledby="class_nine-tab"
                >
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr className={`${styles.table_row_style}`}>
                          <th scope="col"></th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className={
                    tab?.ten ? "tab-pane fade show active" : "tab-pane fade"
                  }
                  id="class_ten"
                  role="tabpanel"
                  aria-labelledby="class_ten-tab"
                >
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr className={`${styles.table_row_style}`}>
                          <th scope="col"></th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                          <th
                            scope="col"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            8:00AM - 9:00AM
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                        <tr className={`${styles.table_row_style}`}>
                          <th
                            scope="row"
                            style={{ backgroundColor: "#F0F9F9" }}
                          >
                            Cell label
                          </th>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                          <td>Cell label</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
