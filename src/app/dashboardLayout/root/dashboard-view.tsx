import { UserTypes } from "@/types/user";
import AgentDashboardView from "./components/agentdashboard-view";
import SuperAdmin from "./components/superadmin/superadmin";
interface DashboardViewPropsTypes {
  user: UserTypes;
}

export default async function DashboardView({ user }: DashboardViewPropsTypes) {
  const dashboardUserRole = user.role;

  const component = {
    Agent: <AgentDashboardView user={user} />,
    User: <div>User Dashboard</div>,
    Admin: <div>Admin Dashboard</div>, // Replace with actual Admin Dashboard component
    SuperAdmin: <SuperAdmin user={user} />,
  };

  return (
    <div className="p-6 space-y-6">
      {component[dashboardUserRole as keyof typeof component]}
    </div>
  );
}
