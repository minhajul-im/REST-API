import { OrderType } from "../../type";

export const ManagerEmailTemplate = ({
  name,
  email,
  number,
  address,
  district,
}: OrderType) => (
  <div>
    <h3>Welcome, {name}!</h3>
    <i>Mail: {email}</i>
    <p>Phone: {number}</p>
    <p>
      Address: {address} | {district}
    </p>
  </div>
);

export const CustomerEmailTemplate = ({
  name,
  email,
  number,
  address,
  district,
}: OrderType) => (
  <div>
    <h3>Welcome, {name}!</h3>
    <i>Mail: {email}</i>
    <p>Phone: {number}</p>
    <p>
      Address: {address} | {district}
    </p>
  </div>
);
