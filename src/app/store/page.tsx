"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Search,
  ShoppingCart,
  Palette,
  Sparkles,
  Zap,
  Star,
  Clock,
} from "lucide-react";

interface StoreItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "profile" | "username" | "consumable";
  icon: React.ElementType;
  color: string;
}

const storeItems: StoreItem[] = [
  {
    id: "1",
    name: "Neon Blue",
    description: "Vibrant blue profile color",
    price: 500,
    category: "profile",
    icon: Palette,
    color: "text-blue-400",
  },
  {
    id: "2",
    name: "Golden Glow",
    description: "Luxurious gold profile frame",
    price: 1000,
    category: "profile",
    icon: Sparkles,
    color: "text-yellow-400",
  },
  {
    id: "3",
    name: "Rainbow Text",
    description: "Colorful animated username",
    price: 1500,
    category: "username",
    icon: Palette,
    color: "text-purple-400",
  },
  {
    id: "4",
    name: "Killer Icon",
    description: "Exclusive killer icon for username",
    price: 800,
    category: "username",
    icon: Star,
    color: "text-red-400",
  },
  {
    id: "5",
    name: "ELO Booster",
    description: "50% extra ELO for 5 matches",
    price: 300,
    category: "consumable",
    icon: Zap,
    color: "text-green-400",
  },
  {
    id: "6",
    name: "Double BP",
    description: "Double Bloodpoints for 1 hour",
    price: 400,
    category: "consumable",
    icon: Clock,
    color: "text-orange-400",
  },
];

export default function StorePage() {
  const [activeTab, setActiveTab] = useState<
    "all" | "profile" | "username" | "consumable"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<string[]>([]);

  const filteredItems = storeItems.filter(
    (item) =>
      (activeTab === "all" || item.category === activeTab) &&
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (itemId: string) => {
    setCart([...cart, itemId]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 p-6">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-zinc-100">Store</h1>
          <Button variant="outline" className="bg-zinc-800 hover:bg-zinc-700">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Cart ({cart.length})
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Tabs
            defaultValue="all"
            className="w-full sm:w-auto"
            onValueChange={(value) => setActiveTab(value as any)}
          >
            <TabsList className="grid w-full sm:w-auto grid-cols-2 sm:grid-cols-4">
              <TabsTrigger value="all">All Items</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="username">Username</TabsTrigger>
              <TabsTrigger value="consumable">Consumables</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-400" />
            <Input
              placeholder="Search items..."
              className="pl-8 bg-zinc-800 text-zinc-100"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <Card key={item.id} className="bg-zinc-900/70 border-zinc-800">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-bold text-zinc-100">
                      {item.name}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {item.description}
                    </CardDescription>
                  </div>
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <Badge
                  variant="outline"
                  className={`${item.color} border-${item.color} bg-${item.color}/20`}
                >
                  {item.category}
                </Badge>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-2xl font-bold text-zinc-100">
                  {item.price} BP
                </span>
                <Button onClick={() => addToCart(item.id)}>Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-zinc-400">
            No items found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
