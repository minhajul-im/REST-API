import { ContactType } from "../../type";

export const EmailTemplate = ({
  name,
  email,
  number,
  message,
}: ContactType) => (
  <div>
    <h3>Welcome, {name}!</h3>
    <i>Mail: {email}</i>
    <p>Phone: {number}</p>
    <p>Message: {message}</p>
  </div>
);
