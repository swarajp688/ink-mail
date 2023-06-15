import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {EmailType} from "../Redux/reduxState.type";
import {RootState} from "../Redux/store";
import {IoArrowBackSharp} from "react-icons/io5";
const MailContainer = () => {
  const {mailId} = useParams();
  const navigate = useNavigate();
  const emails = useSelector((state: RootState) => state.emails);
  const email =
    mailId && (emails.filter((email) => email.id === +mailId)[0] as EmailType);
  return (
    <div className="bg-slate-100 w-full rounded-lg overflow-y-scroll h-96">
      {email && (
        <>
          <button
            className=" bg-slate-300 p-2 hover:opacity-70 mt-3 ml-3 rounded-full"
            onClick={() => navigate(`/${email.tag}`)}
          >
            <IoArrowBackSharp />
          </button>
          <div className="pl-3 pt-10 pb-8 flex space-x-8">
            <span className="bg-teal-600 h-14 p-3 w-16 flex items-center justify-center rounded-full text-white ">
              {`U-${email.userId}`}
            </span>
            <div className="flex justify-center flex-col ">
              <div className="space-x-4">
                <span className="text-lg font-medium">{email.subject}</span>
                <span className="badge badge-info">{email.tag}</span>
              </div>
              <div className="pt-6 whitespace-pre-wrap">{email.body}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MailContainer;
