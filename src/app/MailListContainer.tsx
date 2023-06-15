import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {useSearchParams} from "react-router-dom";
import MailTable from "../Components/MailTable";
import {setVisibleEmails} from "../Redux/reducer";
import {RootState} from "../Redux/store";
import SearchBar from "./SearchBar";

const MailListContainer = () => {
  const {mailBoxId} = useParams();
  const {visibleEmails, emails} = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const [searchText, setSearchText] = useState<string>(
    params.get("query") || "",
  );

  useEffect(() => {
    if (!params.get("query") && searchText) {
      setSearchText("");
    }
    dispatch(setVisibleEmails({tag: mailBoxId, query: searchText}));
  }, [mailBoxId, emails, searchText]);

  return (
    <div className="w-full h-full">
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      {mailBoxId && <MailTable mails={visibleEmails} />}
    </div>
  );
};

export default MailListContainer;
