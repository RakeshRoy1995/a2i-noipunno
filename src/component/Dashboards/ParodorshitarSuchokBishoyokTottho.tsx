import '../../assets/dashboard_materials/css/dashboard.css';
import parodorshitarSuchokBishoyokTotthoChart from '../../assets/dashboard_materials/images/dashboard/Chart44.svg';

const ParodorshitarSuchokBishoyokTottho = () => {
  return (
    <section className="container">
      <div className="proficiency-container">
        <div className="title">
          <h3>পারদর্শিতা সূচক বিষয়ক তথ্য</h3>
          <div className="d-flex justify-content-center align-items-center">
            <div className="pl-container d-flex justify-content-center align-items-center me-3">
              <div className="pl-primary" />
              <h4>PI Need to Complete</h4>
            </div>
            <div className="pl-container d-flex justify-content-center align-items-center">
              <div className="pl-secondary" />
              <h4>PI Done</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-6">
            <img src={parodorshitarSuchokBishoyokTotthoChart} alt="chart" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParodorshitarSuchokBishoyokTottho;