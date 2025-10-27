import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <div className="bg-[#FFFFFF0A] min-w-[1256px] min-h-[576px] border rounded-[16px] flex relative">
      <div className="flex flex-col pl-[60px] pt-[20px] min-h-[536px] min-w-[506px] ">
        <div className="pt-[40px] max-w-[426px] ">
          <h1 className="text-white font-semibold text-[30px]">
            Let’s connect constellations
          </h1>
          <p className="text-[#FFFFFFB3] ">
            Let's align our constellations! Reach out and let the magic of
            collaboration illuminate our skies.
          </p>
        </div>
        <div className={styles.test}>
          <img src="./eclipse.svg" alt="" className={styles.secondEclipse} />
          <img src="./eclipse.svg" alt="" className={styles.thirdEclipse} />
          <form
            action=""
            className="flex flex-col max-w-[426px] max-h-[333px] gap-[14px] "
          >
            <div className="flex max-w-[426px] max-h-[42px] gap-[14px]">
              <input
                type="text"
                placeholder="Last Name"
                className="text-[#FFFFFF99] min-w-[206px] min-h-[42px] flex justify-center items-center bg-[#FFFFFF0D]  border-[#FFFFFF0D] border-2 rounded-[8px] pl-[14px]  "
              />
              <input
                type="text"
                placeholder="First Name"
                className="text-[#FFFFFF99] min-w-[206px] min-h-[42px] flex justify-center items-center bg-[#FFFFFF0D] border-[#FFFFFF0D] border-2 rounded-[8px] pl-[14px]  "
              />
            </div>

            <input
              type="text"
              placeholder="Email"
              className="text-[#FFFFFF99] min-w-[426px] min-h-[42px] flex justify-center items-center bg-[#FFFFFF0D] border-[#FFFFFF0D] border-2 rounded-[8px] pl-[14px]  "
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="text-[#FFFFFF99] min-w-[426px] min-h-[42px] flex justify-center items-center bg-[#FFFFFF0D] border-[#FFFFFF0D] border-2 rounded-[8px] pl-[14px] "
            />
            <input
              type="text"
              placeholder="Message"
              className="text-[#FFFFFF99] min-w-[426px] min-h-[42px] flex justify-center items-center bg-[#FFFFFF0D] border-[#FFFFFF0D] border-2 rounded-[8px] pl-[14px]  "
            />
            <button className="text-[#FFFFFF] max-w-[426px] min-h-[42px] bg-gradient-to-r from-[#763AF5] to-[#A604F2] flex justify-center items-center gap-[10px] font-medium  border border-none rounded-[8px]  ">
              Send It To Moon <img src="./rocket.svg" alt="rocket logo" />
            </button>
          </form>
        </div>
      </div>
      <div className={styles.container}>
        <div className="flex flex-col max-w-[466px] pt-[425px] pl-[28px]">
          <p className="text-[#FFFFFF80]">
            “Two lunar months revealed Earth's fragile beauty against vast
            silence, transforming my view of our place in the universe.
          </p>
          <h2 className="text-[#FFFFFFA6]">Irinel Traista</h2>
          <img src="./eclipse.svg" alt="" className={styles.eclipse} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
