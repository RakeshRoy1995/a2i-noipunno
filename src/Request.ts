import axios from "axios";
import { formate_own_subject_data } from "./utils/Utils";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
const EVULATION_API = import.meta.env.VITE_REACT_APP_PI_EVULATION_API_URL;

const authToken = localStorage.getItem("customer_login_auth") || "";

const token: any = authToken ? JSON.parse(authToken) : "";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${token?.access_token}`;

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

export function otpComfirm(data: any) {
  const page_list = `${API_URL}/v2/account-otp-verify`;

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
  const page_list = `${EVULATION_API}/pi-evaluation`;

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
  const page_list = `${EVULATION_API}/bi-evaluation`;

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

export async function teacher_own_subject() {
  const page_list = `${API_URL}/v2/own-subjects`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  const cls_room = await class_room_info();
  const common_info = await get_common_info();
  const bi = await bi_info();

  const own_sub = await axios(options);

  let data = formate_own_subject_data(own_sub, cls_room);
  data.data.data.assessments = common_info.data.data.assessments;
  data.data.data.pi_attribute_weight =
    common_info.data.data.pi_attribute_weight;
  data.data.data.bis = bi.data.data.bis;

  return data;
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
  const page_list = `${API_URL}/v2/class-room-info`;

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

export function teacher_dashboard() {
  const page_list = `${API_URL}/v2/teacher-dashboard`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
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
  const page_list = `${API_URL}/v2/account-update/${caid}`;

  const options = {
    method: "PUT",
    headers: { "content-type": "application/json" },
    data,
    url: page_list,
  };

  return axios(options);
}

export function get_pi_evaluation_by_pi(
  class_room_uid: any,
  pi_uid: any,
  evaluate_type: any
) {
  const page_list = `${EVULATION_API}/get-pi-evaluation-by-pi?class_room_uid=${class_room_uid}&pi_uid=${pi_uid}&evaluate_type=${evaluate_type}`;

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
  const page_list = `${EVULATION_API}/get-bi-evaluation-by-bi?class_room_uid=${class_room_uid}&evaluate_type=${evaluate_type}&student_uid=${student_uid}&subject_uid=${subject_uid}`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
  };

  return axios(options);
}

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

export function get_pi_bi(subject_uid , branch_uid , version_uid , shift_uid , class_uid , section_uid , student_uid="") {
  const page_list = `${EVULATION_API}/transcript`;
  // const page_list = `/assets/transcript_response.json`;

  const options = {
    method: "get",
    headers: { "content-type": "application/json" },
    url: page_list,
    params : {
      subject_uid,
      branch_uid,
      version_uid,
      shift_uid,
      class_uid,
      section_uid,
      student_uid
    }
  };

  return axios(options);
}