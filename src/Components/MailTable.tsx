import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setVisibleEmails} from "../Redux/reducer";
import {ReduxStateType} from "../Redux/reduxState.type";
import {RootState} from "../Redux/store";

const MailTable = ({mails}: {mails: ReduxStateType["visibleEmails"]}) => {
  return (
    <table className="table max-w-7xl">
      <tbody>
        {mails.map((email) => (
          <tr key={email.id} className="hover:bg-white hover:shadow-sm">
            <td>
              <p className="max-w-[300px] truncate">{email.subject}</p>
              <p className="max-w-screen-md truncate">{email.body}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MailTable;
