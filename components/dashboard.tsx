"use client"

import { useState } from "react"
import { QueryInput } from "@/components/query-input"
import { QueryResults } from "@/components/query-results"
import { QueryHistory } from "@/components/query-history"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("results")

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold">Data Query Dashboard</h1>
        <p className="text-muted-foreground">Ask questions about your business data in natural language</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle>Query Your Data</CardTitle>
              </CardHeader>
              <CardContent>
                <QueryInput />

                <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="results">Results</TabsTrigger>
                    <TabsTrigger value="history">Query History</TabsTrigger>
                  </TabsList>
                  <TabsContent value="results" className="mt-4">
                    <QueryResults />
                  </TabsContent>
                  <TabsContent value="history" className="mt-4">
                    <QueryHistory onSelectQuery={() => setActiveTab("results")} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="hidden lg:block">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Query History</CardTitle>
              </CardHeader>
              <CardContent>
                <QueryHistory onSelectQuery={() => {}} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

