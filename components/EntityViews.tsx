"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Perspective = "admin" | "lead" | "member" | "guest";

interface EntityViewsProps {
  perspective: Perspective;
}

const entityViews = {
  admin: {
    title: "Admin Panel",
    sections: [
      {
        title: "Club Management",
        content: (
          <div className="space-y-4">
            <div className="flex space-x-4">
              <Input placeholder="Club Name" />
              <Button>Add Club</Button>
            </div>
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Active Clubs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">No clubs to display.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ),
      },
      {
        title: "Lead Management",
        content: (
          <div className="space-y-4">
            <div className="flex space-x-4">
              <Input placeholder="Lead Name" />
              <Button>Add Lead</Button>
            </div>
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Active Leads</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">No leads to display.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ),
      },
    ],
  },
  lead: {
    title: "Lead Dashboard",
    sections: [
      {
        title: "Event Management",
        content: (
          <div className="space-y-4">
            <div className="flex space-x-4">
              <Input placeholder="Event Name" />
              <Button>Create Event</Button>
            </div>
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Active Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">No events to display.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ),
      },
      {
        title: "Task Assignment",
        content: (
          <div className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label>Task Name</Label>
                <Input placeholder="Enter task name" />
              </div>
              <div className="grid gap-2">
                <Label>Assign To</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select member" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="member1">Member 1</SelectItem>
                    <SelectItem value="member2">Member 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button>Assign Task</Button>
            </div>
          </div>
        ),
      },
    ],
  },
  member: {
    title: "Member Dashboard",
    sections: [
      {
        title: "My Tasks",
        content: (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Assigned Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">No tasks assigned.</p>
              </CardContent>
            </Card>
          </div>
        ),
      },
      {
        title: "Activity Log",
        content: (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">No recent activities.</p>
              </CardContent>
            </Card>
          </div>
        ),
      },
    ],
  },
  guest: {
    title: "Public Events",
    sections: [
      {
        title: "Upcoming Events",
        content: (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Featured Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">No upcoming events.</p>
              </CardContent>
            </Card>
          </div>
        ),
      },
      {
        title: "About Us",
        content: (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>About Foodie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Welcome to Foodie! We are a platform dedicated to bringing people together through
                  food and community events. Our mission is to create meaningful connections and
                  memorable experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        ),
      },
    ],
  },
};

export function EntityViews({ perspective }: EntityViewsProps) {
  const content = entityViews[perspective];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{content.title}</h1>
      <div className="grid gap-8">
        {content.sections.map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>{section.content}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 