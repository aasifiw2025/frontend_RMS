import DashboardCard from "./DashboardCard";

const GridCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
      <div className="space-y-4">
        <DashboardCard
          icon={
            <img className="h-6 w-6 object-contain" src="/assets/revenue.png" />
          }
          title="Projected Revenue"
          des="gbp-32520"
          hasIcon
          secondaryIcon={
            <img
              className="h-[12.5px] w-[12.5px] object-contain"
              src="/assets/info.png"
              alt="info"
            />
          }
        />
        <DashboardCard
          icon={
            <img className="h-6 w-6 object-contain" src="/assets/revenue.png" />
          }
          title="One Time Subscribers"
          des="gbp-21267"
          hasIcon
          secondaryIcon={
            <img
              className="h-[12.5px] w-[12.5px] object-contain"
              src="/assets/info.png"
              alt="info"
            />
          }
        />
        <DashboardCard
          icon={
            <img className="h-6 w-6 object-contain" src="/assets/revenue.png" />
          }
          title="Monthly Subscribers"
          des="gbp-11253"
          hasIcon
          secondaryIcon={
            <img
              className="h-[12.5px] w-[12.5px] object-contain"
              src="/assets/info.png"
              alt="info"
            />
          }
        />
      </div>
      <div className="space-y-4">
        <DashboardCard
          icon={
            <img
              className="h-6 w-6 object-contain"
              src="/assets/building.png"
            />
          }
          title="Total Companies Joined"
          des="450"
        />
        <DashboardCard
          icon={
            <img
              className="h-6 w-6 object-contain"
              src="/assets/building.png"
            />
          }
          title="General Companies"
          des="300"
        />
        <DashboardCard
          icon={
            <img
              className="h-6 w-6 object-contain"
              src="/assets/building.png"
            />
          }
          title="Service provider Companies"
          des="150"
        />
      </div>
      <div className="space-y-4">
        <DashboardCard
          icon={
            <img
              className="h-6 w-6 object-contain"
              src="/assets/candidate1.png"
            />
          }
          title="Total Candidates Joined"
          des="8450"
        />
        <DashboardCard
          icon={
            <img
              className="h-6 w-6 object-contain"
              src="/assets/candidate1.png"
            />
          }
          title="Total candidates Verified"
          des="8450"
        />
        <DashboardCard
          icon={
            <img className="h-6 w-6 object-contain" src="/assets/users.png" />
          }
          title="Total Verified Users"
          des="8900"
        />
        <DashboardCard
          icon={
            <img className="h-6 w-6 object-contain" src="/assets/users.png" />
          }
          title="Total Active Users"
          des="8900"
        />
      </div>
      <div className="space-y-4">
        <DashboardCard
          icon={
            <img className="h-6 w-6 object-contain" src="/assets/job.png" />
          }
          title="All Jobs Posted"
          des="900"
        />
        <DashboardCard
          icon={
            <img className="h-6 w-6 object-contain" src="/assets/job.png" />
          }
          title="Active Jobs"
          des="900"
        />
        <DashboardCard
          icon={
            <img className="h-6 w-6 object-contain" src="/assets/job.png" />
          }
          title="Expired Jobs"
          des="900"
        />
        <DashboardCard
          icon={
            <img className="h-6 w-6 object-contain" src="/assets/job.png" />
          }
          title="Pending Jobs"
          des="900"
        />
      </div>
    </div>
  );
};

export default GridCards;
