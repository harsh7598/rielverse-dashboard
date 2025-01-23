"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreVertical, Info } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
// import DatePickerDemo from './date-picker'
import { DataTable } from "./data-tabel";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MiniSparkline = ({ data, color }: any) => (
  <ResponsiveContainer width={100} height={40}>
    <LineChart data={data}>
      <Line
        type="monotone"
        dataKey="value"
        stroke={color}
        strokeWidth={2}
        dot={false}
        isAnimationActive={false}
      />
    </LineChart>
  </ResponsiveContainer>
);

function CircularProgress() {
  const data = [
    { name: "New Agents", value: 35, color: "#8b5cf6" },
    { name: "New Customers", value: 45, color: "#0ea5e9" },
    { name: "Inactive", value: 20, color: "#fbbf24" },
  ];

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="relative w-80 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="100%"
              startAngle={180}
              endAngle={0}
              innerRadius={100}
              outerRadius={120}
              dataKey="value"
              strokeWidth={0}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  // cornerRadius={16}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 top-24 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold">2900</span>
          <span className="text-lg text-gray-400">Total New Users</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center px-4 py-2 rounded-lg bg-gray-50"
          >
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-gray-600">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DashboardView() {
  const [selectedPeriod, setSelectedPeriod] = useState("12 months");

  const miniChartData = {
    quotes: [
      { value: 90 },
      { value: 85 },
      { value: 35 },
      { value: 95 },
      { value: 110 },
      { value: 100 },
    ],
    policies: [
      { value: 100 },
      { value: 90 },
      { value: 85 },
      { value: 95 },
      { value: 85 },
      { value: 80 },
    ],
    users: [
      { value: 80 },
      { value: 85 },
      { value: 90 },
      { value: 85 },
      { value: 95 },
      { value: 100 },
    ],
  };

  const chartData = [
    { month: "Jan", value: 30000, value2: 25000 },
    { month: "Feb", value: 32000, value2: 27000 },
    { month: "Mar", value: 33000, value2: 28000 },
    { month: "Apr", value: 32000, value2: 26000 },
    { month: "May", value: 34000, value2: 29000 },
    { month: "Jun", value: 35000, value2: 30000 },
    { month: "Jul", value: 37000, value2: 31000 },
    { month: "Aug", value: 38000, value2: 32000 },
    { month: "Sep", value: 39000, value2: 33000 },
    { month: "Oct", value: 40000, value2: 34000 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Quotes</span>
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-3xl font-bold">100023</div>
              <div className="text-sm text-[#452262] flex justify-between w-full">
                <p className="bg-[#F1F5F7] px-4 py-2 rounded-md">
                  +12.7% <span className="text-[#809FB8]">vs. last month</span>
                </p>
                <MiniSparkline data={miniChartData.quotes} color="#8b5cf6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Policies</span>
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-3xl font-bold">12000</div>
              <div className="text-sm text-red-500 flex justify-between">
                <p className="text-[#F97316] px-4 py-2 rounded-md bg-[#F1F5F7]">
                  -14.5%{" "}
                  <span className="text-[#809FB8]"> vs. last month </span>
                </p>
                <MiniSparkline data={miniChartData.policies} color="#f97316" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Users</span>
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-3xl font-bold">500</div>
              <div className="text-sm text-green-500 flex justify-between">
                <p className="bg-[#F1F5F7] px-4 py-2 rounded-md">
                  +12.7% <span className="text-[#809FB8]">vs. last month</span>
                </p>
                <MiniSparkline data={miniChartData.users} color="#10b981" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-col gap-5">
            <div className="flex items-center space-x-2">
              <CardTitle>Product Sales Insights</CardTitle>
              <Info className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex items-center gap-4">
              <div className="">
                {["12 months", "30 days", "7 days", "24 hours"].map(
                  (period) => (
                    <Button
                      key={period}
                      variant={selectedPeriod === period ? "ghost" : "outline"}
                      size="sm"
                      onClick={() => setSelectedPeriod(period)}
                    >
                      {period}
                    </Button>
                  )
                )}
              </div>
              {/* <DatePickerDemo /> */}
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#2563eb"
                    strokeWidth={2}
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="value2"
                    stroke="#93c5fd"
                    strokeWidth={2}
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Today Trending</CardTitle>
              <MoreVertical className="w-4 h-4 text-gray-400" />
            </div>
          </CardHeader>
          <CardContent className="flex justify-center">
            <CircularProgress />
          </CardContent>
        </Card>
      </div>

      {/* Customer Table */}
      <DataTable />
    </div>
  );
}
