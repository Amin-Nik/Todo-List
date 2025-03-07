import { Button } from "../ui/button";

function SideBtn({
  icon,
  text,
  clickHandler,
}: {
  icon: React.ReactNode;
  text: string;
  addNew?: boolean;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Button
      onClick={clickHandler}
      className="w-full h-12 rounded-r-full justify-start gap-8"
    >
      {icon}
      {text}
    </Button>
  );
}

export default SideBtn;
