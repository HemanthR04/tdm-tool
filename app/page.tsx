import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"



export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1 className="text-4xl py-8 font-bold">Welcome to IBM Test Data management Tool</h1>
      <div className="login w-[400px] h-[50%] border-[1px] border-black rounded-md text-center px-4 py-8">
        <h1 className="text-xl font-bold pt-4">Login to your account</h1>
        <p className="text-md">Enter your email and password below</p>
        <Input  type="email" placeholder="Email" className="my-8" />
        <Input  type="password" placeholder="Password" className="my-8" />
        <Button className="w-[100px]">Login</Button>

      </div>

    </div>
  );
}
