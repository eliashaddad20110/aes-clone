"use client";

import { User, FileText, Calendar, MessageCircle, Users, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const stats = [
    { label: "Total Students", value: "2117", icon: Users, change: "+2%" },
    { label: "News Articles", value: "124", icon: FileText, change: "+5" },
    { label: "Events This Month", value: "8", icon: Calendar, change: "+2" },
    { label: "Contact Requests", value: "15", icon: MessageCircle, change: "+3" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-display font-bold text-navy-900">Dashboard</h1>
        <p className="text-navy-600">Last updated: Today at 2:30 PM</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-navy-100 rounded-lg">
                <stat.icon className="h-6 w-6 text-navy-600" />
              </div>
              <span className="text-green-600 text-sm font-medium flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                {stat.change}
              </span>
            </div>
            <h3 className="text-navy-600 text-sm font-medium mb-1">{stat.label}</h3>
            <p className="text-2xl font-bold text-navy-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-navy-900 mb-4">Recent News</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-4 p-4 bg-navy-50 rounded-lg">
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-navy-900">News article title here</p>
                  <p className="text-xs text-navy-600">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-navy-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-3 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors text-sm font-medium">
              New News
            </button>
            <button className="p-3 bg-navy-50 text-navy-700 rounded-lg hover:bg-navy-100 transition-colors text-sm font-medium">
              Add Staff
            </button>
            <button className="p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium">
              View Gallery
            </button>
            <button className="p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors text-sm font-medium">
              Send Newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
