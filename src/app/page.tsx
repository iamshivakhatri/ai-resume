import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div>
      This is resume generator
      <Input placeholder="Upload the resume." />
      <Input placeholder="Paste the job description." />

      <Button>Generate a resume</Button>
    </div>
  );
}
