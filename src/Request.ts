import axios from "axios";
import {
  formate_own_subject_data,
  formate_own_subject_data_new,
  formate_own_subject_from_json,
} from "./utils/Utils";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
const EVULATION_API = import.meta.env.VITE_REACT_APP_PI_EVULATION_API_URL;

const authToken = localStorage.getItem("customer_login_auth") || "";

const token: any = authToken ? JSON.parse(authToken) : "";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${token?.access_token}`;
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export function loginPassword(data: any) {
  const page_list = `${API_URL}/v2/login`;

  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    data,
    url: page_list,
  };

  return axios(options);
}

export function resetPassword(data: any) {
  const page_list = `${API_URL}/v2/account-otp`;

  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    data,
    url: page_list,
  };

  return axios(options);
}

export function userInfo(data: any) {
  const page_list = `${API_URL}/v2/auth/account-info?caid=${data}`;
  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };
  return axios(options);
}

export function otpComfirm(data: any) {
  const page_list = `${API_URL}/v2/account-otp-verify-change-pin`;
  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    data,
    url: page_list,
  };
  return axios(options);
}

export function changePin(data: any) {
  const page_list = `${API_URL}/v2/account-change-pin`;
  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    data,
    url: page_list,
  };
  return axios(options);
}

export function all_teachers(data: any = "") {
  const page_list = `${API_URL}/v2/teacher-dashboard`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    data,
    url: page_list,
  };

  return axios(options);
}

export function assessments() {
  const page_list = `${API_URL}/v2/assessments`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}

export function all_class(data: any = "") {
  const page_list = `${API_URL}/v2/classes`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    data,
    url: page_list,
  };

  return axios(options);
}

export function Pi_save(data: any) {
  const page_list = `${EVULATION_API}/v2/pi-evaluation`;

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    data,
    url: page_list,
  };

  return axios(options);
}

export function Bi_save(data: any) {
  const page_list = `${EVULATION_API}/v2/bi-evaluation`;

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    data,
    url: page_list,
  };

  return axios(options);
}

export function pi_review(data: any) {
  const page_list = `${EVULATION_API}/v2/pi-review`;

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    data,
    url: page_list,
  };

  return axios(options);
}

export function bi_review(data: any) {
  const page_list = `${EVULATION_API}/v2/bi-review`;

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    data,
    url: page_list,
  };

  return axios(options);
}

export function clssWiseSubject(data: any) {
  const page_list = `${API_URL}/v2/class-wise-subjects?class_id=${data}`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    data,
    url: page_list,
  };

  return axios(options);
}

export async function teacher_own_subject_redesign() {
  const object: any = {};
  const cls_room = await class_room_info();
  localStorage.setItem("cls_room", JSON.stringify(cls_room));

  if (cls_room?.data?.data?.subjects?.length == 0) {
    object.success = false;
    object.msg = "আপনি কোনও বিষয় পাননি";
    return object;
  }

  if (cls_room.data.status) {
    const data = formate_own_subject_data_new(cls_room);
    data.success = true;
    return data;
  }
}

export async function teacher_own_subject() {


  // const page_list = `${API_URL}/v2/own-subjects`;

  // const options = {
  //   method: "get",
  //   headers: { "content-type": "application/json" },
  //   url: page_list,
  // };

  // const own_sub_2 = await axios(options);


  const page_list_2 = `own-subjects.json`;

  const options_2 = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list_2,
  };

  const own_sub = await axios(options_2);

  const object: any = {};
  if (own_sub.data.data.subjects.length == 0) {
    object.success = false;
    object.msg = "আপনি কোনও বিষয় পাননি";
    return object;
  }

  let common_info: any = localStorage.getItem("common_room")
    ? JSON.parse(localStorage.getItem("common_room"))
    : "";
  if (common_info == "") {
    common_info = await get_common_info();
    localStorage.setItem("common_room", JSON.stringify(common_info));
  }

  let bi: any = localStorage.getItem("bi")
    ? JSON.parse(localStorage.getItem("bi"))
    : "";

  if (bi == "") {
    bi = await bi_info();
    localStorage.setItem("bi", JSON.stringify(bi));
  }

  let cls_room: any = localStorage.getItem("cls_room")
    ? JSON.parse(localStorage.getItem("cls_room"))
    : "";

  if (cls_room == "") {
    cls_room = await class_room_info();
    localStorage.setItem("cls_room", JSON.stringify(cls_room));
  }

  if (cls_room.data.data.subjects.length == 0) {
    object.success = false;
    object.msg = "আপনি কোনও বিষয় পাননি";
    return object;
  }

  if (bi !== "" && common_info !== "" && cls_room !== "") {
    const newOwnSub = formate_own_subject_from_json(own_sub , cls_room)
    const data = formate_own_subject_data(newOwnSub, cls_room);
    data.assessments = common_info.data.data.assessments;
    data.pi_attribute_weight =
      common_info.data.data.pi_attribute_weight;
    data.bis = bi.data.data.bis;
    data.success = true;

    const res = {
      data : {
        data
      },
      status :  200,
      statusText : "", 
      success :  true
    }

    // localStorage.removeItem("common_room");
    // localStorage.removeItem("cls_room");

    localStorage.setItem("own_subjet", JSON.stringify(res));
    localStorage.setItem("assessments", JSON.stringify(common_info.data.data.assessments));
    localStorage.setItem("pi_attribute_weight", JSON.stringify(common_info.data.data.pi_attribute_weight));

    return res;
  }
}

export async function teacher_own_subject_new() {
  const page_list = `${API_URL}/v2/own-subjects`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  const own_sub = await axios(options);

  const object: any = {};
  if (own_sub.data.data.subjects.length == 0) {
    object.success = false;
    object.msg = "আপনি কোনও বিষয় পাননি";
    return object;
  }

  let common_info: any = localStorage.getItem("common_room")
    ? JSON.parse(localStorage.getItem("common_room"))
    : "";
  if (common_info == "") {
    common_info = await get_common_info();
    localStorage.setItem("common_room", JSON.stringify(common_info));
  }

  let bi: any = localStorage.getItem("bi")
    ? JSON.parse(localStorage.getItem("bi"))
    : "";

  if (bi == "") {
    bi = await bi_info();
    localStorage.setItem("bi", JSON.stringify(bi));
  }

  let cls_room: any = localStorage.getItem("cls_room")
    ? JSON.parse(localStorage.getItem("cls_room"))
    : "";

  if (cls_room == "") {
    cls_room = await class_room_info();
    localStorage.setItem("cls_room", JSON.stringify(cls_room));
  }

  if (cls_room.data.data.subjects.length == 0) {
    object.success = false;
    object.msg = "আপনি কোনও বিষয় পাননি";
    return object;
  }

  if (bi !== "" && common_info !== "" && cls_room !== "") {
    const data = formate_own_subject_data(own_sub, cls_room);
    data.data.data.assessments = common_info.data.data.assessments;
    data.data.data.pi_attribute_weight =
      common_info.data.data.pi_attribute_weight;
    data.data.data.bis = bi.data.data.bis;
    data.success = true;
    localStorage.removeItem("common_room");
    localStorage.removeItem("cls_room");
    return data;
  }
}

export async function reloadteacher_own_subject() {
  const page_list = `${API_URL}/v2/own-subjects`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  const own_sub = await axios(options);
  const bi: any = await bi_info();
  const common_info: any = await get_common_info();
  const cls_room: any = await class_room_info();
  const app_PI: any = [];
  const student: any = [];

  if (bi !== "" && common_info !== "" && cls_room !== "") {
    const data_dash: any = await class_teacher_all_student_data();
    localStorage.setItem("class_teacher_student", JSON.stringify(data_dash));

    own_sub.data.data.subjects.map((std_data: any) => {
      std_data.competence.map((conpitance_data: any) => {
        conpitance_data.pis.map((data: any) => {
          app_PI.push(data);
        });
      });
    });

    cls_room.data.data.subjects.map((stu_data: any) => {
      stu_data.class_room.students.map((stdnt): any => {
        student.push(stdnt);
      });
    });

    const data = formate_own_subject_data(own_sub, cls_room);
    data.data.data.assessments = common_info.data.data.assessments;
    data.data.data.pi_attribute_weight =
      common_info.data.data.pi_attribute_weight;
    data.data.data.bis = bi.data.data.bis;
    localStorage.removeItem("common_room");
    localStorage.removeItem("cls_room");
    localStorage.setItem("all_students", student);
    localStorage.setItem("our_all_pi", app_PI);
    return data;
  }
}

export function bi_info() {
  const page_list = `${API_URL}/v2/get-bi`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}

export function class_room_info() {
  const page_list = `${API_URL}/v2/class-room-information`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}

export function get_common_info() {
  const page_list = `${API_URL}/v2/get-common-info`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}

export async function teacher_dashboard() {
  // const page_list = `${API_URL}/v2/teacher-dashboard`;

  // const options = {
  //   method: "get",
  //   headers: { "content-type": "application/json" },
  //   url: page_list,
  // };

  // return axios(options);

  const { user }: any = JSON.parse(localStorage.getItem("customer_login_auth"));
  const caid = user?.caid;

  const page_list_teacher = `${EVULATION_API}/v3/teacher-get-by-caid`;
  const options_teacher = {
    method: "POST",
    headers: { "content-type": "application/json" },
    url: page_list_teacher,
    data: {
      caid,
    },
  };

  const teachers = await axios(options_teacher);



  const page_list_cls_teacher = `${EVULATION_API}/v3/class-teacher-check`;
  const options_cls_teacher = {
    method: "POST",
    headers: { "content-type": "application/json" },
    url: page_list_cls_teacher,
    data : {
      uid : teachers?.data?.data?.uid
    }

  };

  const cls_teacher = await axios(options_cls_teacher);
  const newUser = {
    ...user , 
    district_id : teachers?.data?.data?.district_id,
    division_id : teachers?.data?.data?.division_id,
    upazilla_id : teachers?.data?.data?.upazilla_id,
  }

  const newTeacher = {
    ...teachers?.data?.data , 
    is_class_teacher : cls_teacher?.data?.data,
  }



  const tempnewObj = {
    data : {
      teachers : [newTeacher] || [],
      user : newUser
    },
    status : true
  }

  localStorage.setItem(
    "teacher_dashboard",
    JSON.stringify(tempnewObj)
  );


  const page_list_institute = `${EVULATION_API}/v3/institute-by-eiin/${user?.eiin}`;
  const options_institute = {
    method: "GET",
    headers: { "content-type": "application/json" },
    url: page_list_institute,
  };

  const institute = await axios(options_institute);

  const page_list_shift = `${EVULATION_API}/v3/shift-list`;
  const options_shift = {
    method: "GET",
    headers: { "content-type": "application/json" },
    url: page_list_shift,
  };

  const shift = await axios(options_shift);



  const page_list_version = `${EVULATION_API}/v3/version-list`;
  const options_version = {
    method: "GET",
    headers: { "content-type": "application/json" },
    url: page_list_version,
  };

  const version = await axios(options_version);


  const page_list_section = `${EVULATION_API}/v3/section-list`;
  const options_section = {
    method: "GET",
    headers: { "content-type": "application/json" },
    url: page_list_section,
  };

  const section = await axios(options_section);


  const page_list_subject = `${EVULATION_API}/v3/teacher-subject-list`;
  const options_subject = {
    method: "POST",
    headers: { "content-type": "application/json" },
    url: page_list_subject,
    data : {
      uid : teachers?.data?.data?.uid
    }

  };

  const subject = await axios(options_subject);

  

  const newObj = {
    data : {
      institute : [institute?.data?.data] || [],
      sections : section?.data?.data || [],
      shifts : shift?.data?.data || [],
      subjects : subject?.data?.data || [],
      teachers : [newTeacher] || [],
      versions : version?.data?.data || [],
      user : newUser
    },
    status : true
  }

  return newObj;
}

export async function teacher_dashboardForRestData() {

  const { data }: any = JSON.parse(localStorage.getItem("teacher_dashboard"));

  const page_list_branch = `${EVULATION_API}/v3/branch-list`;
  const options_branch = {
    method: "GET",
    headers: { "content-type": "application/json" },
    url: page_list_branch,
  };

  const branch = await axios(options_branch);



  const page_list_class = `${EVULATION_API}/v3/class-list`;
  const options_class = {
    method: "GET",
    headers: { "content-type": "application/json" },
    url: page_list_class,
  };

  const classes = await axios(options_class);




  const newObj = {
    data : {
      ...data, 
      branches : branch?.data?.data,
      classes : classes?.data?.data,
    },
    status : true
  }

  return newObj;
}

export function all_student() {
  const page_list = `${API_URL}/v2/students`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}

export function update_teacher_profile(caid: any, data: any) {
  const page_list = `${EVULATION_API}/v2/teachers/${caid}`;

  let obj = {};
  for (const [name, value] of data) {
    if (name !== "image" && name !== "signature") {
      obj = { ...obj, [name]: value };
    }
  }

  let img = {};
  for (const [name, value] of data) {
    if (name === "image" || name == "signature") {
      img = { ...img, [name]: value };
    }
  }

  const options = {
    method: "POST",
    headers: { "content-type": "multipart/form-data" },
    url: page_list,
    params: { ...obj },
    data: { ...img },
  };

  return axios(options);
}

export function get_pi_evaluation_by_pi(
  class_room_uid: any,
  pi_uid: any,
  evaluate_type: any,
  oviggota_uid: any
) {
  const page_list = `${EVULATION_API}/v2/get-pi-evaluation-by-pi?oviggota_uid=${oviggota_uid}&class_room_uid=${class_room_uid}&pi_uid=${pi_uid}&evaluate_type=${evaluate_type}`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}

export function get_bi_evaluation_by_bi(
  class_room_uid: any,
  evaluate_type: any,
  student_uid: any,
  subject_uid: any
) {
  const page_list = `${EVULATION_API}/v2/get-bi-evaluation-by-bi?class_room_uid=${class_room_uid}&evaluate_type=${evaluate_type}&student_uid=${student_uid}&subject_uid=${subject_uid}`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}

export function bi_report_card_details() {
  const page_list = `${API_URL}/v2/bi-dimension`;
  // https://api.noipunno.gov.bd/api/v2/bi-dimension

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}

export function bi_report_card_by_student(
  subject_uid,
  branch_uid,
  version_uid,
  shift_uid,
  class_uid,
  section_uid,
  student_uid = ""
) {
  // const page_list = `/assets/yousuf_bi_response.json`;
  const page_list = `${EVULATION_API}/v2/bi-report-card-by-student?branch_uid=${branch_uid}&version_uid=${version_uid}&shift_uid=${shift_uid}&class_uid=${class_uid}&section_uid=${section_uid}&student_uid=${student_uid}`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
    params: {
      branch_uid,
      version_uid,
      shift_uid,
      class_uid,
      section_uid,
      student_uid,
    },
  };

  return axios(options);
}
//teacher.project-ca.com/api/v2/bi-report-card-by-student?branch_uid=1782345351002697&version_uid=1782343521342761&shift_uid=1782343482748247&class_uid=6&section_uid=1782343690355322&student_uid=1784586541382652

export function get_pi_bi_evaluation_list(submit_status: any = "") {
  const page_list =
    `${API_URL}/v2/pi-bi-evaluation-list?submit_status=` + submit_status;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}

export function get_pi_bi(
  subject_uid,
  branch_uid,
  version_uid,
  shift_uid,
  class_uid,
  section_uid,
  student_uid = ""
) {
  const page_list = `${EVULATION_API}/v2/transcript`;
  // const page_list = `/assets/transcript_response.json`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
    params: {
      subject_uid,
      branch_uid,
      version_uid,
      shift_uid,
      class_uid,
      section_uid,
      student_uid,
    },
  };

  return axios(options);
}

export function get_bi_report(
  subject_uid,
  branch_uid,
  version_uid,
  shift_uid,
  class_uid,
  section_uid,
  student_uid = ""
) {
  const page_list = `${EVULATION_API}/v2/bi-transcript-by-student`;
  // const page_list = `/assets/transcript_response.json`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
    params: {
      subject_uid,
      branch_uid,
      version_uid,
      shift_uid,
      class_uid,
      section_uid,
      student_uid,
    },
  };

  return axios(options);
}

export function get_pi_bi_by_student_student(
  subject_uid,
  branch_uid,
  version_uid,
  shift_uid,
  class_uid,
  section_uid,
  student_uid = ""
) {
  const page_list = `${EVULATION_API}/v2/transcript-by-student`;
  // const page_list = `/assets/transcript_response.json`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
    params: {
      subject_uid,
      branch_uid,
      version_uid,
      shift_uid,
      class_uid,
      section_uid,
      student_uid,
    },
  };

  return axios(options);
}

export function get_report_card(
  subject_uid,
  branch_uid,
  version_uid,
  shift_uid,
  class_uid,
  section_uid,
  student_uid = ""
) {
  const page_list = `${EVULATION_API}/v2/report-card-by-student`;
  // const page_list = `/assets/report_card.json`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
    params: {
      subject_uid,
      branch_uid,
      version_uid,
      shift_uid,
      class_uid,
      section_uid,
      student_uid,
    },
  };

  return axios(options);
}

export function dimension_by_subject(subject_uid) {
  const page_list = `${API_URL}/v2/dimension-by-subject`;
  // const page_list = `https://competence.noipunno.gov.bd/api/dimension-by-subject`;
  // const page_list = `/assets/dimension.json`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
    params: {
      subject_uid,
    },
  };

  return axios(options);
}

