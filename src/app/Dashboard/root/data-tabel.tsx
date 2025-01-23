import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Filter, ArrowDownUp, Download, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DataTable(){
   
  return (
    <Card>
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle>Recent Customers</CardTitle>
        <div className="flex items-center space-x-2">
          <Input 
            className="w-64" 
            placeholder="Search for something..." 
          />
          <Button variant="outline" size="sm" >
            <Filter className="w-4 h-4" />
            Filters
          </Button>
          <Button variant="outline" size="sm" >
            <ArrowDownUp className="w-4 h-4" />
            Sorts
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4" />
            Exports
          </Button>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">Username</th>
              <th className="px-6 py-3">E-Mail</th>
              <th className="px-6 py-3">Location</th>
              <th className="px-6 py-3">Sign Up Date</th>
              <th className="px-6 py-3">Renewal</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Account Type</th>
              <th className="px-6 py-3">Options</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, i) => (
              <tr key={i} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full" />
                    <span>Abigale Humphris</span>
                  </div>
                </td>
                <td className="px-6 py-4">user@email.com</td>
                <td className="px-6 py-4">Frankfurt, DE</td>
                <td className="px-6 py-4">12th March, 2024</td>
                <td className="px-6 py-4">12th March, 2025</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4">Business</td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" className='text-blue-400'>Details</Button>
                    <Button variant="ghost" size="icon">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CardContent>
  </Card>
  );
}
