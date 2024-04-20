import { AnalyticsDashboard } from "@/components/analytics-dashboard"
import { Avatar } from "@/components/avatar"
import { getDate } from "@/utils";
import { analytics } from "@/utils/analytics"

const DashboardPage = async () => {
  const TRACKING_DAYS = 7;
  const pageviews = await analytics.retrieveDays("pageview", TRACKING_DAYS)

  const totalPageviews = pageviews.reduce((acc, curr) => {
    return (
      acc + curr.events.reduce((acc, curr) => {
        return acc + Object.values(curr)[0]!
      }, 0)
    )
  }, 0)

  const avgVisitorsPerDay = (totalPageviews / TRACKING_DAYS).toFixed(1)
  const amtVisitorsToday = pageviews.filter((ev) => ev.date === getDate()).reduce((acc, curr) => {
    return (
      acc + curr.events.reduce((acc, curr) => acc + Object.values(curr)[0]!, 0)
    )
  }, 0)

  return (
    <div className="min-h-screen">
      <header className="border-tremor-border border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="text-tremor-brand font-medium">
              Dashboard
            </div>
            <div>
              <Avatar />

            </div>
          </div>
        </div>
      </header>

      <div className="relative w-full max-w-6xl mx-auto mt-12">
        <AnalyticsDashboard avgVisitorsPerDay={avgVisitorsPerDay} amtVisitorsToday={amtVisitorsToday} />
      </div>
    </div>
  )
}

export default DashboardPage
