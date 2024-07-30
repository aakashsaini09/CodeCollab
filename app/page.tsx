import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
  <div className="flex flex-col">
    <div>This is auth screen</div>
    <div>
      <UserButton/>
    </div>
  </div>
  );
}
