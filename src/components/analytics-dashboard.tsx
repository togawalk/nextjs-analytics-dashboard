"use client"

import { BarList, Card } from "@tremor/react"

interface Page {
  name: string
  value: number
}

const pages: Page[] = [
  {
    name: "/home",
    value: 2019,
  },
  {
    name: "/blocks",
    value: 1053,
  },
  {
    name: "/components",
    value: 997,
  },
  {
    name: "/docs/getting-started/installation",
    value: 982,
  },
  {
    name: "/docs/components/button",
    value: 782,
  },
  {
    name: "/docs/components/table",
    value: 752,
  },
  {
    name: "/docs/components/area-chart",
    value: 741,
  },
  {
    name: "/docs/components/badge",
    value: 750,
  },
  {
    name: "/docs/components/bar-chart",
    value: 750,
  },
  {
    name: "/docs/components/tabs",
    value: 720,
  },
  {
    name: "/docs/components/tracker",
    value: 1223,
  },
]

interface AnalyticsDashboardProps {
  avgVisitorsPerDay: string,
  amtVisitorsToday: number
}

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("en").format(number).toString()}`

export function AnalyticsDashboard({ avgVisitorsPerDay, amtVisitorsToday }: AnalyticsDashboardProps) {
  return (
    <>
      <Card className="w-full mx-auto max-w-xs">
        <p className="text-tremor-default text-tremor-content">Avg. visitors/day</p>
        <p className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{avgVisitorsPerDay}</p>
      </Card>

      <Card className="w-full mx-auto max-w-xs">
        <p className="text-tremor-default text-tremor-content">Visitors today</p>
        <p className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{amtVisitorsToday}</p>
      </Card>
      <Card className="p-0 sm:mx-auto sm:max-w-lg">
        <div className="flex items-center justify-between border-b border-tremor-border p-6 dark:border-dark-tremor-border">
          <p className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Top pages
          </p>
          <p className="text-tremor-label font-medium uppercase text-tremor-content dark:text-dark-tremor-content">
            Visitors
          </p>
        </div>
        <div className={"overflow-hidden p-6"}>
          <BarList data={pages} valueFormatter={valueFormatter} />
        </div>
      </Card>
    </>
  )
}
