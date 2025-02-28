import {
  RectangleStackIcon,
  ClockIcon,
  StarIcon,
  DocumentCheckIcon,
  TagIcon,
} from "@heroicons/react/24/solid";

import SideBtn from "../SideBtn/SideBtn";

function SideBar() {
  return (
    <section className="fixed left-0 w-70 h-svh pt-2">
      <SideBtn
        icon={<RectangleStackIcon className="w-7! h-7! inline-block ml-4" />}
        text="All Task"
      />
      <SideBtn
        icon={<ClockIcon className="w-7! h-7! inline-block ml-4" />}
        text="Today's Task"
      />
      <SideBtn
        icon={<StarIcon className="w-7! h-7! inline-block ml-4" />}
        text="Important Task"
      />
      <SideBtn
        icon={<DocumentCheckIcon className="w-7! h-7! inline-block ml-4" />}
        text="Completed Task"
      />
      <SideBtn
        icon={<TagIcon className="w-7! h-7! inline-block ml-4" />}
        text="Add New Label"
        addNew={true}
      />
    </section>
  );
}

export default SideBar;
