import { contact } from "../data";

export const FeatureContact = () => {
  return (
    <div className="space-y-2 text-sm text-center md:text-start">
      <p className="text-base font-bold tracking-wide pb-2">Contacts</p>
      <p className="mr-1 text-muted-foreground">Phone: {contact.phone}</p>
      <p className="mr-1 text-muted-foreground">Email: {contact.email} </p>
      <p className="mr-1 text-muted-foreground">Address: {contact.address} </p>
    </div>
  );
};
