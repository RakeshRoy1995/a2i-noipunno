export const weightId = (allWeight: any, id: any) => {
  let name;
  allWeight.map((al_d: any) => {
    if (al_d.uid == id) {
      name = al_d.name;
    }
  });
  return name;
};

export const shift_name = (shifts_id: any) => {
  const data = localStorage.getItem("teacher_dashboard");
  const storageData = JSON.parse(data);
  if (storageData) {
    const shift = storageData.data.shifts.find(
      (shifts) => shifts.uid == shifts_id
    );
    return shift?.shift_name;
  }
};

export const branch_name = (branch_id: any) => {
  const data = localStorage.getItem("teacher_dashboard");
  const storageData = JSON.parse(data);
  if (storageData) {
    const branch = storageData.data.branches.find(
      (branches) => branches.uid == branch_id
    );
    return branch?.branch_name;
  }
};

export const section_name = (id: any) => {
  const data = localStorage.getItem("teacher_dashboard");
  const storageData = JSON.parse(data);
  if (storageData) {
    const section = storageData.data.sections.find((data) => data.uid == id);
    return section?.section_name;
  }
};

export const teacher_name = (id: any) => {
  const data = localStorage.getItem("teacher_dashboard");
  const storageData = JSON.parse(data);
  if (storageData) {
    const teacher = storageData.data.teachers.find((data) => data.uid == id);
    return teacher?.name_en;
  }
};

export const teacher_subject = (id: any) => {
  const data = localStorage.getItem("teacher_dashboard");
  const storageData = JSON.parse(data);
  if (storageData) {
    const shift = storageData.data.subjects.find((data) => data.uid == id);
    return shift?.assigned_subjects;
  }
};

export const version_name = (id: any) => {
  const data = localStorage.getItem("teacher_dashboard");
  const storageData = JSON.parse(data);
  if (storageData) {
    const version = storageData.data.versions.find((data) => data.uid == id);
    return version?.version_name;
  }
};

export const subject_name = (id: any) => {
  const data = localStorage.getItem("teacher_dashboard");
  const storageData = JSON.parse(data);
  if (storageData) {
    const subject = storageData.data.subjects.find(
      (data) => data.subject_id == id
    );
    return subject?.subject_info?.name;
  }
};

export const pis_list_func = (
  allCompitance: any,
  pi_list: any,
  check_sannasik_barsik_or_not: any = false
) => {
  const all_pis_id = [];
  const all_compitance_id = [];
  localStorage.setItem("show_shannasik_barsik", check_sannasik_barsik_or_not);

  for (const x in allCompitance) {
    all_compitance_id.push(allCompitance[x].uid);
    // allCompitance[x].pis.map((d) => {
    //   if (pi_list && pi_list?.length > 0) {
    //     const found = pi_list.find((pi_list_d) => pi_list_d.pi_uid == d.uid);
    //     if (found) {
    //       all_compitance_id.push(allCompitance[x].uid);
    //       all_pis_id.push(d.uid);
    //     }
    //   } else {
    //     if (!check_sannasik_barsik_or_not) {
    //       all_compitance_id.push(allCompitance[x].uid);
    //       all_pis_id.push(d.uid);
    //     }
    //   }
    // });
  }

  const selectedIds = pi_list.map((item: any) => {
    return item.pi_uid;
  });

  localStorage.setItem("show_compitance_id", JSON.stringify(all_compitance_id));
  // localStorage.setItem("show_all_pis_id", JSON.stringify(all_pis_id));
  localStorage.setItem("show_pi_list", JSON.stringify(selectedIds));
};

export const add_pi_uid = (all_bis: any, all_submited_PI_: any) => {
  for (let x = 0; x < all_bis.length; x++) {
    const weight = all_bis[x].weights;

    for (let y = 0; y < weight.length; y++) {
      const weight_el = weight[y];
      if (
        all_submited_PI_.bi_uid == weight_el.bi_uid &&
        all_submited_PI_.weight_uid == weight_el.weight_uid
      ) {
        return weight_el.uid;
        break;
      }
    }
  }
};

export const show_compitance = (compitance_uid: any) => {
  const all_compitance_id = JSON.parse(
    localStorage.getItem("show_compitance_id")
  );

  return all_compitance_id.includes(compitance_uid);
};

