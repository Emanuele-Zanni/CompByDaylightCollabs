"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Info, Users, Trophy, Heart, Crown } from "lucide-react";

const teamMembers = [
  {
    name: "Jorge",
    role: "Founder & Lead Developer",
    avatar: "/team/jane-doe.jpg",
  },
  {
    name: "Zosa",
    role: "Frontend Developer",
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
  { label: "Pro Players", value: 500, icon: Crown, color: "text-green-400" },
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
              <Badge className="bg-gradient-to-r from-[#60EFFF] to-[#0061FF] hover:from-[#60EFFF]/80 hover:to-[#0061FF]/80 cursor-pointer">
                Join Discord
              </Badge>
              <Badge className="bg-gradient-to-r from-[#bf0fff] to-[#f8acff] hover:from-[#bf0fff]/80 hover:to-[#f8acff]/80 cursor-pointer">
                Follow on Twitch
              </Badge>
              <Badge className="bg-gradient-to-r from-[#ef709b] via-[#ffc8c8] to-[#ff5858] hover:from-[#ef709b]/80 hover:to-[#ff5858]/80 cursor-pointer">
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
