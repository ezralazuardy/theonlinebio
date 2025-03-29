import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SubscribeButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Your email address" />
      <Button type="submit" variant="secondary" className="cursor-pointer">
        Make Yours
      </Button>
    </div>
  );
}