export const show_pis = (compitance_uid: any) => {
  const all_compitance_id = JSON.parse(localStorage.getItem("show_pi_list"));

  return all_compitance_id.includes(compitance_uid);
};

export const show_shannasik_barsik = () => {
  const show_shannasik_barsik__ = JSON.parse(
    localStorage.getItem("show_shannasik_barsik")
  );
  return show_shannasik_barsik__;
};

export const show_comment_box_bi = (
  w_d: any,
  submitData: any,
  student_uid: any,
  assessment_uid
) => {
  let obj = submitData.filter(
    (d: any) =>
      d.bi_uid == w_d.bi_uid &&
      student_uid == d.student_uid &&
      d.evaluate_type == assessment_uid
  );
  if (obj.length) {
    return "Remark : " + obj[0].remark;
  }
  return "";
};

export const show_comment_box_Pi = (
  w_d: any,
  submitData: any,
  student_uid: any
) => {
  let obj = submitData.filter(
    (d: any) => d.pi_uid == w_d.pi_uid && student_uid == d.student_uid
  );
  if (obj.length) {
    return "Remark : " + obj[0].remark;
  }
  return "";
};

export function check_pi_submitted(pis_id: any, assessment_uid: any) {
  const pi_bi_evaluation_list = JSON.parse(
    localStorage.getItem("pi_bi_evaluation_list")
  );
  const class_room_id = JSON.parse(localStorage.getItem("class_room_id"));

  const pi_list = pi_bi_evaluation_list?.pi_evaluation_list || [];

  for (let index = 0; index < pi_list.length; index++) {
    const pi_d = pi_list[index];

    if (
      pi_d.evaluate_type == assessment_uid &&
      pis_id.uid == pi_d.pi_uid &&
      pi_d.class_room_uid == class_room_id
    ) {
      return true;
      break;
    }
  }
}

// Function to sort array of objects by a numeric property in ascending order
export function sortByNumericPropertyAscending(data) {
  let dataArray = Array.isArray(data) ? data : []; // Ensure 'data' is an array

  // If 'data' is not an array and needs conversion, perform the conversion here

  dataArray = dataArray.filter(
    (item) => item && typeof item.pi_no === "number"
  ); // Filter out non-numeric items

  // Sort the array based on the numeric property 'pi_no' (assuming it contains numbers)
  dataArray.sort((a, b) => {
    const numericA: any = convertToBanglaNumber(a.pi_no); // Convert to Bangla number
    const numericB: any = convertToBanglaNumber(b.pi_no); // Convert to Bangla number

    return numericA - numericB; // Sort in ascending order
  });

  return dataArray;
}

export const convertToBanglaNumber = (number: any) => {
  const banglaDigits = [
    "০",
    "১",
    "২",
    "৩",
    "৪",
    "৫",
    "৬",
    "৭",
    "৮",
    "৯",
    "১০",
    ",",
  ];

  if (number?.toString()) {
    const numString = number?.toString() || "";
    let banglaNumber = "";
    for (let i = 0; i < numString.length; i++) {
      if (numString[i] !== "," && numString[i] !== ".") {
        const digit = parseInt(numString[i]);
        banglaNumber += banglaDigits[digit] || numString[i];
      } else {
        banglaNumber += numString[i];
      }
    }
    return banglaNumber;
  } else {
    return "নম্বর খুঁজে পাওয়া যায়নি.";
  }
};

export const make_group_by = (studentData: any) => {
  const groupedByStudentId = studentData.reduce((acc, student) => {
    const { student_uid } = student;
    if (!acc[student_uid]) {
      acc[student_uid] = [];
    }
    acc[student_uid].push(student);

    return acc;
  }, {});

  return groupedByStudentId;
};

export const get_unique_index = (students: any, uid) => {
  // Function to find the index of an object with a specific property value
  function findIndexByProperty(array, propertyName, value) {
    return array.findIndex((element) => element[propertyName] === value);
  }
  const index = findIndexByProperty(students, "uid", uid);

  if (index !== -1) {
    return index;
  } else {
    return null;
  }
};

export const all_students = (students_id: any) => {
  const data = localStorage.getItem("own_subjet");
  const storageData = JSON.parse(data);

  let student = {};
  if (storageData) {
    const students = storageData.data.data.subjects.filter((sub: any) => {
      sub.class_room.students.map((stu_data: any) => {
        if (stu_data.uid == students_id) {
          student = stu_data;
        }
      });
    });

    return student;
  }
};

