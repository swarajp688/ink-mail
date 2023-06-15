import {Link} from "react-router-dom";
import {ReduxStateType} from "../Redux/reduxState.type";
import {AiOutlineSend} from "react-icons/ai";
const MailTable = ({mails}: {mails: ReduxStateType["visibleEmails"]}) => {
  return (
    <table className="table bg-slate-100">
      <tbody>
        {mails.length ? (
          mails.map((email) => (
            <tr key={email.id} className="">
              <td className="max-w-5xl p-0 border-b-1">
                <Link
                  to={`mail/${email.id}`}
                  className=" p-4 flex items-center  hover:bg-slate-50 hover:shadow-md hover:rounded-md cursor-pointer"
                >
                  <AiOutlineSend className="inline-block mr-4" />
                  <p className="truncate mr-10 inline-block w-1/5">
                    {email.subject}
                  </p>
                  <p className="truncate w-3/4 inline-block">{email.body}</p>
                </Link>
              </td>
            </tr>
          ))
        ) : (
          <tr className="hover:bg-slate-50 hover:shadow-md hover:rounded-sm cursor-pointer">
            <td>No Mails found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default MailTable;
