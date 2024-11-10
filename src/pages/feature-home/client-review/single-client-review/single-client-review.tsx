import { ClientAvatar } from "./client-avatar/client-avatar";

type ReviewType = {
  name: string;
  where: string;
  children: string;
};

export const SingleClientReview = ({ name, where, children }: ReviewType) => {
  return (
    <div className="p-6 rounded-lg mx-auto bg-gray-100 relative shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] shadow-blue-500">
      <div className="flex flex-wrap items-center gap-4">
        <ClientAvatar name={name} />
        <div>
          <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold">
            {name}
          </h4>
          <p className="mt-0.5 text-xs text-gray-600">From of {where}</p>
        </div>
      </div>

      <div className="flex space-x-1 mt-4">
        <svg
          className="w-4 fill-[#facc15]"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        </svg>
        <svg
          className="w-4 fill-[#facc15]"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        </svg>
        <svg
          className="w-4 fill-[#facc15]"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        </svg>
        <svg
          className="w-4 fill-[#facc15]"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        </svg>
        <svg
          className="w-4 fill-[#CED5D8]"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        </svg>
      </div>

      <div className="mt-6">
        <p className="text-gray-800 text-sm leading-relaxed">{children}</p>
      </div>
    </div>
  );
};
