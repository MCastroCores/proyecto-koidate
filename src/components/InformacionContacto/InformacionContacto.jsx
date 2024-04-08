import { CiMail } from "react-icons/ci";
import { FaPhoneSquareAlt } from "react-icons/fa";

export const InformacionContacto = () => {
  return (
    <div className="flex justify-around items-center text-blanco bg-primary p-5 gap-3">
      <div className="flex items-center ">
        <CiMail />
        <p className="text-xs md:text-sm font-semibold text-center ">koidatefisioterapia@gmail.com</p>
      </div>
      <div className="flex items-center">
        <FaPhoneSquareAlt />
        <p className="text-xs md:text-sm font-semibold text-center ">+34644769541</p>
      </div>
    </div>
  );
};
