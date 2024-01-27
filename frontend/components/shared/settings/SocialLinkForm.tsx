import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function SocialLinkModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Social Links</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Add Social Links</DialogTitle>
          <DialogDescription>
            Enter your social media profile URLs.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="facebook">Facebook</Label>
            <Input id="facebook" placeholder="https://facebook.com/username" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="twitter">Twitter</Label>
            <Input id="twitter" placeholder="https://twitter.com/username" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="instagram">Instagram</Label>
            <Input
              id="instagram"
              placeholder="https://instagram.com/username"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="linkedin">LinkedIn</Label>
            <Input
              id="linkedin"
              placeholder="https://linkedin.com/in/username"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="github">GitHub</Label>
            <Input id="github" placeholder="https://github.com/username" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="email@gmail.com" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