export const formate_own_subject_data = (own_subjet: any, class_room: any) => {
  const own_subject_data: any = [];
  own_subjet.data.data.subjects.map((d: any) => {
    let obj = {};
    class_room.data.data.subjects.map((d_2: any) => {
      if (d_2.subject_id === d.subject_id) {
        obj = { ...d_2, ...d };
        own_subject_data.push(obj);
      }
    });

    return obj;
  });

  own_subjet.data.data.subjects = own_subject_data;

  delete own_subjet["config"];
  delete own_subjet["headers"];
  delete own_subjet["request"];

  return own_subjet;
};

export const formate_teanscript_data = (data: any) => {
  const our_all_pi = localStorage.getItem("our_all_pi");
  const our_all_piData = JSON.parse(our_all_pi);

  const all_students = localStorage.getItem("all_students");
  const all_studentsData = JSON.parse(all_students);

  const result = [];
  for (let index = 0; index < data.length; index++) {
    let obj = {};
    const element = data[index];

    const stu = element?.student_result[0];
    const allPi = element?.student_result;

    if (stu) {
      const student_dta = all_studentsData.filter(
        (d: any) => d.uid == stu.student_uid
      );

      const all_PI_array = [];
      for (let y = 0; y < allPi.length; y++) {
        const pi = allPi[y];
        const pi_data = our_all_piData.filter((d: any) => d.uid == pi.pi_uid);
        const Pi_obj = {
          ...pi,
          student_data: student_dta[0],
          pi_data: pi_data[0],
        };
        all_PI_array.push(Pi_obj);
      }

      obj = {
        student_data: student_dta[0],
        all_PI_array,
      };
      result.push(obj);
    }
  }

  return result;
};

export const formate_teanscript_dataBy_single_student = (data: any) => {
  const our_all_pi = localStorage.getItem("our_all_pi");
  const our_all_piData = JSON.parse(our_all_pi);

  const all_students = localStorage.getItem("all_students");
  const all_studentsData = JSON.parse(all_students);

  const result = [];

  let obj = {};

  const stu = data[0];
  const allPi = data;

  // console.log("our_all_piData" , our_all_piData);
  if (stu) {
    const student_dta = all_studentsData.filter(
      (d: any) => d.uid == stu.student_uid
    );
    const all_PI_array = [];

    for (let y = 0; y < allPi.length; y++) {
      const pi = allPi[y];
      const pi_data = our_all_piData.filter((d: any) => d.uid == pi.pi_uid);
      const Pi_obj = {
        ...pi,
        student_data: student_dta[0],
        pi_data: pi_data[0],
        pi_no: pi_data[0]?.pi_no?.replaceAll(".", "") || 0,
      };
      all_PI_array.push(Pi_obj);
    }

    all_PI_array.sort((a, b) => {
      return a?.pi_no - b?.pi_no;
    });

    obj = {
      student_data: student_dta[0],
      all_PI_array,
    };
    result.push(obj);
  }
  return result;
};

export const formate_Bi_teanscript_dataBy_single_student = (
  data: any,
  student_name: any
) => {
  const our_all_pi = localStorage.getItem("bi");
  const tempBi = JSON.parse(our_all_pi);
  const our_all_piData = tempBi?.data?.data?.bis;

  const all_students = localStorage.getItem("all_students");
  const all_studentsData = JSON.parse(all_students);

  const result = [];

  let obj = {};

  console.log(`data`, data);

  const stu = student_name;
  const allPi = data;

  if (stu) {
    const student_dta = all_studentsData.filter((d: any) => d.uid == stu);

    console.log(`student_dta`, student_dta);

    const all_PI_array = [];
    for (let y = 0; y < allPi.length; y++) {
      const pi = allPi[y];
      const pi_data = our_all_piData.filter((d: any) => d.uid == pi.bi_uid);
      const Pi_obj = {
        ...pi,
        student_data: student_dta[0],
        pi_data: pi_data[0],
      };
      all_PI_array.push(Pi_obj);
    }

    obj = {
      student_data: student_dta[0],
      all_PI_array,
    };
    result.push(obj);
  }
  return result;
};

