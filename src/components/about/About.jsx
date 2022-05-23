import "./about.css";
import Award from "../../img/ane.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Award} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Saya adalah siswa  Kelas 10 jurusan Rekayasa Perangkat Lunak 
        
        </p>
        <p className="a-desc">
         Di Smk Ti Bali Global badung. Saya Lumayan mahir Dalam bahasa Pemrograman Html Css Dan java Script dikit dikit
         dan saya Sedang ingin menguasai  bahasa pembrograman Python. react js. php dan Swift. Cita cita saya adalah menjadi Full-Stack developer
        </p>
      </div>
    </div>
  );
};

export default About;
