import {
  RectangleStackIcon,
  ClockIcon,
  StarIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/solid";

import SideBtn from "../SideBtn/SideBtn";
import LabelSection from "../LabelSection/LabelSection";

function SideBar({
  labels,
  filterByLabelEvent,
}: {
  labels: string[] | null | undefined;
  filterByLabelEvent: (label: string) => void;
}) {
  const iconClassName = "size-7! inline-block ml-4";

  return (
    <>
      {/* side bar static buttons */}
      <section className="fixed left-0 w-70 h-[91vh] py-2 overflow-auto">
        <SideBtn
          icon={<RectangleStackIcon className={iconClassName} />}
          text="All Task"
        />
        <SideBtn
          icon={<ClockIcon className={iconClassName} />}
          text="Today's Task"
        />
        <SideBtn
          icon={<StarIcon className={iconClassName} />}
          text="Important Task"
        />
        <SideBtn
          icon={<DocumentCheckIcon className={iconClassName} />}
          text="Completed Task"
        />
        <LabelSection
          filterByLabelEvent={filterByLabelEvent}
          labelData={labels}
        />
      </section>
    </>
  );
}

export default SideBar;
