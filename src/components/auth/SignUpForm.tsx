"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { ImCross } from "react-icons/im"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { signIn, SignInResponse } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
// import { signIn } from "next-auth/react"

export function SignUpForm({ className,  ...props}: React.ComponentProps<"div">) {
  const router = useRouter()
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = async (usersData:object) => {
    console.log(usersData)
    try {
     const res = await fetch(`${process.env.NEXTAUTH_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usersData),
    })
    const data = await res.json()
    // const result:any = await signIn("credentials", {
    //   ...data,
    //   redirect: false, 
    //   callbackUrl: '/'
    // });
    if ( data.insertedId) {
     
      toast("User successfully sign", {
        // description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: <ImCross className=''/>,
          onClick: () => console.log("Undo"),
        },
        duration: 3000,
      })
      const result: SignInResponse | undefined = await signIn("credentials", {
            ...usersData,
            redirect: false, 
            callbackUrl: '/'
          });
          if(result && result.ok){
            router.push('/')
          }
    }else{
      toast.error(`${data.err}`, { duration: 3000 });
    }
    console.log(data)
  
    } catch (error) {
      const err = error as Error;
      toast.error(`${err.message}`, { duration: 5000 });
      console.log(error)
      
    }
  };   
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden bg-gray-300">
        <CardContent className="grid p-0 md:grid-cols-2">
              {/* form start */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome Our Shop</h1>
                <p className="text-balance text-muted-foreground">
                  Sign Up your Acme Inc account
                </p>
              </div>
            

              <div className="grid gap-2">
                <Label htmlFor="name">User Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="xyz"
                  required {...register("name",{ required: true })}
                />
<p> {errors.name && <span className='text-red-500'>This field is required</span>}
</p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Photo UrL</Label>
                <Input
                  id="Image"
                  type="url"
                  placeholder="https://Image..."
                  required {...register("image",{ required: true })}
                />
                <p> {errors.photo && <span className='text-red-500'>This field is required</span>}
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required {...register("email",{ required: true })}
                />
                <p> {errors.email && <span className='text-red-500'>This field is required</span>}
                </p>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required {...register("password",{ required: true })}/>
                <p> {errors.password && <span className='text-red-500'>This field is required</span>}
                </p>
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>

             
              
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/sign-in" className="underline underline-offset-4">
                  Sign in
                </Link>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-gray-400 md:block">
            <Image width={380} height={120}
              src="https://cdni.iconscout.com/illustration/premium/thumb/woman-holds-transparent-bar-with-search-options-while-working-illustration-download-in-svg-png-gif-file-formats--technology-interface-digital-people-interfaces-pack-network-communication-illustrations-11294334.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
