"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Perspective = "admin" | "lead" | "member" | "guest";

interface DashboardProps {
  perspective: Perspective;
}

const dashboardContent = {
  admin: {
    title: "Admin Dashboard",
    description: "Manage clubs, leads, and oversee platform activities",
    stats: [
      { title: "Total Clubs", value: "12" },
      { title: "Active Leads", value: "8" },
      { title: "Total Events", value: "24" },
    ],
  },
  lead: {
    title: "Lead Dashboard",
    description: "Manage events, assign tasks, and track progress",
    stats: [
      { title: "Active Events", value: "5" },
      { title: "Pending Tasks", value: "15" },
      { title: "Team Members", value: "8" },
    ],
  },
  member: {
    title: "Member Dashboard",
    description: "View assigned tasks and monitor activities",
    stats: [
      { title: "My Tasks", value: "3" },
      { title: "Completed", value: "12" },
      { title: "Upcoming Events", value: "2" },
    ],
  },
  guest: {
    title: "Welcome to Foodie",
    description: "Discover and explore public events",
    stats: [
      { title: "Upcoming Events", value: "8" },
      { title: "Active Clubs", value: "6" },
      { title: "Total Members", value: "150" },
    ],
  },
};

export function Dashboard({ perspective }: DashboardProps) {
  const content = dashboardContent[perspective];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{content.title}</h1>
        <p className="mt-2 text-gray-600">{content.description}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {content.stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="mt-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="recent">Recent Activity</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Welcome to your dashboard! Here you can manage your activities and track progress.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="recent" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">No recent activity to display.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="upcoming" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">No upcoming events scheduled.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 