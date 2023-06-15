export type ReduxStateType = {
  loading: boolean;
  emails: EmailType[];
  visibleEmails: EmailType[];
};
export type EmailType = {
  id: number;
  subject: string;
  body: string;
  tag: string;
  userId: number;
};
