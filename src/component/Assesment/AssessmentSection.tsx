
import React, { useState, useEffect } from 'react';

import ShowAssesment from '../ShowAssesment';
import ParodorshitaComponent from '../ParodorshitaComponent';
ParodorshitaComponent
import AcorongotoComponent from '../AcorongotoComponent';

const AssessmentComponent = () => {
  const [showSkillBehaibor, seshowSkillBehaibor] = useState(false);
  const [ShowProfile, setShowProfile] = useState(true);
  // Other necessary state variables and functions
  const [showLoadingErr, setshowLoadingErr] = useState("");
  let [numberOfRender, setnumberOfRender] = useState(1);
  const [subject, setsubject] = useState([]);
  const [allCompitance, setallCompitance] = useState<any>({});
  const [element, setelement] = useState<any>("");
  const [Showcollaps, setShowcollaps] = useState<any>({});
  const [shikhonKalinMullayon, setshikhonKalinMullayon] = useState([]);
  const [allassessmet, setallassessmet] = useState([]);
  const [assessment_uid, setassessment_uid] = useState("");
  const [pi_attrbute, setpi_attrbute] = useState([]);
  const [pi_selection, setpi_selection] = useState([]);
  const [own_data, setown_data] = useState<any>([]);
  const [all_bis, setall_bis] = useState<any>([]);
  const [selected_subject, setselected_subject] = useState<any>("");
  const [Mullayon_name, setMullayon_name] = useState<any>("");

  const [Student, setStudent] = useState<any>([]);
  const [teacher, setteacher] = useState<any>({});
  const [teacher_uid, setteacher_uid] = useState<any>("");
  const [showDetailsshikhonKalinMullayon, setshowDetailsshikhonKalinMullayon] =
    useState<any>("");
  const [showSubject, seshowSubject] = useState(true);
  const [loader, setloader] = useState(true);
  const [showSubjectname, seshowSubjectname] = useState("");
  const [showCompitance, seshowCompitance] = useState(false);
  const [parodorshita_acoron_tab, setparodorshita_acoron_tab] = useState(0);
  const [
    shikhonKalinMullayon_sannasik_barsik,
    setshikhonKalinMullayon_sannasik_barsik,
  ] = useState([]);

  const fetchData = async () => {
    setshowLoadingErr("")

    try {
      const teacher_dash__: any =
        localStorage.getItem("teacher_dashboard") || "";
      const teacher_dash = teacher_dash__ ? JSON.parse(teacher_dash__) : "";

      let data: any = "";
      if (teacher_dash) {
        data = teacher_dash;
      } else {
        const data_dash: any = await teacher_dashboard();
        data = data_dash.data;
        localStorage.setItem(
          "teacher_dashboard",
          JSON.stringify(data_dash.data)
        );
      }

      const own_subjet_: any = localStorage.getItem("own_subjet") || "";
      let own_subjet = own_subjet_ ? JSON.parse(own_subjet_) : "";



      if (own_subjet == "") {
        own_subjet = await teacher_own_subject();

        // console.log(`own_subjet`, own_subjet);
        localStorage.setItem("own_subjet", JSON.stringify(own_subjet))
      }

      if (own_subjet?.success == false) {
        setshowLoadingErr(own_subjet.msg);
      } else {

        setown_data(own_subjet?.data?.data);
        setteacher(own_subjet.data.data.user);

        const all_subject: any = [];

        let compitnc_obj = {};
        own_subjet.data.data.subjects.map((d: any) => {
          data.data.subjects.map((d_2: any) => {
            if (d_2.subject_id === d.subject_id) {
              const obj: any = {
                subject: d_2.subject_info,
                own_subjet: d,
                teacher: d.class_room.class_teacher,
              };
              d.oviggota.map((competnc) => {
                compitnc_obj = { ...compitnc_obj, [competnc.uid]: competnc };
              });
              all_subject.push(obj);
            }
          });
        });

        setall_bis(own_subjet.data.data.bis);
        setallCompitance(compitnc_obj);
        setsubject(all_subject);
        setloader(false);

      }


    } catch (error) {
      setshowLoadingErr("");

      numberOfRender++;

      if (numberOfRender <= 10) {
        setnumberOfRender(numberOfRender);
        fetchData();
      } else {
        setshowLoadingErr(
          "দুঃখিত। তথ্য সঠিকভাবে লোড হয়নি। অনুগ্রহ করে সাইটটি আবার লোড করুন"
        );
      }
    }
  };

  const skill_behaibor_count = async (datas: any) => {
    seshowSkillBehaibor(true);
    seshowSubject(false);
    setselected_subject(datas);
    setshikhonKalinMullayon(datas.own_subjet.oviggota);
    setshikhonKalinMullayon_sannasik_barsik(datas.own_subjet.competence);
    setallassessmet(own_data.assessments[0].assessment_details);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pi_attr = (data: any, e: any = "") => {
    setpi_attrbute(data.pi_attribute);
    setelement(e);
  };
  // Move relevant functions and state variables here

  return (
    <>
      {/* Second code snippet */}
      {ShowProfile && (
        <>
          {showSkillBehaibor && (
            <>
              <ShowAssesment
                seshowCompitance={seshowCompitance}
                setassessment_uid={setassessment_uid}
                setMullayon_name={setMullayon_name}
                allassessmet={allassessmet}
                parodorshita_acoron_tab={
                  parodorshita_acoron_tab
                }
                own_data={own_data}
                setallassessmet={setallassessmet}
                setparodorshita_acoron_tab={
                  setparodorshita_acoron_tab
                }
                pi_selection={pi_selection}
                allCompitance={allCompitance}
                setShowcollaps={setShowcollaps}
              />
            </>
          )}

          {showCompitance && (
            <>
              {parodorshita_acoron_tab === 0 && (
                <ParodorshitaComponent
                  pi_selection={pi_selection}
                  teacher_uid={teacher_uid}
                  Student={Student}
                  assessment_uid={assessment_uid}
                  pi_attr={pi_attr}
                  showDetailsshikhonKalinMullayon={
                    showDetailsshikhonKalinMullayon
                  }
                  shikhonKalinMullayon_sannasik_barsik={
                    shikhonKalinMullayon_sannasik_barsik
                  }
                  Showcollaps={Showcollaps}
                  setShowcollaps={setShowcollaps}
                  Mullayon_name={Mullayon_name}
                  shikhonKalinMullayon={shikhonKalinMullayon}
                  setshowDetailsshikhonKalinMullayon={
                    setshowDetailsshikhonKalinMullayon
                  }
                />
              )}

              {parodorshita_acoron_tab === 1 && (
                <AcorongotoComponent
                  teacher_uid={teacher_uid}
                  teacher={teacher}
                  Student={Student}
                  all_bis={all_bis}
                  assessment_uid={assessment_uid}
                  pi_attr={pi_attr}
                  showDetailsshikhonKalinMullayon={
                    showDetailsshikhonKalinMullayon
                  }
                  shikhonKalinMullayon_sannasik_barsik={
                    shikhonKalinMullayon_sannasik_barsik
                  }
                  Showcollaps={Showcollaps}
                  setShowcollaps={setShowcollaps}
                  Mullayon_name={Mullayon_name}
                  shikhonKalinMullayon={shikhonKalinMullayon}
                  setshowDetailsshikhonKalinMullayon={
                    setshowDetailsshikhonKalinMullayon
                  }
                />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default AssessmentComponent;