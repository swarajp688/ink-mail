import {Link} from "react-router-dom";
import {ReduxStateType} from "../Redux/reduxState.type";

const MailTable = ({mails}: {mails: ReduxStateType["visibleEmails"]}) => {
  return (
    <table className="table bg-slate-100">
      <tbody>
        {mails.length ? (
          mails.map((email) => (
            <tr
              key={email.id}
              className="hover:bg-slate-50 hover:shadow-md hover:rounded-sm cursor-pointer"
            >
              <Link to={`mail/${email.id}`}>
                <td className="max-w-5xl">
                  <p className="truncate mr-10 inline-block w-1/5">
                    {email.subject}
                  </p>
                  <p className="truncate w-3/4 inline-block">{email.body}</p>
                </td>
              </Link>
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
