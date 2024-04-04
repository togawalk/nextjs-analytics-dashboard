import { AnalyticsDashboard } from "@/components/analytics-dashboard"
import { analytics } from "@/utils/analytics"

const DashboardPage = async () => {
  const pageView = await analytics.retrieveDays("pageview", 2)

  return (
    <div className="min-h-screen w-full py-12 flex justify-center items-center">
      <div className="relative w-full max-w-6xl mx-auto">
        <AnalyticsDashboard />
      </div>
    </div>
  )
}

export default DashboardPage
