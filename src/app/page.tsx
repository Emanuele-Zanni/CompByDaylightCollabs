"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Info, Users, Trophy, Target, Calendar, Heart } from "lucide-react";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Founder & Lead Developer",
    avatar: "/team/jane-doe.jpg",
  },
  {
    name: "John Smith",
    role: "Community Manager",
    avatar: "/team/john-smith.jpg",
  },
  {
    name: "Alice Johnson",
    role: "UI/UX Designer",
    avatar: "/team/alice-johnson.jpg",
  },
  {
    name: "Bob Williams",
    role: "Tournament Organizer",
    avatar: "/team/bob-williams.jpg",
  },
];

const stats = [
  { label: "Active Users", value: 50000, icon: Users, color: "text-blue-400" },
  {
    label: "Tournaments Hosted",
    value: 1000,
    icon: Trophy,
    color: "text-yellow-400",
  },
  { label: "Pro Players", value: 500, icon: Target, color: "text-green-400" },
];

const upcomingEvents = [
  {
    name: "Summer Showdown",
    date: "2023-07-15",
    description: "The biggest DBD tournament of the summer!",
  },
  {
    name: "Killer Master Class",
    date: "2023-07-22",
    description: "Learn from the top killers in the game.",
  },
  {
    name: "Survivor Skills Workshop",
    date: "2023-07-29",
    description: "Improve your survival skills with pro tips.",
  },
  {
    name: "Community Challenge",
    date: "2023-08-05",
    description: "Join forces to complete epic community goals!",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 p-6">
      <div className="mx-auto max-w-4xl space-y-8">
        <h1 className="text-4xl font-bold text-center text-zinc-100">
          About DBD Pro Gaming
        </h1>

        <Card className="bg-zinc-900/70 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-zinc-100">
              <Info className="h-5 w-5 text-purple-400" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="text-zinc-300">
            <p>
              DBD Pro Gaming is dedicated to elevating the competitive scene of
              Dead by Daylight. We provide a platform for professional players
              and enthusiasts to compete, improve, and connect. Our goal is to
              foster a thriving community that pushes the boundaries of skill
              and strategy in DBD.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/70 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-zinc-100">
              <Users className="h-5 w-5 text-blue-400" />
              Our Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-zinc-100">
                      {member.name}
                    </h3>
                    <p className="text-sm text-zinc-400">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/70 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-zinc-100">
              <Trophy className="h-5 w-5 text-yellow-400" />
              Our Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                  <h3 className="text-2xl font-bold text-zinc-100">
                    {stat.value.toLocaleString()}
                  </h3>
                  <p className="text-sm text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/70 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-zinc-100">
              <Calendar className="h-5 w-5 text-green-400" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-zinc-800/50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-zinc-100">
                      {event.name}
                    </h3>
                    <Badge
                      variant="outline"
                      className="bg-green-500/20 text-green-300 border-green-500/50"
                    >
                      {new Date(event.date).toLocaleDateString()}
                    </Badge>
                  </div>
                  <p className="text-sm text-zinc-400">{event.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/70 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-zinc-100">
              <Heart className="h-5 w-5 text-red-400" />
              Join Our Community
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-zinc-300 mb-4">
              We're always looking for passionate players, developers, and DBD
              enthusiasts to join our community. Whether you're a pro player, a
              budding developer, or just love the game, there's a place for you
              here.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge className="bg-blue-500 hover:bg-blue-600 cursor-pointer">
                Join Discord
              </Badge>
              <Badge className="bg-purple-500 hover:bg-purple-600 cursor-pointer">
                Follow on Twitch
              </Badge>
              <Badge className="bg-red-500 hover:bg-red-600 cursor-pointer">
                Subscribe on YouTube
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 cursor-pointer">
                Follow on Instagram
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
