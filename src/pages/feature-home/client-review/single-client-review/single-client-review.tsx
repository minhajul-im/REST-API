import { Rating } from "@/components/common/rating";
import { ClientAvatar } from "./client-avatar/client-avatar";

type ReviewType = {
  name: string;
  where: string;
  children: string;
};

export const SingleClientReview = ({ name, where, children }: ReviewType) => {
  return (
    <div className="p-6 rounded-lg mx-auto relative shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] shadow-blue-500">
      <div className="flex flex-wrap items-center gap-4">
        <ClientAvatar name={name} />
        <div>
          <h4 className="text-sm whitespace-nowrap font-bold">{name}</h4>
          <p className="mt-0.5 text-xs text-muted-foreground">
            From of {where}
          </p>
        </div>
      </div>

      <Rating />

      <div className="mt-6">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
};