export const teacher_list = () => {
  const own_subject = JSON.parse(localStorage.getItem("own_subjet"));
  let all_teachers_with_duplicate = [];

  if (own_subject) {
    let subjects = [];
    subjects = [...own_subject?.data?.data?.subjects];
    subjects.map((item) =>
      all_teachers_with_duplicate?.push(item.class_room?.class_teacher)
    );
  }

  const removeDuplicates = (arr, uniqueKey) => {
    const uniqueMap = {};
    return arr.reduce((uniqueArray, obj) => {
      const key = obj[uniqueKey];
      if (!uniqueMap[key]) {
        uniqueMap[key] = true;
        uniqueArray.push(obj);
      }
      return uniqueArray;
    }, []);
  };

  const all_teachers = removeDuplicates(all_teachers_with_duplicate, "pdsid");
  return all_teachers;
};

export const single_formate_teanscript_data = (element: any) => {
  const our_all_pi = localStorage.getItem("our_all_pi");
  const our_all_piData = JSON.parse(our_all_pi);

  const all_students = localStorage.getItem("all_students");
  const all_studentsData = JSON.parse(all_students);

  const result = [];

  let obj = {};

  const stu = element?.student_result[0];
  const allPi = element?.student_result;

  if (stu) {
    const student_dta = all_studentsData.filter(
      (d: any) => d.uid == stu.student_uid
    );

    const all_PI_array = [];

    for (let y = 0; y < allPi.length; y++) {
      const pi = allPi[y];

      const pi_data = our_all_piData.filter((d: any) => d.uid == pi.pi_uid);

      const Pi_obj = {
        ...pi,
        student_data: student_dta[0],
        pi_data: pi_data[0],
      };

      all_PI_array.push(Pi_obj);
    }

    obj = {
      student_data: student_dta[0],
      all_PI_array,
    };
    result.push(obj);
  }

  return result;
};

export const formate_report_data = (report_data: any, dimention: any) => {
  const result = [];
  for (let index = 0; index < report_data.length; index++) {
    const report_data_ = report_data[index];

    let obj = {};

    for (let index = 0; index < dimention.length; index++) {
      const dimention_data = dimention[index];

      if (report_data_.dimension_uid == dimention_data.uid) {
        obj = {
          ...report_data_,
          ...dimention_data,
        };

        result.push(obj);
        break;
      }
    }
  }

  const groupBy = Object.entries(make_group_by_report_data(result));
  return groupBy;
};

export const make_group_by_report_data = (studentData: any) => {
  const groupedByStudentId = studentData.reduce((acc, student) => {
    const { subject_uid } = student;
    if (!acc[subject_uid]) {
      acc[subject_uid] = [];
    }
    acc[subject_uid].push(student);

    return acc;
  }, {});

  return groupedByStudentId;
};

export const show_sub_by_religion = (religion: any, subject_name: any) => {
  if (
    religion == "Islam" &&
    (subject_name == "হিন্দুধর্ম শিক্ষা" ||
      subject_name == "খ্রীষ্টধর্ম শিক্ষা" ||
      subject_name == "বৌদ্ধধর্ম শিক্ষা")
  ) {
    return true;
  }

  if (
    religion == "Hinduism" &&
    (subject_name == "ইসলাম শিক্ষা" ||
      subject_name == "খ্রীষ্টধর্ম শিক্ষা" ||
      subject_name == "বৌদ্ধধর্ম শিক্ষা")
  ) {
    return true;
  }

  if (
    religion == "Christianity" &&
    (subject_name == "ইসলাম শিক্ষা" ||
      subject_name == "হিন্দুধর্ম শিক্ষা" ||
      subject_name == "বৌদ্ধধর্ম শিক্ষা")
  ) {
    return true;
  }

  if (
    religion == "Buddhism" &&
    (subject_name == "ইসলাম শিক্ষা" ||
      subject_name == "খ্রীষ্টধর্ম শিক্ষা" ||
      subject_name == "বৌদ্ধধর্ম শিক্ষা")
  ) {
    return true;
  }


  return false
}


export const accessBIandReport = ()=>{

  const data = localStorage.getItem("teacher_dashboard");
  const storageData = JSON.parse(data);

  return storageData?.data?.teachers[0].is_class_teacher?.uid ? true : false
}

export const showReportDeleteEv = ()=>{
  return true
}