export function all_upozila() {
  const page_list = `${EVULATION_API}/v2/upazilla`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}

export function all_district() {
  const page_list = `${EVULATION_API}/v2/district`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}

export function all_division() {
  const page_list = `${EVULATION_API}/v2/division`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}

export function teacher_designation() {
  // const page_list = `${EVULATION_API}/v2/designation`;
  const page_list = `https://api.project-ca.com/api/v2/designation`;
  // const page_list = `https://api.noipunno.gov.bd/api/v2/designation`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}

export function attendance_submit(data: any) {
  const page_list = `${EVULATION_API}/v2/store-attendance`;
  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    data,
    url: page_list,
  };
  return axios(options);
}

export function attendance_get(setDate) {
  const page_list = `${EVULATION_API}/v2/get-attendance`;
  const options = {
    method: "GET",
    headers: { "content-type": "application/json" },
    url: page_list,
    params: {
      class_room_uid: setDate.class_room_uid,
      date: setDate.date,
    },
  };
  return axios(options);
}

export function sent_otp(data: any) {
  const page_list = `${API_URL}/v2/account-otp`;

  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    data,
    url: page_list,
  };

  return axios(options);
}

export function confirm_otp(data: any) {
  const page_list = `${API_URL}/v2/account-otp-verify-change-pin`;

  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    data,
    url: page_list,
  };

  return axios(options);
}

export function confirm_pass(data: any) {
  const page_list = `${API_URL}/v2/account-change-pin`;

  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    data,
    url: page_list,
  };

  return axios(options);
}

export function class_teacher_all_student_data() {
  const page_list = `${API_URL}/v2/class-students`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}

export function landingPageSlider() {
  const page_list = `https://accounts.noipunno.gov.bd/api/landing-page-slider`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}

export function pi_selection_list(subject_uid:any) {
  const page_list = `${EVULATION_API}/v3/pi-selection-list`;

  const options = {
    method: "post",
    headers: { "content-type": "application/json" },
    url: page_list,
    data : {
      subject_uid
    }
  };

  return axios(options);
}
