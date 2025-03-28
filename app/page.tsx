import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF9C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to Foodie
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Your platform for managing food and community events. Connect, create, and celebrate together.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button size="lg" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>For Event Organizers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Create and manage events, assign tasks, and track progress all in one place.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>For Team Members</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                View assigned tasks, complete them, and stay updated with team activities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>For Everyone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Discover and join exciting food and community events in your area.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 