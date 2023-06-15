import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import MailTable from "../Components/MailTable";
import {setVisibleEmails} from "../Redux/reducer";
import {RootState} from "../Redux/store";

const MailListContainer = () => {
  const {mailBoxId} = useParams();
  const {visibleEmails, emails} = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setVisibleEmails({tag: mailBoxId}));
  }, [mailBoxId, emails]);

  return (
    <div className="w-full h-full">
      {mailBoxId && <MailTable mails={visibleEmails} />}
    </div>
  );
};

export default MailListContainer;
