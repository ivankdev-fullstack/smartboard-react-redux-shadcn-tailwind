import DarkLogo from "@/assets/darkLogo.png";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUser } from "@/hooks/useUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as z from "zod";

const formSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

const SignUpPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const navigation = useNavigate();
  const { registerUser } = useUser();

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    registerUser(data);
    navigation("/boards");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-white">
      <Card className="relative w-full max-w-sm bg-white">
        <img
          src={DarkLogo}
          className="absolute h-12 top-[-60px] left-1/2 -translate-x-1/2"
        />
        <CardHeader>
          <CardTitle>Welcome!</CardTitle>
          <CardDescription>
            Sign up to create your SmartBoard account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className="flex flex-col gap-4"
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@doe.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="bg-primary-blue text-white mt-5">
                Sign up
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="justify-between">
          <small>Have an account?</small>
          <Button variant="outline" size="sm">
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUpPage;
