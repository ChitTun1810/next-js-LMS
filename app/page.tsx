import { Button } from "@heroui/react";
import Image from "next/image";
import { ThemeSwitcher } from "./ui/components/ThemeSwitcher";
import { Navigation } from "./ui/components/navigation";

export default function Home() {
  return (
    <div className="">
    <Button>Click me</Button>
    <Navigation />
    </div>
  );
}
