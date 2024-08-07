import type { NextPage } from "next";

export type SelectedFileType = {
  className?: string;
};

const SelectedFile: NextPage<SelectedFileType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1096.9px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full ${className}`}
    >
      <header className="w-[856.9px] flex flex-row items-start justify-between gap-5 max-w-full mq750:flex-wrap">
        <div className="h-[133px] w-[267.3px] flex flex-col items-start justify-start relative">
          <img
            className="w-[126px] flex-1 relative max-h-full"
            loading="lazy"
            alt=""
            src="/simpleiconsnike.svg"
          />
          <img
            className="w-[33.4px] h-[11.6px] absolute !m-[0] top-[50.4px] right-[-19.9px]"
            loading="lazy"
            alt=""
            src="/men.svg"
          />
        </div>
        <div className="w-[61.7px] flex flex-col items-start justify-start pt-[50.2px] px-0 pb-0 box-border">
          <img
            className="self-stretch h-3 relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/women.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[50.2px] pb-0 pl-0 pr-1">
          <img
            className="w-[38.3px] h-3 relative"
            loading="lazy"
            alt=""
            src="/sale.svg"
          />
        </div>
        <div className="w-[51.8px] flex flex-col items-start justify-start pt-[50.2px] px-0 pb-0 box-border">
          <img
            className="self-stretch h-3 relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/snkrs.svg"
          />
        </div>
      </header>
    </div>
  );
};

export default SelectedFile;
