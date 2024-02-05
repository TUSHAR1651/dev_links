"use client";

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
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function SocialLinkModal() {
  const { addSocialLink, user } = useAuth();

  const areSocialLinksEmpty = user?.socialLinks.length == 0;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          {areSocialLinksEmpty ? "Add Social Links" : "Edit Social Links"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>
            {areSocialLinksEmpty ? "Add Social Links" : "Edit Social Links"}
          </DialogTitle>
          <DialogDescription>
            Enter your social media profile URLs.
          </DialogDescription>
        </DialogHeader>
        <div>
          <ComponentForm addSocialLink={addSocialLink} user={user} />
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAuth } from "@/context/authContext";

const formSchema = z.object({
  instagram: z.string(),

  facebook: z.string(),

  twitter: z.string(),

  linkedin: z.string(),

  github: z.string(),

  email: z.string(),
});

function ComponentForm({ addSocialLink, user }: any) {
  const socialLinks = user?.socialLinks;

  const initialValues = socialLinks.map((link: any) => {
    return {
      icon: link?.icon,
      active: link?.active || false,
      title: link.title,
      url: link.url,
    };
  });

  const supportedLinks = [
    "instagram",
    "facebook",
    "twitter",
    "linkedin",
    "github",
    "email",
  ];

  supportedLinks.forEach((link: string) => {
    if (!initialValues.find((value: any) => value.title === link)) {
      initialValues.push({
        title: link,
        url: "",
      });
    }
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      instagram:
        initialValues.find((link: any) => link.title === "instagram").url === ""
          ? ""
          : initialValues.find((link: any) => link.title === "instagram").url,
      facebook:
        initialValues.find((link: any) => link.title === "facebook").url === ""
          ? ""
          : initialValues.find((link: any) => link.title === "facebook").url,
      twitter:
        initialValues.find((link: any) => link.title === "twitter").url === ""
          ? ""
          : initialValues.find((link: any) => link.title === "twitter").url,
      linkedin:
        initialValues.find((link: any) => link.title === "linkedin").url === ""
          ? ""
          : initialValues.find((link: any) => link.title === "linkedin").url,
      github:
        initialValues.find((link: any) => link.title === "github").url === ""
          ? ""
          : initialValues.find((link: any) => link.title === "github").url,
      email:
        initialValues.find((link: any) => link.title === "email").url === ""
          ? ""
          : initialValues.find((link: any) => link.title === "email").url,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const socialLinks = Object.entries(values).map(([title, url]) => {
      return {
        title,
        url,
      };
    });

    console.log({ socialLinks });

    addSocialLink(socialLinks);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {initialValues.map((link: any) => {
          return (
            <div key={link.title}>
              <FormField
                control={form.control}
                name={link.title}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{link.title}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={`https://${link.title}/username.com`}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      {/* This is your public display name. */}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          );
        })}

        <div className="flex justify-end">
          <Button className="bg-indigo-600 text-white" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
