import { Github, House, Trophy } from "lucide-react";
import { Dock, DockIcon } from "./components/dock";
import { Divider } from "@nextui-org/react";
import BlurIn from "./components/blur-in";
import DotPattern from "./components/dot-pattern";
import { cn } from "./lib/utils";
import Ripple from "./components/ripple";

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      <BlurIn
        word="พอร์ตโฟลิโอ"
        className="bg-gradient-to-b from-white to-neutral-700 bg-clip-text py-5 text-9xl font-extrabold text-transparent"
      />
      <Dock className="absolute bottom-10" magnification={60}>
        <DockIcon>
          <House />
        </DockIcon>
        <DockIcon>
          <Trophy />
        </DockIcon>
        <Divider className="bg-neutral-700" orientation="vertical" />
        <DockIcon>
          <Github />
        </DockIcon>
      </Dock>

      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
        )}
      />
      {/* <Ripple /> */}
    </div>
  );
}
