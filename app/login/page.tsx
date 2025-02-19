import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const LoginPage: React.FC<PageProps> = ({ params, searchParams }) => {
  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <div className="space-y-4">
          <Input type="email" placeholder="Email" className="w-full" />
          <Input type="password" placeholder="Password" className="w-full" />
        </div>
        <Button onClick={handleLogin} className="w-full mt-4">
          Login
        </Button>
      </Card>
    </div>
  );
};

export default LoginPage;
