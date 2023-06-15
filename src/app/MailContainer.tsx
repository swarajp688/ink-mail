import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import MailTable from "../Components/MailTable";
import {setVisibleEmails} from "../Redux/reducer";
import {RootState} from "../Redux/store";

const MailContainer = () => {
  const {mailBoxId} = useParams();
  const {visibleEmails} = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setVisibleEmails(mailBoxId));
    console.log(visibleEmails);
  }, [mailBoxId]);

  return <div>{mailBoxId && <MailTable mails={visibleEmails} />}</div>;
};

export default MailContainer;
